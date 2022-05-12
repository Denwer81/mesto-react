import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, closePopup, closeByOverlay, handleSubmitForm }) {
  // function handleSubmitForm(evt) {
  //   evt.preventDefault();
  //   console.log('delete')
  // }

  return (
    <PopupWithForm
      title="Вы уверены?"
      popupName="delete-card"
      isOpen={isOpen}
      closePopup={closePopup}
      closeByOverlay={closeByOverlay}
      handleSubmitForm={handleSubmitForm}
    />
  )
}

export default DeleteCardPopup;