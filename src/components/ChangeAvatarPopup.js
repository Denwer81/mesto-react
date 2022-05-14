import React from "react";
import PopupWithForm from "./PopupWithForm";
import ErrorMessage from "./ErrorMessage";
import ButtonSubmitForm from "./ButtonSubmitForm";

function ChangeAvatar({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const inputAvatar = React.useRef();
  const popupName = "change-avatar";
  function handleSubmitForm() {
    onSubmitForm(inputAvatar.current.value);
    inputAvatar.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={handleSubmitForm}>
      <input
        ref={inputAvatar}
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-userDescription-input`}
        type="url"
        name={`${popupName}-url`}
        placeholder="Обновить аватар"
        required />
      <ErrorMessage
        popupName={popupName}
        name="userName" />
      <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
    </PopupWithForm>
  )
}

export default ChangeAvatar;