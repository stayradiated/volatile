import styled from 'styled-components'
import { Link } from '@remix-run/react'

const Container = styled(Link)`
  display: block;
  color: #000;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 60px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 20px;
  background: #ececec;

  &:hover {
    text-decoration: underline;
  }
`

const Logo = () => <Container to="/">🪙 Volatile</Container>

export { Logo }
