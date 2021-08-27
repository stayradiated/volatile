import React, { useRef, useState } from 'react'

import { fetchConfig, isAPIError } from '../_utils/fetch-config'
import { setSession } from '../_utils/session-store'

const LoginPage = () => {
  const [error, setError] = useState<string|null>(null)

  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    const password = passwordRef.current?.value
    if (typeof password !== 'string') {
      setError('Please enter a password.')
      return
    }
    const result = await fetchConfig(password)
    if (isAPIError(result)) {
      setError(result.error)
    } else {
      setSession({
        isAuthenticated: true,
        adminSecret: password,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Password</label>
      <input type='password' placeholder='password' ref={passwordRef} />
      {error}
    </form>
  )

}

export { LoginPage }
