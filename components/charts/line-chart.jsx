"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Line } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { miesiąc: "Styczeń", online: 8000 },
  { miesiąc: "Luty", online: 9500 },
  { miesiąc: "Marzec", online: 11000 },
  { miesiąc: "Kwiecień", online: 9000 },
  { miesiąc: "Maj", online: 13000 },
  { miesiąc: "Czerwiec", online: 15000 },
];

const chartConfig = {
  online: {
    label: "Sprzedaż online",
    color: "var(--color-main-darker)",
  },
};

export function LineChartComp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sprzedaż online</CardTitle>
        <CardDescription>Styczeń - Czerwiec 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="miesiąc" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickFormatter={(value) => `${value / 1000} tys. zł`} />
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                dataKey="online"
                type="monotone"
                stroke="var(--color-main-darker)"
                strokeWidth={2}
                dot={{ fill: "var(--color-main-darker)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Sprzedaż wzrosła o 12% w tym miesiącu <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Dane sprzedaży z ostatnich 6 miesięcy
        </div>
      </CardFooter>
    </Card>
  );
}
