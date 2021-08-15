import userAgentParser from 'ua-parser-js'

import * as store from './store'

// I.e. 0-255 -> '00'-'ff'
const dec2hex = (dec: number): string => dec.toString(16).padStart(2, '0')

const generateDeviceID = (length: number): string => {
  const array = new Uint8Array(length / 2)
  window.crypto.getRandomValues(array)
  return Array.from(array, dec2hex).join('')
}

const getDeviceID = (): string => {
  let deviceID = store.get('device_id')
  if (deviceID === null) {
    deviceID = generateDeviceID(40)
    store.set('device_id', deviceID)
  }

  console.log({ deviceID })
  return deviceID
}

const getDeviceName = (): string => {
  const agent = userAgentParser()
  const { browser, os, device } = agent

  const deviceName =
    [device.vendor, device.model, device.type].filter(Boolean).join(' ') ||
    'Computer'
  const osName = [os.name, os.version].filter(Boolean).join(' ')
  const browserName = [browser.name, browser.version].filter(Boolean).join(' ')

  const name = `${browserName} on ${deviceName} (${osName})`
  console.log(name)
  return name
}

export { getDeviceID, getDeviceName }
