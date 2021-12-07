const profile = document.querySelector('.profile');
const profileForm = document.forms.user;
const newCardForm = document.forms.card;
const nameInput = profileForm.querySelector('.popup__item_el_name');
const aboutInput = profileForm.querySelector('.popup__item_el_description');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');

const selectors = {
  name: '.profile__name',
  info: '.profile__description',
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

const initialCards = [
  { title: 'Мыс Марлера', link: './images/elements/croatia.jpg' },
  { title: 'Лекко', link: './images/elements/lecco.jpg' },
  { title: 'Москва', link: './images/elements/moscow.jpg' },
  { title: 'Пиза', link: './images/elements/pisa.jpg' },
  { title: 'Ватикан', link: './images/elements/roma.jpg' },
  { title: 'Венеция', link: './images/elements/venezia.jpg' },
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
