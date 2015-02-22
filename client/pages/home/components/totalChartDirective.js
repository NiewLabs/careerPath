var app = angular.module('careerPath');

app.directive('totalChart', function () {
    return {
        scope: {
            jobTotals: '='
        },
        link: function (scope, element) {
            element.highcharts({
                title: {
                    text: 'Job Projections',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: EDC Canada',
                    x: -20
                },
                xAxis: {
                    categories: ['2013', '2014', '2015', '2016', '2017', '2018',
                        '2019', '2020', '2021', '2022', '2022']
                },
                yAxis: {
                    title: {
                        text: 'Thousands'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                	type: 'column',
                    name: 'Job Totals',
                    data: scope.jobTotals
                }]
            });
        }
    };
});
