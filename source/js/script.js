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
