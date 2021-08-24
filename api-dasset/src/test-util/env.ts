import dotenv from 'dotenv'
import env from 'env-var'

dotenv.config()

const DASSET_API_KEY = env.get('DASSET_API_KEY').required().asString()
const DASSET_ACCOUNT_ID = env.get('DASSET_ACCOUNT_ID').required().asString()

const TEST_CONFIG = {
  accountId: DASSET_ACCOUNT_ID,
  apiKey: DASSET_API_KEY,
}

export { DASSET_API_KEY, DASSET_ACCOUNT_ID, TEST_CONFIG }
