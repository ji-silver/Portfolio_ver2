"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "./chart.module.scss";

const ChartComponent = ({ chartData }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const formattedData = {
      labels: ["기여도", "완성도", "기술이해도", "일정관리", "협업"],
      datasets: [
        {
          label: "Dataset 1",
          data: chartData,
          backgroundColor: "rgba(73, 76, 162, 0.349)",
        },
      ],
    };

    const chartOptions = {
      elements: {
        line: {
          borderWidth: 2,
          borderColor: "#494ca2",
        },
        point: {
          pointStyle: false,
        },
      },
      scales: {
        r: {
          ticks: {
            stepSize: 2.5,
            display: false,
          },
          pointLabels: {
            font: {
              size: 12,
              weight: "700",
            },
          },
          angleLines: {
            display: false,
          },
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 0,
      },
    };

    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: formattedData,
      options: chartOptions,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className={styles.chart}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ChartComponent;
