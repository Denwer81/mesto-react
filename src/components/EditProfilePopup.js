import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import ErrorMessage from "./ErrorMessage";
import ButtonSubmitForm from "./ButtonSubmitForm";

function EditProfilePopup({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);
  const popupName = "edit-profile";

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.description);
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={() => onSubmitForm({
        userName: userName,
        userAbout: userDescription
      })}>
      <input
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-userName-input`}
        type="text"
        name={`${popupName}-userName`}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        defaultValue={userName || ''}
        onChange={(evt) => setUserName(evt.target.value)} 
        required />
      <ErrorMessage popupName={popupName} name="userName" />
      <input
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-userDescription-input`}
        type="text"
        name={`${popupName}-userDescription`}
        placeholder="Профессия"
        minLength="2"
        maxLength="200"
        defaultValue={userDescription || ''}
        onChange={(evt) => setUserDescription(evt.target.value)} 
        required />
      <ErrorMessage
        popupName={popupName} name="userName" />
      <ButtonSubmitForm
        popupName={popupName} buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
      
    </PopupWithForm>
  )
}

export default EditProfilePopup;