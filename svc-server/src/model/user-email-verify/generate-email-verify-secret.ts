import { randomBytes } from 'node:crypto'
import { promisify } from 'node:util'
import { errorBoundary } from '@stayradiated/error-boundary'

import { encodeBase64URL } from '../../util/base64-url.js'

const randomBytesAsync = promisify(randomBytes)

const SECRET_SIZE_BYTES = 60

const generateUserEmailVerifySecret = async (): Promise<string | Error> => {
  const result = await errorBoundary(async () =>
    randomBytesAsync(SECRET_SIZE_BYTES),
  )
  if (result instanceof Error) {
    return result
  }

  return encodeBase64URL(result)
}

export { generateUserEmailVerifySecret }
