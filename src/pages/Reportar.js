import { useEffect } from "react";

const Reportar = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return <h1>Reportar</h1>;
};

export default Reportar;
