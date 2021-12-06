export default class Popup {
  // Принимает в конструктор единственный параметр — селектор попапа.
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  //Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }
  //Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  //Модальное окно также закрывается при клике на затемнённую область вокруг формы.
  _handleOverlayClose(evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.close();
  }
  //Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
  setEventListeners() {
    this._popup
      .querySelector('.popup__btn_action_close')
      .addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) =>
      this._handleOverlayClose(evt)
    );
  }
}
