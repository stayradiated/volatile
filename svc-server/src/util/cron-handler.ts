import type { Task } from 'graphile-worker'

import {
  UnexpectedError,
  messageWithContext,
  CronError,
  errorToObject,
} from '../util/error.js'

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
        const cronError = new CronError(
          messageWithContext(`Error returned by cron handler for "${taskId}"`, {
            taskId,
            input,
          }),
          {
            cause: output,
          },
        )

        const cronHistoryError = await updateCronHistory(pool, {
          uid: row.uid,
          completedAt: new Date(),
          state: 'ERROR',
          output: errorToObject(cronError),
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
      const unexpectedError = new UnexpectedError(
        messageWithContext(
          `Unexpected error thrown while executing cron hrndler for "${taskId}".`,
          { taskId, input },
        ),
        {
          cause: error,
        },
      )
      const cronHistoryError = await updateCronHistory(pool, {
        uid: row.uid,
        completedAt: new Date(),
        state: 'ERROR',
        output: errorToObject(unexpectedError),
      })
      if (cronHistoryError instanceof Error) {
        helpers.logger.error(cronHistoryError.message)
      }
    }
  }

export { type CronHandlerFn, wrapCronHandler }
