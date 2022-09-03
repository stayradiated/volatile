import { Buffer } from 'node:buffer'
import process from 'node:process'
import * as z from 'zod'

const toNumber = (input: unknown): number => {
  if (typeof input === 'number') {
    return input
  }

  if (typeof input === 'bigint') {
    return Number(input)
  }

  if (typeof input === 'string') {
    return Number.parseFloat(input)
  }

  return Number.NaN
}

const fromStringToJSON = <T>(input: unknown): T | undefined => {
  if (typeof input !== 'string') {
    return undefined
  }

  return JSON.parse(input) as T
}

const toBuffer = (input: unknown): Buffer => {
  if (input instanceof Buffer) {
    return input
  }

  if (typeof input === 'string') {
    return Buffer.from(input, 'utf8')
  }

  throw new Error('Invalid input')
}

const config = z
  .object({
    NODE_ENV: z.string(),
    DATABASE_URL: z.string(),

    ACTIVE_JOBS: z.preprocess(
      fromStringToJSON,
      z
        .array(
          z.enum([
            'autoBuy',
            'fetchCurrencyFx',
            'fetchMarketPrice',
            'fetchStripe',
          ]),
        )
        .default([]),
    ),

    BASE_URL: z.string().url(),
    PORT: z.preprocess(toNumber, z.number().gte(0).lte(65_535)),
    KEYRING: z.preprocess(fromStringToJSON, z.record(z.string())),
    DIGEST_SALT: z.string(),
    BCRYPT_SALT_ROUNDS: z.preprocess(toNumber, z.number().int().min(10)),
    JWT_SECRET: z.string().transform(toBuffer),

    ACTIONS_SECRET: z.string().transform(toBuffer),

    STRIPE_API_KEY: z.string(),
    STRIPE_PUBLISHABLE_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),

    DASSET_API_KEY: z.string(),
    DASSET_ACCOUNT_ID: z.string(),

    MAIL_SMTP_URL: z.string().url(),
    MAIL_FROM: z.string(),

    OPEN_EXCHANGE_RATES_APP_ID: z.string(),
  })
  .parse(process.env)

export { config }
