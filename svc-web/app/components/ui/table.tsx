import { Table, flexRender } from '@tanstack/react-table'
import styled from 'styled-components'

type Props = {
  table: Table<any>
}

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
`

const Tr = styled.tr`
  line-height: 40px;

  &[aria-disabled='true'] {
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

  return (
    <StyledTable>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>

      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>

      <Tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <Tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <Th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </Th>
            ))}
          </Tr>
        ))}
      </Tfoot>
    </StyledTable>
  )
}

export { Table }
