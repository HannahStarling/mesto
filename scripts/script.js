function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupOnEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    const form = popup.querySelector('.popup__form');
    closePopup(popup);
    if (form !== null) form.reset();
  }
}

function closePopupOnOverlay(evt) {
  const popup = evt.target;
  const form = popup.querySelector('.popup__form');
  if (popup !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
  if (form !== null) form.reset();
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function getCard(cardTitleValue, cardLinkValue) {
  const cardTemplate = document.querySelector('.card-template').content;
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const image = card.querySelector('.elements__image');

  card.querySelector('.elements__title').textContent = cardTitleValue;
  image.src = cardLinkValue;
  image.alt = cardTitleValue + '.'; // точка в конце alt для ридеров, которые делают на ней голосовую паузу

  const deleteButton = card.querySelector('.elements__delete-btn');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.elements__item').remove();
  });

  const likeButton = card.querySelector('.elements__like-btn');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });

  image.addEventListener('click', () => {
    picture.src = cardLinkValue;
    pictureCaption.textContent = cardTitleValue;
    openPopup(popupImage);
  });
  return card;
}

function createCard(cardTitleValue, cardLinkValue) {
  const card = getCard(cardTitleValue, cardLinkValue);
  cardsContainer.prepend(card);
}

function renderCard() {
  initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, '.card-template').createCard();

    cardsContainer.prepend(card);
  });
}

renderCard();

function addCard(evt) {
  evt.preventDefault();

  createCard(title.value, photo.value);
  newCardForm.reset();
  toggleButton(newCardForm, settings);
  closePopup(popupNewCard);
}

editButton.addEventListener('click', (evt) => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  //кнопка редактирования при открытии всегда валидна
  toggleButton(profileForm, settings);
  resetError(profileForm, settings);
  openPopup(popupProfile);
});

addButton.addEventListener('click', () => {
  resetError(newCardForm, settings);
  openPopup(popupNewCard);
});

closeBtnProfile.addEventListener('click', () => {
  closePopup(popupProfile);
  profileForm.reset();
});

closeBtnNewCard.addEventListener('click', () => {
  closePopup(popupNewCard);
  newCardForm.reset();
});
closeBtnImage.addEventListener('click', () => closePopup(popupImage));
popups.forEach((popup) => popup.addEventListener('click', closePopupOnOverlay));
profileForm.addEventListener('submit', editProfile);
newCardForm.addEventListener('submit', addCard);
