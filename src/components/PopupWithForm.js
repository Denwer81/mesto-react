import React from 'react';
import ButtonClosePopup from "./ButtonClosePopup";
import UseCloseByEsc from '../utils/UseCloseByEsc';
import closeByOverlay from '../utils/closeByOverlay';

function PopupWithForm({ title, popupName, children, isOpen, closePopup, onSubmitForm }) {
  UseCloseByEsc(isOpen, closePopup);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    onSubmitForm();
  };

  return (
    <div className={`popup popup_type_${popupName} ${isOpen ? 'popup_opened' : ''}`}
      onMouseDown={(evt) => closeByOverlay(evt, closePopup)}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type_${popupName}`}
          name={`${popupName}-form`}
          noValidate
          onSubmit={handleSubmitForm}>
          {children}
        </form>
        <ButtonClosePopup closePopup={closePopup} />
      </div>
    </div>
  );
}

export default PopupWithForm;