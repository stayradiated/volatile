import test from 'ava'

import { createKeyring, Keyring, EncryptResult } from './keyring.js'

type ScenarioFn = (algorithm: string, scenario: Scenario) => void

type Scenario = {
  action: ScenarioFn
  input: string
  key: {
    id: number
    value: string
  }
  encrypted: {
    value: string
    keyring_id: number
  }
  rotate?: {
    key: {
      id: number
      value: string
    }
    encrypted: {
      value: string
      keyring_id: number
    }
  }
  update?: {
    input: string
    encrypted: {
      value: string
      keyring_id: number
    }
  }
}

const scenario = {
  encrypt(algorithm: string, scenario: Scenario) {
    test(`${algorithm}: encrypts value`, (t) => {
      const keys: Record<number, string> = {}
      keys[scenario.key.id] = scenario.key.value
      const keyring = createKeyring(keys, { algorithm }) as Keyring

      const [encrypted, keyringId] = keyring.encrypt(
        scenario.input,
      ) as EncryptResult
      t.is(keyringId, scenario.encrypted.keyring_id)

      const decrypted = keyring.decrypt(encrypted, keyringId)
      t.is(decrypted, scenario.input)
    })

    test(`${algorithm}: decrypts value`, (t) => {
      const keys: Record<number, string> = {}
      keys[scenario.key.id] = scenario.key.value
      const keyring = createKeyring(keys, { algorithm }) as Keyring
      const decrypted = keyring.decrypt(
        scenario.encrypted.value,
        scenario.encrypted.keyring_id,
      )

      t.is(decrypted, scenario.input)
    })
  },

  update(algorithm: string, scenario: Scenario) {
    test(`${algorithm}: updates attribute`, (t) => {
      if (!scenario.update) {
        t.fail('scenario must have .update attribute')
        return
      }

      const keys: Record<number, string> = {}
      keys[scenario.key.id] = scenario.key.value
      const keyring = createKeyring(keys, { algorithm }) as Keyring

      {
        const [encrypted, keyringId] = keyring.encrypt(
          scenario.input,
        ) as EncryptResult
        t.is(keyringId, scenario.encrypted.keyring_id)
        t.is(keyring.decrypt(encrypted, keyringId), scenario.input)
      }

      {
        const [encrypted, keyringId] = keyring.encrypt(
          scenario.update.input,
        ) as EncryptResult
        t.is(keyringId, scenario.update.encrypted.keyring_id)
        t.is(keyring.decrypt(encrypted, keyringId), scenario.update.input)
      }
    })
  },

  rotate(algorithm: string, scenario: Scenario) {
    test(`${algorithm}: rotates key`, (t) => {
      if (!scenario.rotate) {
        t.fail('scenario must have .rotate attribute')
        return
      }

      const keys: Record<number, string> = {}
      keys[scenario.key.id] = scenario.key.value

      {
        const keyring = createKeyring(keys, { algorithm }) as Keyring
        const [encrypted, keyringId] = keyring.encrypt(
          scenario.input,
        ) as EncryptResult
        t.is(keyringId, scenario.encrypted.keyring_id)
        t.is(keyring.decrypt(encrypted, keyringId), scenario.input)
      }

      keys[scenario.rotate.key.id] = scenario.rotate.key.value

      {
        const keyring = createKeyring(keys, { algorithm }) as Keyring
        const [encrypted, keyringId] = keyring.encrypt(
          scenario.input,
        ) as EncryptResult
        t.is(keyringId, scenario.rotate.encrypted.keyring_id)
        t.is(keyring.decrypt(encrypted, keyringId), scenario.input)
      }
    })
  },
}

const data: Record<string, Scenario[]> = {
  'AES-128-CBC': [
    {
      action: scenario.encrypt,
      input: '42',
      key: {
        id: 1,
        value: '7K0xBRrumkPm03UKS3g4MFm2gGCrFCa3eXnBWigOdlM=',
      },
      encrypted: {
        value:
          'UUXMN2NmF8703gNMawcecwgdfQRPUpXBWyGnlklwmGCU/oMKKQa9C41CyXiF6jT806GmZrM+Zql5QSYBy5H18A==',
        keyring_id: 1,
      },
    },

    {
      action: scenario.rotate,
      input: '42',
      key: {
        id: 1,
        value: '7K0xBRrumkPm03UKS3g4MFm2gGCrFCa3eXnBWigOdlM=',
      },
      encrypted: {
        value:
          'UUXMN2NmF8703gNMawcecwgdfQRPUpXBWyGnlklwmGCU/oMKKQa9C41CyXiF6jT806GmZrM+Zql5QSYBy5H18A==',
        keyring_id: 1,
      },
      rotate: {
        key: {
          id: 2,
          value: 'FAN9+xqbI/FrA6u94eEjOGl9xudnhYdV2RCvG8QLcSA=',
        },
        encrypted: {
          value:
            'ufY+Gm5a72YEzN+oDZ3AcATxUN326Em4HDsY3l3LOyXNqqUsaJPwonVo1GFQdsqN1mxz7bDOfM+q462BefA8IA==',
          keyring_id: 2,
        },
      },
    },

    {
      action: scenario.update,
      input: '42',
      key: {
        id: 1,
        value: '7K0xBRrumkPm03UKS3g4MFm2gGCrFCa3eXnBWigOdlM=',
      },
      encrypted: {
        value:
          'VbPgevlw8L1Ph4FJZ0sbOnIPdOMVE6Eyk6DgnWH55sizEJAe+G0L/l9ZfrcHEkCaFagugXD49jEUZ/bgIiUfww==',
        keyring_id: 1,
      },
      update: {
        input: '37',
        encrypted: {
          value:
            '+hEdBv0zb8E6mD18K9VROeVB2TVGFXyVCrQX5tP9VinnnzlHTRmskSJTZsw73PJ5BHXQwtrIdm1Gd5IrhT5q7A==',
          keyring_id: 1,
        },
      },
    },
  ],

  'AES-192-CBC': [
    {
      action: scenario.encrypt,
      input: '42',
      key: {
        id: 1,
        value:
          'GTZL7ZjUG/PQ8kzF/8BardfieeYaWOVaiXvOagLA2LLvWqlkuK7H03eJ1OTFhfX6',
      },
      encrypted: {
        value:
          'AqX3KKkD3dXOAFcyFHX5FQkFIZnwiuX/Cf3WbOH4t86vyxvxJ2pEGCuy6QKZtyESifPV8NxljEfWkUVT4c+94g==',
        keyring_id: 1,
      },
    },

    {
      action: scenario.rotate,
      input: '42',
      key: {
        id: 1,
        value:
          'GTZL7ZjUG/PQ8kzF/8BardfieeYaWOVaiXvOagLA2LLvWqlkuK7H03eJ1OTFhfX6',
      },
      encrypted: {
        value:
          'ZrNoemf/NJqR+fI8KC/rqklkxqz+wAheFFJ3cf5JW+QgOsiNyU3zMf/Y2hVE/RT3t7WoI4QjbsvG5iaCmH2ZXQ==',
        keyring_id: 1,
      },
      rotate: {
        key: {
          id: 2,
          value:
            'nrHV/MOZ94GZLFm7o9ccM9tWikgfTjm/C3eqG0IJRzW6xrFXF5MMQ2+ZCjV4hV7M',
        },
        encrypted: {
          value:
            'YHvUGy1mariIsrmfAwJQ/6/HLEWIJs/pxyFxrWT80acx55lstugKckJhr94W4dwQC0cFLU5aKsNopw92GVExeQ==',
          keyring_id: 2,
        },
      },
    },

    {
      action: scenario.update,
      input: '42',
      key: {
        id: 1,
        value:
          'GTZL7ZjUG/PQ8kzF/8BardfieeYaWOVaiXvOagLA2LLvWqlkuK7H03eJ1OTFhfX6',
      },
      encrypted: {
        value:
          'DvtVE4EA6xm1xnZzdxtBkuOyOqBoY6V+lpRsIApR55Rb08zlcsiG8sAW63clh0SXE9RIDQtm5DyZxXH+GdWXZQ==',
        keyring_id: 1,
      },
      update: {
        input: '37',
        encrypted: {
          value:
            'kpyqxIMcyEhvsqFancsk75Nc8dKCpE5+hJI5Vudb6iIQbiXa+t16JDC46tTjofIJCLWch6zqd214JVUvEsCAJg==',
          keyring_id: 1,
        },
      },
    },
  ],

  'AES-256-CBC': [
    {
      action: scenario.encrypt,
      input: '42',
      key: {
        id: 1,
        value:
          'QTCR5qqiKPouS10H9W7Vhv+nfgM5OHSW20XRga7NrOpEZb32mTNU/4u1753m0eEmQQR+a4xL6/kv6c5DitcUnA==',
      },
      encrypted: {
        value:
          'ozcXFOTy2NFLtnfEjXsvcOSJ+1+bXHM/ZOI8aK4tBL0mjnme5FoHn1pKInCaoDRyKvs6uZ3j7aq8fbSsV62v1w==',
        keyring_id: 1,
      },
    },

    {
      action: scenario.rotate,
      input: '42',
      key: {
        id: 1,
        value:
          'QTCR5qqiKPouS10H9W7Vhv+nfgM5OHSW20XRga7NrOpEZb32mTNU/4u1753m0eEmQQR+a4xL6/kv6c5DitcUnA==',
      },
      encrypted: {
        value:
          'I6vOxIT4ge3RpJgoV7RJHJNQe7C/tJjy89oeux9qPskWuBADNv5WZYIqvQao48DBceHHuqYrbvzS76AvGMYlFg==',
        keyring_id: 1,
      },
      rotate: {
        key: {
          id: 2,
          value:
            'Av3qcW5Q8RSfkNk+KKuzHUOEIsihzV/vBc+L/lxq/Yt94tBIJstVqOx5zy2izG7KEJLx3lRyu/xJkT448HPcZQ==',
        },
        encrypted: {
          value:
            'abpAvw3lUGfIkgWxmpDAiMZbb5+XY82ogZ92fqxzYuqK8uuU/AnglAPUsaKHQZcb7em9wha6rjEdsdfTp1Z7mQ==',
          keyring_id: 2,
        },
      },
    },

    {
      action: scenario.update,
      input: '42',
      key: {
        id: 1,
        value:
          'QTCR5qqiKPouS10H9W7Vhv+nfgM5OHSW20XRga7NrOpEZb32mTNU/4u1753m0eEmQQR+a4xL6/kv6c5DitcUnA==',
      },
      encrypted: {
        value:
          '4nYamqZUz0xgOhktSo69FSa9FgWvOMM4ZbJdRlHOc9qytQKH1Y9Isyokwb/sZG/rq2lI+o91H/VbCWcxYxUV9Q==',
        keyring_id: 1,
      },
      update: {
        input: '37',
        encrypted: {
          value:
            'pXdO44I6X1wXAFiWxHMDpgIHRIMMENhqvAYyfeod2vEDx72UzVEmBmPr31IVgHrjw/3XANmexclhrfd+UrdQCQ==',
          keyring_id: 1,
        },
      },
    },
  ],
}

for (const [algorithm, scenarios] of Object.entries(data)) {
  for (const scenario of scenarios) {
    scenario.action(algorithm, scenario)
  }
}
