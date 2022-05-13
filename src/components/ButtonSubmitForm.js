function ButtonSubmitForm({ popupName, buttonText }) {
  return (
    <button
      className="popup__saved-btn"
      type="submit"
      aria-label={`${popupName} button`}>
      {buttonText}
    </button>
  );
}

export default ButtonSubmitForm;