import './index.css';
import Api from '../scripts/components/Api';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithError from '../scripts/components/PopupWithError.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import {
  profileForm,
  newCardForm,
  avatarForm,
  nameInput,
  aboutInput,
  editButton,
  addButton,
  avatarButton,
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

// validation
const profileFormValidator = new FormValidator(settings, profileForm);
const newCardFormValidator = new FormValidator(settings, newCardForm);
const avatarFormValidator = new FormValidator(settings, avatarForm);
avatarFormValidator.enableValidation();
newCardFormValidator.enableValidation();
profileFormValidator.enableValidation();

// Обработка ошибок
function showError(error) {
  popupWithError.open(error);
}

// user information
const userInfo = new UserInfo(selectors);

// current user
let user;

const cardSection = new Section(
  {
    renderer: (card) => {
      cardSection.addItem(renderCard(card));
    },
  },
  selectors
);

// initial rendering
api
  .getAllInitialData()
  .then(([cards, info]) => {
    user = info._id;
    userInfo.setUserInfo(info);
    cardSection.render(cards);
  })
  .catch((err) => {
    showError(err);
  });

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
              popupConfirmDelete.renderLoading(true);
              card.deleteCard();
              popupConfirmDelete.close();
            })
            .catch((err) => {
              showError(err);
            })
            .finally(() => popupConfirmDelete.renderLoading(false));
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
            showError(err);
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
            showError(err);
          });
      },
    },
    user
  );
  return card.createCard();
};

// popups
const popupProfile = new PopupWithForm(
  selectors.popupProfileSelector,
  (userData) => {
    api
      .setUserInfo(userData)
      .then((info) => {
        popupProfile.renderLoading(true);
        userInfo.setUserInfo(info);
        popupProfile.close();
      })
      .catch((err) => {
        showError(err);
      })
      .finally(() => popupProfile.renderLoading(false));
  }
);

const popupAvatar = new PopupWithForm(selectors.popupAvatarSelector, (data) => {
  api
    .setAvatar(data)
    .then((avatar) => {
      popupAvatar.renderLoading(true);
      userInfo.setUserAvatar(avatar);
      popupAvatar.close();
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => popupAvatar.renderLoading(false));
});

const popupNewCard = new PopupWithForm(
  selectors.popupNewCardSelector,
  (data) => {
    api
      .postCard(data)
      .then((card) => {
        popupNewCard.renderLoading(true);
        cardSection.addItem(renderCard(card));
        popupNewCard.close();
      })
      .catch((err) => {
        showError(err);
      })
      .finally(() => popupNewCard.renderLoading(false));
  }
);

const popupWithImage = new PopupWithImage(selectors.popupImageSelector);
const popupConfirmDelete = new PopupWithConfirm(selectors.popupDeleteSelector);
const popupWithError = new PopupWithError(selectors.popupErrorSelector);
// events
popupWithError.setEventListeners();
popupAvatar.setEventListeners();
popupProfile.setEventListeners();
popupNewCard.setEventListeners();
popupWithImage.setEventListeners();
popupConfirmDelete.setEventListeners();

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

avatarButton.addEventListener('click', () => {
  avatarFormValidator.resetError();
  avatarFormValidator.disableButton();
  popupAvatar.open();
});
