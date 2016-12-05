$(document).ready(function () {

    var highHR = [];
    var midHR = [];
    var lowHR = [];


    highHR.push(185);

    midHR.push(184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,
    169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,
    150,149,148,147,146,145,144,143,142,141);

    lowHR.push(140);



   Highcharts.chart('provola', {
       chart: {
           type: 'line'
       },
       title: {
           text: 'Esempio con HR e BR'
       },
       xAxis: {
           categories: [1,2,3,4,5,6,7,8,9,10]
       },
       yAxis: {
           title: {
               text: 'HR'
           }
       },
       plotOptions: {
           line: {
               dataLabels: {
                   enabled: true
               },
               enableMOuseTracking: false
           }
       },
       series: [{
           name: 'HR',
           data: [140,164,170,179,176,177,180,181,174,172]

       }, {
           name: 'BR',
           data: [22,35,36,38,34,36,40,39,32,34]
       }]
   });
});