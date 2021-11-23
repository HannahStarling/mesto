class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return card;
  }

  _deleteCard() {
    this._card
      .querySelector('.elements__delete-btn')
      .closest('.elements__item')
      .remove();
  }

  _likeCard() {
    this._card
      .querySelector('.elements__like-btn')
      .classList.toggle('elements__like-btn_active');
  }

  _openImagePopup() {
    pictureCaption.textContent = this._name;
    picture.src = this._link;
    picture.alt = this._name;
    openPopup(popupImage);
  }

  _setEventListeners() {
    this._card
      .querySelector('.elements__like-btn')
      .addEventListener('click', () => {
        this.__likeCard();
      });
    this._card
      .querySelector('.elements__delete-btn')
      .addEventListener('click', () => {
        this._deleteCard();
      });
    this._card
      .querySelector('.elements__image')
      .addEventListener('click', () => {
        this._openImagePopup();
      });
  }

  createCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    //const _image = this._card.querySelector('.elements__image');
    this._card.querySelector('.elements__title').textContent = this._name;
    this._card.querySelector('.elements__image').src = this._link;
    this._card.querySelector('.elements__image').alt = this._name;

    return this._card;
  }
}
