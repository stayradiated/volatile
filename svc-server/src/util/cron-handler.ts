import { Task } from 'graphile-worker'

import { UnexpectedError, CronError } from '../util/error.js'

import {
  insertCronHistory,
  updateCronHistory,
} from '../model/cron-history/index.js'

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
  <Input, Output>(taskId: string, fn: CronHandlerFn<Input, Output>): Task =>
  async (input, helpers) => {
    const context: Context<Input> = {
      pool,
      input: input as Input,
    }

    // Insert row into table
    const row = await insertCronHistory(pool, {
      taskId,
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: undefined,
      state: 'PENDING',
      input,
      output: undefined,
    })
    if (row instanceof Error) {
      throw row
    }

    try {
      const output = await fn(context)

      if (output instanceof Error) {
        const cronError = new CronError({
          message: `Error returned by cron handler for "${taskId}"`,
          cause: output,
          context: { taskId, input },
        })

        const cronHistoryError = await updateCronHistory(pool, {
          uid: row.uid,
          completedAt: new Date(),
          state: 'ERROR',
          output: cronError.toObject({ omitting: false }),
        })
        if (cronHistoryError instanceof Error) {
          helpers.logger.error(cronHistoryError.message)
        }

        return
      }

      const error = await updateCronHistory(pool, {
        uid: row.uid,
        completedAt: new Date(),
        state: 'SUCCESS',
        output,
      })
      if (error instanceof Error) {
        helpers.logger.error(error.message)
      }

      return
    } catch (error: unknown) {
      const unexpectedError = new UnexpectedError({
        message: `Unexpected error thrown while executing cron hrndler for "${taskId}"`,
        cause: error as Error,
        context: {
          taskId,
          input,
        },
      })
      const cronHistoryError = await updateCronHistory(pool, {
        uid: row.uid,
        completedAt: new Date(),
        state: 'ERROR',
        output: unexpectedError.toObject({ omitting: false }),
      })
      if (cronHistoryError instanceof Error) {
        helpers.logger.error(cronHistoryError.message)
      }
    }
  }

export { CronHandlerFn, wrapCronHandler }
