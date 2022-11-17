import { useEffect, useState } from "react";
import { call } from "../service/ApiService";

import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function ChartLine() {
  const [statistics, setStatistics] = useState("");
  const [date, setDate] = useState(new Date().getFullYear());

  useEffect(() => {
    call("/userinput/statistics", "POST", { year: date }).then((response) => {
      console.log(response);
      response = response;
      let config = {
        type: "line",
        data: {
          labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ],

          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#03a9f4",
              borderColor: "#03a9f4",
              data: [
                // statistics.january,
                // statistics.february,
                // statistics.march,
                // statistics.april,
                // statistics.may,
                // statistics.june,
                // statistics.july,
                // statistics.august,
                // statistics.september,
                // statistics.october,
                // statistics.november,
                // statistics.december,
                response.january,
                response.february,
                response.march,
                response.april,
                response.may,
                response.june,
                response.july,
                response.august,
                response.september,
                response.october,
                response.november,
                response.december,
              ],
              fill: false,
            },
            // {
            //   label: new Date().getFullYear() - 1,
            //   fill: false,
            //   backgroundColor: "#ff9800",
            //   borderColor: "#ff9800",
            //   data: [40, 68, 86, 74, 56, 60, 87],
            // },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "black",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(17,17,17,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(17,17,17,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(17, 17, 17, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };

      let ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  }, []);

  return (
    <Card>
      <CardHeader color="indigo" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          연간 통계
        </h6>
        <h2 className="text-white text-2xl">이상자 통계</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
        <button
          onClick={() => {
            setDate(new Date().getFullYear());
            call("/userinput/statistics", "POST", { year: date }).then(
              (response) => {
                setStatistics(response);
              }
            );
          }}
          className="float-right mx-4"
        >
          {new Date().getFullYear()}
        </button>
        <button
          onClick={() => {
            setDate(new Date().getFullYear() - 1);
            call("/userinput/statistics", "POST", { year: date }).then(
              (response) => {
                setStatistics(response);
              }
            );
          }}
          className="float-right"
        >
          {new Date().getFullYear() - 1}
        </button>
      </CardBody>
    </Card>
  );
}
