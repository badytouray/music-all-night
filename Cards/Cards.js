import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import Afro from "../../Afro-Beats.jpeg";
import DNB from "../../D&BInsta.png";


function Cards() {
  return (
    <>
    <div className="cards">
      <h1>Welcome to Music All Night</h1>
      <h3>We provide beauty treatments to suit your needs, either by attending our treatment room or we visit your home, the result will always be satsifying. We speciality is Waxing however we still maintaining a high leavel of returning client for the other treatments.</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={DNB}
              label="31st October"
              text="D&B! Day of the dead with Nicky Blackmarket - There is no better time to let youself go and enjoy the festive season till 7am with no excuse or reason"
              label="31st October"
              path="/drum-n-bass"
            />
            <CardItem
              src={Afro}
              label="Date TBC"
              text="Date and venue to be confirmed - Afro beats is the new mainstream music to get the party started and everybody dancing even if you no moves"
              path="/afro-beats"
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
