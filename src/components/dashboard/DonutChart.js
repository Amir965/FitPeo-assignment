import React from "react";
import Chart from "react-apexcharts";

function DonutChart() {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            // total: {
            //   show: true,
            //   showAlways: true,
            //   fontSize: "20px",
            //   color: "#333",
            //   formatter: function (w) {
            //     return `65% New Customers`;
            //   },
            // },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#F43598", "#5F38E9", "#F2EFFF"],
  };

  const chartSeries = [20, 30, 15];

  return (
    <div className="container-fluid mb-3">
      <div className="donut-total">
        <b>65%</b>
        <br />
        <span>Total New</span>
        <span>Customers</span>
      </div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width={300}
      />
    </div>
  );
}

export default DonutChart;
