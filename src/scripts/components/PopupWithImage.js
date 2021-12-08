import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picture = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');
  }

  open({ title, link }) {
    super.open();
    this._picture.src = link;
    this._picture.alt = title;
    this._caption.textContent = title;
  }
}
