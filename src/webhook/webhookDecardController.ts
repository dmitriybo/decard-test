import { env } from '../config/env'
import { createSignature } from '../utils/crypto'
import { DecardWebhookData } from './types'
import { app } from '../config/app'

export const webhookDecardController = () => {
  app.post('/webhook/decard', async (c) => {
    const data = await c.req.json<DecardWebhookData>()
    const { sign, ...payload } = data

    console.log('Пришел запрос на webhook')
    console.log(payload)

    const expectedSign = createSignature(env.decard.secret, payload)

    if (sign !== expectedSign) {
      console.log('Подпись не совпадает')
      return c.json({ status: 'error', message: 'Invalid signature' }, 400)
    }

    console.log('Подпись совпадает')
    return c.json({ status: 'ok' })
  })
}
