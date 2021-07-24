import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getSession } from './session-store'

const httpLink = createHttpLink({
  uri: "http://localhost:9999/v1/graphql",
})

const authLink = setContext((_request, { headers }) => {
  const session = getSession()

  if (session.role === 'guest') {
      return { }
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session.authToken}`
    }
  }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export { client }
