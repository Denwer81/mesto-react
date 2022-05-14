import PopupWithForm from "./PopupWithForm";
import ButtonSubmitForm from "./ButtonSubmitForm";

function AddCardPopup({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const popupName = "add-card";

  return (
    <PopupWithForm
      title="Новое Место"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={onSubmitForm}>
      {/* <InputWithValidationMessege
        popupName={popupName}
        type="text"
        name="place"
        placeholder="Название" 
        minLength="2"
        maxLength="30" />
      <InputWithValidationMessege
        popupName="add-card"
        type="url"
        name="url"
        placeholder="Ссылка на картинку" /> */}
       <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? "Сохранение..." : "Сохранить"} />
    </PopupWithForm>
  )
}

export default AddCardPopup;