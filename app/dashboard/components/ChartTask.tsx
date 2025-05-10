"use client";
import { useEffect, useRef, useState } from "react";

export default function ChartTask() {
  const chartRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const element = chartRef.current;
    if (!element) return;

    // Import ApexCharts hanya saat client-side
    import("apexcharts").then(({ default: ApexCharts }) => {
      const buildTooltip = (props) => {
        const { dataPointIndex, series, ctx } = props;
        const value = series[dataPointIndex] || 0;
        const label = dataPointIndex === 0 ? "Selesai" : "Belum";

        return `
          <div class="apexcharts-tooltip-title">${label}</div>
          <div class="apexcharts-tooltip-series-group">
            <span class="apexcharts-tooltip-marker" style="background-color: ${ctx.opts.colors[dataPointIndex]}"></span>
            <span class="apexcharts-tooltip-text-label">${label}: </span>
            <span class="apexcharts-tooltip-text-value">${value}</span>
          </div>
        `;
      };

      // Replace with actual task data
      const completedTasks = 70;
      const pendingTasks = 100 - completedTasks;

      const chart = new ApexCharts(element, {
        chart: {
          height: 300,
          type: "pie",
          toolbar: { show: false },
        },
        series: [completedTasks, pendingTasks],
        labels: ["Selesai", "Belum"],
        colors: ["#4caf50", "#ff9800"],
        legend: {
          position: "top",
          horizontalAlign: "center",
        },
        dataLabels: { enabled: true },
        tooltip: {
          custom: buildTooltip,
        },
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: { height: 250 },
              legend: { position: "bottom" },
            },
          },
        ],
      });

      chart.render().then(() => setIsLoading(false));
      return () => chart.destroy();
    });
  }, []);

  return (
    <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div>
          <h2 className="text-sm text-gray-500 dark:text-neutral-500">
            Progres Pengisian
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            424 Desa/Kelurahan
          </p>
        </div>
        <div>
          <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-500">
            <svg
              className="inline-block size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            70%
          </span>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-72">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <div ref={chartRef} id="task-completion-chart" />
    </div>
  );
}
