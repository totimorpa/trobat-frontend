import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Benvinguda.css";

function Benvinguda() {
  return (
    <div className="benvinguda-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>trobat.cat</h1>
      <p>
        Benvinguts al gestor d'objectes perduts de Catalunya.<br></br> Eina per
        a <b>catalogar</b>, <b>buscar</b> i <b>recuperar</b> pertinences
        perdudes.
      </p>
      <div className="benvinguda-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/buscador"
        >
          BUSCADOR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/reportar"
        >
          REPORTAR
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          VEURE VIDEO <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default Benvinguda;
