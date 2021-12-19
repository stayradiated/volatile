import { randomBytes } from 'crypto'
import { promisify } from 'util'
import { errorBoundary } from '@stayradiated/error-boundary'

const randomBytesAsync = promisify(randomBytes)

const SECRET_SIZE_BYTES = 60

const generateUserEmailVerifySecret = async (): Promise<string | Error> => {
  const result = await errorBoundary(async () =>
    randomBytesAsync(SECRET_SIZE_BYTES),
  )
  if (result instanceof Error) {
    return result
  }

  return result.toString('base64')
}

export { generateUserEmailVerifySecret }
