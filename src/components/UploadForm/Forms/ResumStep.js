import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@mui/material";
import Thumb from "../Helper/Thumb";
import { Box, Grid } from "@mui/material";

function ResumStep(props) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [src, setSrc] = useState("");

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
    <Box sx={{ m: 5, ml: 0 }}>
      <Typography gutterBottom variant="h5" sx={{ ml: 5 }}>
        Repassa les dades introduides
      </Typography>
      <Divider></Divider>
      <Grid container spacing={2} columns={16} sx={{ m: 3, ml: 0 }}>
        <Grid item sm={8}>
          <Box>
            <Thumb file={file} src={src}></Thumb>
          </Box>
        </Grid>
        <Grid item sm={8}>
          <Typography gutterBottom>
            <b>{"Títol: "}</b>
            {props.formData.title &&
              props.formData.title.charAt(0).toUpperCase() +
                props.formData.title.slice(1)}
          </Typography>
          <Typography gutterBottom>
            <b>{"Categoria: "}</b>
            {props.formData.categories &&
              props.formData.categories.charAt(0).toUpperCase() +
                props.formData.categories.slice(1)}{" "}
          </Typography>
          <Typography gutterBottom>
            <b>Info detall:</b>
            <br />
            {props.formData.detailInfo &&
              props.formData.detailInfo.charAt(0).toUpperCase() +
                props.formData.detailInfo.slice(1)}
          </Typography>
          <Typography gutterBottom>
            <b>{"Data trobat: "}</b>
            {props.formData.date &&
              [
                new Date(props.formData.date).getDate(),
                (new Date(props.formData.date).getMonth() + 1)
                  .toString()
                  .padStart(2, "0"),
                new Date(props.formData.date).getFullYear(),
              ].join("-")}
          </Typography>
          <Typography gutterBottom>
            <b>{"Lloc: "}</b>
            {props.formData.lloc &&
              props.formData.lloc.charAt(0).toUpperCase() +
                props.formData.lloc.slice(1)}
          </Typography>
          <Typography gutterBottom>
            <b>{"Telèfon contacte: "}</b>
            {props.formData.telefon}
          </Typography>
          <Typography gutterBottom>
            <b>{"Lloc d'emmagatzematge: "}</b>
            {props.formData.recollida &&
              props.formData.recollida.charAt(0).toUpperCase() +
                props.formData.recollida.slice(1)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResumStep;
