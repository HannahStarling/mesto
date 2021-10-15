// Находим секцию popup в DOM
let popup = document.querySelector('.popup');
// Находим форму в DOM
let popupContainer = popup.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = popupContainer.querySelector('.popup__item_el_name');
let aboutInput = popupContainer.querySelector('.popup__item_el_description');
// Находим существующее описание в DOM
let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
// Находим кнопки в DOM
let editButton = profile.querySelector('.profile__btn_action_edit');
let closeButton = popup.querySelector('.popup__btn_action_close');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  closePopup();
}

/* EVENTS */
// for ProfileInfo
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', editProfile);