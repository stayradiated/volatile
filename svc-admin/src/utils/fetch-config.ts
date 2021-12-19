interface APIError {
  path: string
  error: string
  code: string
}

interface ConfigResponse {
  version: string
  is_function_permissions_inferred: boolean
  is_remote_schema_permissions_enabled: boolean
  is_admin_secret_set: boolean
  is_auth_hook_set: boolean
  is_jwt_set: boolean
  jwt: JWT
  is_allow_list_enabled: boolean
  live_queries: LiveQueries
  console_assets_dir: null
  experimental_features: any[]
}

interface JWT {
  claims_namespace: string
  claims_format: string
  claims_map: null
}

interface LiveQueries {
  batch_size: number
  refetch_delay: number
}

const isAPIError = (body: ConfigResponse | APIError): body is APIError => {
  return 'error' in body && typeof body.error === 'string'
}

const fetchConfig = async (
  adminSecret: string,
): Promise<ConfigResponse | APIError> => {
  const response = await fetch('/hasura/v1alpha1/config', {
    method: 'GET',
    headers: {
      'x-hasura-admin-secret': adminSecret,
    },
  })
  const config = (await response.json()) as ConfigResponse | APIError
  return config
}

export { fetchConfig, isAPIError }
