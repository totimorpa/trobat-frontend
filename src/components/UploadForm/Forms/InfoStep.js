import React from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const categories = [
  { value: "electronica", label: "Electrònica" },
  { value: "carteres", label: "Cartera" },
  { value: "documents", label: "Documents Personals" },
  { value: "roba", label: "Roba" },
  { value: "bolsos", label: "Bolsos" },
  { value: "motxilles", label: "Motxilles i Maletes" },
  { value: "ulleres", label: "Ulleres" },
  { value: "joies", label: "Cartera" },
  { value: "altres", label: "Altres" },
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
        <FormControl sx={{ mt: 1, width: "100%" }}>
          <InputLabel>Categoria</InputLabel>
          <Select
            label="categoria"
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
        </FormControl>
      </Box>
    </Grid>
  );
};

export default InfoStep;
