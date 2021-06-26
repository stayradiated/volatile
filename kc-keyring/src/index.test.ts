import test from 'ava'

import { createKeyringFromFilepath } from './index.js'

test('createKeyringFromFilepath', async (t) => {
  const { pathname } = new URL('../assets/test/example.json', import.meta.url)

  // Keyring contains 2 keys
  const keyring = await createKeyringFromFilepath(pathname)
  t.is(keyring.currentId(), 1)

  // Quote from neuromancer
  const message =
    'And in the bloodlit dark behind his eyes, silver phosphenes boiled in from the edge of space, hypnagogic images jerking past like a film compiled of random frames. Symbols, figures, faces, a blurred, fragmented mandala of visual information.'

  // Message encrypted with key 0
  const encryptedMessage =
    'GGxfN+DYlpDu8+QFb4oxn0B2wTtKBGQ3fY+8/JK2jG/F0YuJn38/Ron+bM7lL4ihuoKJnWYzBDbci7WiDzTjxf0T9H0vwqKxhvN1Re5Lx9Flkuej8IU+BDESfLNEwMe5ihkNkBdg0beyPpogFk6dnojqB0Ynfe4aN6Xgsu4h7V7mi7RGVJhLqddlZY/NjgNur6FPZ93GYm+T7ALWBfPzmUci41fpLXD26ECvRWBmFWcSyjoiIvcsMd7b7nGlijQDQInN4Q4RoXdQhlVa5SeKCxP3luaIsjjQ2X3wSxT+6XxoGCMBa9e60v8NEtOKvCnJOTIjKFsxFkX9y3Vgw7Y5MmXqdJdhiclI97vq8uqWZzCZASwBg7gAYK5iuVaG3OkU7HPe8+KxzsTGm0wsqCeLpA=='

  const output = keyring.decrypt(encryptedMessage, 0)
  t.is(output, message)

  // Let's encrypt this message again, but use a different key ID
  const [altEncryptedMessage, keyId] = keyring.encrypt(message)
  t.is(altEncryptedMessage.length, 408)
  t.is(keyId, 1)

  const altMessage = keyring.decrypt(altEncryptedMessage, keyId)
  t.is(altMessage, message)
})
