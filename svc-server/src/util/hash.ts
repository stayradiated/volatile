import { createHash } from 'node:crypto'
import Bcrypt from 'bcrypt'

import { config } from '../env.js'

const sha256 = (plaintext: string): string =>
  createHash('sha256')
    .update(`${plaintext}${config.DIGEST_SALT}`)
    .digest('base64')

const bcrypt = async (plaintext: string): Promise<string> =>
  Bcrypt.hash(plaintext, config.BCRYPT_SALT_ROUNDS)

const bcryptCompare = async (
  plaintext: string,
  hash: string,
): Promise<boolean> => Bcrypt.compare(plaintext, hash)

export { sha256, bcrypt, bcryptCompare }
