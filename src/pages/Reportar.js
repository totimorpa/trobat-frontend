import { useEffect } from "react";
import { Box } from "@mui/system";

const Reportar = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: 300,
        width: "80%",
        m: "auto",
        mt: 3,
        mb: 3,
        p: 3,
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h2>
        Pagina per a reportar un objecte sota desenvolupament, si us plau espera
        uns dies.
      </h2>
    </Box>
  );
};

export default Reportar;
