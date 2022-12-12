import React from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const InfoRecollidaStep = (props) => {
  return (
    <Grid>
      <Box sx={{ mb: 5, ml: 5, mr: 5 }}>
        <TextField
          label="Tf contacte"
          placeholder="Eg: 625 762 672"
          margin="normal"
          name="telefon"
          value={props.formData["telefon"] || ""}
          onChange={(newValue) => props.onChange(newValue)}
          fullWidth
        />
        <TextField
          label="Lloc Emmagatzematge"
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
