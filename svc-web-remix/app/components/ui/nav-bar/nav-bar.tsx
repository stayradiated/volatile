import { Link } from '@remix-run/react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 50px;
  line-height: 50px;
  background: var(--gray-200);
`

const Item = styled.li`
  display: block;
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`

const NavBar = () => {
  return (
    <List>
      <Item>
        <Link to="/dca-orders">D</Link>
      </Item>
      <Item>
        <Link to="/trades">T</Link>
      </Item>
      <Item>
        <Link to="/exchanges">E</Link>
      </Item>
      <Item>
        <Link to="/market-price">M</Link>
      </Item>
      <Item>
        <Link to="/settings">S</Link>
      </Item>
    </List>
  )
}

export { NavBar }
