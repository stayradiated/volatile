import { randomUUID } from 'node:crypto'
import { assertOk, assertError } from '@stayradiated/error-boundary'

import { authenticator } from '../../util/otplib.js'
import { firstLine } from '../../util/error.js'
import { test } from '../../test-util/ava.js'

import { insertUser } from '../../model/user/index.js'
import type { Session } from '../../util/action-handler.js'
import { insertUser2Fa } from '../../model/user-2fa/index.js'
import { upsertUserDevice } from '../../model/user-device/index.js'

import { createAuthTokenHandler } from './index.js'

const GUEST_SESSION: Session = { role: 'guest', userUid: undefined }

test('should login with email/password', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@polodog.com`
  const password = 'polodog'

  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const input = {
    email,
    password,
    deviceId: 'DEVICE_ID',
    deviceName: 'DEVICE_NAME',
    deviceTrusted: false,
    token2fa: undefined,
    role: 'user',
  }

  const result = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })
  assertOk(result)

  t.is(user.uid, result.userUid)
  t.is('string', typeof result.authToken)
})

test('should fail if email does not exist', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@pandaskateboard`
  const password = 'pandaskateboard'

  const input = {
    email,
    password,
    deviceId: 'DEVICE_ID',
    deviceName: 'DEVICE_NAME',
    deviceTrusted: false,
    token2fa: undefined,
    role: 'user',
  }

  const error = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })
  assertError(error)

  t.is('ERR_AUTH: Invalid email or password.', firstLine(error.message))
})

test('should fail if password is incorrect', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@swanskier`
  const password = 'swanskier'

  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const input = {
    email,
    password: password + '_garbage',
    deviceId: 'DEVICE_ID',
    deviceName: 'DEVICE_NAME',
    deviceTrusted: false,
    token2fa: undefined,
    role: 'user',
  }

  const error = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })
  assertError(error)

  t.is('ERR_AUTH: Invalid email or password.', firstLine(error.message))
})

test('should fail if 2Fa token is required.', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@rosetteschool`
  const password = 'rosetteschool'
  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const secret = authenticator.generateSecret()

  assertOk(
    await insertUser2Fa(pool, {
      userUid: user.uid,
      name: 'Test 2Fa Token',
      secret,
    }),
  )

  const input = {
    email,
    password,
    deviceId: 'DEVICE_ID',
    deviceName: 'DEVICE_NAME',
    deviceTrusted: false,
    token2fa: undefined,
    role: 'user',
  }
  const error = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })

  assertError(error)
  t.is(`ERR_AUTH_2FA: A valid 2FA token is required.`, firstLine(error.message))
})

test('should login with email/password/token_2fa', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@keyboardavocado`
  const password = 'keyboardavocado'
  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const secret = authenticator.generateSecret()

  assertOk(
    await insertUser2Fa(pool, {
      userUid: user.uid,
      name: 'Test 2Fa Token',
      secret,
    }),
  )

  const input = {
    email,
    password,
    deviceId: 'DEVICE_ID',
    deviceName: 'DEVICE_NAME',
    deviceTrusted: false,
    token2fa: authenticator.generate(secret),
    role: 'user',
  }
  const result = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })
  assertOk(result)

  t.is(user.uid, result.userUid)
  t.is('string', typeof result.authToken)
})

test('should fail if 2Fa is required and device is not trusted', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@speedboatvolcano`
  const password = 'speedboatvolcano'
  const deviceId = randomUUID()

  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const secret = authenticator.generateSecret()

  assertOk(
    await insertUser2Fa(pool, {
      userUid: user.uid,
      name: 'Test 2Fa Token',
      secret,
    }),
  )

  assertOk(
    await upsertUserDevice(pool, {
      userUid: user.uid,
      accessedAt: new Date(),
      deviceId,
      name: 'not a trusted device',
      trusted: false,
    }),
  )

  const input = {
    email,
    password,
    deviceId,
    deviceName: 'DEVICE_NAME',
    deviceTrusted: true,
    role: 'user',

    // Note that we are not passing a 2fa token here
    token_2fa: undefined,
  }
  const error = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })

  assertError(error)
  t.is(`ERR_AUTH_2FA: A valid 2FA token is required.`, firstLine(error.message))
})

test('should skip 2Fa when using a trusted device', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@strawberrybus`
  const password = 'strawberrybus'
  const deviceId = randomUUID()

  const user = await insertUser(pool, { email, password })
  assertOk(user)

  const secret = authenticator.generateSecret()

  assertOk(
    await insertUser2Fa(pool, {
      userUid: user.uid,
      name: 'Test 2Fa Token',
      secret,
    }),
  )

  assertOk(
    await upsertUserDevice(pool, {
      userUid: user.uid,
      accessedAt: new Date(),
      deviceId,
      name: 'not important',
      trusted: true,
    }),
  )

  const input = {
    email,
    password,
    deviceId,
    deviceName: 'DEVICE_NAME',
    deviceTrusted: true,
    role: 'user',

    // Note that we are not passing a 2fa token here
    token_2fa: undefined,
  }

  const result = await createAuthTokenHandler.handler({
    pool,
    input,
    session: GUEST_SESSION,
  })
  assertOk(result)

  t.is(user.uid, result.userUid)
  t.is('string', typeof result.authToken)
})
