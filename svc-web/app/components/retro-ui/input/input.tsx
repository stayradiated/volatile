import styled from 'styled-components'

const Input = styled.input`
  appearance: none;
  height: 40px;
  width: 100%;
  border: 1px solid var(--input-border);
  padding: 0 10px;

  /* Primary / White (100) */
  background: #ffffff;

  /* Primary / Black (900) */
  border: 1px solid #262626;
  box-sizing: border-box;
  box-shadow: 0px -1px 0px #808080, -1px 0px 0px #808080, 0px 1px 0px #ffffff,
    1px 0px 0px #ffffff;

  &:focus {
    outline: none;

    box-shadow: 0px 2px 0px #6666cc, 2px 0px 0px #6666cc, 0px -2px 0px #6666cc,
      -2px 0px 0px #6666cc, 0px 0px 0px 1px #6666cc;
  }

  &:disabled {
    border-color: var(--input-disabled);
    color: var(--input-disabled);
  }
`

export { Input }
