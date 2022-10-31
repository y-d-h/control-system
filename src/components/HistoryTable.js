import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";
import Team3 from "assets/img/team-3-800x800.jpg";
import Team4 from "assets/img/team-4-470x470.png";
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

  const inputdata = [
    {
      name: "name01",
      sex: "sex01",
      age: "age01",
      height: "height01",
      weight: "weight01",
      pulse: "pulse01",
      sbp: "SBP01",
      dbp: "DBP01",
      temperature: "temperature01",
    },
    {
      name: "name02",
      sex: "sex02",
      age: "age02",
      height: "height02",
      weight: "weight02",
      pulse: "pulse02",
      sbp: "SBP02",
      dbp: "DBP02",
      temperature: "temperature02",
    },
  ];

  return (
    <Card>
      <CardHeader color="blueGray" contentPosition="left">
        <div className="grid grid-cols-6 col-gap-8">
          <h2 className=" text-white text-2xl ">사용자 이력</h2>
          <DateRange className="col-2 w-xl" />
          <NavbarInput className="col-3 w-full" placeholder="Search" />
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  이름
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  성별
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  나이
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  키
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  몸무게
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  맥박
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  수축기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  이완기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  체온
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  입력일자
                </th>
              </tr>
            </thead>
            {userinput &&
              userinput.map((user) => (
                <tbody>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.name}
                      {/* {userinput.name} */}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.sex}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.age}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.height}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.weight}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.pulse}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.sbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.dbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {user.temperature}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
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

// function datePicker() {
//   const dateRangePickerEl = document.getElementById("dateRangePickerId");
//   new DateRangePicker(dateRangePickerEl, {
//     // options
//   });
//   return (
//     <div date-rangepicker class="flex items-center">
//       <div class="relative">
//         <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg
//             aria-hidden="true"
//             class="w-5 h-5 text-gray-500 dark:text-gray-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </div>
//         <input
//           name="start"
//           type="text"
//           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Select date start"
//         />
//       </div>
//       <span class="mx-4 text-gray-500">to</span>
//       <div class="relative">
//         <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg
//             aria-hidden="true"
//             class="w-5 h-5 text-gray-500 dark:text-gray-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </div>
//         <input
//           name="end"
//           type="text"
//           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Select date end"
//         />
//       </div>
//     </div>
//   );
// }
