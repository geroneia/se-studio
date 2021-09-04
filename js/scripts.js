"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lazysizes - v5.3.2 */
!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        fastLoadedClass: "ls-is-cached",
        iframeLoadMode: 0,
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        i = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        o = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        a = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!a[t]) {
        a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return a[t].test(e[$]("class") || "") && a[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var a;

      if (a = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(a, " "));
      }
    },
        V = function V(t, a, e) {
      var i = e ? P : "removeEventListener";

      if (e) {
        V(t, a);
      }

      r.forEach(function (e) {
        t[i](e, a);
      });
    },
        X = function X(e, t, a, i, r) {
      var n = D.createEvent("Event");

      if (!a) {
        a = {};
      }

      a.instance = k;
      n.initEvent(t, !i, !r);
      n.detail = a;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var a;

      if (!i && (a = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        a({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, a) {
      a = a || e.offsetWidth;

      while (a < H.minSize && t && !e._lazysizesWidth) {
        a = t.offsetWidth;
        t = t.parentNode;
      }

      return a;
    },
        ee = function () {
      var a, i;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        a = true;
        i = false;

        while (e.length) {
          e.shift()();
        }

        a = false;
      };

      var e = function e(_e, t) {
        if (a && !t) {
          _e.apply(this, arguments);
        } else {
          n.push(_e);

          if (!i) {
            i = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(a, e) {
      return e ? function () {
        ee(a);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          a.apply(e, t);
        });
      };
    },
        ae = function ae(e) {
      var a;
      var i = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        a = false;
        i = f.now();
        e();
      };

      var s = o && n > 49 ? function () {
        o(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (a) {
          return;
        }

        a = true;
        t = r - (f.now() - i);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ie = function ie(e) {
      var t, a;
      var i = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - a;

        if (e < i) {
          I(n, i - e);
        } else {
          (o || r)(r);
        }
      };

      return function () {
        a = f.now();

        if (!t) {
          t = I(n, i);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var M = 0;
      var N = -1;

      var L = function L(e) {
        M--;

        if (!e || M < 0 || !e.target) {
          M = 0;
        }
      };

      var x = function x(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var W = function W(e, t) {
        var a;
        var i = e;
        var r = x(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (i = i.offsetParent) && i != D.body && i != O) {
          r = (Z(i, "opacity") || 1) > 0;

          if (r && Z(i, "overflow") != "visible") {
            a = i.getBoundingClientRect();
            r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, a, i, r, n, s, o, l, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && M < 8 && (e = d.length)) {
          t = 0;
          N++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                w = f;
                N = 0;
              } else if (h > 1 && N > 1 && M < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (l !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              l = n;
            }

            a = d[t].getBoundingClientRect();

            if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
              R(d[t]);
              r = true;

              if (M > 9) {
                break;
              }
            } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              i = v[0] || d[t];
            }
          }

          if (i && !r) {
            R(i);
          }
        }
      };

      var a = ae(t);

      var S = function S(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        L(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, B);
        X(t, "lazyloaded");
      };

      var i = te(S);

      var B = function B(e) {
        i({
          target: e.target
        });
      };

      var T = function T(e, t) {
        var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;

        if (a == 0) {
          e.contentWindow.location.replace(t);
        } else if (a == 1) {
          e.src = t;
        }
      };

      var F = function F(e) {
        var t;
        var a = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (a) {
          e.setAttribute("srcset", a);
        }
      };

      var s = te(function (t, e, a, i, r) {
        var n, s, o, l, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (i) {
            if (a) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", i);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            o = t.parentNode;
            l = o && j.test(o.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || l);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(L, 2500);
            V(t, B, true);
          }

          if (l) {
            G.call(o.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !l) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || l)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, H.fastLoadedClass);
            }

            S(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            M--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var a = n.test(e.nodeName);
        var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = i == "auto";

        if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        M++;
        s(e, t, r, i, a);
      };

      var r = ie(function () {
        H.loadMode = 3;
        a();
      });

      var o = function o() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var l = function l() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(l, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        a();
        q("scroll", o, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", a, true);
          q("resize", a, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(a).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", a, true);
            O[P]("DOMAttrModified", a, true);
            setInterval(a, 999);
          }

          q("hashchange", a, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, a, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            l();
          } else {
            q("load", l);
            D[P]("DOMContentLoaded", a);
            I(l, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            a();
          }
        },
        checkElems: a,
        unveil: R,
        _aLSL: o
      };
    }(),
        re = function () {
      var a;
      var n = te(function (e, t, a, i) {
        var r, n, s;
        e._lazysizesWidth = i;
        i += "px";
        e.setAttribute("sizes", i);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", i);
          }
        }

        if (!a.detail.dataAttr) {
          Y(e, a.detail);
        }
      });

      var i = function i(e, t, a) {
        var i;
        var r = e.parentNode;

        if (r) {
          a = s(e, r, a);
          i = X(e, "lazybeforesizes", {
            width: a,
            dataAttr: !!t
          });

          if (!i.defaultPrevented) {
            a = i.detail.width;

            if (a && a !== e._lazysizesWidth) {
              n(e, r, i, a);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = a.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            i(a[e]);
          }
        }
      };

      var t = ie(e);
      return {
        _: function _() {
          a = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: i
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});
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
// (function () {
//   const lazyImages = document.querySelectorAll(`img[data-src], source[data-srcset]`);
//   const windowHeight = document.clientHeight;
//   let lazyImagesPositions = [];
//   if (lazyImages.length > 0) {
//     lazyImages.forEach((img) => {
//       if (img.dataset.src || img.dataset.srcset) {
//         lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
//         lazyScrollCheck();
//       }
//     });
//   }
//   window.addEventListener(`scroll`, lazyScroll);
//   function lazyScroll() {
//     if (document.querySelectorAll(`img[data-src], source[data-srcset]`).length > 0) {
//       lazyScrollCheck();
//     }
//   }
//   function lazyScrollCheck() {
//     let imgIndex = lazyImagesPositions.findIndex(
//         (item) => pageYOffset > item - windowHeight
//     );
//     if (imgIndex >= 0) {
//       if (lazyImages[imgIndex].dataset.src) {
//         lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
//         lazyImages[imgIndex].removeAttribute(`data-src`);
//       } else if (lazyImages[imgIndex].dataset.srcset) {
//         lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
//         lazyImages[imgIndex].removeAttribute(`data-srcset`);
//       }
//       delete lazyImagesPositions[imgIndex];
//     }
//   }
// })();
"use strict";
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
//# sourceMappingURL=scripts.js.map
