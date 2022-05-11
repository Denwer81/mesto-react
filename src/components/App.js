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
  const [cards, setCads] = React.useState([]);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', title: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    lockScroll()
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    lockScroll()
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    lockScroll()
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setIsImagePopupOpen(true);
    lockScroll()
  }

  const handleCloseAllPopup = React.useCallback(
    () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setTimeout(() => {
      setSelectedCard({ link: '', title: '' });
    }, 300);
    unlockScroll();
    }, []
  )

  function handleClosePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      handleCloseAllPopup();
    }
  }

  React.useEffect(() => {
    function handleEscapeKey(evt) {
      if(evt.key === 'Escape') {
        handleCloseAllPopup();
      }
    }

    if(isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isImagePopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      }
    }
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, isImagePopupOpen, handleCloseAllPopup])

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
      .catch(err => console.log(err));
  }, []);

  function lockScroll() {
    const scrollBarSize = window.innerWidth - document.documentElement.clientWidth;
  
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarSize}px`;
  }
  
  function unlockScroll() {
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, 300);
  }

  return (
    <div className="app">

      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          initialCards={cards} 
          onCardClick={handleCardClick}
          />
        <Footer />
      </div>

      <PopupWithForm
        title="Редактировать профиль"
        popupName="edit-profile"
        isOpen={isEditProfilePopupOpen}
        closePopup={handleCloseAllPopup}
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
        closePopup={handleCloseAllPopup}
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
        closePopup={handleCloseAllPopup}
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
        isOpen={isImagePopupOpen}
        card={selectedCard}
        closePopup={handleCloseAllPopup}
        closeByOverlay={handleClosePopupOverlay} />

    </div>
  );
}

export default App;