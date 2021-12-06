import { Card } from './Card.js';
import Section from './Section.js';
import { FormValidator } from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import {
  // popupProfile,
  // popupNewCard,
  // popupImage,
  //cardsContainer,
  profileForm,
  newCardForm,
  nameInput,
  aboutInput,
  // profileName,
  // profileDescription,
  editButton,
  addButton,
  // closeBtnProfile,
  // closeBtnNewCard,
  // closeBtnImage,
  title,
  photo,
  // popups,
  settings,
  initialCards,
} from './data.js';

import UserInfo from './UserInfo.js';

// validation
const profileFormValidator = new FormValidator(settings, profileForm);
const newCardFormValidator = new FormValidator(settings, newCardForm);
newCardFormValidator.enableValidation();
profileFormValidator.enableValidation();
// const profileName = profile.querySelector('.profile__name');
// const profileDescription = profile.querySelector('.profile__description');
const userInfo = new UserInfo({
  name: '.profile__name',
  info: '.profile__description',
});

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.card-template').createCard();
      cardSection.addItem(card);
    },
  },
  '.elements__list'
);
cardSection.render();

function addCard(evt) {
  evt.preventDefault();
  const data = {
    name: title.value,
    link: photo.value,
  };

  renderCard(data);
  popupNewCard.close();
}

// const popupProfile = document.querySelector('.popup_type_edit-profile');
function editProfile(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(nameInput, aboutInput);
  popupProfile.close();
}

const popupProfile = new PopupWithForm('.popup_type_edit-profile', editProfile);
popupProfile.setEventListeners();
editButton.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = info;
  profileFormValidator.resetError();
  popupProfile.open();
});

// const popupNewCard = document.querySelector('.popup_type_add-card');
const popupNewCard = new PopupWithForm('.popup_type_add-card', addCard);
popupNewCard.setEventListeners();
addButton.addEventListener('click', () => {
  newCardFormValidator.resetError();
  popupNewCard.open();
});
