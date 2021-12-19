import * as process from 'process'
import { createKeyring, Keyring } from '@volatile/keyring'

import { KEYRING } from '../env.js'

const keyring = createKeyring(KEYRING) as Keyring
if (keyring instanceof Error) {
  console.error(keyring)
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1)
}

export { keyring }
