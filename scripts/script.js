// Находим секции popup в DOM
const popupProfile = document.querySelector('.popup_edit-profile');
const popupNewCard = document.querySelector('.popup_add-card');
// Находим форму в DOM
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupCardForm = popupNewCard.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfileForm.querySelector('.popup__item_el_name');
const aboutInput = popupProfileForm.querySelector(
  '.popup__item_el_description'
);
// Находим существующее описание в DOM
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
// Находим кнопки в DOM
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');
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

function addCard(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopupProfile();
}
/* EVENTS */
// for Profile
editButton.addEventListener('click', openPopupEditProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);
popupProfileForm.addEventListener('submit', editProfile);
// for Card
addButton.addEventListener('click', openPopupNewCard);
closeButtonNewCard.addEventListener('click', closePopupNewCard);

popupProfileForm.addEventListener('submit', addCard);
