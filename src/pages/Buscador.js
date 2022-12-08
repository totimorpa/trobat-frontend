import { Grid, Box } from "@mui/material";
import LostObjects from "../components/LostObjectsSearchTool/LostObjects";
import { useEffect } from "react";

const Buscador = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Grid container justifyContent="center">
        <Box
          sx={{
            backgroundColor: "white",
            height: 150,
            width: "80%",
            mt: 3,
            mb: 3,
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>
            Aquí van els filtres, ara per ara es retornen tots els objectes de
            la base de dades.
          </h2>
        </Box>
        <LostObjects />
      </Grid>
    </>
  );
};

export default Buscador;
