import { run, parseCronItems, CronItem, TaskList } from 'graphile-worker'

import { wrapCronHandler, CronHandlerFn } from './util/cron-handler.js'

type CronJob<Input, Output> = {
  active: boolean,
  name: string,
  pattern: string,
  handler: CronHandlerFn<Input, Output>,
}

type StartWorkerOptions = {
  connectionString: string
  jobs: CronJob<any, any>[]
}

const createTaskList = (jobs: CronJob<any, any>[]): TaskList => {
  return jobs.reduce<TaskList>((object, job) => {
    object[job.name] = wrapCronHandler(job.name, job.handler)
    return object
  }, {})
}

const startWorker = async (options: StartWorkerOptions) => {
  const { connectionString, jobs } = options

  const taskList = createTaskList(jobs)

  const cronItemList: CronItem[] = jobs.filter((job) => {
    return job.active
  }).map((job) => ({
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
