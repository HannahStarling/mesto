export default class Card {
  constructor(
    { name, link, likes, _id, owner },
    { cardSelector },
    { handleCardClick, handleCardDelete, likeHandler, dislikeHandler },
    user
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;

    this._owner = owner._id;
    this._user = user;

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

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._image = this._card.querySelector('.elements__image');
    this._counter = this._card.querySelector('.elements__like-counter');
    this._deleteBtn = this._card.querySelector('.elements__delete-btn');
    this._likeBtn = this._card.querySelector('.elements__like-btn');

    this._likeBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('elements__like-btn_active')) {
        this._dislikeHandler(e, this._id, this._counter);
      } else {
        this._likeHandler(e, this._id, this._counter);
      }
    });
    this._deleteBtn.addEventListener('click', () => {
      this._handleCardDelete();
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

    if (this._owner !== this._user) {
      this._deleteBtn.style.display = 'none';
    }

    const isLiked = this._likes.find(({ _id }) => {
      return _id === this._user;
    });
    if (isLiked) {
      this._likeBtn.classList.add('elements__like-btn_active');
    }

    return this._card;
  }
}
