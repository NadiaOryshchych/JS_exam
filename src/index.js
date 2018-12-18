window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let calc = require('./js/calc'),
       form = require('./js/form'),
       growth = require('./js/growth'),
       modal = require('./js/modal'),
       tabs = require('./js/tabs'),
       timer = require('./js/timer');
   
   calc();
   form();
   growth();
   modal();
   tabs();
   timer();
}); 