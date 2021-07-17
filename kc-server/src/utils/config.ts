import { readConfigSync } from '@stayradiated/kc-config'

import { CONFIG_PATH } from '../env.js'

const maybeConfig = readConfigSync(CONFIG_PATH)
if (maybeConfig instanceof Error) {
  console.error(maybeConfig)
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1)
}

const config = maybeConfig

export { config }
