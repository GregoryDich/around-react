import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleImagePopupOpen(card) {
    setSelectedCard(card);
  } 
  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }
  function openAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }
  function openEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setSelectedCard(null);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={openEditProfilePopup}
        onAddPlaceClick={openAddPlacePopup}
        onEditAvatarClick={openEditAvatarPopup}
        onCardClick={handleImagePopupOpen}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile"
        title="Edit profile"
      >
        <input
          className="popup__form-input popup__form-input_type_name"
          type="text"
          placeholder="Name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error name-input-error"></span>
        <input
          className="popup__form-input popup__form-input_type_profession"
          type="text"
          placeholder="About me"
          name="profession"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error profession-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="place"
        title="New Place"
      >
        <input
          className="popup__form-input popup__form-input_type_title"
          type="text"
          placeholder="Title"
          name="place"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error place-input-error"></span>
        <input
          className="popup__form-input popup__form-input_type_url"
          type="url"
          placeholder="Image URL"
          name="url"
          required
        />
        <span className="popup__error url-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Change profile picture"
      >
        <input
          className="popup__form-input popup__form-input_type_avatar"
          type="url"
          placeholder="Link to image"
          name="avatar"
          required
        />
        <span className="popup__error avatar-input-error"></span>
      </PopupWithForm>
      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button popup__close-button_type_delete"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <form
            className="popup__form popup__form_type_delete"
            name="deleteCard"
            action="#"
            noValidate
          >
            <button className="popup__button popup__form-button" type="submit">
              Yes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
