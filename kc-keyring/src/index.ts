import fs from 'fs/promises'

import { UserKeys, Algorithm, Keyring, createKeyring } from './keyring.js'

type FileContents = {
  algorithm: Algorithm
  keys: UserKeys
}

const createKeyringFromFilepath = async (
  filepath: string,
): Promise<Keyring | Error> => {
  const fileContents = JSON.parse(
    await fs.readFile(filepath, 'utf8'),
  ) as FileContents
  const { algorithm, keys } = fileContents
  const keyring = createKeyring(keys, { algorithm })
  return keyring
}

export {
  createKeyring,
  createKeyringFromFilepath,
  Keyring,
  UserKeys,
  Algorithm,
}
