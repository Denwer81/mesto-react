import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import ChangeAvatar from './ChangeAvatarPopup';
import AddCardPopup from './AddCardPopup';
import DeleteCardPopup from './DeleteCardPopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import { lockScroll, unlockScroll } from '../utils/scroll';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  React.useEffect(() => {
    api.getProfile()
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          description: userData.about,
          avatar: userData.avatar,
          id: userData._id
        })
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(cardsData => {
        const fomattedCardData = cardsData.map(cardData => {
          return {
            title: cardData.name,
            link: cardData.link,
            cardId: cardData._id,
            likes: cardData.likes,
            likesCount: cardData.likes.length,
            createByUserId: cardData.owner._id,
          }
        });
        setCards(fomattedCardData);
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(cardId, isLiked) {
    api.likesCard(cardId, isLiked)
      .then(newCardData => {
        setCards(state => state.map(card => card.cardId === cardId
          ? {
            title: newCardData.name,
            link: newCardData.link,
            cardId: newCardData._id,
            likes: newCardData.likes,
            likesCount: newCardData.likes.length,
            createByUserId: newCardData.owner._id,
          }
          : card));
      })
      .catch(err => console.log(err));
  }

  function handleSubmitDeleteForm(evt) {
    evt.preventDefault();
    api.deleteCard(selectedCard.cardId)
      .then((cardDelete) => {
        console.log(cardDelete)
        setCards(state => state.filter(card => card.cardId !== selectedCard.cardId));
        handleCloseAllPopup();
      })
      .catch(err => console.log(err));
  }



  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    lockScroll();
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    lockScroll();
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    lockScroll();
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setIsImagePopupOpen(true);
    lockScroll();
  }

  function handleDeleteCard(cardData) {
    setSelectedCard(cardData);
    setIsDeleteCardPopupOpen(true);
    lockScroll();
  }

  const handleCloseAllPopup = React.useCallback(
    () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsImagePopupOpen(false);
      setIsDeleteCardPopupOpen(false);
      setTimeout(() => {
        setSelectedCard({});
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
      if (evt.key === 'Escape') {
        handleCloseAllPopup();
      }
    }

    if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isImagePopupOpen || isDeleteCardPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      }
    }
  }, [
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isImagePopupOpen,
    handleCloseAllPopup,
    isDeleteCardPopupOpen
  ])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">

        <div className="page__container">
          <Header />
          <Main
            initialCards={cards}
            handleCardLike={handleCardLike}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            handleDeleteCard={handleDeleteCard}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          closePopup={handleCloseAllPopup}
          closeByOverlay={handleClosePopupOverlay} />

        <ChangeAvatar
          isOpen={isEditAvatarPopupOpen}
          closePopup={handleCloseAllPopup}
          closeByOverlay={handleClosePopupOverlay} />

        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          closePopup={handleCloseAllPopup}
          closeByOverlay={handleClosePopupOverlay} />

        <DeleteCardPopup
          handleSubmitForm={handleSubmitDeleteForm}
          isOpen={isDeleteCardPopupOpen}
          closePopup={handleCloseAllPopup}
          closeByOverlay={handleClosePopupOverlay} />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          closePopup={handleCloseAllPopup}
          closeByOverlay={handleClosePopupOverlay} />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;