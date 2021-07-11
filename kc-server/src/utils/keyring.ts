import { createKeyring, Keyring } from '@stayradiated/kc-keyring'

import { KEYRING } from '../env.js'

const keyring = createKeyring(KEYRING) as Keyring
if (keyring instanceof Error) {
  console.error(keyring)
  process.exit(1)
}

export { keyring }
