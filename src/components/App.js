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
  const [isLoading, setIsLoading] = React.useState(false);

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
        const formattedCardData = cardsData.map(cardData => {
          return {
            title: cardData.name,
            link: cardData.link,
            cardId: cardData._id,
            likes: cardData.likes,
            createByUserId: cardData.owner._id,
          }
        });
        setCards(formattedCardData);
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(cardId, isLiked) {
    api.likesCard(cardId, isLiked)
      .then(newCardData => {
        setCards(cards => cards.map(card => card.cardId === cardId
          ? { ...card, likes: newCardData.likes }
          : card));
      })
      .catch(err => console.log(err));
  }

  function handleSubmitDeleteForm() {
    setIsLoading(true);
    api.deleteCard(selectedCard.cardId)
      .then((cardDelete) => {
        if (cardDelete) {
          setCards(cards => cards.filter(card => card.cardId !== selectedCard.cardId));
        };
        handleCloseAllPopup();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);;
        }, 300);
      })
  }

  function handleSubmitEditForm({ userName, userAbout }) {
    setIsLoading(true);
    api.editProfile(userName, userAbout)
      .then(data => {
        setCurrentUser({ ...currentUser, name: data.name, description: data.about })
        handleCloseAllPopup();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);;
        }, 300);
      })
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

  function handleCloseAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setTimeout(() => {
      setSelectedCard({});
    }, 300);
    unlockScroll();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">

        <div className="page__container">
          <Header />
          <Main
            initialCards={cards}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            handleDeleteCard={handleDeleteCard} />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          closePopup={handleCloseAllPopup}
          onSubmitForm={handleSubmitEditForm}
          isLoading={isLoading} />

        <ChangeAvatar
          isOpen={isEditAvatarPopupOpen}
          closePopup={handleCloseAllPopup}
          // onSubmitForm={11}
          isLoading={isLoading} />

        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          closePopup={handleCloseAllPopup}
          // onSubmitForm={11}
          isLoading={isLoading} />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          closePopup={handleCloseAllPopup}
          onSubmitForm={handleSubmitDeleteForm}
          isLoading={isLoading} />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          closePopup={handleCloseAllPopup} />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;