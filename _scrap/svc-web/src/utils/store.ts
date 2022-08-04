const local = (key: string): string => `kc_${key}`

const set = (key: string, value: string) => {
  window.localStorage.setItem(local(key), value)
}

const get = (key: string): string | undefined =>
  window.localStorage.getItem(local(key)) ?? undefined

const remove = (key: string): void => {
  window.localStorage.removeItem(local(key))
}

export { set, get, remove }
