import crypto from 'node:crypto'
import { Buffer } from 'node:buffer'
import { errorBoundary } from '@stayradiated/error-boundary'

type Algorithm = string
type KeySize = number

type UserKeys = Record<string, string>

type Key = {
  id: number
  encryptionKey: Buffer
  signingKey: Buffer
}

type KeyringOptions = {
  algorithm?: Algorithm
}

type EncryptResult = {
  encrypted: string
  keyringId: number
}

type Keyring = {
  encrypt: (message: string) => EncryptResult | Error
  decrypt: (message: string, keyringId: number) => string | Error
  currentId: () => number
}

const keySizes: Record<Algorithm, KeySize> = {
  'AES-128-CBC': 16,
  'AES-192-CBC': 24,
  'AES-256-CBC': 32,
}

const createKeyring = (
  userKeys: UserKeys,
  options: KeyringOptions = {},
): Keyring | Error => {
  const { algorithm = 'AES-128-CBC' } = options

  const keySize = keySizes[algorithm]
  if (!keySize) {
    return new Error(`Invalid encryption algorithm: ${algorithm}`)
  }

  // Convert keyring object into array of keys.
  const keys = normalizeKeys(userKeys, keySize)
  if (keys instanceof Error) {
    return keys
  }

  const isInvalidError = validateKeyring(keys)
  if (isInvalidError) {
    return isInvalidError
  }

  const keyring: Keyring = {
    encrypt: (message) => encrypt(keys, algorithm, message),
    decrypt(message, keyringId) {
      const keyOrError = findKey(keys, keyringId)
      if (keyOrError instanceof Error) {
        return keyOrError
      }

      return decrypt(keyOrError, algorithm, message)
    },
    currentId: () => currentKey(keys).id,
  }

  return keyring
}

const encrypt = (
  keys: Key[],
  algorithm: Algorithm,
  message: string,
): EncryptResult | Error => {
  if (typeof message !== 'string') {
    return new Error('encrypt: message must be a string')
  }

  return errorBoundary<EncryptResult>(() => {
    const key = currentKey(keys)
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, key.encryptionKey, iv)
    const encrypted = Buffer.concat([
      cipher.update(Buffer.from(message)),
      cipher.final(),
    ])

    const hmac = hmacDigest(key.signingKey, Buffer.concat([iv, encrypted]))
    const returnValue = Buffer.concat([hmac, iv, encrypted]).toString('base64')

    return { encrypted: returnValue, keyringId: key.id }
  })
}

const decrypt = (
  key: Key,
  algorithm: Algorithm,
  message: string,
): string | Error =>
  errorBoundary<string>(() => {
    const decoded = Buffer.from(message, 'base64')
    const hmac = decoded.slice(0, 32)
    const iv = decoded.slice(32, 48)
    const encrypted = decoded.slice(48)
    const decipher = crypto.createDecipheriv(algorithm, key.encryptionKey, iv)
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ])

    const expectedHmac = hmacDigest(
      key.signingKey,
      Buffer.concat([iv, encrypted]),
    )

    if (!verifySignature(expectedHmac, hmac)) {
      return new Error(
        `Expected HMAC to be ${expectedHmac.toString(
          'base64',
        )}; got ${hmac.toString('base64')} instead`,
      )
    }

    return decrypted.toString()
  })

const validateKeyring = (keys: Key[]): void | Error => {
  if (keys.length === 0) {
    return new Error('You must initialize the keyring')
  }

  const invalidIds = keys.some((key) => Number.isNaN(key.id))
  if (invalidIds) {
    return new Error('All keyring keys must be integer numbers')
  }
}

const toBuffer = (value: Buffer | string): Buffer => {
  if (value instanceof Buffer) {
    return value
  }

  return Buffer.from(value, 'base64')
}

const toInt = (value: number | string): number => {
  if (typeof value === 'number') {
    return Math.floor(value)
  }

  return Number.parseInt(value, 10)
}

const normalizeKeys = (userKeys: UserKeys, keySize: KeySize): Key[] | Error => {
  const expectedKeySize = keySize * 2

  const keys: Array<Key | Error> = Object.entries(userKeys).map(
    ([idString, value]) => {
      const id = toInt(idString)
      const secret = toBuffer(value)

      if (secret.length !== expectedKeySize) {
        return new Error(
          `Expected key to be ${expectedKeySize} bytes long; got ${secret.length} instead`,
        )
      }

      const signingKey = secret.slice(0, keySize)
      const encryptionKey = secret.slice(keySize)

      const key: Key = {
        id,
        encryptionKey,
        signingKey,
      }

      return key
    },
  )

  const errors = keys.filter((key) => key instanceof Error) as Error[]
  if (errors.length > 0) {
    const flattenedErrors = errors.map((error) => error.message).join('\n')
    return new Error(`Keyring contains errors: ${flattenedErrors}`)
  }

  return keys as Key[]
}

const currentKey = (keys: Key[]): Key =>
  // eslint-disable-next-line unicorn/no-array-reduce
  keys.reduce((a, b) => (a.id > b.id ? a : b))

const findKey = (keys: Key[], id: number | string): Key | Error => {
  const key = keys.find((key) => toInt(key.id) === toInt(id))

  if (key) {
    return key
  }

  return new Error(`key=${id} is not available on keyring`)
}

const hmacDigest = (signingKey: Buffer, message: Buffer): Buffer => {
  const hmac = crypto.createHmac('sha256', signingKey)
  hmac.update(message)
  const digest = hmac.digest()
  hmac.end()

  return digest
}

const verifySignature = (expected: Buffer, actual: Buffer): boolean => {
  if (expected.length !== actual.length) {
    return false
  }

  // eslint-disable-next-line unicorn/no-array-reduce
  const diff = expected.reduce((accum, expectedElement, index) => {
    const actualElement = actual[index] ?? 0
    accum |= expectedElement ^ actualElement
    return accum
  }, 0)

  return diff === 0
}

export { createKeyring, Keyring, UserKeys, Algorithm, EncryptResult }
