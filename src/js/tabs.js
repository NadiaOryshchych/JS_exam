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