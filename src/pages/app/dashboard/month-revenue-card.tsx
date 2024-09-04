import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenuesAmount } from '../../../api/get-month-revenue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenuesAmount,
    queryKey: ['metrics', 'month-revenue'],
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total no (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relacao ao mes passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relacao ao mes passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
