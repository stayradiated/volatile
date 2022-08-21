import { randomBytes } from 'node:crypto'
import { promisify } from 'node:util'
import { errorBoundary } from '@stayradiated/error-boundary'

import { encodeBase64URL } from '../../util/base64-url.js'

const randomBytesAsync = promisify(randomBytes)

const secretSizeBytes = 60

const generateUserPasswordResetSecret = async (): Promise<string | Error> => {
  const buffer = await errorBoundary(async () =>
    randomBytesAsync(secretSizeBytes),
  )
  if (buffer instanceof Error) {
    return buffer
  }

  return encodeBase64URL(buffer)
}

export { generateUserPasswordResetSecret }
