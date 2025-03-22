"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Dane sprzedaży perfum
const chartData = [
  { perfum: "Chanel No. 5", sold: 320, fill: "var(--color-main-lightest)" },
  { perfum: "Dior Sauvage", sold: 280, fill: "var(--color-main-lighter)" },
  { perfum: "YSL Black Opium", sold: 250, fill: "var(--color-main)" },
  { perfum: "Armani Acqua", sold: 210, fill: "var(--color-main-darker)" },
  { perfum: "Paco Rabanne 1M", sold: 180, fill: "var(--color-main-darkest)" },
]

// Konfiguracja wykresu
const chartConfig = {
  sold: {
    label: "Sprzedane sztuki",
  },
  chanel: {
    label: "Chanel No. 5",
    color: "var(--color-main-lightest)",
  },
  dior: {
    label: "Dior Sauvage",
    color: "var(--color-main-lighter)",
  },
  ysl: {
    label: "YSL Black Opium",
    color: "var(--color-main)",
  },
  armani: {
    label: "Armani Acqua",
    color: "var(--color-main-darker)",
  },
  paco: {
    label: "Paco Rabanne 1M",
    color: "var(--color-main-darkest)",
  },
}

export function PieChartComp() {
  const totalSold = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sold, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sprzedaż</CardTitle>
        <CardDescription>Styczeń - Czerwiec 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sold"
              nameKey="perfum"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSold.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sprzedane sztuki
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Wzrost o 5.2% w tym miesiącu <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Pokazano sprzedaż za ostatnie 6 miesięcy
        </div>
      </CardFooter>
    </Card>
  )
}
