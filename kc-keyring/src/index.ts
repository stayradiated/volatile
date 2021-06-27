import * as openpgp from 'openpgp'

type GenerateKeyPairOptions = {
  userId: openpgp.UserID
  passphrase: string
}

type KeyPair = {
  privateKey: string
  publicKey: string
}

const generateKeyPair = async (
  options: GenerateKeyPairOptions,
): Promise<KeyPair> => {
  const { userId, passphrase } = options

  const keypair = await openpgp.generateKey({
    type: 'ecc',
    curve: 'curve25519',
    userIDs: [userId],
    passphrase,
    keyExpirationTime: 0, // Never expires
  })

  return {
    privateKey: keypair.privateKeyArmored,
    publicKey: keypair.publicKeyArmored,
  }
}

type EncryptOptions = {
  publicKey: string
  message: string
}

const encrypt = async (options: EncryptOptions): Promise<string> => {
  const { publicKey: publicKeyArmored, message: messageText } = options

  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored })
  const message = await openpgp.createMessage({ text: messageText })

  const encrypted = await openpgp.encrypt({
    message,
    encryptionKeys: publicKey,
    armor: true,
  })

  return encrypted
}

type DecryptOptions = {
  passphrase: string
  privateKey: string
  encryptedMessage: string
}

const decrypt = async (options: DecryptOptions): Promise<string> => {
  const {
    passphrase,
    privateKey: privateKeyArmored,
    encryptedMessage,
  } = options

  const privateKey = await openpgp.decryptKey({
    passphrase,
    privateKey: await openpgp.readPrivateKey({
      armoredKey: privateKeyArmored,
    }),
  })

  const decrypted = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: encryptedMessage }),
    decryptionKeys: privateKey,
  })

  return decrypted.data
}

export { generateKeyPair, encrypt, decrypt }
