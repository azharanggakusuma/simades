"use client";
import { useEffect, useRef, useState } from "react";

export default function ChartVisitor() {
  const chartRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const element = chartRef.current;
    if (!element) return;

    // Import ApexCharts hanya saat client-side
    import("apexcharts").then(({ default: ApexCharts }) => {
      const buildTooltip = (props) => {
        const categories = props?.ctx?.opts?.xaxis?.categories || [];
        const { dataPointIndex } = props;
        const title = categories[dataPointIndex] || "";
        const value = props.series[0][dataPointIndex] || 0;

        return `
          <div class="apexcharts-tooltip-title">${title}</div>
          <div class="apexcharts-tooltip-series-group">
            <span class="apexcharts-tooltip-marker" style="background-color: ${
              props.ctx.opts.colors[0]
            }"></span>
            <span class="apexcharts-tooltip-text-label">Visitors: </span>
            <span class="apexcharts-tooltip-text-value">${
              value >= 1000 ? `${value / 1000}k` : value
            }</span>
          </div>
        `;
      };

      const chart = new ApexCharts(element, {
        chart: {
          height: 300,
          type: "area",
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        series: [
          {
            name: "Visitors",
            data: [200, 150, 120, 180, 160, 200, 210, 250, 270, 230, 220, 260],
          },
        ],
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        grid: {
          strokeDashArray: 2,
          borderColor: "#e5e7eb",
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.8,
          },
        },
        xaxis: {
          type: "category",
          tickPlacement: "on",
          categories: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "Nopember",
            "Desember",
          ],
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: {
            stroke: { dashArray: 0 },
            dropShadow: { show: false },
          },
          tooltip: { enabled: false },
          labels: {
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            formatter: (title) => title,
          },
        },
        yaxis: {
          labels: {
            align: "left",
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
        tooltip: {
          custom: buildTooltip,
        },
        colors: ["#2563eb"],
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: { height: 300 },
              xaxis: {
                labels: {
                  style: {
                    colors: "#9ca3af",
                    fontSize: "11px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                  },
                  offsetX: -2,
                  formatter: (title) => title.slice(0, 3),
                },
              },
              yaxis: {
                labels: {
                  style: {
                    fontSize: "11px",
                  },
                  formatter: (val) => (val >= 1000 ? `${val / 1000}k` : val),
                },
              },
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
            Pengunjung
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            2.5k
          </p>
        </div>
        <div>
          <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
            <svg
              className="inline-block size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
            2%
          </span>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-72">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <div ref={chartRef} id="hs-single-area-chart" />
    </div>
  );
}
