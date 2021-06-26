import crypto from 'crypto'

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

type EncryptResult = [string, number]

type Keyring = {
  encrypt: (message: string) => EncryptResult
  decrypt: (message: string, keyringId: number) => string
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
): Keyring => {
  const { algorithm = 'AES-128-CBC' } = options

  const keySize = keySizes[algorithm]
  if (!keySize) {
    throw new Error(`Invalid encryption algorithm: ${algorithm}`)
  }

  // Convert keyring object into array of keys.
  const keys = normalizeKeys(userKeys, keySize)
  validateKeyring(keys)

  const keyring: Keyring = {
    encrypt: (message) => encrypt(keys, algorithm, message),
    decrypt: (message, keyringId) =>
      decrypt(findKey(keys, keyringId), algorithm, message),
    currentId: () => currentKey(keys).id,
  }

  return keyring
}

const encrypt = (
  keys: Key[],
  algorithm: Algorithm,
  message: string,
): EncryptResult => {
  const key = currentKey(keys)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(algorithm, key.encryptionKey, iv)
  const encrypted = Buffer.concat([
    cipher.update(Buffer.from(message)),
    cipher.final(),
  ])

  const hmac = hmacDigest(key.signingKey, Buffer.concat([iv, encrypted]))
  const returnValue = Buffer.concat([hmac, iv, encrypted]).toString('base64')

  return [returnValue, key.id]
}

const decrypt = (key: Key, algorithm: Algorithm, message: string) => {
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
    throw new Error(
      `Expected HMAC to be ${expectedHmac.toString(
        'base64',
      )}; got ${hmac.toString('base64')} instead`,
    )
  }

  return decrypted.toString()
}

const validateKeyring = (keys: Key[]): void => {
  if (keys.length === 0) {
    throw new Error('You must initialize the keyring')
  }

  const invalidIds = keys.some((key) => Number.isNaN(key.id))

  if (invalidIds) {
    throw new Error('All keyring keys must be integer numbers')
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

const normalizeKeys = (userKeys: UserKeys, keySize: KeySize): Key[] => {
  const expectedKeySize = keySize * 2

  const keys: Key[] = []
  for (const [idString, value] of Object.entries(userKeys)) {
    const id = toInt(idString)
    const secret = toBuffer(value)

    if (secret.length !== expectedKeySize) {
      throw new Error(
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

    keys.push(key)
  }

  return keys
}

const currentKey = (keys: Key[]): Key => {
  // eslint-disable-next-line unicorn/no-array-reduce
  return keys.reduce((a, b) => {
    return a.id > b.id ? a : b
  })
}

const findKey = (keys: Key[], id: number | string) => {
  const key = keys.find((key) => toInt(key.id) === toInt(id))

  if (key) {
    return key
  }

  throw new Error(`key=${id} is not available on keyring`)
}

const hmacDigest = (signingKey: Buffer, message: Buffer): Buffer => {
  const hmac = crypto.createHmac('sha256', signingKey)
  hmac.update(message)
  const digest = hmac.digest()
  hmac.end()

  return digest
}

const verifySignature = (expected: Buffer, actual: Buffer): boolean => {
  let accum = 0

  if (expected.length !== actual.length) {
    return false
  }

  for (const [i, expectedElement] of expected.entries()) {
    const actualElement = actual[i] ?? 0
    accum |= expectedElement ^ actualElement
  }

  return accum === 0
}

export { createKeyring, UserKeys, Algorithm }
