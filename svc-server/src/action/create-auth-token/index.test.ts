import { randomUUID } from 'node:crypto'
import { throwIfError, throwIfValue } from '@stayradiated/error-boundary'

import { authenticator } from '../../util/otplib.js'
import { test } from '../../test-util/ava.js'

import { insertUser, User } from '../../model/user/index.js'
import { Session } from '../../util/action-handler.js'
import { insertUser2FA } from '../../model/user-2fa/index.js'
import { upsertUserDevice } from '../../model/user-device/index.js'

import { createAuthTokenHandler, CreateAuthTokenOutput } from './index.js'

const GUEST_SESSION: Session = { role: 'guest', userUid: undefined }

test('should login with email/password', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@polodog.com`
  const password = 'polodog'

  const { uid: userUid } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
    role: 'user',
  }

  const result = await throwIfError<CreateAuthTokenOutput>(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is(userUid, result.user_uid)
  t.is('string', typeof result.auth_token)
})

test('should fail if email does not exist', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@pandaskateboard`
  const password = 'pandaskateboard'

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
    role: 'user',
  }

  const error = await throwIfValue(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('E_AUTH: Invalid email or password.', error.message)
})

test('should fail if password is incorrect', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@swanskier`
  const password = 'swanskier'

  await throwIfError<User>(insertUser(pool, { email, password }))

  const input = {
    email,
    password: password + '_garbage',
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
    role: 'user',
  }

  const error = await throwIfValue(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('E_AUTH: Invalid email or password.', error.message)
})

test('should fail if 2FA token is required.', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@rosetteschool`
  const password = 'rosetteschool'
  const { uid: userUid } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUid,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
    role: 'user',
  }
  const error = await throwIfValue(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('E_AUTH: This user has 2FA enabled.', error.message)
})

test('should login with email/password/token_2fa', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@keyboardavocado`
  const password = 'keyboardavocado'
  const { uid: userUid } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUid,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: authenticator.generate(secret),
    role: 'user',
  }
  const result = await throwIfError<CreateAuthTokenOutput>(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is(userUid, result.user_uid)
  t.is('string', typeof result.auth_token)
})

test('should fail if 2FA is required and device is not trusted', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@speedboatvolcano`
  const password = 'speedboatvolcano'
  const deviceID = randomUUID()

  const { uid: userUid } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUid,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  await throwIfError(
    upsertUserDevice(pool, {
      userUid,
      accessedAt: new Date(),
      deviceID,
      name: 'not a trusted device',
      trusted: false,
    }),
  )

  const input = {
    email,
    password,
    device_id: deviceID,
    device_name: 'DEVICE_NAME',
    device_trusted: true,
    role: 'user',

    // Note that we are not passing a 2fa token here
    token_2fa: undefined,
  }
  const error = await throwIfValue(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )
  t.is('E_AUTH: This user has 2FA enabled.', error.message)
})

test('should skip 2FA when using a trusted device', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@strawberrybus`
  const password = 'strawberrybus'
  const deviceID = randomUUID()

  const { uid: userUid } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUid,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  await throwIfError(
    upsertUserDevice(pool, {
      userUid,
      accessedAt: new Date(),
      deviceID,
      name: 'not important',
      trusted: true,
    }),
  )

  const input = {
    email,
    password,
    device_id: deviceID,
    device_name: 'DEVICE_NAME',
    device_trusted: true,
    role: 'user',

    // Note that we are not passing a 2fa token here
    token_2fa: undefined,
  }
  const result = await throwIfError<CreateAuthTokenOutput>(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is(userUid, result.user_uid)
  t.is('string', typeof result.auth_token)
})
