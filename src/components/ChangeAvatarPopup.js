import React from "react";
import PopupWithForm from "./PopupWithForm";
import ErrorMessage from "./ErrorMessage";
import ButtonSubmitForm from "./ButtonSubmitForm";

function ChangeAvatar({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const popupName = "change-avatar";

  return (
    <PopupWithForm
      title="Обновить аватар"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={onSubmitForm}>
      <input
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-userDescription-input`}
        type="url"
        name={`${popupName}-url`}
        placeholder="Обновить аватар"
        required
        onChange={(evt) => console.log(evt)} />
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