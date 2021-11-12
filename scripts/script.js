const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupNewCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const profile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements__list');
const profileForm = popupProfile.querySelector('.popup__form');
const newCardForm = popupNewCard.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__item_el_name');
const aboutInput = profileForm.querySelector('.popup__item_el_description');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');
const closeBtnProfile = popupProfile.querySelector('.popup__btn_action_close');
const closeBtnNewCard = popupNewCard.querySelector('.popup__btn_action_close');
const picture = popupImage.querySelector('.popup__image');
const pictureCaption = popupImage.querySelector('.popup__caption');
const closeBtnImage = popupImage.querySelector('.popup__btn_action_close');
const title = popupNewCard.querySelector('.popup__item_el_title');
const photo = popupNewCard.querySelector('.popup__item_el_link');
const popups = [...document.querySelectorAll('.popup')];
const initialCards = [
  { name: 'Мыс Марлера', link: './images/elements/croatia.jpg' },
  { name: 'Лекко', link: './images/elements/lecco.jpg' },
  { name: 'Москва', link: './images/elements/moscow.jpg' },
  { name: 'Пиза', link: './images/elements/pisa.jpg' },
  { name: 'Ватикан', link: './images/elements/roma.jpg' },
  { name: 'Венеция', link: './images/elements/venezia.jpg' },
];

function renderCard() {
  initialCards.forEach((item) => {
    createCard(item.name, item.link);
  });
}

renderCard();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupOnEsc);
}

//close popup on Escape
function closePopupOnEsc(e) {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

//close popup on overlay
function closePopupOnOverlay(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupOnEsc);
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function addCard(evt) {
  evt.preventDefault();

  createCard(title.value, photo.value);

  title.value = '';
  photo.value = '';
  closePopup(popupNewCard);
}

function getCard(cardTitleValue, cardLinkValue) {
  const cardTemplate = document.querySelector('.card-template').content;
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const image = card.querySelector('.elements__image');

  card.querySelector('.elements__title').textContent = cardTitleValue;
  image.src = cardLinkValue;
  image.alt = cardTitleValue + '.';

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

function resetForm(form) {
  const inputs = [...form.querySelectorAll(settings.inputSelector)];
  inputs.forEach((input) => {
    input.classList.remove(settings.inputErrorClass);
    const error = searchInputError(form, input);
    error.classList.remove(settings.errorClass);
  });
  form.reset();
}

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  openPopup(popupProfile);
});

addButton.addEventListener('click', () => {
  toggleButton(
    newCardForm,
    settings.submitButtonSelector,
    settings.inactiveButtonClass
  );
  openPopup(popupNewCard);
});

closeBtnProfile.addEventListener('click', () => {
  const form = document.forms.user;
  closePopup(popupProfile);
  resetForm(form);
});

closeBtnNewCard.addEventListener('click', () => {
  const form = document.forms.card;
  closePopup(popupNewCard);
  resetForm(form);
});

closeBtnImage.addEventListener('click', () => closePopup(popupImage));
profileForm.addEventListener('submit', editProfile);
popups.forEach((popup) => popup.addEventListener('click', closePopupOnOverlay));
newCardForm.addEventListener('submit', addCard);
