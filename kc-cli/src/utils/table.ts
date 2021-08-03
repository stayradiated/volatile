import { table as formatArrayAsTable } from 'table'

type Row1 = [string]
type Row2 = [string, string]
type Row3 = [string, string, string]
type Row4 = [string, string, string, string]
type Row5 = [string, string, string, string, string]
type Row6 = [string, string, string, string, string, string]
type Row7 = [string, string, string, string, string, string, string]
type Row8 = [string, string, string, string, string, string, string, string]
type Row9 = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]
type Row10 = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

type RowAny =
  | Row1
  | Row2
  | Row3
  | Row4
  | Row5
  | Row6
  | Row7
  | Row8
  | Row9
  | Row10

type TableOptions<R extends RowAny> = {
  header?: R,
  rows: R[]
  footer?: R,
}

const table = <R extends RowAny>(options: TableOptions<R>): string => {
  const { header, rows, footer } = options

  const allRows = [...rows]
  if (header) {
    allRows.unshift(header)
  }

  if (footer) {
    allRows.push(footer)
  }

  const tableString = formatArrayAsTable(allRows, {
    border: {
      topBody: '-',
      topJoin: '+',
      topLeft: '|',
      topRight: '|',
      bottomBody: '-',
      bottomJoin: '+',
      bottomLeft: '|',
      bottomRight: '|',
      bodyLeft: '|',
      bodyRight: '|',
      bodyJoin: '|',
      headerJoin: '+',
      joinBody: '-',
      joinLeft: '|',
      joinRight: '|',
      joinJoin: '+',
    },
    drawHorizontalLine: (lineIndex, rowCount) =>
      lineIndex === 0 ||
      (header && lineIndex === 1) ||
      (footer && lineIndex === rowCount - 1) ||
      lineIndex === rowCount,
    columnDefault: {
      alignment: 'right',
    },
  })

  return tableString.replace(/---(\+|\|)/g, '--:$1')
}

export {
  table,
  Row1,
  Row2,
  Row3,
  Row4,
  Row5,
  Row6,
  Row7,
  Row8,
  Row9,
  Row10,
  RowAny,
}
