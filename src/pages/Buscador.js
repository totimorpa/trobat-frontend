import { Grid } from "@mui/material";
import LostObjects from "../components/LostObjectsSearchTool/LostObjects";
import { useEffect, useState } from "react";
import Filter from "../components/LostObjectsSearchTool/Filter";

const Buscador = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [searchQuery, setSearchQuery] = useState(false);

  const handleSearch = () => {
    console.log("here");
    setSearchQuery(!searchQuery);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Filter handleSearch={handleSearch} />
        <LostObjects searchQuery={searchQuery} />
      </Grid>
    </>
  );
};

export default Buscador;
