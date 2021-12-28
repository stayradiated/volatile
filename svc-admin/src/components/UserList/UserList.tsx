import { useState, useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'

import type {
  GetUserListQuery as Query,
  GetUserListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Table, Button } from '../retro-ui'

import { UserEmail } from './user-email'

type User = Query['kc_user'][0]

const QUERY = gql`
  query getUserList {
    kc_user {
      uid
      email_verified
    }
  }
`

const UserList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const [state, setState] = useState<Record<string, boolean>>({})

  const columns = useMemo(() => {
    const columns: Array<Column<User>> = [
      {
        Header: 'UID',
        accessor: 'uid',
        Cell: ({ value }) => (
          <pre>
            <code>{value}</code>
          </pre>
        ),
      },
      {
        id: 'email_hash',
        Header: 'Email Hash',
        accessor: 'uid',
        Cell: ({ value: userUID }) => {
          const handleShow = async () => {
            setState({ ...state, [userUID]: true })
          }

          const handleHide = async () => {
            setState({ ...state, [userUID]: false })
          }

          const showEmail = state[userUID]
          if (showEmail) {
            return (
              <pre onClick={handleHide}>
                <code>
                  <UserEmail userUID={userUID} />
                </code>
              </pre>
            )
          }

          return (
            <pre>
              <code onClick={handleShow}>***********</code>
            </pre>
          )
        },
      },
      {
        Header: 'Email Verified',
        accessor: 'email_verified',
        Cell: ({ value }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'Actions',
        Cell: () => <Button>Edit</Button>,
      },
    ]
    return columns
  }, [state])

  const table = useTable({
    columns,
    data: data?.kc_user ?? [],
  })

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Table table={table} />
    </>
  )
}

export { UserList }
