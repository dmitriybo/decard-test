export interface DecardWebhookData {
  amount: number
  currency: string
  token: string
  status: string
  number: string
  type: 'payment' | 'payout'
  sign: string
  error_code?: string
  error_message?: string
}
