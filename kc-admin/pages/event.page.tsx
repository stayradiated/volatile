import React from "react";

import { useSessionContext } from './_utils/session-context'
import { usePageContext } from "./_default/usePageContext";
import { EventPage } from './_components/EventPage'

const Page = () => {
  const session = useSessionContext()
  console.log(session)

  const pageContext = usePageContext()
  const { routeParams } = pageContext
  const triggerName = decodeURI(routeParams.triggerName)

  return (
    <EventPage triggerName={triggerName} />
  )
}

export { Page };
