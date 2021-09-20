import React from "react";
import "./Events.css";
import EventItems from "./EventItems";
import DNB from "../../D&BInsta.png";
import Afro from "../../Afro-Beats.jpeg";

import Footer from "../Footer/Footer";


function Events() {
  return (
    <>
    <div className="cards">
    <h1>Events for Music All Night</h1>
    <h3>We provide beauty treatments to suit your needs, either by attending our treatment room or we visit your home.</h3>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <EventItems
            src={DNB}
            label="31st October"
            text="D&B! Day of the dead (Halloween Special) With Nicky Black Market"
            path="/drum-n-bass"
          />
           <EventItems
            src={Afro}
            label="Date TBC"
            text="Afro Beats - Explore the hidden waterfall deep inside the Amazon Jungle"
            path="/afro-beats"
          />
          {/* <EventItems
            src={Reggae}
            text="Reggae - Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Reggae"
            path="/reggae"
          />  */}
        </ul>
      </div>
    </div>
  </div>
  <Footer />
  </>
);

}

export default Events;

