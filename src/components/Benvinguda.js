import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Benvinguda.css";

function Benvinguda() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>trobat.cat</h1>
      <p>Benvinguts al futur de la gestió d'objectes perduts.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/buscador"
        >
          BUSCADOR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          VEURE VIDEO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Benvinguda;
