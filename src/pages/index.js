import './index.css';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import {
  profileForm,
  newCardForm,
  nameInput,
  aboutInput,
  editButton,
  addButton,
  selectors,
  settings,
  initialCards,
} from '../scripts/utils/data.js';

const renderCard = (data) => {
  const card = new Card(data, selectors, () => {
    const popupWithImage = new PopupWithImage(
      selectors.popupImageSelector,
      data
    );
    popupWithImage.open();
    popupWithImage.setEventListeners();
  }).createCard();
  return card;
};

// validation
const profileFormValidator = new FormValidator(settings, profileForm);
const newCardFormValidator = new FormValidator(settings, newCardForm);
newCardFormValidator.enableValidation();
profileFormValidator.enableValidation();

// user information
const userInfo = new UserInfo(selectors);

// initial card rendering
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = renderCard(item);
      cardSection.addItem(card);
    },
  },
  selectors
);

cardSection.render();

// popups
const popupProfile = new PopupWithForm(selectors.popupProfileSelector, () => {
  userInfo.setUserInfo(nameInput, aboutInput);
});

const popupNewCard = new PopupWithForm(
  selectors.popupNewCardSelector,
  (data) => {
    const card = renderCard(data);
    cardSection.addItem(card);
  }
);

popupProfile.setEventListeners();
popupNewCard.setEventListeners();

// events
editButton.addEventListener('click', () => {
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
