import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Popup from './Popup.js';
import {
  // popupProfile,
  // popupNewCard,
  // popupImage,
  cardsContainer,
  profileForm,
  newCardForm,
  nameInput,
  aboutInput,
  profileName,
  profileDescription,
  editButton,
  addButton,
  closeBtnProfile,
  closeBtnNewCard,
  closeBtnImage,
  title,
  photo,
  popups,
  settings,
  initialCards,
} from './data.js';

const profileFormValidator = new FormValidator(settings, profileForm);
const newCardFormValidator = new FormValidator(settings, newCardForm);
newCardFormValidator.enableValidation();
profileFormValidator.enableValidation();

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  popupProfile.close();
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
  popupNewCard.close();
}

// const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupProfile = new Popup('.popup_type_edit-profile');
popupProfile.setEventListeners();
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  profileFormValidator.resetError();
  popupProfile.open();
});

// const popupNewCard = document.querySelector('.popup_type_add-card');
const popupNewCard = new Popup('.popup_type_add-card');
popupNewCard.setEventListeners();
addButton.addEventListener('click', () => {
  newCardFormValidator.resetError();
  popupNewCard.open();
});

//closeBtnImage.addEventListener('click', () => closePopup(popupImage));

profileForm.addEventListener('submit', editProfile);
newCardForm.addEventListener('submit', addCard);
