import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Layout, Row, Col } from 'antd'

import { getSession, Session, GUEST_SESSION } from '../utils/session-store'

import { ExchangeList } from '../components/exchange-list/index'
import { MarketList } from '../components/market-list/index'
import { UserExchangeKeysList } from '../components/user-exchange-keys-list/index'
import { UserExchangeKeysForm } from '../components/user-exchange-keys-form/index'
import { DCAOrderList } from '../components/dca-order-list/index'
import { DCAOrderForm } from '../components/dca-order-form/index'
import { LogoutButton } from '../components/logout-button/index'

const Index = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  console.log(session)

  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={12} offset={6}>
            <ExchangeList />
            <MarketList />
            {session.role === 'guest' && (
              <ul>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Sign Up</Link>
                </li>
              </ul>
            )}
            {session.role === 'user' && (
              <div>
                <p>Logged in as {session.email}</p>
                <UserExchangeKeysList />
                <UserExchangeKeysForm />
                <DCAOrderList />
                <DCAOrderForm />
                <LogoutButton />
              </div>
            )}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Index
