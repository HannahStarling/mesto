export class FormValidator {
  constructor(settings, form) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = form;
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  _isInvalid() {
    return !this._form.checkValidity();
  }

  _checkInputValidity(input) {
    return !input.validity.valid;
  }

  _toggleButton() {
    this._button.disabled = this._isInvalid();
    this._button.classList.toggle(this._inactiveButtonClass, this._isInvalid());
  }

  _searchInputError(input) {
    return this._form.querySelector(`.popup__input-error_type_${input.id}`);
  }

  _handleInputError(input) {
    const error = this._searchInputError(input);
    input.classList.toggle(
      this._inputErrorClass,
      this._checkInputValidity(input)
    );
    error.classList.add(this._errorClass);
    error.textContent = input.validationMessage;
  }

  _setEventListeners() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._handleInputError(input);
        this._toggleButton();
      });
    });
  }

  resetError() {
    this._inputs.forEach((input) => {
      if (input.matches(`.${this._inputErrorClass}`)) {
        input.classList.remove(this._inputErrorClass);
        const error = this._searchInputError(input);
        error.classList.remove(this._errorClass);
      }
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
