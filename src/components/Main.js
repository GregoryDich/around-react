import React from "react";
import avatarPencil from "../images/pencil.svg";
import addButton from "../images/addButton.svg";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <section className="user">
        <div className="user__avatar">
          <div onClick={onEditAvatarClick} className="user__avatar-overlay">
            <img
              className="user__avatar-overlay-icon"
              src={avatarPencil}
              alt="avatar"
            />
          </div>
          <img className="user__avatar-image" src={userAvatar} alt="jacques" />
        </div>
        <div className="user__information">
          <div className="user__name-wrapper">
            <h1 className="user__name">{userName}</h1>
            <button
              onClick={onEditProfileClick}
              type="button"
              className="user__edit-button"
            ></button>
          </div>
          <p className="user__profession">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlaceClick}
          className="user__add-button"
          type="button"
        >
          <img
            className="user__add-button-icon"
            src={addButton}
            alt="add button icon"
          />
        </button>
      </section>
      <section className="gallery">
        {cards &&
          cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
      </section>
    </main>
  );
}
export default Main;
