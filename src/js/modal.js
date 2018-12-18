function modal() {
   // Modal
   let headerBtn = document.querySelector('.popup_engineer_btn'),
      popupEng = document.querySelector('.popup_engineer'),

      callback = document.querySelectorAll('.phone_link'),
      popupCall = document.querySelector('.popup_call'),

      popup = document.querySelectorAll('.popup'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelectorAll('.popup_close'),
      input = document.querySelectorAll('.form_input');

   function showModal(e) {
      overlay.style.display = 'block';
      e.style.display = 'block';
      document.body.style.overflow = 'hidden';
   }
   
   headerBtn.addEventListener('click', function () {
      showModal(popupEng);
   });
   
   for (let i = 0; i < callback.length; i++) {
      callback[i].addEventListener('click', function () {
         showModal(popupCall);
      });
   }

// Открытие через 60 секунд
   for (let i = 0; i < popup.length; i++) {
      if (document.body.style.overflow !== 'hidden') {
         window.setTimeout(function () {
            showModal(popupEng);
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
      for (let i = 0; i < input.length; i++) {
         input[i].value = '';
      }
   }
   for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', closePopup);
   }

   for (let i = 0; i < popup.length; i++) {
      popup[i].addEventListener("click", function (event) {
         if (event.target.closest(".popup_dialog")) return;
         for (let i = 0; i < popup.length; i++) {
            popup[i].style.display = 'none';
         }
         overlay.style.display = 'none';
         document.body.style.overflow = '';
      });
   }
}
module.exports = modal;