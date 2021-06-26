import test from 'ava'

import { createKeyring } from './keyring.js'

test('raises exception when trying to use empty keyring', (t) => {
  t.throws(
    () => {
      createKeyring({}).encrypt('42')
    },
    {
      message: 'You must initialize the keyring',
    },
  )
})

test('raises exception when using non-integer keys', (t) => {
  t.throws(
    () => {
      createKeyring({
        a: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=',
      }).encrypt('42')
    },
    {
      message: 'All keyring keys must be integer numbers',
    },
  )
})

test('encrypts property using AES-128-CBC', (t) => {
  const keys = { 0: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=' }
  const [encrypted, keyringId] = createKeyring(keys).encrypt('42')
  const decrypted = createKeyring(keys).decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('encrypts property using AES-192-CBC', (t) => {
  const keys = {
    0: 'wtnnoK+5an+FPtxnkdUDrNw6fAq8yMkvCvzWpriLL9TQTR2WC/k+XPahYFPvCemG',
  }
  const options = { algorithm: 'AES-192-CBC' }
  const [encrypted, keyringId] = createKeyring(keys, options).encrypt('42')
  const decrypted = createKeyring(keys, options).decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('encrypts property using AES-256-CBC', (t) => {
  const keys = {
    0: 'XZXC+c7VUVGpyAceSUCOBbrp2fjJeeHwoaMQefgSCfp0/HABY5yJ7zRiLZbDlDZ7HytCRsvP4CxXt5hUqtx9Uw==',
  }
  const options = { algorithm: 'AES-256-CBC' }
  const [encrypted, keyringId] = createKeyring(keys, options).encrypt('42')
  const decrypted = createKeyring(keys, options).decrypt(encrypted, keyringId)

  t.not(encrypted, undefined)
  t.not(encrypted, '42')
  t.is(decrypted, '42')
})

test('sets keyring id', (t) => {
  let keyringId: number
  const key = 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M='
  keyringId = createKeyring({ 0: key }).encrypt('42')[1]
  t.is(keyringId, 0)

  keyringId = createKeyring({ 1: key }).encrypt('42')[1]
  t.is(keyringId, 1)
})

test('throws exception when trying to encrypt non-string', (t) => {
  const keys = { 0: 'uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=' }

  t.throws(() => {
    createKeyring(keys, {}).encrypt(1234 as unknown as string)
  })
})
