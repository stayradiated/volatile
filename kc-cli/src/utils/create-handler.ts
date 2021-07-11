import { readConfig, Config } from '@stayradiated/kc-config'

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

      const config = await readConfig(configPath)
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
