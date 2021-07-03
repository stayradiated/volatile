const round = (decimals: number, value = 0): number => {
  if (!Number.isInteger(decimals) || decimals < 0) {
    throw new Error('round: decimals must be a positive integer!')
  }

  const multiplier = 10 ** decimals
  return Math.round(value * multiplier) / multiplier
}

export { round }
