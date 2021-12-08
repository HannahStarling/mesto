import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ title, link }) {
    this._title = title;
    this._link = link;
    super.open();
    this._picture = this._popup.querySelector('.popup__image');
    this._picture.src = this._link;
    this._picture.alt = this._title;
    this._popup.querySelector('.popup__caption').textContent = this._title;
  }
}
