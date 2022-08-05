import { Task, TaskList } from 'graphile-worker'

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
    }
  }

const bindCronHandlers = (
  record: Record<string, CronHandlerFn<any, any>>,
): TaskList => {
  return Object.entries(record).reduce<TaskList>((object, [key, value]) => {
    object[key] = wrapCronHandler(key, value)
    return object
  }, {})
}

export { CronHandlerFn, wrapCronHandler, bindCronHandlers }
