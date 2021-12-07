import Popup from './Popup.js';
//Создайте класс PopupWithImage, который наследует от Popup.
export default class PopupWithImage extends Popup {
  constructor(popupSelector, { title, link }) {
    super(popupSelector);
    this._title = title;
    this._link = link;
  }
  //Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно
  //вставлять в попап картинку с src изображения и подписью к картинке.
  open() {
    super.open();
    this._picture = this._popup.querySelector('.popup__image');
    this._picture.src = this._link;
    this._picture.alt = this._title;
    this._popup.querySelector('.popup__caption').textContent = this._title;
  }
}
