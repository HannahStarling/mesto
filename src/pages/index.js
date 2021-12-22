import './index.css';
import Api from '../scripts/components/Api';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import {
  profileForm,
  newCardForm,
  nameInput,
  aboutInput,
  editButton,
  addButton,
  selectors,
  settings,
} from '../scripts/utils/data.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '5c55e35b-36cb-4e1a-9a83-df32a17d9ee6',
    'Content-Type': 'application/json',
  },
});

const popupConfirmDelete = new PopupWithConfirm(selectors.popupDeleteSelector);
popupConfirmDelete.setEventListeners();

const renderCard = (data) => {
  const card = new Card(
    data,
    selectors,
    {
      handleCardClick: () => {
        popupWithImage.open(data);
      },
      handleCardDelete: () => {
        popupConfirmDelete.confirmHandler(() => {
          api
            .deleteCard(data)
            .then(() => {
              card.deleteCard();
              popupConfirmDelete.close();
            })
            .catch((err) => {
              console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
            });
        });
        popupConfirmDelete.open();
      },
      likeHandler: (e, id, counter) => {
        api
          .like(id)
          .then(({ likes }) => {
            e.target.classList.add('elements__like-btn_active');
            counter.textContent = `${likes.length}`;
          })
          .catch((err) => {
            console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
          });
      },
      dislikeHandler: (e, id, counter) => {
        api
          .dislike(id)
          .then(({ likes }) => {
            e.target.classList.remove('elements__like-btn_active');
            counter.textContent = `${likes.length}`;
          })
          .catch((err) => {
            console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
          });
      },
    },
    user
  );
  return card.createCard();
};

// validation
const profileFormValidator = new FormValidator(settings, profileForm);
const newCardFormValidator = new FormValidator(settings, newCardForm);
newCardFormValidator.enableValidation();
profileFormValidator.enableValidation();

// user information
const userInfo = new UserInfo(selectors);
let user;
api
  .getAllInitialData()
  .then(([cards, info]) => {
    user = info._id;
  })
  .catch((err) => {
    console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
  });
// initial info rendering
api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    //реализовать логику ошибки (заполнение полей из html)
    console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
  });
// initial card rendering
const cardSection = new Section(
  {
    renderer: (card) => {
      cardSection.addItem(renderCard(card));
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
    //const card = renderCard(data);
    api
      .postCard(data)
      .then((card) => {
        cardSection.addItem(renderCard(card));
      })
      .catch((err) => {
        //реализовать логику ошибки
        console.log(`Произошла ошибка: ${err}, попробуйте снова.`);
      });
    // cardSection.addItem(renderCard(data));
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
