function calc() {
// Modal calc
   let inputCalc = document.querySelectorAll('.calc_size'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelectorAll('.popup_close'),

      glazingBtn = document.querySelectorAll('.glazing_price_btn'),

      popupCalc = document.querySelector('.popup_calc'),
      popupCalcPro = document.querySelector('.popup_calc_profile'),
      popupCalcProEnd = document.querySelector('.popup_calc_end'),

      calcNext = document.querySelector('.popup_calc_button'),
      calcProNext = document.querySelector('.popup_calc_profile_button');

   for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
         for (let i = 0; i < inputCalc.length; i++) {
            inputCalc[i].value = '';
         }
         winView.value = 'tree';
         for (let i = 0; i < winCheck.length; i++) {
            winCheck[i].checked = false;
         }
      });
   }

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

// Calc object
   let winWidth = document.getElementById('width'),
      winHeight = document.getElementById('height'),
      winView = document.getElementById('view_type'),
      winCheck = document.querySelectorAll('.checkbox'),
      checkLabel = document.querySelectorAll('.checkbox_wrap .label');
   let calcForm = new Object();

   winCheck[0].addEventListener('change', function () {
      if (winCheck[1].checked == true) {
         winCheck[1].checked = false;
      }
   });
   winCheck[1].addEventListener('change', function () {
      if (winCheck[0].checked == true) {
         winCheck[0].checked = false;
      }
   });

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
   });
   calcProNext.addEventListener('click', function () {
      calcForm.viewWindow = winView.value;
      for (let i = 0; i < winCheck.length; i++) {
         if (winCheck[i].checked) {
            calcForm.profileWindow = checkLabel[i].textContent;
            break;
         } else {
            calcForm.profileWindow = 'Тип профиля не выбран';
         }
      }
   });

// Form calc Send
   let messageCalc = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
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
         request.open('POST', '../dist/server.php');
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
         for (let i = 0; i < inputCalc.length; i++) {
            inputCalc[i].value = '';
         }
         for (let i = 0; i < winCheck.length; i++) {
            winCheck[i].checked = false;
         }
         winView.value = 'tree';
      });
   }
   formSendCalc(formCalc);
}
module.exports = calc;