import { Buffer } from 'buffer'
import env from 'env-var'
import { UserKeys } from '@stayradiated/kc-keyring'

const PORT = env.get('PORT').required().asPortNumber()
const KEYRING = env.get('KEYRING').required().asJson() as UserKeys
const DIGEST_SALT = env.get('DIGEST_SALT').required().asString()
const BCRYPT_SALT_ROUNDS = env.get('BCRYPT_SALT_ROUNDS').required().asInt()
const JWT_SECRET = Buffer.from(
  env.get('JWT_SECRET').required().asString(),
  'utf8',
)

const ACTIONS_SECRET = env.get('ACTIONS_SECRET').required().asString()

const STRIPE_API_KEY = env.get('STRIPE_API_KEY').required().asString()
const STRIPE_WEBHOOK_SECRET = env
  .get('STRIPE_WEBHOOK_SECRET')
  .required()
  .asString()

const DASSET_API_KEY = env.get('DASSET_API_KEY').required().asString()
const DASSET_ACCOUNT_ID = env.get('DASSET_ACCOUNT_ID').required().asString()

const OPEN_EXCHANGE_RATES_APP_ID = env
  .get('OPEN_EXCHANGE_RATES_APP_ID')
  .required()
  .asString()

export {
  PORT,
  KEYRING,
  DIGEST_SALT,
  BCRYPT_SALT_ROUNDS,
  JWT_SECRET,
  ACTIONS_SECRET,
  STRIPE_API_KEY,
  STRIPE_WEBHOOK_SECRET,
  DASSET_ACCOUNT_ID,
  DASSET_API_KEY,
  OPEN_EXCHANGE_RATES_APP_ID,
}
