import { DecardPayInData, DecardPayOutData } from './types'
import { axiosDecard } from '../config/axiosDecard'
import { env } from '../config/env'
import { v4 as uuidv4 } from 'uuid'

const decardPayInPapara = async (options: DecardPayInData) => {
  const { data } = await axiosDecard.request({
    method: 'post',
    url: '/rest/paymentgate/simple/',
    data: {
      shop_key: env.decard.shopKey,
      amount: options.amount,
      order_currency: options.currency,
      payment_currency: options.currency,
      payment_method: 'papara',
      order_number: uuidv4(),
      payment_details: 'Deposit payment',
      lang: 'RU',
      payment_method_details: {
        first_name: options.first_name,
        last_name: options.last_name,
        user_id: options.user_id,
      },
    },
  })
  return data
}

const decardPayOutPapara = async (options: DecardPayOutData) => {
  const { data } = await axiosDecard.request({
    method: 'post',
    url: '/rest/payoutgate/papara/',
    data: {
      shop_key: env.decard.shopKey,
      amount: options.amount,
      currency: options.currency,
      user_id: options.user_id,
      recipient_full_name: `${options.first_name} ${options.last_name}`,
      number: options.number,
    },
  })
  return data
}

export const decardApi = {
  decardPayInPapara,
  decardPayOutPapara,
}
