(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"deleteCard",value:function(e){var t=e._id;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status,", попробуйте снова."))}))}},{key:"getAllInitialData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=t.name,a=t.link,c=t.likes,u=t._id,s=t.owner,l=n.cardSelector,f=r.handleCardClick,p=r.handleCardDelete,h=r.likeHandler,_=r.dislikeHandler;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i,this._link=a,this._likes=c,this._id=u,this._owner=s._id,this._user=o,this._cardSelector=l,this._handleCardClick=f,this._handleCardDelete=p,this._likeHandler=h,this._dislikeHandler=_}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._image=this._card.querySelector(".elements__image"),this._counter=this._card.querySelector(".elements__like-counter"),this._deleteBtn=this._card.querySelector(".elements__delete-btn"),this._likeBtn=this._card.querySelector(".elements__like-btn"),this._likeBtn.addEventListener("click",(function(t){t.target.classList.contains("elements__like-btn_active")?e._dislikeHandler(t,e._id,e._counter):e._likeHandler(t,e._id,e._counter)})),this._deleteBtn.addEventListener("click",(function(){e._handleCardDelete()})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"createCard",value:function(){var e=this;return this._card=this._getTemplate(),this._setEventListeners(),this._card.querySelector(".elements__title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._counter.textContent=this._likes.length,this._owner!==this._user&&(this._deleteBtn.style.display="none"),this._likes.find((function(t){return t._id===e._user}))&&this._likeBtn.classList.add("elements__like-btn_active"),this._card}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer,o=n.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(o)}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._about.textContent=n,this.setUserAvatar(r)}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&a(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.formSelector,o=t.inputSelector,i=t.submitButtonSelector,a=t.inactiveButtonClass,c=t.inputErrorClass,u=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=r,this._inputSelector=o,this._submitButtonSelector=i,this._inactiveButtonClass=a,this._inputErrorClass=c,this._errorClass=u,this._form=n,this._button=this._form.querySelector(this._submitButtonSelector),this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_isInvalid",value:function(){return!this._form.checkValidity()}},{key:"_checkInputValidity",value:function(e){return!e.validity.valid}},{key:"_toggleButton",value:function(){this._button.disabled=this._isInvalid(),this._button.classList.toggle(this._inactiveButtonClass,this._isInvalid())}},{key:"_searchInputError",value:function(e){return this._form.querySelector(".popup__input-error_type_".concat(e.id))}},{key:"_handleInputError",value:function(e){var t=this._searchInputError(e);e.classList.toggle(this._inputErrorClass,this._checkInputValidity(e)),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._handleInputError(t),e._toggleButton()}))}))}},{key:"disableButton",value:function(){this._button.disabled=!0,this._button.classList.add(this._inactiveButtonClass)}},{key:"resetError",value:function(){var e=this;this._inputs.forEach((function(t){t.matches(".".concat(e._inputErrorClass))&&(t.classList.remove(e._inputErrorClass),e._searchInputError(t).classList.remove(e._errorClass))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__btn_action_close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){return e._handleOverlayClose(t)}))}}])&&l(t.prototype,n),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._popup.querySelectorAll(".popup__item"),n._button=n._form.querySelector(".popup__btn_action_submit"),n._buttonTxt=n._button.textContent,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;_(b(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){_(b(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Сохранение...":this._button.textContent}}])&&h(t.prototype,n),a}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._picture=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;S(O(a.prototype),"open",this).call(this),this._picture.src=n,this._picture.alt=t,this._caption.textContent=t}}])&&k(t.prototype,n),a}(f);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._button=t._form.querySelector(".popup__btn_action_submit"),t._buttonTxt=t._button.textContent,t}return t=a,(n=[{key:"confirmHandler",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;I(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(),e.close()}))}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Удаление...":this._button.textContent}}])&&P(t.prototype,n),a}(f),U=document.querySelector(".profile"),A=document.forms.user,D=document.forms.card,H=document.forms.avatar,V=A.querySelector(".popup__item_el_name"),N=A.querySelector(".popup__item_el_about"),J=U.querySelector(".profile__btn_action_edit"),M=U.querySelector(".profile__btn_action_add"),z=U.querySelector(".profile__btn_action_avatar"),G={name:".profile__name",about:".profile__description",avatar:".profile__image",cardSelector:".card-template",popupImageSelector:".popup_type_image",popupProfileSelector:".popup_type_edit-profile",popupNewCardSelector:".popup_type_add-card",popupDeleteSelector:".popup_type_delete-card",popupAvatarSelector:".popup_type_edit-avatar",containerSelector:".elements__list"},$={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__btn_action_submit",inactiveButtonClass:"popup__btn_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__input-error_active"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33",headers:{authorization:"5c55e35b-36cb-4e1a-9a83-df32a17d9ee6","Content-Type":"application/json"}}),Q=new s($,A),W=new s($,D),X=new s($,H);X.enableValidation(),W.enableValidation(),Q.enableValidation();var Y,Z=new c(G),ee=new i({renderer:function(e){ee.addItem(te(e))}},G);K.getAllInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=i._id,Z.setUserInfo(i),ee.render(o)})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))}));var te=function(e){var t=new r(e,G,{handleCardClick:function(){ie.open(e)},handleCardDelete:function(){ae.confirmHandler((function(){K.deleteCard(e).then((function(){ae.renderLoading(!0),t.deleteCard(),ae.close()})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))})).finally(ae.renderLoading(!1))})),ae.open()},likeHandler:function(e,t,n){K.like(t).then((function(t){var r=t.likes;e.target.classList.add("elements__like-btn_active"),n.textContent="".concat(r.length)})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))}))},dislikeHandler:function(e,t,n){K.dislike(t).then((function(t){var r=t.likes;e.target.classList.remove("elements__like-btn_active"),n.textContent="".concat(r.length)})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))}))}},Y);return t.createCard()},ne=new m(G.popupProfileSelector,(function(e){K.setUserInfo(e).then((function(e){ne.renderLoading(!0),Z.setUserInfo(e)})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))})).finally(ne.renderLoading(!1))})),re=new m(G.popupAvatarSelector,(function(e){K.setAvatar(e).then((function(e){re.renderLoading(!0),Z.setUserAvatar(e),re.close()})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))})).finally(re.renderLoading(!1))})),oe=new m(G.popupNewCardSelector,(function(e){K.postCard(e).then((function(e){oe.renderLoading(!0),ee.addItem(te(e))})).catch((function(e){console.log("Произошла ошибка: ".concat(e,", попробуйте снова."))})).finally(oe.renderLoading(!1))})),ie=new j(G.popupImageSelector),ae=new x(G.popupDeleteSelector);re.setEventListeners(),ne.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),J.addEventListener("click",(function(){var e=Z.getUserInfo(),t=e.name,n=e.about;V.value=t,N.value=n,Q.disableButton(),Q.resetError(),ne.open()})),M.addEventListener("click",(function(){W.resetError(),W.disableButton(),oe.open()})),z.addEventListener("click",(function(){X.resetError(),X.disableButton(),re.open()}))})();