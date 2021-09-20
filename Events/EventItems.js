import React from "react";
import { Link } from "react-router-dom";
import "./Events.css"

function EventItems(props) {
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
          <p className="cards__item__text">{props.price}</p>
          <span className="cards__item__text">{props.href}</span>

          <button className="button_book" href="https://www.skiddle.com/e/35899068">Buy tickets</button>
        </div>
      </Link>
    </li>
  </>
);
}

export default EventItems;

