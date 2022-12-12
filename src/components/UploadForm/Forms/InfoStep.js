import React from "react";
import { TextField, Select, InputLabel, MenuItem } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const categories = [
  { value: "electronica", label: "Electronica" },
  { value: "carteres", label: "Cartera" },
  { value: "documents", label: "Documents Personals" },
  { value: "roba", label: "Roba" },
  { value: "bolsos", label: "Bolsos" },
  { value: "motxilles", label: "Motixilles i Maletes" },
  { value: "ulleres", label: "Ulleres" },
  { value: "joies", label: "Cartera" },
  { value: "altres", label: "Altres" },
  { value: "all", label: "Totes les categories" },
];

const InfoStep = (props) => {
  return (
    <Grid>
      <Box sx={{ m: 5 }}>
        <TextField
          label="Títol"
          placeholder="Eg: Iphone 6 blau"
          margin="normal"
          name="title"
          value={props.formData["title"] || ""}
          onChange={(newValue) => props.onChange(newValue)}
          fullWidth
        />
        <InputLabel>Categoria</InputLabel>
        <Select
          style={{ width: "100%" }}
          name="categories"
          value={props.formData["categories"] || ""}
          onChange={(newvalue) => props.onChange(newvalue)}
        >
          {categories.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Grid>
  );
};

export default InfoStep;
