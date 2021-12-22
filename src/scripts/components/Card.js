export default class Card {
  constructor({ name, link, likes }, { cardSelector }, handleCardClick) {
    this._name = name;
    this._link = link;
    // this.likes = likes;
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
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  createCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector('.elements__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    //  this._card.querySelector('.elements__like-counter').textContent =
    //    this._likes.length;
    return this._card;
  }
}
