import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import InputWithValidationMessege from './InputWithValidationMessege';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [cards, setCads] = React.useState([]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCloseAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleClosePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      handleCloseAllPopup();
    }
  }

  React.useEffect(() => {
    function handleEscapeKey(evt) {
      if (evt.key === 'Escape') {
        handleCloseAllPopup();
      }
    }
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(cardsData => {
        const fomattedCardData = cardsData.map(cardData => {
          return {
            title: cardData.name,
            link: cardData.link,
            cardId: cardData._id,
            likesCount: cardData.likes.length,
            createByUserId: cardData.owner._id
          }
        });
        setCads(fomattedCardData);
      })
  }, []);

  return (
    <div className="app">

      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          initialCards={cards} />
        <Footer />
      </div>

      <PopupWithForm
        title="Редактировать профиль"
        popupName="edit-profile"
        isOpen={isEditProfilePopupOpen}
        setIsOpen={handleEditProfileClick}
        closeByOverlay={handleClosePopupOverlay}>
        <InputWithValidationMessege
          popupName="edit-profile"
          type="text"
          name="UserName"
          placeholder="Имя" />
        <InputWithValidationMessege
          popupName="edit-profile"
          type="text"
          name="UserAbout"
          placeholder="Профессия" />
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        popupName="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        setIsOpen={handleEditAvatarClick}
        closeByOverlay={handleClosePopupOverlay}>
        <InputWithValidationMessege
          popupName="change-avatar"
          type="url"
          name="url"
          placeholder="Обновить аватар" />
      </PopupWithForm>

      <PopupWithForm
        title="Новое Место"
        popupName="add-card"
        isOpen={isAddPlacePopupOpen}
        setIsOpen={handleAddPlaceClick}
        closeByOverlay={handleClosePopupOverlay}>
        <InputWithValidationMessege
          popupName="add-card"
          type="text"
          name="place"
          placeholder="Название" />
        <InputWithValidationMessege
          popupName="add-card"
          type="url"
          name="url"
          placeholder="Ссылка на картинку" />
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" popupName="delete-card" />

      <ImagePopup
        closeByOverlay={handleClosePopupOverlay} />

    </div>
  );
}

export default App;