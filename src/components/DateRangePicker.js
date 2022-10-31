// import * as React from "react";

// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { Box } from "@mui/material";

// export default function CalendarsDateRangePicker() {
//   const [value, setValue] = React.useState([null, null]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <Typography sx={{ mt: 2, mb: 1 }}>1 calendar </Typography>
//         <DateRangePicker
//           calendars={1}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(startProps, endProps) => (
//             <React.Fragment>
//               <TextField {...startProps} />
//               <Box sx={{ mx: 2 }}> to </Box>
//               <TextField {...endProps} />
//             </React.Fragment>
//           )}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// }

import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/index.css";
import { DateRangePicker } from "rsuite";

export default function DateRange() {
  const [value, setValue] = React.useState([
    new Date("2017-02-01"),
    new Date("2017-05-20"),
  ]);

  return <DateRangePicker value={value} onChange={setValue} />;
}
