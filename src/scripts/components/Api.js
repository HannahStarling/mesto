export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

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

  deleteCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
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

  setAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
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

  getAllInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }
}
