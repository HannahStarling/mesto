//сделать дефолтные импорты
//импорты из папок компонентов и пр.
import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
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

const renderCard = (data) => {
  const card = new Card(data, '.card-template', () => {
    const popupWithImage = new PopupWithImage('.popup_type_image', data);
    popupWithImage.open();
    popupWithImage.setEventListeners();
  }).createCard();
  return card;
};

//const popupImage = document.querySelector('.popup_type_image');
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = renderCard(item);
      cardSection.addItem(card);
    },
  },
  '.elements__list'
);

cardSection.render();

// const popupProfile = document.querySelector('.popup_type_edit-profile');

const popupProfile = new PopupWithForm('.popup_type_edit-profile', () => {
  userInfo.setUserInfo(nameInput, aboutInput);
});
// const popupNewCard = document.querySelector('.popup_type_add-card');
const popupNewCard = new PopupWithForm('.popup_type_add-card', (data) => {
  const card = renderCard(data);
  cardSection.addItem(card);
});

popupProfile.setEventListeners();
popupNewCard.setEventListeners();

editButton.addEventListener('click', (evt) => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = info;
  profileFormValidator.resetError();
  popupProfile.open();
});

addButton.addEventListener('click', () => {
  newCardFormValidator.resetError();
  popupNewCard.open();
});
