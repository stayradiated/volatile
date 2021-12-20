import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Table, Typography, Button } from 'antd'

import type {
  GetUserListQuery as Query,
  GetUserListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { UserEmail } from './user-email'

const { Column } = Table
const { Text } = Typography

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

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Table
        rowKey="uid"
        dataSource={data?.kc_user ?? []}
        pagination={false}
      >
        <Column
          title="UID"
          dataIndex="uid"
          render={(uid) => <Text code>{uid}</Text>}
        />
        <Column title="Email Hash" dataIndex="uid" 
          render={(userUID) => {
            const handleShow = async () => {
              setState({ ...state, [userUID]: true })
            }
            const handleHide = async () => {
              setState({ ...state, [userUID]: false })
            }

            const showEmail = state[userUID]
            if (showEmail) {
              return <Text code onClick={handleHide}><UserEmail userUID={userUID} /></Text>
            }

            return (<Text code onClick={handleShow}>***********</Text>)
          }}
        />
        <Column title="Email Verified" dataIndex="email_verified" render={(value) => value ? 'Yes' : 'No' } />
        <Column title="Actions" render={() => <Button>Edit</Button>} />
      </Table>
    </>
  )
}

export { UserList }
