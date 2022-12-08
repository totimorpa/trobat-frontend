import { Box } from "@mui/material";
import { useEffect } from "react";

const Notificacio = () => {
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
        Pagina de notificacions sota desenvolupament, si us plau espera uns
        dies.
      </h2>
    </Box>
  );
};

export default Notificacio;
