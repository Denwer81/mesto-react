function ButtonSubmitForm({ popupName, handleSubmitForm}) {
  return (
    <button
      className="popup__saved-btn"
      onClick={(evt) => handleSubmitForm(evt)}
      type="submit"
      aria-label={`${popupName} button`}>
      {popupName === 'delete-card' ? 'Да' : 'Сохранить'}
    </button>
  );
}

export default ButtonSubmitForm;