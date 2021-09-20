import React from "react";
import DrumBassItems from "./DrumBassItems";
import DNB from "../../D&BInsta.png";

import "./DrumBass.css";
import Footer from "../Footer/Footer";
// import Skiddle from "../Skiddle/Skiddle";

function DrumBass() {
  return (
    <>
    <div className="cards">
      <h1>Drum & Bass Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
         {/* <Skiddle /> */}
            <DrumBassItems
              src={DNB}
              text="D&B! Day of the dead (Halloween Special)"
              price="£14.99"
              info="Best bprobg i have ever had in tmy life x please get this shit so can make more money and buy a phat house and work from home, thank you so much."
              label="Drum & Bass"
              path="/drum-n-bass"
              path="/https://www.skiddle.com/e/35899068"
            />
            
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default DrumBass;
