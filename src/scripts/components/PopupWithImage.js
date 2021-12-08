import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ title, link }) {
    super.open();
    this._picture = this._popup.querySelector('.popup__image');
    this._picture.src = link;
    this._picture.alt = title;
    this._popup.querySelector('.popup__caption').textContent = title;
  }
}
