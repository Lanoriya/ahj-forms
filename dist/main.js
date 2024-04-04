/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 930: /***/ () => {
      let btn = document.querySelector(".btn-pop");
      let pop = document.createElement("div");
      pop.classList.add("pop-content");
      let popTitle = document.createElement("div");
      let popText = document.createElement("div");
      let triangle = document.createElement("div"); // Создаем элемент для треугольника

      popTitle.classList.add("pop-title");
      popText.classList.add("pop-text");
      triangle.classList.add("triangle"); // Добавляем класс для треугольника

      popTitle.textContent = "Popover title";
      popText.textContent = `And here's some amazing content. It's very engaging. Right?`;
      btn.addEventListener("click", () => {
        const { top, left, width } = btn.getBoundingClientRect();
        if (document.querySelector(".pop-content")) {
          document.querySelector(".pop-content").remove();
        } else {
          pop.append(popTitle);
          pop.append(popText);
          pop.append(triangle);
          document.body.appendChild(pop);
          const popLeft = left - (pop.offsetWidth - width) / 2;
          const popTop = top - pop.offsetHeight - triangle.offsetHeight;
          pop.style.left = popLeft + "px";
          pop.style.top = popTop + "px";
          console.log(left);
          console.log(width);
          console.log(popLeft);
        }
      });

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    /* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(930);
    /* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);
  })();

  /******/
})();
