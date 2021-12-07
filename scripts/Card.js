//Преобразуйте класс Card
export class Card {
  //Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick.
  constructor({ title, link }, cardSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return card;
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _likeCard(e) {
    e.target.classList.toggle('elements__like-btn_active');
  }

  _setEventListeners() {
    this._image = this._card.querySelector('.elements__image');
    this._card
      .querySelector('.elements__like-btn')
      .addEventListener('click', (e) => {
        this._likeCard(e);
      });
    this._card
      .querySelector('.elements__delete-btn')
      .addEventListener('click', () => {
        this._deleteCard();
      });
    //handleCardClick должна открывать попап с картинкой при клике на карточку.
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  createCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector('.elements__title').textContent = this._title;
    this._image.src = this._link;
    this._image.alt = this._title;

    return this._card;
  }
}
