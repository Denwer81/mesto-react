import ButtonSubmitForm from "./ButtonSubmitForm";
import ButtonClosePopup from "./ButtonClosePopup";

function PopupWithForm({ title, popupName, children }) {
  return (
    <>
      <div className={`popup popup_type_${popupName}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form className={`popup__form popup__form_type_${popupName}`} name={`${popupName}-form`} noValidate>
            {children}
            <ButtonSubmitForm popupName={popupName} />
          </form>
          <ButtonClosePopup />
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;