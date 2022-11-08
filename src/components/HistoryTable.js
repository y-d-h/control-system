import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import DateRange from "./DateRangePicker";
//import CalendarsDateRangePicker from "./DateRangePicker";
import { call } from "../service/ApiService";
import { useEffect, useState } from "react";

export default function HistoryTable() {
  const [userinput, setUserinput] = useState();

  useEffect(() => {
    call("/userinput", "GET").then((response) => {
      setUserinput(response.data);
      console.log(response.data);
    });
  }, []);

  // const inputdata = [
  //   {
  //     name: "name01",
  //     sex: "sex01",
  //     age: "age01",
  //     height: "height01",
  //     weight: "weight01",
  //     pulse: "pulse01",
  //     sbp: "SBP01",
  //     dbp: "DBP01",
  //     temperature: "temperature01",
  //   },
  //   {
  //     name: "name02",
  //     sex: "sex02",
  //     age: "age02",
  //     height: "height02",
  //     weight: "weight02",
  //     pulse: "pulse02",
  //     sbp: "SBP02",
  //     dbp: "DBP02",
  //     temperature: "temperature02",
  //   },
  // ];

  return (
    <Card>
      <CardHeader color="blueGray" contentPosition="left">
        <div className="grid grid-cols-6 col-gap-8">
          <h2 className=" text-white text-2xl ">사용자 이력</h2>
          {/* <DateRange className="col-2 w-xl" /> */}
          <NavbarInput className="col-3 w-full" placeholder="Search" />
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  이름
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  성별
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  나이
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  키
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  몸무게
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  맥박
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  수축기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  이완기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  체온
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  전화번호
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  입력일자
                </th>
              </tr>
            </thead>
            {userinput &&
              userinput.map((user, idx) => (
                <tbody>
                  <tr
                    key={idx}
                    onClick={() => {
                      var url = "/detail/" + user.phone;
                      window.location.href = url;
                    }}
                    className="cursor-pointer hover:bg-[#e2e8f0]"
                  >
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.name}
                      {/* {userinput.name} */}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.sex}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.age}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.height}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.weight}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.pulse}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.sbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.dbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.temperature}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.phone}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.time}
                    </th>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
