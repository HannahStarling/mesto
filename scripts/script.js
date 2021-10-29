const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupNewCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupCardForm = popupNewCard.querySelector('.popup__form');
const nameInput = popupProfileForm.querySelector('.popup__item_el_name');
const aboutInput = popupProfileForm.querySelector(
  '.popup__item_el_description'
);
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const cardsContainer = document.querySelector('.elements__list');
// так мы находим первую карточку а не все
const card = cardsContainer.querySelector('.elements__item');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');

const closeButtonProfile = popupProfile.querySelector(
  '.popup__btn_action_close'
);
const closeButtonNewCard = popupNewCard.querySelector(
  '.popup__btn_action_close'
);
const picture = popupImage.querySelector('.popup__image');
const pictureCaption = popupImage.querySelector('.popup__caption');
const closeButtonImage = popupImage.querySelector('.popup__btn_action_close');

const initialCards = [
  { name: 'Мыс Марлера', link: './images/elements/croatia.jpg' },
  { name: 'Лекко', link: './images/elements/lecco.jpg' },
  { name: 'Москва', link: './images/elements/moscow.jpg' },
  { name: 'Пиза', link: './images/elements/pisa.jpg' },
  { name: 'Ватикан', link: './images/elements/roma.jpg' },
  { name: 'Венеция', link: './images/elements/venezia.jpg' },
];

renderCard();

function renderCard() {
  initialCards.forEach((item) => {
    addCard(item.name, item.link);
  });
}

function openPopup(popup) {
  if (popup === popupProfile) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileDescription.textContent;
  }
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function addCard(cardTitleValue, cardLinkValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.elements__item')
    .cloneNode(true);

  cardElement.querySelector('.elements__title').textContent = cardTitleValue;
  cardElement.querySelector('.elements__image').src = cardLinkValue;
  cardsContainer.prepend(cardElement);

  const deleteButton = cardElement.querySelector('.elements__delete-btn');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.elements__item').remove();
  });

  const likeButton = cardElement.querySelector('.elements__like-btn');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });

  const image = document.querySelector('.elements__image');
  image.addEventListener('click', () => {
    picture.src = cardLinkValue;
    pictureCaption.textContent = cardTitleValue;
    openPopup(popupImage);
  });

  closePopup(popupNewCard);
}

/* EVENTS */
editButton.addEventListener('click', () => openPopup(popupProfile));
addButton.addEventListener('click', () => openPopup(popupNewCard));
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
closeButtonImage.addEventListener('click', () => closePopup(popupImage));
popupProfileForm.addEventListener('submit', editProfile);

popupCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__item_el_title');
  const photo = document.querySelector('.popup__item_el_link');

  addCard(title.value, photo.value);

  title.value = '';
  photo.value = '';
  closePopup(popupNewCard);
});
