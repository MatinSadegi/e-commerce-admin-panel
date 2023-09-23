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
  ScaleOptionsByType,
} from "chart.js";
ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement);

const Earning = () => {
  let data: ChartData<"line", (number | [number, number] | null)[], unknown>;
  data = {
    labels: ["Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        data: [35, 41, 62, 42, 13, 18, 29, 37,35],
        borderColor: "#0da487",
        pointStyle: "line",

        fill: false,
      },
      {
        data: [87, 57, 74, 99, 75, 38, 62, 47,49],
        borderColor: "#1c6aa9",
        pointStyle: "line",
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
      <h3 className="text-gray-700 mb-4">Earning</h3>
      <div className="">
        <Line data={data} />
      </div>
    </section>
  );
};

export default Earning;
