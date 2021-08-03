import fs from 'fs/promises'
import { errorBoundary } from '@stayradiated/error-boundary'

type Config = {
  endpoint: string
  email: string
  password: string
}

type Argv<T extends Record<string, unknown>> = T & {
  config?: string
}

type HandlerFn<T extends Record<string, unknown>> = (
  config: Config,
  argv: Argv<T>,
) => Promise<void | Error>

const createHandler =
  <T extends Record<string, unknown>>(handlerFn: HandlerFn<T>) =>
  async (argv: Argv<T>) => {
    const executeHandler = async (): Promise<void | Error> => {
      const { config: configPath } = argv
      if (!configPath) {
        return new Error('--config is required!')
      }

      const config = await errorBoundary(async () => {
        const contents = await fs.readFile(configPath, 'utf8')
        return JSON.parse(contents)
      })
      if (config instanceof Error) {
        return config
      }

      const error = await handlerFn(config, argv)
      return error
    }

    const error = await executeHandler()
    if (error) {
      console.error(error)
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }
  }

export { createHandler, Config }
