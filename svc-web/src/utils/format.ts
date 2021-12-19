const formatCurrency = (value?: number, mantissa = 2): string => {
  if (value == null) {
    return '-.--'
  }

  return value.toFixed(mantissa).replace(/\d(?=(?:\d{3})+(?!\d))/, '$&,')
}

export { formatCurrency }
