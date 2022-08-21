import * as process from 'node:process'
import { createKeyring, Keyring } from '@volatile/keyring'

import { config } from '../env.js'

const keyring = createKeyring(config.KEYRING) as Keyring
if (keyring instanceof Error) {
  console.error(keyring)
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1)
}

export { keyring }
