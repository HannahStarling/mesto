import Popup from './Popup';

export default class PopupWithError extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._errorContent = this._form.querySelector('.popup__title');
  }

  open({ name, isServerError }) {
    this._errorContent.textContent = isServerError
      ? name
      : 'Произошла ошибка, свяжитесь с технической поддержкой нашего приложения.';
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.close();
    });
  }
}
