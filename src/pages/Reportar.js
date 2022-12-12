import { useEffect } from "react";
import { Box } from "@mui/system";
import FormComponent from "../components/UploadForm/FormComponent";

const Reportar = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        m: 2,
        mt: 3,
        mb: 3,
        p: 3,
        borderRadius: 2,
      }}
    >
      <FormComponent />
    </Box>
  );
};

export default Reportar;
