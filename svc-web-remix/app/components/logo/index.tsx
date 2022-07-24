import styled from 'styled-components'

const Container = styled.a`
  display: block;
  color: #000;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 60px;
  text-transform: uppercase;
  margin-bottom: 20px;
  background: #ececec;

  &:hover {
    background: url('../../assets/bg.png');
    color: #000;
  }
`

const Logo = () => {
  return <Container href="/">🪙 volatile</Container>
}

export { Logo }
