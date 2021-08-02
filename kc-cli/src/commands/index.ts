import { CommandModule } from 'yargs'

import * as trades from './trades/index.js'

const commandsList: Array<CommandModule<any, any>> = [
  trades,
]

// Force type to CommandModule to fix typescript error
const commands = commandsList as unknown as CommandModule<
  Record<string, unknown>,
  any
>

export { commands }
