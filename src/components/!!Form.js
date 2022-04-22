function Form({ formName }) {
  return (
    <form className={`popup__form popup__form_type_${formName}`} name={`${formName}-form`} noValidate>
      <input id="avatar-url-input" className="popup__input popup__input_avatar_link" type="url" name="avatar-image-url"
        placeholder="Ссылка на аватар" required />
      <span id="avatar-url-input-error" className="popup__error popup__error_hidden"></span>
      <button className="popup__saved-btn" type="submit" aria-label={`${formName} button`}>
        {formName === 'delete-card' ? 'Да' : 'Сохранить'}
      </button>
    </form>
  );
}

export default Form;