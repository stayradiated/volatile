import type { ReactNode } from 'react'
import { NavBar } from '~/components/ui'

type PageProps = {
  title: string
  children: ReactNode
}

const Page = (props: PageProps) => {
  const { title, children } = props

  return (
    <>
      <h1>{title}</h1>
      {children}
      <NavBar />
    </>
  )
}

export { Page }
