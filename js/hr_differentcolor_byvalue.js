$(document).ready(function(){
   Highcharts.chart('diffcolor', {
       title: {
            text: 'Prova multicolor line con HR'
       },
       series: [{
           name: 'HR',
           data: [140,146,148,150,164,170,179,176,177,180,181,174,172,185,185,
           180,175,160,158,146,140],
           zones: [{
               value: 149,
               color: '#47ed00'
           }, {
               value: 184,
               color: '#ed7e00'
           }, {
               color: '#ed0019'
           }]
       }]
   });
});