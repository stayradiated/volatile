import fs from 'node:fs/promises'

import type { UserKeys, Algorithm, Keyring } from './keyring.js'
import { createKeyring } from './keyring.js'

type FileContents = {
  algorithm: Algorithm
  keys: UserKeys
}

const createKeyringFromFilepath = async (
  filepath: string,
): Promise<Keyring | Error> => {
  const buffer = await fs.readFile(filepath)
  const fileContents = JSON.parse(buffer.toString('utf8')) as FileContents
  const { algorithm, keys } = fileContents
  const keyring = createKeyring(keys, { algorithm })
  return keyring
}

export { createKeyringFromFilepath }

export {
  createKeyring,
  type Keyring,
  type Algorithm,
  type UserKeys,
} from './keyring.js'
