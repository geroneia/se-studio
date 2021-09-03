"use strict";

(function () {
  var body = document.querySelector("#body");
  var scrollLink = document.querySelector(".go-top-button");

  if (scrollLink) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        scrollLink.classList.add("go-top-button--active");
      } else {
        scrollLink.classList.remove("go-top-button--active");
      }
    });

    var goTopHandler = function goTopHandler(evt) {
      evt.preventDefault();
      body.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    scrollLink.addEventListener("click", goTopHandler);
  } // Плавно подкручивает к разделу, если совершен переход по якорной ссылке с другой страницы или на той же


  var sectionScrolling = function sectionScrolling() {
    if (window.location.hash) {
      var hash = window.location.hash;
      var section = document.querySelector(hash);
      setTimeout(function () {
        window.scroll(0, 0);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 1);
    }
  };

  sectionScrolling();
  window.addEventListener("hashchange", sectionScrolling);
  var promoButton = document.querySelector(".promo-button");
  var scrollHeight = document.documentElement.clientHeight;

  if (promoButton) {
    promoButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth"
      });
    });
  }
})();
"use strict";

(function () {
  // open form
  var formLinks = document.querySelectorAll(".form-link");
  var modal = document.querySelector(".modal");
  var feedbackCloseButton = document.querySelector(".feedback__close-button");
  var ESC_KEY = "Escape";
  var ENTER_KEY = "Enter";

  var setFocus = function setFocus() {
    return document.querySelector("#name").focus();
  };

  var closeModal = function closeModal() {
    modal.classList.add("modal--close");
    modal.classList.remove("modal--open");
    feedbackCloseButton.removeEventListener("click", closeModal);
  }; // Закрытие по esc


  var onEscPress = function onEscPress(evt) {
    if (evt.key === ESC_KEY) {
      closeModal();
    }
  }; // Закрытие по нажатию вне окна


  var onOverlayClick = function onOverlayClick(_ref) {
    var target = _ref.target;

    if (target.classList.contains("modal")) {
      closeModal();
    }
  }; // Валидация формы


  var submitButton = document.querySelector(".button-submit");
  var clearButton = document.querySelector(".button-clear"); //   const inputName = document.querySelector(`#name`);
  //   const inputEmail = document.querySelector(`#email`);

  var inputMessage = document.querySelector("#message");
  var warningMessage = document.querySelector(".feedback__note");
  var inputs = document.querySelectorAll("input", "textarea");

  var validateEmpty = function validateEmpty(text) {
    return !!text.trim();
  };

  var clearForm = function clearForm() {
    inputs.forEach(function (input) {
      input.value = "";
    });
    warningMessage.classList.remove("error");
  };

  var messageCustomValidation = function messageCustomValidation(evt) {
    if (!validateEmpty(inputMessage.value) || inputMessage.value === "") {
      evt.preventDefault();
      warningMessage.classList.add("error");
    } else {
      inputMessage.value = inputMessage.value;
      warningMessage.classList.remove("error");
    }
  };

  var showModal = function showModal(evt) {
    evt.preventDefault();
    clearForm();
    document.addEventListener("click", onOverlayClick, true);
    document.addEventListener("keydown", onEscPress);
    modal.classList.remove("modal--close");
    modal.classList.add("modal--open");
    feedbackCloseButton.addEventListener("click", closeModal);
    submitButton.addEventListener("click", messageCustomValidation);
    clearButton.addEventListener("click", clearForm);
    setFocus();
  }; // Открытие по enter


  var onEnterPress = function onEnterPress(evt) {
    if (evt.key === ENTER_KEY) {
      showModal();
    }
  };

  formLinks.forEach(function (link) {
    return link.addEventListener("click", showModal);
  });
  formLinks.forEach(function (link) {
    return link.addEventListener("keydown", onEnterPress);
  });
})();
"use strict";

(function () {
  var pageHeader = document.querySelector(".page-header");
  var headerToggle = pageHeader.querySelector(".main-nav__toggle");
  var mainNav = document.querySelector(".page-header__main-nav");
  var mainNavLinks = document.querySelectorAll(".main-nav__item-link");

  var popupToggle = function popupToggle() {
    pageHeader.classList.toggle("page-header--nav-opened");
    headerToggle.classList.toggle("main-nav__toggle--nav-opened");
    mainNav.classList.toggle("main-nav--nav-opened");
  };

  var popupClose = function popupClose() {
    pageHeader.classList.remove("page-header--nav-opened");
    headerToggle.classList.remove("main-nav__toggle--nav-opened");
    mainNav.classList.remove("main-nav--nav-opened");
  };

  popupClose();
  headerToggle.addEventListener("click", popupToggle);
  mainNavLinks.forEach(function (link) {
    link.addEventListener("click", popupClose);
  });
})();
"use strict";

/* eslint-disable no-new */

/* eslint-disable no-undef */
(function () {
  if (document.querySelector(".swiper")) {
    new Swiper(".image-slider", {
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      slideToClickedSlide: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDoun: true
      },
      watchOverflow: true,
      zoom: {
        maxRatio: 2,
        minRatio: 1
      },
      ally: {
        enabled: true,
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "First slide",
        lastSlideMessage: "Last slide",
        notificationClass: "swiper-notification",
        containerMessage: "",
        containerRoleDescriprionMessage: "",
        itemRoleDescriptionMessage: ""
      }
    });
  }
})();