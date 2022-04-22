import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import InputWithValidationMessege from './InputWithValidationMessege';
import ImagePopup from './ImagePopup';

function App() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_change-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  return (
    <div className="app">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm title="Редактировать профиль" popupName="edit-profile">
        <InputWithValidationMessege
          popupName="edit-profile"
          type="text"
          name="UserName"
          placeholder="Имя"
        />
        <InputWithValidationMessege
          popupName="edit-profile"
          type="text"
          name="UserAbout"
          placeholder="Профессия"
        />
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" popupName="change-avatar">
        <InputWithValidationMessege
          popupName="change-avatar"
          type="url"
          name="url"
          placeholder="Обновить аватар" />
      </PopupWithForm>

      <PopupWithForm title="Новое Место" popupName="add-card">
        <InputWithValidationMessege
          popupName="add-card"
          type="text"
          name="place"
          placeholder="Название" />
        <InputWithValidationMessege
          popupName="add-card"
          type="url"
          name="url"
          placeholder="Ссылка на картинку" />
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" popupName="delete-card" />

      <ImagePopup />

      <template className="card-template">
        <li className="card">
          <button className="card__delete-btn card__delete-btn_hidden" type="button" aria-label="удалить карточку"></button>
          <img className="card__image" src="#" alt="#" loading="lazy" />
          <div className="card__info">
            <h2 className="card__title">temp</h2>
            <div className="card__like-container">
              <button className="card__like-btn" type="button" aria-label="лайк карточки"></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;