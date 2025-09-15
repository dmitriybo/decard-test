export interface DecardPayInData {
  amount: number
  currency: string
  first_name: string
  last_name: string
  user_id: string
}

export interface DecardPayOutData {
  amount: number
  currency: string
  first_name: string
  last_name: string
  user_id: string
  number: string
}
