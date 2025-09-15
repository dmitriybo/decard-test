import prompts, { PromptObject } from 'prompts'
import { DecardPayInData } from '../api/types'
import { decardApi } from '../api/methods'

const questions: PromptObject[] = [
  {
    type: 'number',
    name: 'amount',
    message: 'Сумма в центах',
  },
  {
    type: 'text',
    name: 'first_name',
    message: 'Имя',
  },
  {
    type: 'text',
    name: 'last_name',
    message: 'Фамилия',
  },
  {
    type: 'text',
    name: 'user_id',
    message: 'User ID',
  },
]

;(async () => {
  console.log('Создание платежа')

  const paymentData = (await prompts(questions)) as Omit<DecardPayInData, 'currency'>

  console.log('Отправка запроса на создание платежа...')
  await decardApi
    .decardPayInPapara({ ...paymentData, currency: 'TRY' })
    .then((payment) => console.log(payment))
    .catch((error) => console.error('Payin error', error.response.data))
})()
