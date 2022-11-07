import { useEffect } from "react";
import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { useState, useRef } from "react";
import { isIdentifierPart } from "typescript";
import { useParams } from "react-router-dom";
import { call } from "../../service/ApiService";
import { LineAxisOutlined } from "@mui/icons-material";

export default function PulseLine(props) {
  console.log("props : ", props);

  // const { phone } = useParams();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   call("/userinput/detail", "POST", { phone: phone }).then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  // console.log(phone);
  // console.log(data && data[0].time);
  //console.log(data[0].time);

  useEffect(() => {
    //if (!data) return <></>;

    // if (data !== undefined) {
    //   console.log("data : ", data);
    // }

    let config = {
      type: "line",
      data: {
        labels: [
          props.data[0].time.substr(6, 7),
          // data[1].time.substr(6, 7),
          // "",
          "",
          "",
          "April",
          "May",
          "??? ",
          "???",
        ],
        //labels: array.array,
        datasets: [
          {
            label: "맥박",
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            data: [
              //props.data[0].pulse,
              //props.data[1].pulse,
              66,
              66,
              66,
              null,
              null,
              null,
              null,
            ],
            fill: false,
            lineTension: 0,
          },
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
    var ctx = document.getElementById("pulse-line").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [data]);

  return (
    <Card>
      <CardHeader color="indigo" contentPosition="left">
        <h2 className="text-white text-2xl">맥박 통계</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="pulse-line"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
