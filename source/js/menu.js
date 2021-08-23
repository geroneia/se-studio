const menu = () => {
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
};

export default menu;