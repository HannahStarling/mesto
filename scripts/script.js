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
const cardsContainer = document.querySelector('.elements__list');
// так мы находим первую карточку а не все
const card = cardsContainer.querySelector('.elements__item');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');
const deleteButton = card.querySelector('.elements__delete-btn');
const likeButton = card.querySelector('.elements__like-btn');
const closeButtonProfile = popupProfile.querySelector(
  '.popup__btn_action_close'
);
const closeButtonNewCard = popupNewCard.querySelector(
  '.popup__btn_action_close'
);

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
    /* const cardItem = deleteButton.closest('.elements__item'); */
    evt.target.closest('.elements__item').remove();
    /* cardItem.remove(); */
  });
  const likeButton = cardElement.querySelector('.elements__like-btn');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });
  closePopup(popupNewCard);
}

// events только на первую карточку, решим через рендеринг карточек
deleteButton.addEventListener('click', function (evt) {
  evt.target.closest('.elements__item').remove();
});
likeButton.addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__like-btn_active');
});

/* EVENTS */
editButton.addEventListener('click', () => openPopup(popupProfile));
addButton.addEventListener('click', () => openPopup(popupNewCard));
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
popupProfileForm.addEventListener('submit', editProfile);

popupCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__item_el_title');
  const photo = document.querySelector('.popup__item_el_link');

  addCard(title.value, photo.value);

  title.value = '';
  photo.value = '';
  closePopup();
});
