import ButtonClosePopup from "./ButtonClosePopup";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__image-text"></figcaption>
        <ButtonClosePopup />
      </figure>
    </div>
  );
}

export default ImagePopup;