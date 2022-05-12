import PopupWithForm from "./PopupWithForm";
import InputWithValidationMessege from './InputWithValidationMessege';

function ChangeAvatar({ isOpen, closePopup, closeByOverlay }) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      popupName="change-avatar"
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}>
      <InputWithValidationMessege
        popupName="change-avatar"
        type="url"
        name="url"
        placeholder="Обновить аватар" />
    </PopupWithForm>
  )
}

export default ChangeAvatar;