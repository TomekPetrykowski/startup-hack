import { BarChartComp } from "@/components/charts/bar-chart";
import { LineChartComp } from "@/components/charts/line-chart";
import { PieChartComp } from "@/components/charts/pie-chart";


export default function Statistics() {
  return (
    <div className="grid grid-rows-[auto_auto] grid-cols-1 gap-8 min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="h-[300px] w-full h-full">
          <LineChartComp />
        </div>
        <div className="h-[300px] w-full h-full">
          <PieChartComp />
        </div>
      </div>


      <div className="h-[300px] w-full h-full">
        <BarChartComp/>
      </div>
    </div>
  );
}

