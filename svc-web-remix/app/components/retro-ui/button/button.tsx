import React from 'react'
import styled from 'styled-components'

type BaseProps = {
  className?: string
  type?: 'submit' | 'button'
  loading?: boolean
  children?: React.ReactNode
  tabIndex?: number
  disabled?: boolean
}

type AnchorProps = BaseProps & {
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

type ButtonProps = BaseProps & {
  href?: never
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Props = AnchorProps | ButtonProps

const RegularButton = styled.button`
  appearance: none;
  cursor: pointer;
  display: inline-block;

  &:focus {
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  &:disabled {
    cursor: default;
    color: var(--button-disabled-color);
    background: var(--button-disabled-background);
    border: 1px solid var(--button-disabled-border);
    box-shadow: -2px 2px 0 0 var(--button-disabled-border);
  }
`

const Button = (props: Props) => {
  const {
    className,
    href,
    type,
    loading,
    children,
    tabIndex,
    onClick,
    disabled,
  } = props

  const component = typeof href === 'string' ? 'a' : 'button'

  return (
    <RegularButton
      as={component}
      className={className}
      type={type}
      disabled={disabled || loading}
      tabIndex={tabIndex}
      href={href}
      onClick={onClick}
    >
      {loading ? '...' : children}
    </RegularButton>
  )
}

const PrimaryButton = styled(Button)`
  position: relative;

  line-height: 30px;
  height: 30px;
  padding: 0 10px;

  border-radius: 2px;

  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--black-900);

  background: var(--gray-300);
  border: 1px solid var(--black-900);

  /* Button Framing */
  box-shadow: inset -1px -1px 0px #000000, inset 1px 1px 0px #ffffff,
    inset -2px -2px 0px #808080, inset 2px 2px 0px #dbdbdb;
`

const LinkButton = styled(Button)`
  background: none;
  border: none;
  text-decoration: underline;
`

export { Button, PrimaryButton, LinkButton }
