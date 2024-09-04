import { api } from '../lib/axios'

export interface GetMonthCanceledOrdersAmountAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmountsAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )
  return response.data
}
