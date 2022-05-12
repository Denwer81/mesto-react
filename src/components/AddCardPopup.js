import PopupWithForm from "./PopupWithForm";
import InputWithValidationMessege from './InputWithValidationMessege';

function AddCardPopup({ isOpen, closePopup, closeByOverlay }) {
  return (
    <PopupWithForm
      title="Новое Место"
      popupName="add-card"
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}>
      <InputWithValidationMessege
        popupName="add-card"
        type="text"
        name="place"
        placeholder="Название" />
      <InputWithValidationMessege
        popupName="add-card"
        type="url"
        name="url"
        placeholder="Ссылка на картинку" />
    </PopupWithForm>
  )
}

export default AddCardPopup;