import { BarChartComp } from "@/components/charts/bar-chart";
import { LineChartComp } from "@/components/charts/line-chart";
import { PieChartComp } from "@/components/charts/pie-chart";
import { StatCard } from "@/components/stat-card";

export default function DashboardPage() {
  return (
      <div className="grid grid-rows-[auto_auto_1fr] gap-6 p-6 min-h-screen bg-gray-100">
        
        {/* 📊 Top Stats */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard title="Łączna sprzedaż" value="15 230 zł" />
          <StatCard title="Łączna liczba sprzedanych sztuk" value="3 420" />
          <StatCard title="Najlepiej sprzedający się produkt" value="Chanel No.5" />
        </div>

  
        {/* 📈 Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Line Chart (Sales Over Time) */}
          <div className=" col-span-2">
            
            <LineChartComp />
          </div>
  
          {/* Pie Chart (Sales by Category) */}
          <div className="">
            
            <PieChartComp />
          </div>
        </div>
  
        {/* 📊 Big Bar Chart Section */}
        <div className="bg-white  rounded-xl shadow-md">
          
          <BarChartComp />
        </div>
  
      </div>
    );

}
