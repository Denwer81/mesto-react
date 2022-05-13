import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import InputWithValidationMessege from './InputWithValidationMessage';
import ButtonSubmitForm from "./ButtonSubmitForm";


function EditProfilePopup({ isOpen, closePopup, closeByOverlay, onSubmitForm, isLoading }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);
  const popupName = "edit-profile";

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.description);
  }, [currentUser]);

  function handleInputUserName(value) {
    setUserName(value);
  }

  function handleInputDescription(value) {
    setUserDescription(value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}
      onSubmitForm={() => onSubmitForm({
        userName: userName,
        userAbout: userDescription
      })}>
      <InputWithValidationMessege
        popupName={popupName}
        type="text"
        name="UserName"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={userName}
        onChangeInput={handleInputUserName} />
      <InputWithValidationMessege
        popupName={popupName}
        type="text"
        name="UserAbout"
        placeholder="Профессия" 
        minLength="2"
        maxLength="200" 
        value={userDescription} 
        onChangeInput={handleInputDescription} />
      <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
    </PopupWithForm>
  )
}


/* <input
className={`popup__input popup__input_${popupName}`}
id={`${popupName}-UserName-input`}
type="text"
name={`${popupName}-UserName`}
placeholder="Имя"
minLength="2"
maxLength="40"
required
value={userName || ''}
onChange={handleInputUserName} />
<span
className="popup__error popup__error_hidden"
id={`${popupName}-UserName-input-error`}>
</span> */

export default EditProfilePopup;