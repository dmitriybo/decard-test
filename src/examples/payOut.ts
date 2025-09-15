import prompts, { PromptObject } from 'prompts'
import { DecardPayOutData } from '../api/types'
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
  {
    type: 'text',
    name: 'number',
    message: 'Number Papara',
  },
]

;(async () => {
  console.log('Создание выплаты')

  const paymentData = (await prompts(questions)) as Omit<DecardPayOutData, 'currency'>

  console.log('Отправка запроса на создание выплаты...')
  await decardApi
    .decardPayOutPapara({ ...paymentData, currency: 'TRY' })
    .then((payment) => console.log(payment))
    .catch((error) => console.error('Payout error', error.response.data))
})()
