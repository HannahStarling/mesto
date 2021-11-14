const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active',
};

function searchInputError(form, input) {
  return form.querySelector(`.popup__input-error_type_${input.id}`);
}

function checkInputValidity(input) {
  return !input.validity.valid;
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

function isInvalid(form) {
  return !form.checkValidity();
}

function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
  const button = form.querySelector(submitButtonSelector);

  button.disabled = isInvalid(form);
  button.classList.toggle(inactiveButtonClass, isInvalid(form));
}

const resetError = (form, { inputSelector, inputErrorClass, errorClass }) => {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  inputs.forEach((input) => {
    if (input.matches('.' + inputErrorClass)) {
      input.classList.remove(inputErrorClass);
      const error = searchInputError(form, input);
      error.classList.remove(errorClass);
    }
  });
};

function setEventListeners(form, { inputSelector, ...settings }) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  toggleButton(form, settings);
  inputs.forEach((input) => {
    input.addEventListener('input', function (evt) {
      const errorMessage = input.validationMessage;
      handleInputError(form, input, errorMessage, settings);
      toggleButton(form, settings);
    });
  });
}

function enableValidation({ formSelector, ...settings }) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    setEventListeners(form, settings);
  });
}

enableValidation(settings);
