import env from 'env-var'
import { UserKeys } from '@stayradiated/kc-keyring'

const KEYRING = env.get('KEYRING').required().asJson() as UserKeys
const DIGEST_SALT = env.get('DIGEST_SALT').required().asString()
const BCRYPT_SALT_ROUNDS = env.get('BCRYPT_SALT_ROUNDS').required().asInt()

export { KEYRING, DIGEST_SALT, BCRYPT_SALT_ROUNDS }
