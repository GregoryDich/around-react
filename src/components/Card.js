import React from "react";
import deleteButton from "../images/deleteButton.svg";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="card">
      <button className="card__delete-button" type="button">
        <img src={deleteButton} alt="trash basket" />
      </button>
      <img
        onClick={handleClick}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <div className="card__info">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__like-button-wrapper">
          <button type="button" className="card__like-button"></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
