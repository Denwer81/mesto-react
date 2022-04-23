import ButtonClosePopup from "./ButtonClosePopup";

function ImagePopup({ isOpen, card, closePopup, closeByOverlay }) {
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}
        onMouseDown={(evt) => closeByOverlay(evt)}>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.title} />
        <figcaption className="popup__image-text">{card.title}</figcaption>
        <ButtonClosePopup closePopup={closePopup} />
      </figure>
    </div>
  )
}

export default ImagePopup;