const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active',
};

enableValidation(settings);

function enableValidation({ formSelector, ...args }) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, args);
  });
}

function setEventListeners(
  form,
  { inputSelector, submitButtonSelector, inactiveButtonClass, ...args }
) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));

  inputs.forEach((input) => {
    input.addEventListener('input', function (evt) {
      const errorMessage = input.validationMessage;
      handleInputError(form, input, errorMessage, args);
      toggleButton(form, submitButtonSelector, inactiveButtonClass);
    });
  });
}

function toggleButton(form, submitButtonSelector, inactiveButtonClass) {
  const button = form.querySelector(submitButtonSelector);

  button.disabled = isInvalid(form);
  button.classList.toggle(inactiveButtonClass, isInvalid(form));
}

function isInvalid(form) {
  return !form.checkValidity();
}

function handleInputError(
  form,
  input,
  errorMessage,
  { inputErrorClass, errorClass }
) {
  const error = searchInputError(form, input);
  input.classList.toggle(inputErrorClass, checkInputValidity(input));
  error.classList.add(errorClass);
  error.textContent = errorMessage;
}

function checkInputValidity(input) {
  return !input.validity.valid;
}

function searchInputError(form, input) {
  return form.querySelector(`.popup__input-error_type_${input.id}`);
}
