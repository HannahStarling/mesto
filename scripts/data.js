const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupNewCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const profile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements__list');
const profileForm = document.forms.user;
const newCardForm = document.forms.card;
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

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active',
};

const initialCards = [
  { name: 'Мыс Марлера', link: './images/elements/croatia.jpg' },
  { name: 'Лекко', link: './images/elements/lecco.jpg' },
  { name: 'Москва', link: './images/elements/moscow.jpg' },
  { name: 'Пиза', link: './images/elements/pisa.jpg' },
  { name: 'Ватикан', link: './images/elements/roma.jpg' },
  { name: 'Венеция', link: './images/elements/venezia.jpg' },
];
