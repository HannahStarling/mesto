export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') this.close();
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
    return;
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
