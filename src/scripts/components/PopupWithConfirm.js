import Popup from './Popup';
// у него переопределеяется метод setEventListeners немного по-другому, нежели вы это делали в классе PopupWithForm
// в нем вы передавали туда значения всех инпутов.
// Теперь же в него ничего не надо передавать, а просто вызывать функцию при сабмите.
// Соответственно никаких других методов у этого попапа не будет, так как нет формы которую надо валидировать.
// в попапе нужен метод, который динамически позволяет менять функцию,
// которая вызывается при нажатии на кнопку сабмита.
// Дело в том, что этот попап при подтверждении будет выполнять потенциально разные действия,
// так как суть попапа в подтверждении какого-то абстрактного действия.
// В рамках данной работы единственное действие где подтверждение нужно - удаление карточки.
// Но удалять мы будем каждый раз разные карточки.
// Поэтому должна быть возможность при открытии попапа переопределять через публичный метод то действие,
// которое нужно выполнить при нажатии на кнопку.
// В данной проектной “переопределяемое” действие будет отличаться только тем,
// какой айдишник мы используем для удаления внутри метода. этот попап вы открываете только в одном случае -
// нажатие на кнопку удаления карточки.
// соответственно и переопределять выполняемую функцию надо только после нажатия на кнопку удаления
// (перед непосредственным открытием попапа)
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.close();
    });
  }
}
