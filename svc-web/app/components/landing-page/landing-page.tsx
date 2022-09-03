import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Logo } from '~/components/logo'

const Page = styled.main`
  padding: 20px;
`

const LandingPage = () => {
  return (
    <Page>
      <Logo />

      <Link to="/login">Log In</Link>

      <h2>Dollar Cost Averaging</h2>
      <p>A hands free system for efficiently investing your NZD into crypto.</p>

      <Link to="/register">Get Started Now</Link>

      <h3>Supported Exchanges</h3>

      <ul>
        <li>Dasset</li>
        <li>Kiwi-Coin</li>
        <li>Independent Reserve</li>
      </ul>

      <h3>Features</h3>

      <ul>
        <li>
          <strong>DCA by the Minute</strong> The price of cryptocurrencies are
          constantly changing. Volatile updates your order every minute to track
          the current price.
        </li>
        <li>
          <strong>Full Control</strong> DCA doesn't mean you have to bid at the
          market rate. You can control the offset of the market price that you
          want to bid at.
        </li>
      </ul>
      <h3>Values</h3>

      <ul>
        <li>
          <strong>Safe.</strong> Your assets are held by your exchange and
          cannot be withdrawn by us, we just make the trades.
        </li>
        <li>
          <strong>Secure.</strong> Your API keys are encrypted with the military
          grade AES-128 encryption algorithm.
        </li>
        <li>
          <strong>Private.</strong> No unnecessary personal information is
          collected.
        </li>
        <li>
          <strong>Fast.</strong> Designed to be lightweight and high
          performance.
        </li>
      </ul>
    </Page>
  )
}

export { LandingPage }
