import test from 'ava'

import { createKeyring, Keyring, EncryptResult } from './keyring.js'

test('raises exception when trying to use empty keyring', (t) => {
  const keyring = createKeyring({})
  t.like(keyring, {
    message: 'You must initialize the keyring',
  })
})

test('raises exception when using non-integer keys', (t) => {
  const keyring = createKeyring({
    a: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=',
  })
  t.like(keyring, {
    message: 'All keyring keys must be integer numbers',
  })
})

test('encrypts property using AES-128-CBC', (t) => {
  const keys = { 0: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=' }
  const keyring = createKeyring(keys) as Keyring

  const encryptResult = keyring.encrypt('42') as EncryptResult

  const [encrypted, keyringId] = encryptResult
  const decrypted = keyring.decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('encrypts property using AES-192-CBC', (t) => {
  const keys = {
    0: 'wtnnoK+5an+FPtxnkdUDrNw6fAq8yMkvCvzWpriLL9TQTR2WC/k+XPahYFPvCemG',
  }
  const options = { algorithm: 'AES-192-CBC' }

  const keyring = createKeyring(keys, options) as Keyring

  const [encrypted, keyringId] = keyring.encrypt('42') as EncryptResult
  const decrypted = keyring.decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('encrypts property using AES-256-CBC', (t) => {
  const keys = {
    0: 'XZXC+c7VUVGpyAceSUCOBbrp2fjJeeHwoaMQefgSCfp0/HABY5yJ7zRiLZbDlDZ7HytCRsvP4CxXt5hUqtx9Uw==',
  }
  const options = { algorithm: 'AES-256-CBC' }

  const keyring = createKeyring(keys, options) as Keyring
  const [encrypted, keyringId] = keyring.encrypt('42') as EncryptResult
  const decrypted = keyring.decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('sets keyring id', (t) => {
  const key = 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M='

  const keyringA = createKeyring({ 0: key }) as Keyring

  const [, keyringIdA] = keyringA.encrypt('42') as EncryptResult
  t.is(keyringIdA, 0)

  const keyringB = createKeyring({ 1: key }) as Keyring
  const [, keyringIdB] = keyringB.encrypt('42') as EncryptResult
  t.is(keyringIdB, 1)
})

test('throws exception when trying to encrypt non-string', (t) => {
  const keys = { 0: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=' }
  const keyring = createKeyring(keys) as Keyring

  const error = keyring.encrypt(1234 as unknown as string)
  t.like(error, {
    message: 'encrypt: message must be a string',
  })
})
