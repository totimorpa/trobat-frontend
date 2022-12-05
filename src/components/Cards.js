import React from "react";
import "./Cards.css";
import CardItem from "./UI/CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Descobreix les tres funcions de trobat.cat</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="El buscador amb filtres per trobar el teu objecte perdut 🔎"
              path="/buscador"
            />
            <CardItem
              src="images/img-4.jpg"
              text="L'eina per reportar un objecte que has trobat 👁"
              path="/reportar"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Subscriu-te a un filtre per a que et notifiqui cada vegada que un objecte nou encaixa amb la teva descripcio 📩"
              path="/notificacio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
