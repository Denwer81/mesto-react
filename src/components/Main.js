function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="main">

      <section className="profile container main__profile">
        <button
          className="profile__image"
          onClick={onEditAvatar}
          type="button"
          aria-label="аватар">
        </button>
        <div className="profile__info">
          <h1 className="profile__user-name">temp</h1>
          <button
            className="profile__edit-btn"
            onClick={onEditProfile}
            type="button"
            aria-label="редактировать профиль">
          </button>
          <p className="profile__text"></p>
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
        </ul>
      </section>

    </main>
  );
}

export default Main;