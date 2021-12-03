import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { getSession, Session, GUEST_SESSION } from '../src/utils/session-store'

import { ExchangeList } from '../src/components/exchange-list'
import { MarketList } from '../src/components/market-list'
import { LogoutButton } from '../src/components/logout-button'

import App from '../src/app'

const Index = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={12} offset={6}>
            {session.role === 'guest' && (
              <ul>
                <li>
                  <a href="/login/">Login</a>
                </li>
                <li>
                  <a href="/register/">Sign Up</a>
                </li>
              </ul>
            )}
            {session.role === 'user' && (
              <div>
                <p>Logged in as {session.email}</p>
                <ul>
                  <li>
                    <a href="/dca-orders/">DCA Orders</a>
                  </li>
                  <li>
                    <a href="/trades/">Trades</a>
                  </li>
                  <li>
                    <a href="/open-orders/">Open Orders</a>
                  </li>
                  <li>
                    <a href="/settings/">Settings</a>
                  </li>
                </ul>
                <LogoutButton />
              </div>
            )}
            <ExchangeList />
            <MarketList />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

ReactDOM.render(
  <App>
    <Index />
  </App>,
  document.querySelector('#root'),
)
