/* eslint-disable no-undef */

(function () {
  // popup
  const pageHeader = document.querySelector(`.page-header`);
  const headerToggle = pageHeader.querySelector(`.main-nav__toggle`);
  const mainNav = document.querySelector(`.page-header__main-nav`);

  pageHeader.classList.remove(`page-header--nav-opened`);
  headerToggle.classList.remove(`main-nav__toggle--nav-opened`);
  mainNav.classList.remove(`main-nav--nav-opened`);

  headerToggle.addEventListener(`click`, function () {
    pageHeader.classList.toggle(`page-header--nav-opened`);
    headerToggle.classList.toggle(`main-nav__toggle--nav-opened`);
    mainNav.classList.toggle(`main-nav--nav-opened`);
  });

  // open form
  const formLinks = document.querySelectorAll(`.form-link`);
  const modal = document.querySelector(`.modal`);
  const feedbackCloseButton = document.querySelector(`.feedback__close-button`);
  const ESC_KEY = `Escape`;
  const ENTER_KEY = `Enter`;

  const setFocus = () => document.querySelector(`#name`).focus();

  const showModal = (evt) => {
    evt.preventDefault();
    document.addEventListener(`click`, onOverlayClick, true);
    document.addEventListener(`keydown`, onEscPress);
    modal.classList.remove(`modal--close`);
    modal.classList.add(`modal--open`);
    feedbackCloseButton.addEventListener(`click`, closeModal);
    setFocus();
  };
  const closeModal = () => {
    modal.classList.add(`modal--close`);
    modal.classList.remove(`modal--open`);
    feedbackCloseButton.removeEventListener(`click`, closeModal);
  };

  // Открытие по enter
  const onEnterPress = (evt) => {
    if (evt.key === ENTER_KEY) {
      showModal();
    }
  };

  // Закрытие по esc
  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closeModal();
    }
  };

  // Закрытие по нажатию вне окна
  const onOverlayClick = function (evt) {
    const target = evt.target;
    if (target.classList.contains(`modal`)) {
      closeModal();
    }
  };

  formLinks.forEach((link) => link.addEventListener(`click`, showModal));
  formLinks.forEach((link) => link.addEventListener(`keydown`, onEnterPress));

  // eslint-disable-next-line no-new
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
