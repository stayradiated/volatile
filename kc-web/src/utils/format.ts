const formatCurrency = (value: number, mantissa: number = 2): string => {
  return value.toFixed(mantissa).replace(/[0-9](?=(?:[0-9]{3})+(?![0-9]))/, '$&,')
}

export {
  formatCurrency
}
