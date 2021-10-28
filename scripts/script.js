const popupProfile = document.querySelector('.popup_edit-profile');
const popupNewCard = document.querySelector('.popup_add-card');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupCardForm = popupNewCard.querySelector('.popup__form');
const nameInput = popupProfileForm.querySelector('.popup__item_el_name');
const aboutInput = popupProfileForm.querySelector(
  '.popup__item_el_description'
);
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');

const cardsContainer = document.querySelector('.elements__list');
// так мы находим первую карточку а не все
const card = cardsContainer.querySelector('.elements__item');

const closeButtonProfile = popupProfile.querySelector(
  '.popup__btn_action_close'
);
const closeButtonNewCard = popupNewCard.querySelector(
  '.popup__btn_action_close'
);

// for Profile
function openPopupEditProfile() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
}

function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopupProfile();
}
// for Card
function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}

function closePopupNewCard() {
  popupNewCard.classList.remove('popup_opened');
}

// add card
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
    /* const cardItem = deleteButton.closest('.elements__item'); */
    evt.target.closest('.elements__item').remove();
    /* cardItem.remove(); */
  });
}

// только на первую карточку, решим через рендеринг карточек
const deleteButton = card.querySelector('.elements__delete-btn');
deleteButton.addEventListener('click', function (evt) {
  /* const cardItem = deleteButton.closest('.elements__item'); */
  evt.target.closest('.elements__item').remove();
  /* cardItem.remove(); */
});

/* EVENTS */
editButton.addEventListener('click', openPopupEditProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);
popupProfileForm.addEventListener('submit', editProfile);
addButton.addEventListener('click', openPopupNewCard);
closeButtonNewCard.addEventListener('click', closePopupNewCard);
popupCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__item_el_title');
  const photo = document.querySelector('.popup__item_el_link');

  addCard(title.value, photo.value);

  title.value = '';
  photo.value = '';
  closePopupNewCard();
});
