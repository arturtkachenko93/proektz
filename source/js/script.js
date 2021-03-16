// SHEDULE

anychart.onDocumentReady(function () {

  // create data
  var data = [
    {month:"January", sales: 12000},
    {month:"February", sales:  15000},
    {month:"March", sales:  16000},
    {month:"April", sales:  14000},
    {month:"May", sales:  10000}
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


// TO DO

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Нажмите на кнопку закрыть, чтобы скрыть текущий элемент списка
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Добавление символа "проверено" при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
