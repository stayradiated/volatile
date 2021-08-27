import React from "react";

import { useSessionContext } from './_utils/session-context'
import { Sidebar } from './_components/Sidebar'
import { LoginPage } from './_components/LoginPage'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  return (
    <Sidebar />
  )
}

export { Page };
