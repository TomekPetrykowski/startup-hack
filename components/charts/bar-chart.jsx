"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Przykładowe dane sprzedaży (bez podziału na mobile)
const orgchartData = [
  { date: "2024-04-01", sales: 222 },
  { date: "2024-04-02", sales: 97 },
  { date: "2024-04-03", sales: 167 },
  { date: "2024-04-04", sales: 242 },
  { date: "2024-04-05", sales: 373 },
  { date: "2024-04-06", sales: 301 },
  { date: "2024-04-07", sales: 245 },
  { date: "2024-04-08", sales: 409 },
  { date: "2024-04-09", sales: 59 },
  { date: "2024-04-10", sales: 261 },
  { date: "2024-04-11", sales: 327 },
  { date: "2024-04-12", sales: 292 },
  { date: "2024-04-13", sales: 342 },
  { date: "2024-04-14", sales: 137 },
  { date: "2024-04-15", sales: 120 },
  { date: "2024-04-16", sales: 138 },
  { date: "2024-04-17", sales: 446 },
  { date: "2024-04-18", sales: 364 },
  { date: "2024-04-19", sales: 243 },
  { date: "2024-04-20", sales: 89 },
  { date: "2024-04-21", sales: 137 },
  { date: "2024-04-22", sales: 224 },
  { date: "2024-04-23", sales: 138 },
  { date: "2024-04-24", sales: 387 },
  { date: "2024-04-25", sales: 215 },
  { date: "2024-04-26", sales: 75 },
  { date: "2024-04-27", sales: 383 },
  { date: "2024-04-28", sales: 122 },
  { date: "2024-04-29", sales: 315 },
  { date: "2024-04-30", sales: 454 },
]

const chartConfig = {
  sales: {
    label: "Łączna sprzedaż",
    color: "var(--color-main)",
  },
}

export function BarChartComp() {
  const [activeChart] = React.useState("sales")

  const totalSales = React.useMemo(
    () => orgchartData.reduce((acc, curr) => acc + curr.sales, 0),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Wykres sprzedaży</CardTitle>
          <CardDescription>
            Pokazuje łączną sprzedaż w ostatnich 3 miesiącach
          </CardDescription>
        </div>
        <div className="flex">
          <button
            data-active={true}
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              {chartConfig.sales.label}
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalSales.toLocaleString("pl-PL")}
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={orgchartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("pl-PL", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="sales"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pl-PL", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey="sales" fill="var(--color-main)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
