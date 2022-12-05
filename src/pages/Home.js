import "../App.css";
import Benvinguda from "../components/Benvinguda";
import Cards from "../components/Cards";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Benvinguda />
      <Cards />
    </>
  );
};

export default Home;
