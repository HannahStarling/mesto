function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupOnEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    const form = popup.querySelector('.popup__form');
    closePopup(popup);
    if (form !== null) form.reset();
  }
}

function closePopupOnOverlay(evt) {
  const popup = evt.target;
  const form = popup.querySelector('.popup__form');
  if (popup !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
  if (form !== null) form.reset();
}

export { openPopup, closePopup, closePopupOnEsc, closePopupOnOverlay };
