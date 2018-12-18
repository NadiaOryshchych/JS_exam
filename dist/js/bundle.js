/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let calc = __webpack_require__(/*! ./js/calc */ "./src/js/calc.js"),
       form = __webpack_require__(/*! ./js/form */ "./src/js/form.js"),
       growth = __webpack_require__(/*! ./js/growth */ "./src/js/growth.js"),
       modal = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js"),
       tabs = __webpack_require__(/*! ./js/tabs */ "./src/js/tabs.js"),
       timer = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");
   
   calc();
   form();
   growth();
   modal();
   tabs();
   timer();
}); 

/***/ }),

/***/ "./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
   // Modal tabs + calc
   let glazingBtn = document.querySelectorAll('.glazing_price_btn'),

      popupCalc = document.querySelector('.popup_calc'),
      popupCalcPro = document.querySelector('.popup_calc_profile'),
      popupCalcProEnd = document.querySelector('.popup_calc_end'),

      calcNext = document.querySelector('.popup_calc_button'),
      calcProNext = document.querySelector('.popup_calc_profile_button');

   for (let i = 0; i < glazingBtn.length; i++) {
      glazingBtn[i].addEventListener('click', function () {
         overlay.style.display = 'block';
         popupCalc.style.display = 'block';
         document.body.style.overflow = 'hidden';
      });
   }

   calcNext.addEventListener('click', function () {
      popupCalc.style.display = 'none';
      popupCalcPro.style.display = 'block';
   });
   calcProNext.addEventListener('click', function () {
      popupCalcPro.style.display = 'none';
      popupCalcProEnd.style.display = 'block';
   });

   // Tabs Calc
   let tabCalc = document.querySelectorAll('.balcon_tab'),
      tabCalcWrap = document.querySelector('.balcon_icons'),
      tabCalcBig = document.querySelectorAll('.balcon_content');
   tabCalc[0].classList.add('do_image_more');
   let tabIndex = 1; // для отправки формы

   function hideTabCalcBig(a) {
      for (let i = a; i < tabCalcBig.length; i++) {
         tabCalcBig[i].classList.remove('show');
         tabCalc[i].classList.remove('do_image_more');
         tabCalcBig[i].classList.add('hide');
      }
   }
   hideTabCalcBig(1);

   function showTabCalcBig(b) {
      if (tabCalcBig[b].classList.contains('hide')) {
         tabCalcBig[b].classList.remove('hide');
         tabCalcBig[b].classList.add('show');
         tabCalc[b].classList.add('do_image_more');
      }
   }
   tabCalcWrap.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('balcon_tab')) {
         for (let i = 0; i < tabCalc.length; i++) {
            if (target == tabCalc[i]) {
               hideTabCalcBig(0);
               showTabCalcBig(i);
               tabIndex = (i + 1);
               break;
            }
         }
      }
   });

   // Calc
   let winWidth = document.getElementById('width'),
      winHeight = document.getElementById('height'),
      winView = document.getElementById('view_type'),
      winCheck = document.querySelectorAll('.checkbox'),
      checkLabel = document.querySelectorAll('.checkbox_wrap .label'),
      nameClient = document.getElementsByName('user_name'),
      phoneClient = document.getElementsByName('user_phone'),
      calcEnd = document.querySelector('.popup_calc_end_button');
   let calcForm = new Object();

   winWidth.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/, '');
   });
   winHeight.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/, '');
   });

   calcNext.addEventListener('click', function () {
      calcForm.typeWindow = 'Пользователь выбрал тип окна: ' + tabIndex;
      calcForm.widthWindow = +winWidth.value;
      calcForm.heightWindow = +winHeight.value;
      console.log(calcForm);
   });
   calcProNext.addEventListener('click', function () {
      calcForm.viewWindow = winView.value;
      for (let i = 0; i < winCheck.length; i++) {
         console.log(checkLabel /* [i] */ /* .textContent */ );
         console.log(winCheck /* [i] */ /* .textContent */ );
         if (winCheck[i].checked) {
            calcForm.profileWindow = checkLabel[i].textContent;
         } else {
            calcForm.profileWindow = 'Тип профиля не выбран';
         }
      }
      console.log(calcForm);
   });
   // calcEnd.addEventListener('click', function () {
   //    for (let i = 0; i < nameClient.length; i++) {
   //       if (nameClient[i] !== '') {
   //          calcForm.nameClient = nameClient[i].value;
   //       }
   //    }
   //    for (let i = 0; i < phoneClient.length; i++) {
   //       if (phoneClient[i] !== '') {
   //          calcForm.phoneClient = phoneClient[i].value;
   //       }
   //    }
   //    console.log(calcForm);
   // });

   // Отправка формы с калькулятора
   let messageCalc = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...',
      errorPhone: 'Введите номер в правильном формате!'
   };

   let formCalc = document.querySelector('.calc_form'),
      input = document.querySelectorAll('.form_input'),
      statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', function () {
         if (this.type == 'tel') {
            this.value = this.value.replace(/[^0-9+]/, '');
         }
      });
   }

   function formSendCalc(formCalc) {
      formCalc.addEventListener('submit', function (event) {
         event.preventDefault();
         formCalc.appendChild(statusMessage);

         // Отправка формы на JSON
         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');
         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

         let formData = new FormData(formCalc);

         formData.forEach(function (value, key) {
            calcForm[key] = value;
         });
         let json = JSON.stringify(calcForm);
         request.send(json);

         request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
               statusMessage.innerHTML = messageCalc.loading;
            } else if (request.readyState === 4 && request.status == 200) {
               statusMessage.innerHTML = messageCalc.success;
            } else {
               statusMessage.innerHTML = messageCalc.failure;
            }
         });

         for (let i = 0; i < input.length; i++) {
            input[i].value = '';
         }
      });
   }
   console.log(calcForm);
   formSendCalc(formCalc);
}
module.exports = calc;

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
   // AJAX - отправка всех форм, кроме калькулятора
   let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
   };

   let formPage = document.querySelectorAll('.main_form'),
      formModal = document.querySelectorAll('.modal_form'),
      formCalc = document.querySelector('.calc_form'),
      input = document.querySelectorAll('.form_input'),
      statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', function () {
         if (this.name == 'user_phone') {
            this.value = this.value.replace(/[^0-9+()]/, '');
         }
      });
   }

   function formSend(elem) {
      elem.addEventListener('submit', function (event) {
         event.preventDefault();
         elem.appendChild(statusMessage);

         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');
         request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

         let formData = new FormData(elem);
         request.send(formData);

         request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
               statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
               statusMessage.innerHTML = message.success;
            } else {
               statusMessage.innerHTML = message.failure;
            }
         });

         for (let i = 0; i < input.length; i++) {
            input[i].value = '';
         }
      });
   }
   for (let i = 0; i < formPage.length; i++) {
      formSend(formPage[i]);
   }
   for (let i = 0; i < formModal.length; i++) {
      formSend(formModal[i]);
   }
}
module.exports = form;

/***/ }),

/***/ "./src/js/growth.js":
/*!**************************!*\
  !*** ./src/js/growth.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function growth() {
   // Увеличение изображения
   let img = document.querySelectorAll('.works_img');
   let popupImg = document.createElement('div');
   let imgBig = document.createElement('img');

   for (let i = 0; i < img.length; i++) {
      img[i].addEventListener('click', function () {
         imgBig.setAttribute('src', 'img/our_works/big_img/' + (i + 1) + '.png');
         imgBig.style.cssText = 'margin: 25px;\
                                 max-height: 100%;\
                                 width: auto;\
                                 border-radius: 25px;';
         popupImg.style.cssText = 'display: flex;\
                                 padding: 25px;\
                                 justify-content: center;\
                                 align-items: center;';
         popupImg.classList.add('popup');
         popupImg.appendChild(imgBig);
         document.body.appendChild(popupImg);
         overlay.style.display = 'block';
         document.body.style.overflow = 'hidden';
      });
   }
   popupImg.addEventListener("click", function (event) {
      if (event.target.closest(".overlay")) return;
      popupImg.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
   });
}
module.exports = growth;

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
   // Modal
   let headerBtn = document.querySelector('.popup_engineer_btn'),
      popupEng = document.querySelector('.popup_engineer'),

      callback = document.querySelectorAll('.phone_link'),
      popupCall = document.querySelector('.popup_call'),

      popup = document.querySelectorAll('.popup'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelectorAll('.popup_close');

   // function showModal(e) {
   //    overlay.style.display = 'block';
   //    e.style.display = 'block';
   //    document.body.style.overflow = 'hidden';
   // }
   // headerBtn.addEventListener('click', showModal(popupEng));

   // for (let i = 0; i < callback.length; i++) {
   //    callback[i].addEventListener('click', showModal(popupCall));
   // }
   
   headerBtn.addEventListener('click', function () {
      overlay.style.display = 'block';
      popupEng.style.display = 'block';
      document.body.style.overflow = 'hidden';
   });
   
   for (let i = 0; i < callback.length; i++) {
      callback[i].addEventListener('click', function () {
         overlay.style.display = 'block';
         popupCall.style.display = 'block';
         document.body.style.overflow = 'hidden';
      });
   }

// Открытие через 60 секунд
   for (let i = 0; i < popup.length; i++) {
      if (document.body.style.overflow !== 'hidden') {
         window.setTimeout(function () {
            overlay.style.display = 'block';
            popupEng.style.display = 'block';
            document.body.style.overflow = 'hidden';
         }, 60000);
      }
   } 

   // Закрытие всех POPUP
   function closePopup() {
      for (let i = 0; i < popup.length; i++) {
         popup[i].style.display = 'none';
      }
      overlay.style.display = 'none';
      document.body.style.overflow = '';
   }
   for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', closePopup);
   }

   for (let i = 0; i < popup.length; i++) {
      popup[i].addEventListener("click", function (event) {
         if (event.target.closest(".popup_dialog")) return;
         closePopup();
      });
   }
}
module.exports = modal;

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
   // Tabs Glazing
   let tabGlazing = document.querySelectorAll('.glazing_tab'),
      tabGlBlock = document.querySelectorAll('.glazing_block'),
      tabGlImg = document.querySelectorAll('.glazing_img'),
      tabGlWrap = document.querySelector('.glazing_slider'),
      tabGlContent = document.querySelectorAll('.glazing .row');
   tabGlazing[0].classList.add('active');

   function hideTabGlContent(a) {
      for (let i = a; i < tabGlContent.length; i++) {
         tabGlContent[i].classList.remove('show');
         tabGlazing[i].classList.remove('active');
         tabGlContent[i].classList.add('hide');
      }
   }
   hideTabGlContent(1);

   function showTabGlContent(b) {
      if (tabGlContent[b].classList.contains('hide')) {
         tabGlContent[b].classList.remove('hide');
         tabGlContent[b].classList.add('show');
         tabGlazing[b].classList.add('active');
      }
   }
   tabGlWrap.addEventListener('click', function (event) {
      let target = event.target;
      if (target && (target.classList.contains('glazing_tab') ||
            target.classList.contains('glazing_block') ||
            target.classList.contains('glazing_img'))) {
         for (let i = 0; i < tabGlazing.length; i++) {
            if (target == tabGlazing[i] || target == tabGlBlock[i] ||
               target == tabGlImg[i]) {
               hideTabGlContent(0);
               showTabGlContent(i);
               break;
            }
         }
      }
   });

   // function swichTabs(event, tab, tabContent) {
   //    function hideTabContent(a, tab, tabContent) {
   //       for (let i = a; i < tabContent.length; i++) {
   //          tabContent[i].classList.remove('show');
   //          tab[i].classList.remove('active');
   //          tabContent[i].classList.add('hide');
   //       }
   //    }
   //    hideTabContent(1);
   //    function showTabContent(b, tab, tabContent) {
   //       if (tabContent[b].classList.contains('hide')) {
   //          tabContent[b].classList.remove('hide');
   //          tabContent[b].classList.add('show');
   //          tab[b].classList.add('active');
   //       }
   //    }
   //    let target = event.target;
   //    if (target && target.classList.contains('glazing_tab')) {
   //       for (let i = 0; i < tab.length; i++) {
   //          if (target == tab[i]) {
   //             hideTabContent(0);
   //             showTabContent(i);
   //             break;
   //          }
   //       }
   //    }
   // }
   // tabGlWrap.addEventListener('click', swichTabs(event, tabGlazing, tabGlContent));


   // Tabs Decor
   let tabDecor = document.querySelectorAll('.decoration_tab'),
      tabDecorLink = document.querySelectorAll('.decoration_link'),
      tabDecorWrap = document.querySelector('.decoration_slider'),
      tabDecorContent = document.querySelectorAll('.decoration_tab_content');
   tabDecor[0].classList.add('after_click');

   function hideTabDecorContent(a) {
      for (let i = a; i < tabDecorContent.length; i++) {
         tabDecorContent[i].classList.remove('show');
         tabDecor[i].classList.remove('after_click');
         tabDecorContent[i].classList.add('hide');
      }
   }
   hideTabDecorContent(1);

   function showTabDecorContent(b) {
      if (tabDecorContent[b].classList.contains('hide')) {
         tabDecorContent[b].classList.remove('hide');
         tabDecorContent[b].classList.add('show');
         tabDecor[b].classList.add('after_click');
      }
   }

   tabDecorWrap.addEventListener('click', function (event) {
      let target = event.target;
      if (target && (target.classList.contains('decoration_link') ||
            target.classList.contains('decoration_tab'))) {
         for (let i = 0; i < tabDecorLink.length; i++) {
            if (target == tabDecorLink[i] || target == tabDecor[i]) {
               hideTabDecorContent(0);
               showTabDecorContent(i);
               break;
            }
         }
      }
   });
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
   // Timer
   let deadline = '12-31-2018'; // именно такой формат учитывает часовой пояс mm/dd/yyyy

   function getTimeRemaiming(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / 1000 / 60 / 60) % 24),
         days = Math.floor((t / (1000 * 60 * 60 * 24)));
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
         let t = getTimeRemaiming(endtime);

         days.textContent = t.days < 10 ? '0' + t.days : t.days;
         hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
         minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
         seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

         if (t.total <= 0) {
            clearInterval(timeInterval);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
         }
      }
   }
   setClock('timer_wrap', deadline);
}
module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map