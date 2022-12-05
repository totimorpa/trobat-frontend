import { useEffect } from "react";

const Notificacio = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <h1>Notificacio</h1>;
};

export default Notificacio;
