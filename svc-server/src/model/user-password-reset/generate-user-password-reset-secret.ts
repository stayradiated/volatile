import { randomBytes } from 'crypto'
import { promisify } from 'util'
import { errorBoundary } from '@stayradiated/error-boundary'

import { encodeBase64URL } from '../../util/base64-url.js'

const randomBytesAsync = promisify(randomBytes)

const SECRET_SIZE_BYTES = 60

const generateUserPasswordResetSecret = async (): Promise<string | Error> => {
  const buffer = await errorBoundary(async () =>
    randomBytesAsync(SECRET_SIZE_BYTES),
  )
  if (buffer instanceof Error) {
    return buffer
  }

  return encodeBase64URL(buffer)
}

export { generateUserPasswordResetSecret }
