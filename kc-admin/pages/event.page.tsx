import React from "react";

import { usePageContext } from "./_default/usePageContext";
import { EventPage } from './_components/EventPage'

const Page = () => {
  const pageContext = usePageContext()
  const { routeParams } = pageContext
  const triggerName = decodeURI(routeParams.triggerName)

  return (
    <EventPage triggerName={triggerName} />
  )
}

export { Page };
