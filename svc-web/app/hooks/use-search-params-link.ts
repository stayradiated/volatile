type SearchParametersLinkOptions = {
  set?: Record<string, string>
  delete?: string[]
}

const useSearchParametersLink = (searchParameters: URLSearchParams) => {
  return (options: SearchParametersLinkOptions) => {
    const { set: parametersToSet, delete: parametersToDelete } = options

    const nextSearchParameters = new URLSearchParams(searchParameters)

    if (parametersToSet) {
      for (const [key, value] of Object.entries(parametersToSet)) {
        nextSearchParameters.set(key, value)
      }
    }

    if (parametersToDelete) {
      for (const key of parametersToDelete) {
        nextSearchParameters.delete(key)
      }
    }

    return '?' + nextSearchParameters.toString()
  }
}

export { useSearchParametersLink as useSearchParamsLink }
