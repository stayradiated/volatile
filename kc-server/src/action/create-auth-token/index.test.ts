import { randomUUID } from 'crypto'
import { throwIfError } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import { authenticator } from '../../util/otplib.js'
import { test } from '../../test-util/ava.js'
import { asError } from '../../test-util/as-error.js'

import { insertUser, User } from '../../model/user/index.js'
import { SessionRole } from '../../util/action-handler.js'
import { insertUser2FA } from '../../model/user-2fa/index.js'
import { upsertUserDevice } from '../../model/user-device/index.js'

import { createAuthTokenHandler, CreateAuthTokenOutput } from './index.js'

const GUEST_SESSION = { role: SessionRole.GUEST, userUID: undefined }

test('should login with email/password', async (t) => {
  const { pool } = t.context

  const email = 'pandaskateboard@example.com'
  const password = 'pandaskateboard'

  const { UID: userUID } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
  }

  const result = await throwIfError<CreateAuthTokenOutput>(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is(userUID, result.user_uid)
  t.is('string', typeof result.auth_token)
})

test('should fail if email does not exist', async (t) => {
  const { pool } = t.context

  const email = 'pandaskateboard@example.com'
  const password = 'pandaskateboard'

  const input = {
    email,
    password,
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
  }

  const error = await asError(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('Invalid email or password.', error.message)
})

test('should fail if password is incorrect', async (t) => {
  const { pool } = t.context

  const email = 'swanskier@example.com'
  const password = 'swanskier'

  await throwIfError<User>(insertUser(pool, { email, password }))

  const input = {
    email,
    password: password + '_garbage',
    device_id: 'DEVICE_ID',
    device_name: 'DEVICE_NAME',
    device_trusted: false,
    token_2fa: undefined,
  }

  const error = await asError(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('Invalid email or password.', error.message)
})

test('should fail if 2FA token is required.', async (t) => {
  const { pool } = t.context

  const email = 'rosetteschool@example.com'
  const password = 'rosetteschool'
  const { UID: userUID } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUID,
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
  }
  const error = await asError(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is('This user has 2FA enabled.', error.message)
})

test('should login with email/password/token_2fa', async (t) => {
  const { pool } = t.context

  const email = 'keyboardavocado@example.com'
  const password = 'keyboardavocado'
  const { UID: userUID } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUID,
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
  }
  const result = await throwIfError<CreateAuthTokenOutput>(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )

  t.is(userUID, result.user_uid)
  t.is('string', typeof result.auth_token)
})

test('should fail if 2FA is required and device is not trusted', async (t) => {
  const { pool } = t.context

  const email = 'speedboatvolcano@example.com'
  const password = 'speedboatvolcano'
  const deviceID = randomUUID()

  const { UID: userUID } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUID,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  await throwIfError(
    upsertUserDevice(pool, {
      userUID,
      accessedAt: DateTime.local(),
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

    // Note that we are not passing a 2fa token here
    token_2fa: undefined,
  }
  const error = await asError(
    createAuthTokenHandler({
      pool,
      input,
      session: GUEST_SESSION,
    }),
  )
  t.is('This user has 2FA enabled.', error.message)
})

test('should skip 2FA when using a trusted device', async (t) => {
  const { pool } = t.context

  const email = 'strawberrybus@example.com'
  const password = 'strawberrybus'
  const deviceID = randomUUID()

  const { UID: userUID } = await throwIfError<User>(
    insertUser(pool, { email, password }),
  )

  const secret = authenticator.generateSecret()

  await throwIfError(
    insertUser2FA(pool, {
      userUID,
      name: 'Test 2FA Token',
      secret,
    }),
  )

  await throwIfError(
    upsertUserDevice(pool, {
      userUID,
      accessedAt: DateTime.local(),
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

  t.is(userUID, result.user_uid)
  t.is('string', typeof result.auth_token)
})
