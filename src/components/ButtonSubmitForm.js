function ButtonSubmitForm({ popupName }) {
  return (
    <button
      className="popup__saved-btn"
      type="submit"
      aria-label={`${popupName} button`}>
      {popupName === 'delete-card' ? 'Да' : 'Сохранить'}
    </button>
  );
}

export default ButtonSubmitForm;