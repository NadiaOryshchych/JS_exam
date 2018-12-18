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