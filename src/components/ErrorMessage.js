function ErrorMessage({ popupName, name }) {
  return (
    <span
      className="popup__error popup__error_hidden"
      id={`${popupName}-${name}-input-error`}>
    </span>
  )
}

export default ErrorMessage;