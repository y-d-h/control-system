import { useEffect } from "react";
import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function RowBar() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "고체온",
          "저체온",
          "수축기혈압",
          "이완기혈압",
          "산소포화도",
          "맥박수",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            data: [20, 78, 56, 34, 100, 45, 0],
            fill: false,
            barThickness: 28,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(17,17,17,.7)",
            // fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <Card>
      <CardHeader color="blueGray" contentPosition="left">
        <h2 className="text-white text-2xl">건강 상태 그래프</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="bar-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
