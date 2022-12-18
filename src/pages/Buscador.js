import { Grid } from "@mui/material";
import LostObjects from "../components/LostObjectsSearchTool/LostObjects";
import { useEffect } from "react";
import Filter from "../components/LostObjectsSearchTool/Filter";

const Buscador = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Grid container justifyContent="center">
        <Filter />
        <LostObjects />
      </Grid>
    </>
  );
};

export default Buscador;
