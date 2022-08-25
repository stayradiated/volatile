import * as process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { commands } from './commands/index.js'

void (async function () {
  await yargs(hideBin(process.argv))
    .scriptName('volatile')
    .strict()
    .option('config', {
      alias: 'c',
      type: 'string',
      description: 'Path to config file',
    })
    .option('debug', {
      type: 'boolean',
      description: 'Log API calls',
    })
    .command(commands)
    .demandCommand(1)
    .fail((message, error) => {
      console.log('fail', { msg: message, err: error })
    })
    .help().argv
})()
