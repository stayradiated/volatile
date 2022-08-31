import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'
import styled from 'styled-components'

type Props = LinkProps

const Container = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Button = styled(Link)`
  appearance: none;
  text-align: left;
  background: var(--button-backgroud);
  border: none;
  display: block;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`

const DropdownItem = (props: Props) => (
  <Container>
    <Button {...props} />
  </Container>
)

export { DropdownItem }
