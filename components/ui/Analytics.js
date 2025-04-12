"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 0, mobile: 532 },
  { month: "February", desktop: 97, mobile: 379 },
  { month: "March", desktop: 112, mobile: 362 },
  { month: "April", desktop: 142, mobile: 343 },
  { month: "May", desktop: 182, mobile: 319 },
  { month: "June", desktop: 221, mobile: 293 },
  { month: "January", desktop: 245, mobile: 271 },
  { month: "February", desktop: 254, mobile: 259 },
  { month: "March", desktop: 265, mobile: 334 },
  { month: "April", desktop: 283, mobile: 221 },
  { month: "May", desktop: 301, mobile: 201 },
  { month: "June", desktop: 323, mobile: 186 },
  { month: "January", desktop: 344, mobile: 257 },
  { month: "February", desktop: 370, mobile: 143 },
  { month: "March", desktop: 396, mobile: 110 },
  { month: "April", desktop: 421, mobile: 93 },
  { month: "May", desktop: 444, mobile: 0 },
  { month: "June", desktop: 525, mobile: 0 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#06AB78",
  },
  mobile: {
    label: "Mobile",
    color: "oklch(0.637 0.237 25.331)",
  },
};

export default function Analytics({ className }) {
  return (
    <ChartContainer
      config={chartConfig}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
