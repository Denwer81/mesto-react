import PopupWithForm from "./PopupWithForm";
import InputWithValidationMessege from './InputWithValidationMessage';
import ButtonSubmitForm from "./ButtonSubmitForm";

function ChangeAvatar({ isOpen, closePopup, closeByOverlay, onSubmitForm, isLoading }) {
  const popupName = "change-avatar";

  return (
    <PopupWithForm
      title="Обновить аватар"
      popupName={popupName}
      onSubmitForm={onSubmitForm}
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}>
      <InputWithValidationMessege
        popupName={popupName}
        type="url"
        name="url"
        placeholder="Обновить аватар" 
        minLength="2"
        maxLength="200" />
      <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
    </PopupWithForm>
  )
}

export default ChangeAvatar;