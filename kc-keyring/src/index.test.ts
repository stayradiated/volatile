import test from 'ava'
import * as openpgp from 'openpgp'

import { generateKeyPair, encrypt, decrypt } from './index.js'

const decryptPrivateKey = async (
  passphrase: string,
  privateKey: string,
): Promise<openpgp.PrivateKey> => {
  return openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({
      armoredKey: privateKey,
    }),
    passphrase,
  })
}

test('generateKeyPair: should generate a private/public key pair', async (t) => {
  const passphrase = 'wintermute'

  const keyPair = await generateKeyPair({
    userId: { name: 'Henry Case', email: 'case@gmail.com' },
    passphrase,
  })

  const privateKey = await decryptPrivateKey(passphrase, keyPair.privateKey)
  t.deepEqual(privateKey.getUserIDs(), ['Henry Case <case@gmail.com>'])
  t.deepEqual(privateKey.getAlgorithmInfo(), {
    algorithm: 'eddsa',
    curve: 'ed25519',
  })

  const publicKey = await openpgp.readKey({ armoredKey: keyPair.publicKey })

  const message = 'Hello, World!'

  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKey,
    signingKeys: privateKey,
  })

  const decrypted = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: encrypted }),
    verificationKeys: publicKey,
    decryptionKeys: privateKey,
  })

  t.true(await decrypted.signatures?.[0]?.verified)
  t.is(decrypted.data, message)
})

test('encrypt: should encrypt a message', async (t) => {
  const publicKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYNg8nhYJKwYBBAHaRw8BAQdAcOEc21xUx1ll6TB4j46gfFlDf6XE20Fp
Ce5VPXEWccrNJU5ldXJvbWFuY2VyIDxjb3J0b0BzY3JlYW1pbmdmaXN0LmNv
bT7CjAQQFgoAHQUCYNg8ngQLCQcIAxUICgQWAAIBAhkBAhsDAh4BACEJEBfh
AKFmdBx1FiEE5hbc3pREofUMGYF/F+EAoWZ0HHXCQwEA+JpetxG7be0/mvTe
IQILxajcewT6n82WdhKT+QfpZjEBAOMxlxuXUWDa1YtUar3N+wJ3fnCoaokE
+4V5ixHUIUkLzjgEYNg8nhIKKwYBBAGXVQEFAQEHQIBTrtohvICn0+aW/Jrx
FlBzIzfPXbDY7GTGQbKANyh5AwEIB8J4BBgWCAAJBQJg2DyeAhsMACEJEBfh
AKFmdBx1FiEE5hbc3pREofUMGYF/F+EAoWZ0HHVzWQD+OyAoCXxhKpL8yzRC
adPBP4Zk4nt043gWSWkikenbkykA/RmslV+YZH2Yo1Z3Cfh5fW2xSsQW00fg
b20u6BmsLOEK
=qLli
-----END PGP PUBLIC KEY BLOCK-----`

  const message = 'None of this was real, but cold was cold.'

  const encryptedMessage = await encrypt({
    publicKey,
    message,
  })

  const privateKey = await decryptPrivateKey(
    'armitage',
    `
-----BEGIN PGP PRIVATE KEY BLOCK-----

xYYEYNg8nhYJKwYBBAHaRw8BAQdAcOEc21xUx1ll6TB4j46gfFlDf6XE20Fp
Ce5VPXEWccr+CQMIsG6iviT5uwrgu05qzlU8o6QvRx+9BEUSzR7gZiUKL4+8
E8hNqZvCiqtrevqYWyzYb01gGKnG07mi8nHK5L3FNB0vxil0V3GcoK8f5SrR
EM0lTmV1cm9tYW5jZXIgPGNvcnRvQHNjcmVhbWluZ2Zpc3QuY29tPsKMBBAW
CgAdBQJg2DyeBAsJBwgDFQgKBBYAAgECGQECGwMCHgEAIQkQF+EAoWZ0HHUW
IQTmFtzelESh9QwZgX8X4QChZnQcdcJDAQD4ml63Ebtt7T+a9N4hAgvFqNx7
BPqfzZZ2EpP5B+lmMQEA4zGXG5dRYNrVi1Rqvc37And+cKhqiQT7hXmLEdQh
SQvHiwRg2DyeEgorBgEEAZdVAQUBAQdAgFOu2iG8gKfT5pb8mvEWUHMjN89d
sNjsZMZBsoA3KHkDAQgH/gkDCIE0xYUTIUfb4GflbrLUhno46qTHWg0V4Kcf
yP2jjZbRgLWWex17lXVgH4IU2FcutQj6dWl4tXk99l3vV4uDBTKeGKZlj8Zi
KnNzFZC9xQXCeAQYFggACQUCYNg8ngIbDAAhCRAX4QChZnQcdRYhBOYW3N6U
RKH1DBmBfxfhAKFmdBx1c1kA/jsgKAl8YSqS/Ms0QmnTwT+GZOJ7dON4Fklp
IpHp25MpAP0ZrJVfmGR9mKNWdwn4eX1tsUrEFtNH4G9tLugZrCzhCg==
=UkPC
-----END PGP PRIVATE KEY BLOCK-----`,
  )

  const decrypted = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: encryptedMessage }),
    decryptionKeys: privateKey,
  })

  t.is(decrypted.data, message)
})

test('decrypt: should decrypt a message', async (t) => {
  const encryptedMessage = `
-----BEGIN PGP MESSAGE-----

wV4DUNOCXvD1Z7QSAQdAl/Lmxc+TzgtBEPJI4JJhUNwBfyZvcnYPZNvIQ3FZ
xlMwvoq3K87UiPw2n/Sc4nycGWKbmhGjNeexwP+mHZP/1KrYF2YKpx/EtLW+
Cp2uffpK0qgB1ugDtDaZa6GC4zMTkpCrZ5eO4SjmWB0tQp2c/u3dmXITxzK8
Pk3K6vNe/EJ0efr/lRwvhrwiL2Ip2W0NGvxtWGXZh2YbIXuUQuZ0gJepArW+
XQiLANPfQWtNuFuLj+kPRheRimXezveElt/uEIe5pVYdkeeihAOw53hV9p24
AMj/J4+sV7mXoGVoCpWRsFfiksU8o+Jxwcn9j/Fg3ZaThRXqo0vl3vc=
=MSS2
-----END PGP MESSAGE-----`

  const privateKey = `
-----BEGIN PGP PRIVATE KEY BLOCK-----

xYYEYNhAvRYJKwYBBAHaRw8BAQdAwWlyzmB2dN+JxhVQ54iosBsPznSN4Amh
Ip/Jv17MViT+CQMIIIMx026eDqDgiT0HE9idQ2cx4X4WeWbT6biGUepJsqNL
VM1ZETsovCyFWUXrtizWJEsxcNzPcmaFWMeiSL3RGmTtoUDO2D+OgkbCfaB9
/s0lTmV1cm9tYW5jZXIgPGNvcnRvQHNjcmVhbWluZ2Zpc3QuY29tPsKMBBAW
CgAdBQJg2EC9BAsJBwgDFQgKBBYAAgECGQECGwMCHgEAIQkQo3JzUR7GS3kW
IQQmPfo7KCjojx01hRejcnNRHsZLefX0AQDjW3yZEPkbXV5W0JIKbSa+Fh00
KlSvpLJDLEgqHJgkSAEA//dM5uMwJFHUv+K0LAlZorOSV7H6mLf5ERBGCzCv
SQnHiwRg2EC9EgorBgEEAZdVAQUBAQdAS51hB9YxvWRvSZXC2mw2dz/2eH1n
cnKnpgdwupXEDwYDAQgH/gkDCJr95GhRrU+E4GV88b3yCx448vtsvSMCLWmF
8QNmaUqDbCwydmXRf2rTomZQMNtRfZtRZNUdIvxb4nbLbgsSXytTFlZVLhDq
2oJEE3ZdXuDCeAQYFggACQUCYNhAvQIbDAAhCRCjcnNRHsZLeRYhBCY9+jso
KOiPHTWFF6Nyc1Eexkt5/6ABAK/k7j0qjq4RPbIeKZdcpaLZ7tjzf1M8mA4f
yAR6viCFAP4xL0+BdX64/s9emioxFFcNfkrEVbjrG2XMGkPn9gWyBA==
=kDtE
-----END PGP PRIVATE KEY BLOCK-----`

  const message = await decrypt({
    passphrase: 'armitage',
    privateKey,
    encryptedMessage,
  })
  t.is(
    message,
    'Your business is to learn the names of programs, the long formal names, names the owners seek to conceal. True names...',
  )
})

test('generateKeyPair + decrypt + encrypt: should work together', async (t) => {
  const passphrase = 'wintermute'

  const { privateKey, publicKey } = await generateKeyPair({
    userId: { name: 'Molly', email: 'm@armitage.ai' },
    passphrase,
  })

  const message =
    'HEY ITS OKAY BUT ITS TAKING THE EDGE OFF MY GAME, I PAID THE BILL ALREADY. ITS THE WAY IM WIRED I GUESS, WATCH YOUR ASS OKAY? XXX MOLLY'

  const encryptedMessage = await encrypt({
    publicKey,
    message,
  })

  const decryptedMessage = await decrypt({
    passphrase,
    privateKey,
    encryptedMessage,
  })

  t.is(decryptedMessage, message)
})
