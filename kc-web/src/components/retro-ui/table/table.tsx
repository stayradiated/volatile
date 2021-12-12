import { TableInstance } from 'react-table'
import cx from 'classnames'

import styles from './table.module.css'

const DISABLED = Symbol('DISABLED')

type Props = {
  table: TableInstance<any>
}

const Table = (props: Props) => {
  const { table } = props

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.thead}>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()} className={styles.th}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()} className={styles.tbody}>
        {
          rows.map((row) => {
            prepareRow(row)
            const isDisabled = row.original[DISABLED]

            return (
              <tr {...row.getRowProps()} className={cx(styles.tr, {
                [styles.disabled]: isDisabled
              })}>
                {
                  row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className={styles.td}>
                        {
                          cell.render('Cell')
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Table.DISABLED = DISABLED

export { Table }
