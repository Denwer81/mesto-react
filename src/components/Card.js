function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <li className="card">
      <button
        className="card__delete-btn card__delete-btn_hidden"
        type="button"
        aria-label="удалить карточку">
      </button>
      <img className="card__image"
        onClick={handleClick}
        src={cardData.link}
        alt={cardData.title}
        loading="lazy" />
      <div className="card__info">
        <h2 className="card__title">{cardData.title}</h2>
        <div className="card__like-container">
          <button className="card__like-btn" type="button" aria-label="лайк карточки"></button>
          <p className="card__like-counter">{cardData.likesCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;