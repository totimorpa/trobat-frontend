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
            m: 2,
            p: 2,
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 2,
            width: "80%",
          }}
        >
          Aqui van els filtres
        </Box>
        <LostObjects />
      </Grid>
    </>
  );
};

export default Buscador;
