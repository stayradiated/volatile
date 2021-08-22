const fetchMetadata = async (type: string, args: Record<string,string|number>) => {
  const response = await fetch(`http://localhost:9999/v1/metadata`, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': 'unlockedinfinity'
    },
    body: JSON.stringify({ type, args })
  })
  return response.json()
}

export { fetchMetadata }
