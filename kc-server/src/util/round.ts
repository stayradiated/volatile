type Decimals =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15

const round = (decimals: Decimals, value = 0): number => {
  const multiplier = 10 ** decimals
  return Math.round(value * multiplier) / multiplier
}

export { round }
