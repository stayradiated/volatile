import dotenv from 'dotenv'
import env from 'env-var'

dotenv.config()

const dassetApiKey = env.get('DASSET_API_KEY').required().asString()
const dassetAccountId = env.get('DASSET_ACCOUNT_ID').required().asString()

const testConfig = {
  accountId: dassetAccountId,
  apiKey: dassetApiKey,
}

export { testConfig, dassetAccountId, dassetApiKey }
