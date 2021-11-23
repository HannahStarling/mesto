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

function renderCard(data) {
  const card = new Card(data, '.card-template').createCard();

  cardsContainer.prepend(card);
}

initialCards.forEach((initialCard) => {
  renderCard(initialCard);
});

function addCard(evt) {
  evt.preventDefault();
  const data = {
    name: title.value,
    link: photo.value,
  };

  renderCard(data);
  newCardForm.reset();
  closePopup(popupNewCard);
}

editButton.addEventListener('click', () => {
  const Validator = new FormValidator(settings, profileForm);
  Validator.enableValidation();
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  Validator.resetError();
  openPopup(popupProfile);
});

addButton.addEventListener('click', () => {
  const Validator = new FormValidator(settings, newCardForm);
  Validator.enableValidation();
  Validator.resetError();
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
