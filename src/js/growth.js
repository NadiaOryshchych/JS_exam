function growth() {
   // Увеличение изображения
   let overlay = document.querySelector('.overlay'),
      img = document.querySelectorAll('.works_img'),
      popupImg = document.createElement('div'),
      imgBig = document.createElement('img');

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