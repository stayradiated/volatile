import { errorBoundary } from '@stayradiated/error-boundary'
import { createTransport, SendMailOptions } from 'nodemailer'

import { MAIL_SMTP_URL, MAIL_FROM } from '../env.js'

const sendMail = (options: SendMailOptions) => {
  return errorBoundary(async () => {
    const transporter = createTransport(MAIL_SMTP_URL)

    return transporter.sendMail({
      from: MAIL_FROM,
      ...options,
    })
  })
}

export { sendMail }
