import { errorBoundary } from '@stayradiated/error-boundary'
import { createTransport, SendMailOptions } from 'nodemailer'

import { config } from '../env.js'

const sendMail = (options: SendMailOptions) => {
  return errorBoundary(async () => {
    const transporter = createTransport(config.MAIL_SMTP_URL)

    return transporter.sendMail({
      from: config.MAIL_FROM,
      ...options,
    })
  })
}

export { sendMail }
