"use client";
import { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function ChartVisitor() {
  useEffect(() => {
    const buildTooltip = (props, config) => {
      const { categories } = props.ctx.opts.xaxis;
      const { dataPointIndex } = props;
      const title = categories[dataPointIndex];
      const label1 = props.series[0][dataPointIndex];
      const label2 = props.series[1][dataPointIndex];

      return `
        <div class="apexcharts-tooltip-title">${title}</div>
        <div class="apexcharts-tooltip-series-group">
          <span class="apexcharts-tooltip-marker" style="background-color: ${props.ctx.opts.colors[0]}"></span>
          <span class="apexcharts-tooltip-text-label">Current Visitors: </span>
          <span class="apexcharts-tooltip-text-value">${label1} people</span>
        </div>
        <div class="apexcharts-tooltip-series-group">
          <span class="apexcharts-tooltip-marker" style="background-color: ${props.ctx.opts.colors[1]}"></span>
          <span class="apexcharts-tooltip-text-label">Previous Visitors: </span>
          <span class="apexcharts-tooltip-text-value">${label2} people</span>
        </div>
      `;
    };

    const chart = new ApexCharts(document.querySelector("#hs-single-area-chart"), {
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      series: [
        {
          name: "Current Visitors",
          data: [1500, 3000, 4200, 3800, 4000, 5000, 4600, 5300, 4900, 5600, 2700, 7000], // Example visitor data for the current period
        },
        {
          name: "Previous Visitors",
          data: [1300, 2500, 3800, 3500, 3700, 4800, 4400, 5100, 4700, 5400, 2600, 6900], // Example visitor data for the previous period
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "16px",
          borderRadius: 0,
        },
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 8,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: { show: false },
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          offsetX: -2,
          formatter: (title) => title.slice(0, 3),
        },
      },
      yaxis: {
        labels: {
          align: "left",
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (val) => val >= 1000 ? `${val / 1000}k` : val,
        },
      },
      states: {
        hover: {
          filter: { type: "darken", value: 0.9 },
        },
      },
      tooltip: {
        custom: function (props) {
          return buildTooltip(props, {});
        },
      },
      colors: ["#2563eb", "#d1d5db"],
      grid: {
        borderColor: "#e5e7eb",
      },
      responsive: [{
        breakpoint: 568,
        options: {
          chart: { height: 300 },
          plotOptions: {
            bar: { columnWidth: "14px" },
          },
          stroke: { width: 8 },
          yaxis: {
            labels: {
              style: {
                fontSize: "11px",
              },
              formatter: (val) => val >= 1000 ? `${val / 1000}k` : val,
            },
          },
        },
      }],
    });

    chart.render();

    return () => chart.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="p-4 mt-8 mb-8 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div>
          <h2 className="text-sm text-gray-500 dark:text-neutral-500">Visitors</h2> {/* Updated to Visitors */}
          <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">80.3k</p> {/* You can update this number accordingly */}
        </div>
        <div>
          <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
            <svg className="inline-block size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
            2%
          </span>
        </div>
      </div>
      <div id="hs-single-area-chart" />
    </div>
  );
}
