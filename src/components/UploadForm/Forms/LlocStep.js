import React from "react";
import { Select, InputLabel, MenuItem } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const places = [
  { value: "barcelona", label: "Barcelona" },
  { value: "lleida", label: "Lleida" },
  { value: "tarragona", label: "Tarragona" },
  { value: "girona", label: "Girona" },
  { value: "trens", label: "Trens" },
  { value: "busos", label: "Busos" },
];

const LlocStep = (props) => {
  return (
    <Grid>
      <Box sx={{ mb: 5, ml: 5, mr: 5 }}>
        <InputLabel>Ciutat</InputLabel>
        <Select
          style={{ width: "100%" }}
          name="llocs"
          value={props.formData["llocs"] || ""}
          onChange={(newvalue) => props.onChange(newvalue)}
        >
          {places.map((place) => (
            <MenuItem key={place.value} value={place.value}>
              {place.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Grid>
  );
};

export default LlocStep;
