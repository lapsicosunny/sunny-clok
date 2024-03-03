(function() {
  'use strict';

  function getDate() {
    var date = new Date();
    var hour = date.getHours();

    var greeting;

    if (hour < 8) {
      greeting = "Buenos días Sol";
    } else if (hour < 20) {
      greeting = "Buenas tardes Sol";
    } else {
      greeting = "Buenas noches Sol";
    }

    var weekdayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var weekday = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    if (hour > 12) hour -= 12;

    var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
    var showTime = hour + ":" + minutes + ":" + seconds + (hour < 12 ? " PM" : " AM");

    document.getElementById('date').innerHTML = showDate;
    document.getElementById('time').innerHTML = showTime;
    
    document.getElementById('greeting').innerHTML = greeting;

    requestAnimationFrame(getDate);
  }

  getDate();

}());