function InputWithValidationMessage({ popupName, type, name, placeholder, minLength, maxLength, value, onChangeInput }) {
  return (
    <>
      <input
        className={`popup__input popup__input_${popupName}`}
        id={`${popupName}-${name}-input`}
        type={type}
        name={`${popupName}-${name}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
        value={value || ''}
        onChange={(evt) => onChangeInput(evt.target.value)}
      />
      <span
        className="popup__error popup__error_hidden"
        id={`${popupName}-${name}-input-error`}>
      </span>
    </>
  );
}

export default InputWithValidationMessage;