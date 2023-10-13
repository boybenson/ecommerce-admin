"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Dataset",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 6, 30, 10, 9, 14, 4, 8, 13, 10, 7, 12, 8],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [13, 8, 5, 15, 12, 15, 7, 3, 13, 10, 11, 6, 2],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} title="" />;
};

export default BarChart;
