import type { CronItem, TaskList } from 'graphile-worker'
import { run, parseCronItems } from 'graphile-worker'
import type { CronHandlerFn } from './util/cron-handler.js'
import { wrapCronHandler } from './util/cron-handler.js'

type CronJob<Input, Output> = {
  active: boolean
  name: string
  pattern: string
  handler: CronHandlerFn<Input, Output>
}

type StartWorkerOptions = {
  connectionString: string
  jobs: Array<CronJob<any, any>>
}

const createTaskList = (jobs: Array<CronJob<any, any>>): TaskList => {
  const taskList: TaskList = {}
  for (const job of jobs) {
    taskList[job.name] = wrapCronHandler(job.name, job.handler)
  }

  return taskList
}

const startWorker = async (options: StartWorkerOptions) => {
  const { connectionString, jobs } = options

  const taskList = createTaskList(jobs)

  const cronItemList: CronItem[] = jobs
    .filter((job) => {
      return job.active
    })
    .map((job) => ({
      task: job.name,
      pattern: job.pattern,
      payload: {},
    }))

  const runner = await run({
    connectionString,
    concurrency: 5,
    taskList,
    parsedCronItems: parseCronItems(cronItemList),
  })

  return runner
}

export { startWorker }
