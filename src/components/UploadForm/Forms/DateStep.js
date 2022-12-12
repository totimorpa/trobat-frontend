import React from "react";
import { TextField, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateStep = (props) => {
  const [value, setValue] = React.useState(null);
  return (
    <React.Fragment>
      <Box
        sx={{
          mb: 5,
          ml: 5,
          mr: 5,
        }}
      >
        <div>
          <InputLabel id="demo-simple-select-label">
            Quan ho has trobat?
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={props.formData["date"] || value}
              onChange={(newValue) => {
                setValue(newValue);
                props.onChange(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </Box>
    </React.Fragment>
  );
};
export default DateStep;
