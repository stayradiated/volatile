import env from 'env-var'
import { UserKeys } from '@stayradiated/kc-keyring'

const CONFIG_PATH = env.get('CONFIG_PATH').required().asString()
const KEYRING = env.get('KEYRING').required().asJson() as UserKeys
const DIGEST_SALT = env.get('DIGEST_SALT').required().asString()
const BCRYPT_SALT_ROUNDS = env.get('BCRYPT_SALT_ROUNDS').required().asInt()

export { CONFIG_PATH, KEYRING, DIGEST_SALT, BCRYPT_SALT_ROUNDS }
