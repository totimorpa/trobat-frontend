import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Thumb from "../Helper/Thumb";
import { Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

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

  useEffect(() => {
    let reader = new FileReader();
    let file = props.formData.image && props.formData.image.file;
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      if (file.name !== fileName) {
        reader.readAsDataURL(file);
        setSrc(reader);
        setFile(file);
      }
    }
  }, []);
  return (
    <Grid container spacing={3} style={{ margin: 4 }}>
      <Grid item xs={12}>
        <label
          for="inputTag"
          style={{ color: "var(--main-color)", cursor: "pointer" }}
        >
          Fes una foto de l'objecte trobat
          <br />
          <input
            id="inputTag"
            name="image"
            type="file"
            accept="image/*"
            onChange={_onChange}
            style={{ display: "none" }}
          />
          <CameraAltIcon fontSize="large" />
          <br />
        </label>

        <Box sx={{ m: 2 }}>
          <Thumb file={file} src={src}></Thumb>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageStep;
