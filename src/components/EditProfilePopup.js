import PopupWithForm from "./PopupWithForm";
import InputWithValidationMessege from './InputWithValidationMessege';

function EditProfilePopup({ isOpen, closePopup, closeByOverlay }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      popupName="edit-profile"
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}>
      <InputWithValidationMessege
        popupName="edit-profile"
        type="text"
        name="UserName"
        placeholder="Имя" />
      <InputWithValidationMessege
        popupName="edit-profile"
        type="text"
        name="UserAbout"
        placeholder="Профессия" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;