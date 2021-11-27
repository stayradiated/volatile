const formatCurrency = (value: number, mantissa = 2): string => {
  return value.toFixed(mantissa).replace(/\d(?=(?:\d{3})+(?!\d))/, '$&,')
}

export { formatCurrency }
