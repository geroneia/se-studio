(function () {
  const body = document.querySelector(`#body`);
  const scrollLink = document.querySelector(`.go-top-button`);
  if (scrollLink) {
    window.addEventListener(`scroll`, () => {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        scrollLink.classList.add(`go-top-button--active`);
      } else {
        scrollLink.classList.remove(`go-top-button--active`);
      }
    });

    const goTopHandler = (evt) => {
      evt.preventDefault();
      body.scrollIntoView({
        behavior: `smooth`,
        block: `start`,
      });
    };

    scrollLink.addEventListener(`click`, goTopHandler);
  }

  // Плавно подкручивает к разделу, если совершен переход по якорной ссылке с другой страницы или на той же
  const sectionScrolling = () => {
    if (window.location.hash) {
      const {hash} = window.location;
      const section = document.querySelector(hash);
      setTimeout(() => {
        window.scroll(0, 0);
        section.scrollIntoView({
          behavior: `smooth`,
          block: `start`,
        });
      }, 1);
    }
  };

  sectionScrolling();
  window.addEventListener(`hashchange`, sectionScrolling);

  const promoButton = document.querySelector(`.promo-button`);
  const scrollHeight = document.documentElement.clientHeight;

  if (promoButton) {
    promoButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      window.scrollTo({
        top: scrollHeight,
        behavior: `smooth`,
      });
    });
  }

})();

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

(function () {
  const pageHeader = document.querySelector(`.page-header`);
  const headerToggle = pageHeader.querySelector(`.main-nav__toggle`);
  const mainNav = document.querySelector(`.page-header__main-nav`);
  const mainNavLinks = document.querySelectorAll(`.main-nav__item-link`);

  const popupToggle = () => {
    pageHeader.classList.toggle(`page-header--nav-opened`);
    headerToggle.classList.toggle(`main-nav__toggle--nav-opened`);
    mainNav.classList.toggle(`main-nav--nav-opened`);
  };

  const popupClose = () => {
    pageHeader.classList.remove(`page-header--nav-opened`);
    headerToggle.classList.remove(`main-nav__toggle--nav-opened`);
    mainNav.classList.remove(`main-nav--nav-opened`);
  };

  popupClose();

  headerToggle.addEventListener(`click`, popupToggle);

  mainNavLinks.forEach((link) => {
    link.addEventListener(`click`, popupClose);
  });
})();

/* eslint-disable no-new */
/* eslint-disable no-undef */
(function () {

  new Swiper(`.image-slider`, {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      dynamicBullets: true,
    },
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDoun: true,
    },
    watchOverflow: true,
    zoom: {
      maxRatio: 2,
      minRatio: 1,
    },
    ally: {
      enabled: true,
      prevSlideMessage: `Предыдущий слайд`,
      nextSlideMessage: `Следующий слайд`,
      firstSlideMessage: `Первый слайд`,
      lastSlideMessage: `Последний слайд`,
      notificationClass: `swiper-notification`,
      containerMessage: ``,
      containerRoleDescriprionMessage: ``,
      itemRoleDescriptionMessage: ``,
    },
  });
})();
