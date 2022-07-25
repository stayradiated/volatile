import { useState, useRef } from 'react'

import { Form, Input, PrimaryButton } from '../retro-ui'

type Props = {
  confirmPhrase: string,
}

const UserFormDelete = (props: Props) => {
  const { confirmPhrase } = props

  const [canDelete, setCanDelete] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = () => {
    setCanDelete(inputRef.current?.value === confirmPhrase)
  }

  return (
    <div>
      <h3>⚠️ Delete Account ⚠️</h3>

      <Form name="UserFormDelete" method="post" action="/account/delete">
      <Form.Item>
       <p>Type "{confirmPhrase}" to delete your account.</p>
      </Form.Item>
        <Form.Item name="confirm">
          <Input ref={inputRef} onChange={handleInputChange} />
        </Form.Item>
        <Form.Item>
          <PrimaryButton disabled={!canDelete}>Delete Account</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormDelete }
