// Menu

const mobileNav = document.querySelector(".header-nav");
const mobileToogle = document.querySelector(".page-header__button");
mobileNav.classList.add("header-nav--closed");

mobileToogle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileNav.classList.toggle("header-nav--closed");
});

// SHEDULE

anychart.onDocumentReady(function () {

  // create data
  var data = [
    {month:"January", sales: 12000},
    {month:"February", sales: 15000},
    {month:"March", sales: 16000},
    {month:"April", sales: 14000},
    {month:"May", sales: 10000}
  ];

  // create a data set
  var dataSet = anychart.data.set(data);

  // map the data
  var mapping = dataSet.mapAs({x: "month", value: "sales"});

  // create a chart
  var chart = anychart.column();

  // create a series and set the data
  var series = chart.column(mapping);

  // set the chart title
  chart.title("Диаграмма");

  // set the container id
  chart.container("shedule");

  // initiate drawing the chart
  chart.draw();
});


// FULL SIZE

/* Получите элемент, который вы хотите отобразить в полноэкранном режиме (видео в этом примере): */
let elem = document.querySelector(".page");
const fullSize = document.querySelector(".page-header__button-viewsize");
/* При выполнении функции open Full screen() откройте видео в полноэкранном режиме.
Примечание что мы должны включать префиксы для разных браузеров, так как они еще не поддерживают метод requestFullscreen */

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function fullScreenCancel() {
  if(document.requestFullscreen) {
    document.requestFullscreen();
  } else if(document.webkitRequestFullscreen ) {
    document.webkitRequestFullscreen();
  } else if(document.mozRequestFullscreen) {
    document.mozRequestFullScreen();
  }
}

// PRELOADER

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

// TODO

var list = document.querySelector('.todo__list');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}
