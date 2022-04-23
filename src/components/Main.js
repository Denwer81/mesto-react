import React from 'react';
import api from '../utils/Api'
import Card from './card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, initialCards }) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setuserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [userId, setUserId] = React.useState(null);

  React.useEffect(() => {
    api.getProfile()
      .then((usedData) => {
        setUserName(usedData.name);
        setuserDescription(usedData.about);
        setUserAvatar(usedData.avatar);
        setUserId(usedData._id);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="main">

      <section className="profile container main__profile">
        <button
          className="profile__image"
          onClick={onEditAvatar}
          type="button"
          aria-label="аватар"
          style={{ backgroundImage: `url(${userAvatar})` }}>
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name">{userName}</h1>
          <button
            className="profile__edit-btn"
            onClick={onEditProfile}
            type="button"
            aria-label="редактировать профиль">
          </button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          className="profile__add-card-btn"
          onClick={onAddPlace}
          type="button"
          aria-label="меню добавления карточки">
        </button>
      </section>

      <section className="cards container">
        <ul className="cards__list">
          {
            initialCards.map(data => (
              <Card cardData={data} />
            ))
          }
        </ul>
      </section>

    </main>
  );
}

export default Main;