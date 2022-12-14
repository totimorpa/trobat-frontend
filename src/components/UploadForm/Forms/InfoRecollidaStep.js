import React from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const InfoRecollidaStep = (props) => {
  return (
    <Grid>
      <Box sx={{ m: 5 }}>
        <TextField
          label="Telf. contacte"
          placeholder="Eg: 625 762 672"
          margin="normal"
          name="telefon"
          value={props.formData["telefon"] || ""}
          onChange={(newValue) => props.onChange(newValue)}
          fullWidth
        />
        <TextField
          label="Lloc d'emmagatzematge"
          placeholder="Eg. Estacio Sants"
          margin="normal"
          name="recollida"
          value={props.formData["recollida"] || ""}
          onChange={(newValue) => props.onChange(newValue)}
          fullWidth
        />
      </Box>
    </Grid>
  );
};

export default InfoRecollidaStep;
