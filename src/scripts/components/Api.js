export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // получить данные пользователя (GET)
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }

  // заменить данные пользователя (PATCH)
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }

  // получить список всех карточек в виде массива (GET)
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }

  // добавить карточку (POST)
  postCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }
  // удалить карточку (DELETE)

  // заменить аватар (PATCH)

  // “залайкать” карточку (PUT)
  like(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }

  // удалить лайк карточки (DELETE)
  dislike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Произошла ошибка: ${res.status}, попробуйте снова.`
      );
    });
  }
}
