function InputWithValidationMessege({ popupName, type, name, placeholder }) {
  return (
    <>
      <input
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-${name}-input`}
        type={type}
        name={`${popupName}-${name}`}
        placeholder={placeholder} required
      />
      <span
        className="popup__error popup__error_hidden"
        id={`${popupName}-${name}-input-error`}>
      </span>
    </>
  );
}

export default InputWithValidationMessege;