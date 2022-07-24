import { useState, useRef } from 'react'

import { Form, Input, Button } from '../retro-ui'

const confirmPhrase = 'DELETE ACCOUNT'

const UserFormDelete = () => {
  const [canDelete, setCanDelete] = useState(false)
  console.log({ canDelete })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = () => {
    setCanDelete(inputRef.current?.value === 'DELETE ACCOUNT')
  }

  return (
    <div>
      <h3>⚠️ Delete Account ⚠️</h3>

      <Form name="UserFormDelete" method="post" action="/account/delete">
        <Form.Item name="confirm" label={`TYPE "${confirmPhrase}"`}>
          <Input ref={inputRef} onChange={handleInputChange} />
        </Form.Item>
        <Form.Item>
          <Button disabled={!canDelete}>Delete Account</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormDelete }
