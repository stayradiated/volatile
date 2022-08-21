import { errorBoundary } from '@stayradiated/error-boundary'

type MapFn<Input, Output> = (element: Input) => Promise<Output>

const mapSeries = async <Input, Output>(
  input: Iterable<Input>,
  mapFn: MapFn<Input, Output>,
): Promise<Array<Output | Error>> => {
  const result = []
  for (const value of input) {
    // eslint-disable-next-line no-await-in-loop
    result.push(await errorBoundary(async () => mapFn(value)))
  }

  return result
}

export { mapSeries }
