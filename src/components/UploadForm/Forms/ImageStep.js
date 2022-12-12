import React, { useState } from "react";
import { Grid } from "@mui/material";
import Thumb from "../Helper/Thumb";
import { Box } from "@mui/material";

const ImageStep = (props) => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [src, setSrc] = useState("");
  const _onChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      if (file.name !== fileName) {
        reader.readAsDataURL(file);
        setSrc(reader);
        setFile(file);
      }
    }
    props.onChange(file);
  };

  return (
    <Grid container spacing={3} style={{ margin: 4 }}>
      <Grid item xs={12}>
        <label style={{ color: "var(--main-color)" }}>
          Fes una foto de l'objecte trobat
        </label>
        <br />

        <input name="image" type="file" accept="image/*" onChange={_onChange} />
        <Box sx={{ m: 2 }}>
          <Thumb file={file} src={src}></Thumb>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageStep;
