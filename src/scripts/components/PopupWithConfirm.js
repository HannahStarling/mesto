import Popup from './Popup';

// соответственно и переопределять выполняемую функцию надо только после нажатия на кнопку удаления
// (перед непосредственным открытием попапа)
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }
  // Поэтому должна быть возможность при открытии попапа переопределять через публичный метод (id)
  confirmHandler(submitHandler) {
    this._submitHandler = submitHandler;
  }
  // у него переопределеяется метод setEventListeners
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      //ничего не надо передавать, а просто вызывать функцию при сабмите.
      this._submitHandler();
      this.close();
    });
  }
}
