"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartData,
  ScaleChartOptions,
  ScaleOptionsByType

} from "chart.js";
ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement);

const RevenueChart = () => {
  let data: ChartData<"line", (number | [number, number] | null)[], unknown>;
  data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
    datasets: [
      {
        data: [60, 70, 54, 51, 42, 109],
        borderColor: "#0da487",
        pointStyle: "line",
        tension: 0.3,
        fill: false,
      },
    ],
  };

//   options = {
//     scales:{
//         x:{
//             grid:{
//                 display:false
//             }
//         }
//     }
//   }
  return (
    <section className=" section-style">
      <h3 className="text-gray-700 mb-1">Revenue Report</h3>
      <div className="">
        <Line data={data}  />
      </div>
    </section>
  );
};

export default RevenueChart;
