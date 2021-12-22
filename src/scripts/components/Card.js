export default class Card {
  constructor(
    { name, link, likes, _id, owner },
    { cardSelector },
    { handleCardClick, handleCardDelete, likeHandler, dislikeHandler }
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;

    this._owner = owner._id;
    //this._user = user;

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._likeHandler = likeHandler;
    this._dislikeHandler = dislikeHandler;
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

  /*  _likeCard(e) {
    e.target.classList.toggle('elements__like-btn_active');
  } */

  _setEventListeners() {
    this._image = this._card.querySelector('.elements__image');
    this._counter = this._card.querySelector('.elements__like-counter');
    this._card
      .querySelector('.elements__like-btn')
      .addEventListener('click', (e) => {
        if (e.target.classList.contains('elements__like-btn_active')) {
          this._dislikeHandler(e, this._id);
        } else {
          this._likeHandler(e, this._id);
        }
        this._counter.textContent = this._likes.length;
      });
    this._card
      .querySelector('.elements__delete-btn')
      .addEventListener('click', () => {
        this._handleCardDelete();
        //this._deleteCard();
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
    this._counter.textContent = this._likes.length;
    return this._card;
  }
}
