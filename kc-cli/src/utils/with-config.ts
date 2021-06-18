import { readConfig, Config } from '@stayradiated/kc-config'

type Argv<T extends Record<string, unknown>> = T & {
  config?: string
}

type HandlerFn<T extends Record<string, unknown>> = (
  config: Config,
  argv: Argv<T>,
) => Promise<void>

const withConfig = <T extends Record<string, unknown>>(
  handlerFn: HandlerFn<T>,
) => {
  return async (argv: Argv<T>) => {
    const { config: configPath } = argv
    if (!configPath) {
      throw new Error('--config is required!')
    }

    const config = await readConfig(configPath)

    return handlerFn(config, argv).catch((error) => {
      console.error(error)
    })
  }
}

export { withConfig, Config }
