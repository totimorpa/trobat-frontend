import "./App.css";
import NavBar from "./components/Nav/NavBar";
import { grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navigate, Route, Routes } from "react-router-dom";
import Buscador from "./pages/Buscador";
import Home from "./pages/Home";
import Notificacio from "./pages/Notificacio";
import Profile from "./pages/Profile";
import Reportar from "./pages/Reportar";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[800],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route
          path="/callback"
          element={<Navigate to="/" replace={true} />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buscador" element={<Buscador />}></Route>
        <Route path="/reportar" element={<Reportar />}></Route>
        <Route path="/notificacio" element={<Notificacio />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
