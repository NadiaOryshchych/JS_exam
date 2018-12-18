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