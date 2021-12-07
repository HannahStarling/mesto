export default class UserInfo {
  constructor({ name, info }) {
    this._userName = document.querySelector(name);
    this._userInfo = document.querySelector(info);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
  }

  setUserInfo(nameInput, aboutInput) {
    this._userName.textContent = nameInput.value;
    this._userInfo.textContent = aboutInput.value;
  }
}
