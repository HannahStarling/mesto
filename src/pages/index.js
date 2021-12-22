import './index.css';
import Api from '../scripts/components/Api';
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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '5c55e35b-36cb-4e1a-9a83-df32a17d9ee6',
    'Content-Type': 'application/json',
  },
});

const renderCard = (data) => {
  const card = new Card(data, selectors, () => {
    popupWithImage.open(data);
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

// initial info rendering
api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    //реализовать логику ошибки (заполнение полей из html)
    console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
    // const { name, about, avatar } = {
    //   name: 'Здесь будет Ваше имя',
    //   about: 'Здесь немного о вас',
    //   avatar:
    //     'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    // };
    // userInfo.setUserInfo({ name, about, avatar });
  });

// initial card rendering
const cardSection = new Section(
  {
    renderer: (item) => {
      const card = renderCard(item);
      cardSection.addItem(card);
    },
  },
  selectors
);

api
  .getInitialCards()
  .then((data) => {
    cardSection.render(data);
  })
  .catch((err) => {
    //реализовать логику ошибки через оформление секции другими данными?
    console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
  });

// popups
const popupProfile = new PopupWithForm(
  selectors.popupProfileSelector,
  (userData) => {
    api
      .setUserInfo(userData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => {
        //реализовать логику ошибки
        console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
      });
  }
);

const popupNewCard = new PopupWithForm(
  selectors.popupNewCardSelector,
  (data) => {
    const card = renderCard(data);
    cardSection.addItem(card);
  }
);
const popupWithImage = new PopupWithImage(selectors.popupImageSelector);
popupWithImage.setEventListeners();

popupProfile.setEventListeners();
popupNewCard.setEventListeners();

// events
editButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  profileFormValidator.disableButton();
  profileFormValidator.resetError();
  popupProfile.open();
});

addButton.addEventListener('click', () => {
  newCardFormValidator.resetError();
  newCardFormValidator.disableButton();
  popupNewCard.open();
});
