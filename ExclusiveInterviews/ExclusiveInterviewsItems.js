import React from "react";
import { Link } from "react-router-dom";
import "./ExclusiveInterviews.css"

function ExclusiveInterviewsItems(props) {
  return (
    <>
    <li className="cards__item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="Travel Image"
            src={props.src}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          {/* <p className="cards__item__text">{props.price}</p> */}
          <button className="button_book">Read more</button>
        </div>
      </Link>
    </li>
  </>
);
}

export default ExclusiveInterviewsItems;

