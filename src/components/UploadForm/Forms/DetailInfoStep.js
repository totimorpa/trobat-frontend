import React from "react";
import { InputLabel } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const DetailInfoStep = (props) => {
  return (
    <Grid>
      <Box sx={{ m: 5 }}>
        <InputLabel style={{ marginBottom: 10 }}>
          Informació detallada:
        </InputLabel>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          name="detailInfo"
          value={props.formData["detailInfo"] || ""}
          onChange={(newValue) => {
            props.onChange(newValue);
          }}
          placeholder={
            "Ex. L'iphone 6 es blau, te una funda groga i la pantalla esta lleugerament esquerdada. \nEl fons de pantalla es d'un gat amb un barret de nadal"
          }
          style={{ width: "100%", paddingInline: 3, padding: 3 }}
        />
      </Box>
    </Grid>
  );
};

export default DetailInfoStep;
