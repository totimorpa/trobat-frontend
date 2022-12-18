import {
  FormControl,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  Typography,
  Divider,
  InputLabel,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function Filter() {
  const [search, setSearch] = useState("");
  const [dateFound, setDateFound] = useState(null);
  const [locationFound, setLocationFound] = useState("");
  const [categories, setCategories] = useState([]);

  const allCategories = [
    { value: "electronica", label: "Electrònica" },
    { value: "carteres", label: "Cartera" },
    { value: "documents", label: "Documents Personals" },
    { value: "roba", label: "Roba" },
    { value: "bolsos", label: "Bolsos" },
    { value: "motxilles", label: "Motxilles i Maletes" },
    { value: "ulleres", label: "Ulleres" },
    { value: "joies", label: "Cartera" },
    { value: "altres", label: "Altres" },
    { value: "all", label: "Totes les categories" },
  ];

  const places = [
    { value: "barcelona", label: "Barcelona" },
    { value: "lleida", label: "Lleida" },
    { value: "tarragona", label: "Tarragona" },
    { value: "girona", label: "Girona" },
    { value: "trens", label: "Trens" },
    { value: "busos", label: "Busos" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API request using the selected filters as parameters in the query string
    fetch(
      `/api/lostobjects?search=${search}&dateFound=${dateFound}&locationFound=${locationFound}&categories=${categories.join(
        ","
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        // setLostObjects(data);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        width: "80%",
        borderRadius: 4,
        boxShadow: 24,
        p: 3,
        mt: 3,
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, pt: 0, pb: 1 }}>
          Filtres 🔎
        </Typography>
      </Box>

      <Divider></Divider>

      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Box sx={{ mr: 2, mb: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Data Perdut"
                  value={dateFound}
                  onChange={(date) => setDateFound(date)}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{ width: 200 }}
                />
              </LocalizationProvider>
            </Box>
          </FormControl>
          <FormControl>
            <Box sx={{ mr: 2, mb: 2 }}>
              <InputLabel>Categoria</InputLabel>
              <Select
                sx={{ width: 200 }}
                label="Categoria"
                multiple
                value={categories}
                onChange={(event) => setCategories(event.target.value)}
                renderValue={(selected) => selected.join(", ")}
              >
                {allCategories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </FormControl>
          <FormControl>
            <Box sx={{ mr: 2, mb: 2 }}>
              <InputLabel>Lloc perdut</InputLabel>
              <Select
                sx={{ width: 200 }}
                label="Lloc perdut"
                value={locationFound}
                onChange={(event) => setLocationFound(event.target.value)}
              >
                {places.map((place) => (
                  <MenuItem key={place.value} value={place.value}>
                    {place.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </FormControl>

          {/* Add form elements for the categories filter here */}
          <Box sx={{ display: "flex", justifyPosition: "flex-end" }}>
            <Button type="submit">Buscar🔎</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Filter;
