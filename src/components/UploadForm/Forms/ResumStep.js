import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@material-ui/core";
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
    <React.Fragment>
      <Typography gutterBottom variant="h5">
        Repassa les dades introduides
      </Typography>
      <Divider></Divider>
      <Grid container spacing={2} columns={16} sx={{ m: 3 }}>
        <Grid item sm={8}>
          <Typography gutterBottom>
            <b>{"Títol: "}</b>
            {props.formData.title}
          </Typography>
          <Box>
            <Thumb file={file} src={src}></Thumb>
          </Box>
          <Typography gutterBottom>
            <b>{"Categoria: "}</b>
            {props.formData.categories}
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography gutterBottom>
            <b>Info detall:</b>
            <br />
            {props.formData.detailInfo}
          </Typography>
          <Typography gutterBottom>
            <b>{"Data trobat: "}</b>
            {props.formData.date && props.formData.date.toString()}
          </Typography>
          <Typography gutterBottom>
            <b>{"Lloc: "}</b>
            {props.formData.llocs}
          </Typography>
          <Typography gutterBottom>
            <b>{"Telefon contacte: "}</b>
            {props.formData.telefon}
          </Typography>
          <Typography gutterBottom>
            <b>{"Lloc on es guardarà: "}</b>
            {props.formData.recollida}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ResumStep;
