import { TableInstance } from 'react-table'
import styled from 'styled-components'

const DISABLED = Symbol('DISABLED')

type Props = {
  table: TableInstance<any>
}

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
`

const Tr = styled.tr`
  line-height: 40px;

  &[aria-disabled] {
    text-decoration: line-through;
  }
`

const Td = styled.td`
  padding: 6px;
  text-align: left;
  vertical-align: top;
  word-wrap: break-word;
`

const Th = styled.th`
  padding: 6px;
  text-align: left;
  vertical-align: top;
  word-wrap: break-word;
`

const Thead = styled.thead`
  border-bottom: 1px solid #dbdbdb;
`

const Tbody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`

const Tfoot = styled.tfoot`
  border-top: 1px solid #dbdbdb;
`

const Table = (props: Props) => {
  const { table } = props

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = table

  return (
    <StyledTable {...getTableProps()}>
      <Thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <Th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </Th>
                ))
              }
            </Tr>
          ))
        }
      </Thead>

      {/* Apply the table body props */}
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          const isDisabled = row.original[DISABLED]

          return (
            <Tr {...row.getRowProps()} aria-disabled={isDisabled}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>

      <Tfoot>
        {footerGroups.map((group) => (
          <Tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <Td {...column.getFooterProps()}>{column.render('Footer')}</Td>
            ))}
          </Tr>
        ))}
      </Tfoot>
    </StyledTable>
  )
}

Table.DISABLED = DISABLED

export { Table }
