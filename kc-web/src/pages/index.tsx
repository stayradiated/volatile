import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { Layout, Row, Col } from 'antd'

import { getSession, Session, GUEST_SESSION } from '../utils/session-store'

import { ExchangeList } from '../components/exchange-list/index'
import { MarketList } from '../components/market-list/index'
import { LogoutButton } from '../components/logout-button/index'

import App from './_app'

const Index = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  console.log(session)

  return (
    <App>
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
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)
