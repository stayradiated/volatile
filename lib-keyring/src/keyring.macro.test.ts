import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { createKeyring } from './keyring.js'
import type { UserKeys, EncryptResult } from './keyring.js'

type MacroOptions = {
  algorithm: string
  keys: UserKeys
  values: Array<{
    input: string
    outputs: EncryptResult[]
  }>
}

const macro = test.macro<[MacroOptions]>({
  exec(t, options: MacroOptions) {
    const { algorithm, keys, values } = options
    const keyring = createKeyring(keys, { algorithm })
    assertOk(keyring)

    for (const pair of values) {
      const { input, outputs } = pair
      const encryptedResult: EncryptResult | Error = keyring.encrypt(input)
      assertOk(encryptedResult)
      t.is(encryptedResult.keyringId, 2)

      const decrypted = keyring.decrypt(encryptedResult.encrypted, 2)
      t.is(decrypted, input)

      for (const output of outputs) {
        const result = keyring.decrypt(output.encrypted, output.keyringId)
        assertOk(result)
        t.deepEqual(result, input)
      }
    }
  },
  title(providedTitle, options: MacroOptions) {
    const { algorithm } = options
    return `${providedTitle ?? ''}decrypts input with ${algorithm}`
  },
})

test(macro, {
  algorithm: 'AES-128-CBC',
  keys: {
    /* eslint-disable @typescript-eslint/naming-convention */
    1: '7K0xBRrumkPm03UKS3g4MFm2gGCrFCa3eXnBWigOdlM=',
    2: 'FAN9+xqbI/FrA6u94eEjOGl9xudnhYdV2RCvG8QLcSA=',
    /* eslint-enable @typescript-eslint/naming-convention */
  },
  values: [
    {
      input: '42',
      outputs: [
        {
          encrypted:
            'UUXMN2NmF8703gNMawcecwgdfQRPUpXBWyGnlklwmGCU/oMKKQa9C41CyXiF6jT806GmZrM+Zql5QSYBy5H18A==',
          keyringId: 1,
        },
        {
          encrypted:
            'ufY+Gm5a72YEzN+oDZ3AcATxUN326Em4HDsY3l3LOyXNqqUsaJPwonVo1GFQdsqN1mxz7bDOfM+q462BefA8IA==',
          keyringId: 2,
        },
      ],
    },
    {
      input: '37',
      outputs: [
        {
          encrypted:
            '+hEdBv0zb8E6mD18K9VROeVB2TVGFXyVCrQX5tP9VinnnzlHTRmskSJTZsw73PJ5BHXQwtrIdm1Gd5IrhT5q7A==',
          keyringId: 1,
        },
      ],
    },
  ],
})

test(macro, {
  algorithm: 'AES-192-CBC',
  keys: {
    /* eslint-disable @typescript-eslint/naming-convention */
    1: 'GTZL7ZjUG/PQ8kzF/8BardfieeYaWOVaiXvOagLA2LLvWqlkuK7H03eJ1OTFhfX6',
    2: 'nrHV/MOZ94GZLFm7o9ccM9tWikgfTjm/C3eqG0IJRzW6xrFXF5MMQ2+ZCjV4hV7M',
    /* eslint-enable @typescript-eslint/naming-convention */
  },
  values: [
    {
      input: '42',
      outputs: [
        {
          encrypted:
            'ZrNoemf/NJqR+fI8KC/rqklkxqz+wAheFFJ3cf5JW+QgOsiNyU3zMf/Y2hVE/RT3t7WoI4QjbsvG5iaCmH2ZXQ==',
          keyringId: 1,
        },
        {
          encrypted:
            'YHvUGy1mariIsrmfAwJQ/6/HLEWIJs/pxyFxrWT80acx55lstugKckJhr94W4dwQC0cFLU5aKsNopw92GVExeQ==',
          keyringId: 2,
        },
      ],
    },
    {
      input: '37',
      outputs: [
        {
          encrypted:
            'kpyqxIMcyEhvsqFancsk75Nc8dKCpE5+hJI5Vudb6iIQbiXa+t16JDC46tTjofIJCLWch6zqd214JVUvEsCAJg==',
          keyringId: 1,
        },
      ],
    },
  ],
})

test(macro, {
  algorithm: 'AES-256-CBC',
  keys: {
    /* eslint-disable @typescript-eslint/naming-convention */
    1: 'QTCR5qqiKPouS10H9W7Vhv+nfgM5OHSW20XRga7NrOpEZb32mTNU/4u1753m0eEmQQR+a4xL6/kv6c5DitcUnA==',
    2: 'Av3qcW5Q8RSfkNk+KKuzHUOEIsihzV/vBc+L/lxq/Yt94tBIJstVqOx5zy2izG7KEJLx3lRyu/xJkT448HPcZQ==',
    /* eslint-enable @typescript-eslint/naming-convention */
  },
  values: [
    {
      input: '42',
      outputs: [
        {
          encrypted:
            'I6vOxIT4ge3RpJgoV7RJHJNQe7C/tJjy89oeux9qPskWuBADNv5WZYIqvQao48DBceHHuqYrbvzS76AvGMYlFg==',
          keyringId: 1,
        },
        {
          encrypted:
            'abpAvw3lUGfIkgWxmpDAiMZbb5+XY82ogZ92fqxzYuqK8uuU/AnglAPUsaKHQZcb7em9wha6rjEdsdfTp1Z7mQ==',
          keyringId: 2,
        },
      ],
    },
    {
      input: '37',
      outputs: [
        {
          encrypted:
            'pXdO44I6X1wXAFiWxHMDpgIHRIMMENhqvAYyfeod2vEDx72UzVEmBmPr31IVgHrjw/3XANmexclhrfd+UrdQCQ==',
          keyringId: 1,
        },
      ],
    },
  ],
})
