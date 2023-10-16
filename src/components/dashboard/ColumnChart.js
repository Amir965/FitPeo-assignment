import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const colors = [
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#5A32EA",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
  "#F2EFFF",
];

const ColumnChart = () => {
  const [columnWidth, setColumnWidth] = useState("30px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColumnWidth("20px");
      } else {
        setColumnWidth("30px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    series: [
      {
        data: [50, 65, 40, 75, 55, 90, 70, 85, 60, 45, 80, 95],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: columnWidth,
        distributed: true,
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        ["Jan"],
        ["Feb"],
        ["Mar"],
        ["Apr"],
        ["May"],
        ["Jun"],
        ["Jul"],
        ["Aug"],
        ["Sep"],
        ["Oct"],
        ["Nov"],
        ["Dec"],
      ],
      labels: {
        style: {
          colors: "black", // Set category text color to black
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      grid: {
        show: false, // Hide horizontal grid lines
      },
    },
    grid: {
      show: false, // Hide vertical grid lines
    },
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default ColumnChart;
