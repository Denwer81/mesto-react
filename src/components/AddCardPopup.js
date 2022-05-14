import React from "react";
import PopupWithForm from "./PopupWithForm";
import ButtonSubmitForm from "./ButtonSubmitForm";
import ErrorMessage from "./ErrorMessage";

function AddCardPopup({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const popupName = "add-card";
  const inputPlace = React.useRef();
  const inputUrl = React.useRef();

  function handleSubmitForm() {
    onSubmitForm(inputPlace.current.value, inputUrl.current.value)
    inputPlace.current.value = '';
    inputUrl.current.value = '';
  }

  return (
    <PopupWithForm
      title="Новое Место"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={handleSubmitForm}>
      <input
        ref={inputPlace}
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-place-input`}
        type="text"
        name={`${popupName}-place`}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required />
      <ErrorMessage popupName={popupName} name="place" />
      <input
        ref={inputUrl}
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-url-input`}
        type="url"
        name={`${popupName}-url`}
        placeholder="Ссылка на картинку"
        required />
      <ErrorMessage popupName={popupName} name="url" />
      <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
    </PopupWithForm>
  )
}

export default AddCardPopup;