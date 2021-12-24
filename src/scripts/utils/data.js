const profile = document.querySelector('.profile');
const profileForm = document.forms.user;
const newCardForm = document.forms.card;
const avatarForm = document.forms.avatar;
const nameInput = profileForm.querySelector('.popup__item_el_name');
const aboutInput = profileForm.querySelector('.popup__item_el_about');
const editButton = profile.querySelector('.profile__btn_action_edit');
const addButton = profile.querySelector('.profile__btn_action_add');
const avatarButton = profile.querySelector('.profile__btn_action_avatar');

const selectors = {
  name: '.profile__name',
  about: '.profile__description',
  avatar: '.profile__image',
  cardSelector: '.card-template',
  popupImageSelector: '.popup_type_image',
  popupProfileSelector: '.popup_type_edit-profile',
  popupNewCardSelector: '.popup_type_add-card',
  popupDeleteSelector: '.popup_type_delete-card',
  popupAvatarSelector: '.popup_type_edit-avatar',
  popupErrorSelector: '.popup_type_error',
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

export {
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
};
