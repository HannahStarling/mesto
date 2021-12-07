import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    // достаём все элементы полей
    this._inputs = this._popup.querySelectorAll('.popup__item');
  }
  //Перезаписывает родительский метод setEventListeners.
  //Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
  //но и добавлять обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }
  //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    super.close();
    this._form.reset();
  }

  //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }
}
