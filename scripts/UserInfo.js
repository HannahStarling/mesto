// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
export default class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
  constructor({ name, info }) {
    this._userName = document.querySelector(name);
    this._userInfo = document.querySelector(info);
  }

  // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
  }
  // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

  // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(nameInput, aboutInput) {
    this._userName.textContent = nameInput.value;
    this._userInfo.textContent = aboutInput.value;
  }
}
