import { gql, useQuery } from '@apollo/client'

import type {
  QueryUserEmailQuery as Query,
  QueryUserEmailQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query queryUserEmail($userUID: uuid!) {
    query_user_email(user_uid: $userUID) {
      email
    }
  }
`

type Props = {
  userUID: string
}

const UserEmail = (props: Props )=> {
  const { userUID } = props

  const { data } = useQuery<Query, QueryVariables>(QUERY,{
    variables: {
      userUID
    }
  })

  const email = data?.query_user_email?.email ?? '…'

  return (
    <>{email}</>
  )
}

export { UserEmail }
