/* eslint-disable no-undef */
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

// eslint-disable-next-line no-new
new Swiper(`.image-slider`, {
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
    maxRatio: 5,
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
