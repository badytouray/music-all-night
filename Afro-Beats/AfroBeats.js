import React from "react";
import AfroBeatsItems from "./AfroBeatsItems";
import Afro from "../../Afro-Beats.jpeg";

import "./AfroBeats.css";
import Footer from "../Footer/Footer";

function AfroBeats() {
  return (
    <>
    <div className="cards">
      <h1>Afro Beats Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <AfroBeatsItems
              src={Afro}
              text="Afro Beats All night"
              // price="£24.99"
              info="Best bprobg i have ever had in tmy life x please get this shit so can make more money and buy a phat house and work from home, thank you so much."
              label="Afro Beats"
              path="/afro-beats"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AfroBeats;
