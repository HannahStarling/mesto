export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.close();
  }

  setEventListeners() {
    this._popup
      .querySelector('.popup__btn_action_close')
      .addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) =>
      this._handleOverlayClose(evt)
    );
  }
}
