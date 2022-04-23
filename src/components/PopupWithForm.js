import React from 'react';
import ButtonSubmitForm from "./ButtonSubmitForm";
import ButtonClosePopup from "./ButtonClosePopup";



function PopupWithForm({ title, popupName, children, isOpen, setIsOpen, closeByOverlay }) {
  return (
      <div className={`popup popup_type_${popupName} ${isOpen ? 'popup_opened' : ''}`}
        onMouseDown={(evt) => closeByOverlay(evt)}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form className={`popup__form popup__form_type_${popupName}`} name={`${popupName}-form`} noValidate>
            {children}
            <ButtonSubmitForm popupName={popupName} />
          </form>
          <ButtonClosePopup setIsOpen={setIsOpen} />
        </div>
      </div>
  );
}

export default PopupWithForm;