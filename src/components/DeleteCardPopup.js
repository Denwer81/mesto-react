import PopupWithForm from "./PopupWithForm";
import ButtonSubmitForm from "./ButtonSubmitForm";

function DeleteCardPopup({ isOpen, closePopup, onSubmitForm, isLoading }) {
  const popupName = "delete-card";

  return (
    <PopupWithForm
      title="Вы уверены?"
      popupName={popupName}
      isOpen={isOpen}
      closePopup={closePopup}
      onSubmitForm={onSubmitForm}>
      <ButtonSubmitForm
        popupName={popupName}
        buttonText={isLoading ? 'Удаление...' : 'Да'} />
    </PopupWithForm>
  )
}

export default DeleteCardPopup;