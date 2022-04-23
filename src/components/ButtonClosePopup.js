function ButtonClosePopup({ setIsOpen }) {
  return (
    <button
      className="popup__closed-btn"
      type="button"
      aria-label="закрыть popup"
      onClick={setIsOpen}>
    </button>
  );
}

export default ButtonClosePopup;