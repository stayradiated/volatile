import { Task } from 'graphile-worker'

import { UnexpectedError, CronError } from '../util/error.js'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'

type Context<Input> = {
  pool: Pool
  input: Input
}

type CronHandlerFn<Input, Output> = (
  context: Context<Input>,
) => Promise<Output | Error>

const wrapCronHandler =
  <Input, Output>(name: string, fn: CronHandlerFn<Input, Output>): Task =>
  async (input, helpers) => {
    try {
      const context: Context<Input> = {
        pool,
        input: input as Input,
      }

      // insert row into table

      const output = await fn(context)

      if (output instanceof Error) {
        const cronError = new CronError({
          message: `Error returned by cron handler for "${name}"`,
          cause: output,
          context: { name, input },
        })

        helpers.logger.error(
          JSON.stringify(cronError.toObject({ omitting: false })),
        )
        return
      }

      helpers.logger.info(JSON.stringify(output))

      // update row with success

      return
    } catch (error: unknown) {
      const unexpectedError = new UnexpectedError({
        message: `Unexpected error thrown while executing cron hrndler for "${name}"`,
        cause: error as Error,
        context: {
          name,
          input,
        },
      })
      helpers.logger.error(
        JSON.stringify(unexpectedError.toObject({ omitting: false })),
      )
      // update row with error
    }
  }

export { CronHandlerFn, wrapCronHandler }
