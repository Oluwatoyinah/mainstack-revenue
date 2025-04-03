"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@components/ui/chart";
const chartData = [
  { month: "Apr 2, 2022", desktop: 0 },
  { month: "", desktop: 209 },
  { month: "", desktop: 207 },
  { month: "", desktop: 73 },
  { month: "", desktop: 305 },
  { month: "Apr 30, 2022", desktop: 0 },
];

const chartConfig = {
  desktop: {
    label: "Cash In",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function DashboardChart() {
  return (
    <Card className="border-0 shadow-none">
      <CardContent>
        <ChartContainer className="h-[300px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={true} tickMargin={8} tickFormatter={(value) => value} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area dataKey="desktop" type="natural" fill="none" fillOpacity={0.4} stroke="#FF5403" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
