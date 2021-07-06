# @stayradiated/kc-keyring

> Simple encryption-at-rest with key rotation support for Node.js.

## Origins

This is a fork of https://github.com/fnando/keyring-node

What's different?

- Code migrated to typescript
- Removed sequelize plugin
- Doesn't automatically generate SHA1 hash of input (`digest`)
- Adds `createKeyringFromFilepath` to read a config from a file

## What is this used for?

N.B.: **keyring** is _not_ for encrypting passwords--for that, you should use
something like [bcrypt](https://www.npmjs.com/package/bcrypt). It's meant for
encrypting sensitive data you will need to access in plain text (e.g. storing
OAuth token from users). Passwords do not fall in that category.

This package is completely independent from any storage mechanisms; the goal is
providing a few functions that could be easily integrated with any ORM. With
that said, this package bundles a small plugin that works with
[Sequelize](https://sequelizejs.com).

## Installation

```console
npm install --save @stayradiated/kc-keyring
```

## Usage

### Encryption

By default, AES-128-CBC is the algorithm used for encryption. This algorithm
uses 16 bytes keys, but **you're required to use a key that's double the size**
because half of that keys will be used to generate the HMAC. The first 16 bytes
will be used as the encryption key, and the last 16 bytes will be used to
generate the HMAC.

Using random data base64-encoded is the recommended way. You can easily generate
keys by using the following command:

```console
$ dd if=/dev/urandom bs=32 count=1 2>/dev/null | openssl base64 -A
qUjOJFgZsZbTICsN0TMkKqUvSgObYxnkHDsazTqE5tM=
```

Include the result of this command in the `value` section of the key description
in the keyring. Half this key is used for encryption, and half for the HMAC.

#### Key size

The key size depends on the algorithm being used. The key size should be double
the size as half of it is used for HMAC computation.

- `AES-128-CBC`: 16 bytes (encryption) + 16 bytes (HMAC).
- `AES-192-CBC`: 24 bytes (encryption) + 24 bytes (HMAC).
- `AES-256-CBC`: 32 bytes (encryption) + 32 bytes (HMAC).

#### About the encrypted message

Initialization vectors (IV) should be unpredictable and unique; ideally, they
will be cryptographically random. They do not have to be secret: IVs are
typically just added to ciphertext messages unencrypted. It may sound
contradictory that something has to be unpredictable and unique, but does not
have to be secret; it is important to remember that an attacker must not be able
to predict ahead of time what a given IV will be.

With that in mind, _keyring_ uses
`base64(hmac(unencrypted iv + encrypted message) + unencrypted iv + encrypted message)`
as the final message. If you're planning to migrate from other encryption
mechanisms or read encrypted values from the database without using _keyring_,
make sure you account for this. The HMAC is 32-bytes long and the IV is 16-bytes
long.

### Keyring

Keys are managed through a keyring--a short JSON document describing your
encryption keys. The keyring must be a JSON object mapping numeric ids of the
keys to the key values. A keyring must have at least one key. For example:

```json
{
  "1": "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=",
  "2": "VN8UXRVMNbIh9FWEFVde0q7GUA1SGOie1+FgAKlNYHc="
}
```

The `id` is used to track which key encrypted which piece of data; a key with a
larger id is assumed to be newer. The value is the actual bytes of the
encryption key.

### Key Rotation

With **keyring** you can have multiple encryption keys at once and key rotation
is fairly straightforward: if you add a key to the _keyring_ with a higher id
than any other key, that key will automatically be used for encryption when
objects are either created or updated. Any keys that are no longer in use can be
safely removed from the _keyring_.

It's extremely important that you save the keyring id returned by `encrypt()`;
otherwise, you may not be able to decrypt values (you can always decrypt values
if you still possess _all_ encryption keys).

If you're using **keyring** to encrypt database columns, it's recommended to use
a separated _keyring_ for each table you're planning to encrypt: this allows an
easier key rotation in case you need (e.g. key leaking).

N.B.: Keys are hardcoded on these examples, but you shouldn't do it on your code
base. You can retrieve _keyring_ from environment variables if you're deploying
to [Heroku](https://heroku.com) and alike, or deploy a JSON file with your
configuration management software (e.g. Ansible, Puppet, Chef, etc).

### Basic usage of keyring

```js
import { keyring } from "@stayradiated/kc-keyring";

const keys = { 1: "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=" };
const encryptor = keyring(keys);

// STEP 1: Encrypt message using latest encryption key.
const [encrypted, keyringId] = encryptor.encrypt("super secret");

console.log(`🔒 ${encrypted}`);
console.log(`🔑 ${keyringId}`);
//=> 🔒 Vco48O95YC4jqj44MheY8zFO2NLMPp/KILiUGbKxHvAwLd2/AN+zUG650CJzogttqnF1cGMFb//Idg4+bXoRMQ==
//=> 🔑 1

// STEP 2: Decrypted message using encryption key defined by keyring id.
const decrypted = encryptor.decrypt(encrypted, keyringId);
console.log(`✉️ ${decrypted}`);
//=> ✉️ super secret
```

#### Change encryption algorithm

You can choose between `AES-128-CBC`, `AES-192-CBC` and `AES-256-CBC`. By
default, `AES-128-CBC` will be used.

To specify the encryption algorithm, set the `encryption` option. The following
example uses `AES-256-CBC`.

```js
const { createKeyring } = await import("@stayradiated/kc-keyring")

const keys = {
  1: '+40gUTEyHWy9yh+BKchy3QbMRslMhLJYmF3s1YfY7Kt1qe//e0wVrDoz0q5+n5Adl89NHy5Eb4wnxJt6jb4Vlw=='
}
const keyring = createKeyring(keys, { encryption: 'AES-256-CBC' })
```

## Development

This library uses `pnpm` to manage dependencies. See https://pnpm.io/ for more
details.

1. Check out this repo with `git clone https://github.com/stayradiated/kc`
2. Run `pnpm install` to install dependencies
3. Compile typescript into javascript with `pnpm run build`
4. Run unit tests with `pnpm run test`

## License

The library is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT).
