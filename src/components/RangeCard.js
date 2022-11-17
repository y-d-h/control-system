import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Progress from "@material-tailwind/react/Progress";
import MultiRangeBar from "./MultiRangeBar";
import SingleRangeBar from "./SingleRangeBar";
import Icon from "@material-tailwind/react/Icon";
import Avatar from "@mui/material/Avatar";
import { green, yellow, red, orange, blue } from "@mui/material/colors";

import { useEffect, useState } from "react";

export default function TrafficCard() {
  const [result, setResult] = useState("정상");

  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">측정 결과</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
          <div className="">
            <div className="overflow-x-auto mr-4">
              <table
                className="items-center w-full bg-transparent border-collapse"
                style={{ tableLayout: "fixed" }}
              >
                {/* <thead className="thead-light">
                  <tr>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Referral
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Visitors
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th style={{ width: "15%" }}></th>
                    <td className="border-b border-gray-200 align-middle font-bold text-xl px-2 py-4 text-center">
                      {result}
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: green[300] }}>
                        <Icon name="thermostat" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        name="체온"
                        value={36.3}
                        unit="°C"
                        min={34}
                        max={40}
                        step={0.1}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: yellow[300] }}>
                        <Icon name="monitor_heart" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        name="맥박"
                        value={76}
                        unit="bpm"
                        min={60}
                        max={220}
                        step={1}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: red[300] }}>
                        <Icon name="favorite" size="2xl" />
                      </Avatar>
                    </th>

                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left w-full">
                      {/* <Progress color="blue" value="60" /> */}
                      <MultiRangeBar
                        name="혈압"
                        values={[80, 170]}
                        unit="mmHg"
                        min={60}
                        max={220}
                        step={1}
                      />
                      {/* <div
                        className=""
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          // flexWrap: "wrap",
                          // margin: "2em",
                        }}
                      >
                        <output id="output" className="">
                          35
                        </output>
                        <output id="output" className="">
                          40
                        </output>
                      </div> */}
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: orange[300] }}>
                        <Icon name="priority_high" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        name="몸무게"
                        value={56}
                        unit=""
                        min={50}
                        max={100}
                        step={1}
                      />
                    </td>
                  </tr>

                  {/* <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: blue[300] }}>
                        <Icon name="opacity" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        name="산소포화도"
                        value={100}
                        unit="%"
                        min={20}
                        max={100}
                        step={1}
                      />
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <div className="overflow-y-auto">
              {/* <img
                style={{ objectFit: "contain", height: "26vw" }}
                class="w-full"
                src="https://img.freepik.com/free-vector/human-anatody-on-white-background_1308-68254.jpg?w=360&t=st=1668135254~exp=1668135854~hmac=d3ad7aab338a4d0b0dd9b961b44a507383ed8e927921e74766306451f3f902f6"
                alt="Human Image"
              />
              <div style={{ textAlign: "right" }}>
                <a href="https://kr.freepik.com/free-vector/human-anatody-on-white-background_18921080.htm#query=%EC%8B%A0%EC%B2%B4&position=0&from_view=keyword">
                  작가 brgfx
                </a>
                출처 Freepik
              </div> */}
              {/* <img
                style={{ objectFit: "contain", height: "26vw" }}
                class="w-full"
                src="https://img.freepik.com/premium-vector/polygon-man_46706-860.jpg?w=740"
                alt="Human Image"
              /> */}
              {/* <div className="bg-green-400 rounded-2xl border border-gray-300 h-auto w-full z-10" /> */}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
