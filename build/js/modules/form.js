(function () {
  // open form
  const formLinks = document.querySelectorAll(`.form-link`);
  const modal = document.querySelector(`.modal`);
  const feedbackCloseButton = document.querySelector(`.feedback__close-button`);
  const ESC_KEY = `Escape`;
  const ENTER_KEY = `Enter`;

  const setFocus = () => document.querySelector(`#name`).focus();

  const closeModal = () => {
    modal.classList.add(`modal--close`);
    modal.classList.remove(`modal--open`);
    feedbackCloseButton.removeEventListener(`click`, closeModal);
  };

  // Закрытие по esc
  const onEscPress = (evt) => {
    if (evt.key === ESC_KEY) {
      closeModal();
    }
  };

  // Закрытие по нажатию вне окна
  const onOverlayClick = ({target}) => {
    if (target.classList.contains(`modal`)) {
      closeModal();
    }
  };

  // Валидация формы
  const submitButton = document.querySelector(`.button-submit`);
  const clearButton = document.querySelector(`.button-clear`);
  //   const inputName = document.querySelector(`#name`);
  //   const inputEmail = document.querySelector(`#email`);
  const inputMessage = document.querySelector(`#message`);
  const warningMessage = document.querySelector(`.feedback__note`);
  const inputs = document.querySelectorAll(`input`, `textarea`);

  const validateEmpty = (text) => !!text.trim();

  const clearForm = () => {
    inputs.forEach((input) => {
      input.value = ``;
    });
    warningMessage.classList.remove(`error`);
  };

  const messageCustomValidation = (evt) => {
    if (!validateEmpty(inputMessage.value) || inputMessage.value === ``) {
      evt.preventDefault();
      warningMessage.classList.add(`error`);
    } else {
      inputMessage.value = inputMessage.value;
      warningMessage.classList.remove(`error`);
    }
  };

  const showModal = (evt) => {
    evt.preventDefault();
    clearForm();
    document.addEventListener(`click`, onOverlayClick, true);
    document.addEventListener(`keydown`, onEscPress);
    modal.classList.remove(`modal--close`);
    modal.classList.add(`modal--open`);
    feedbackCloseButton.addEventListener(`click`, closeModal);
    submitButton.addEventListener(`click`, messageCustomValidation);
    clearButton.addEventListener(`click`, clearForm);
    setFocus();
  };

  // Открытие по enter
  const onEnterPress = (evt) => {
    if (evt.key === ENTER_KEY) {
      showModal();
    }
  };

  formLinks.forEach((link) => link.addEventListener(`click`, showModal));
  formLinks.forEach((link) => link.addEventListener(`keydown`, onEnterPress));
})();
