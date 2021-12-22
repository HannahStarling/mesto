const profile = document.querySelector('.profile');
const profileForm = document.forms.user;
const newCardForm = document.forms.card;
const nameInput = profileForm.querySelector('.popup__item_el_name');
const aboutInput = profileForm.querySelector('.popup__item_el_about');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');

const selectors = {
  name: '.profile__name',
  about: '.profile__description',
  cardSelector: '.card-template',
  popupImageSelector: '.popup_type_image',
  popupProfileSelector: '.popup_type_edit-profile',
  popupNewCardSelector: '.popup_type_add-card',
  containerSelector: '.elements__list',
};

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active',
};

import croatiaImage from '../../images/elements/croatia.jpg';
import leccoImage from '../../images/elements/lecco.jpg';
import moscowImage from '../../images/elements/moscow.jpg';
import pisaImage from '../../images/elements/pisa.jpg';
import romaImage from '../../images/elements/roma.jpg';
import veneziaImage from '../../images/elements/venezia.jpg';

const initialCards = [
  { name: 'Мыс Марлера', link: croatiaImage },
  { name: 'Лекко', link: leccoImage },
  { name: 'Москва', link: moscowImage },
  { name: 'Пиза', link: pisaImage },
  { name: 'Ватикан', link: romaImage },
  { name: 'Венеция', link: veneziaImage },
];

export {
  profileForm,
  newCardForm,
  nameInput,
  aboutInput,
  editButton,
  addButton,
  selectors,
  settings,
  initialCards,
};
