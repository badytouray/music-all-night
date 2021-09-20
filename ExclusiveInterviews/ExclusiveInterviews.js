import React from "react";
import "./ExclusiveInterviews.css";
import ExclusiveInterviewsItems from "./ExclusiveInterviewsItems";
import Nicky from "../../Media/Interview Pictures/nicky.jpeg";
import Fifty from "../../Media/Interview Pictures/Fifty.jpeg";
// import Footer from "../Footer/Footer";


export function ExclusiveInterviews() {

  return (
    <>
    <div className="cards">
    <h1>Exclusive Interviews</h1>
    <h3>We have had the priverledge to spend some time catching up with some amazing people, so we have asked the questions that you wold want to know</h3>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <ExclusiveInterviewsItems 
            src={Nicky}
            label="Exclusive Interview"
            text="Want to know how Nicky Blackmarket stayed relevant in the industry and boosted mental health during the pandemic? Find out 5 simple ways today."
            path="/nicky-bm-interviews"
          />
           <ExclusiveInterviewsItems
            src={Fifty}
            label="Exclusive Interview" text="5 simple tips from Nicky Blackmarket on how to stay relevant in your industry while boosting mental health."
            path="/interviews"
          />
        </ul>
      </div>
    </div>
  </div>
  {/* <Footer /> */}
  </>
);

}

export default ExclusiveInterviews;

