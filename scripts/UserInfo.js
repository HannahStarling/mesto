export default class UserInfo {
  constructor({ name, info }) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent,
    };
  }

  setUserInfo(nameInput, aboutInput) {
    this._name.textContent = nameInput.value;
    this._info.textContent = aboutInput.value;
  }
}
