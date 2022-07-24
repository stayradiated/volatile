import { useEffect } from 'react'

const log = console.log.bind(console)

type CallbackFn<T> = <K extends keyof T>(key: K, value: T[K]) => void

const useDebug = <T extends Record<string, any>>(
  dependencies: T,
  callbackFn: CallbackFn<T> = log,
) => {
  for (const [key, value] of Object.entries(dependencies)) {
    useEffect(() => {
      callbackFn(key, value)
    }, [value])
  }
}

export { useDebug }
