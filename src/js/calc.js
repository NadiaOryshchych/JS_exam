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