const ENC: Record<string, string> = {
  '+': '-',
  '/': '_',
  '=': '.',
}

const DEC: Record<string, string> = {
  '-': '+',
  _: '/',
  '.': '=',
}

const encodeBase64URL = (input: Buffer) => {
  return input.toString('base64').replace(/[+/=]/g, (m) => ENC[m]!)
}

const decodeBase64URL = (input: string) => {
  return Buffer.from(
    input.replace(/[-_.]/g, (m) => DEC[m]!),
    'base64',
  )
}

export { encodeBase64URL, decodeBase64URL }
