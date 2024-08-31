import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

const data = [
  {
    date: '10/12',
    revenue: 1200,
  },
  {
    date: '1112',
    revenue: 3422,
  },
  {
    date: '12/12',
    revenue: 1220,
  },
  {
    date: '13/12',
    revenue: 1938,
  },
  {
    date: '14/12',
    revenue: 2424,
  },
  {
    date: '15/12',
    revenue: 4144,
  },
  {
    date: '16/12',
    revenue: 1312,
  },
  {
    date: '17/12',
    revenue: 3263,
  },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="justify-betwen flex-row items-center pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
