import { createHash } from 'crypto'
import Bcrypt from 'bcrypt'

import { DIGEST_SALT, BCRYPT_SALT_ROUNDS } from '../env.js'

const sha256 = (plaintext: string): string =>
  createHash('sha256').update(`${plaintext}${DIGEST_SALT}`).digest('base64')

const bcrypt = async (plaintext: string): Promise<string> =>
  Bcrypt.hash(plaintext, BCRYPT_SALT_ROUNDS)

const bcryptCompare = async (
  plaintext: string,
  hash: string,
): Promise<boolean> => Bcrypt.compare(plaintext, hash)

export { sha256, bcrypt, bcryptCompare }
