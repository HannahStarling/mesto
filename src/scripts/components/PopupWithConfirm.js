import Popup from './Popup';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._button = this._form.querySelector('.popup__btn_action_submit');
    this._buttonText = this._button.textContent;
  }

  confirmHandler(submitHandler) {
    this._submitHandler = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }

  renderLoading(isLoading) {
    isLoading
      ? (this._button.textContent = 'Удаление...')
      : (this._button.textContent = this._buttonText);
  }
}
