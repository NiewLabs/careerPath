var app = angular.module('careerPath');

app.directive('totalChart', function () {
    return {
        scope: {
            jobTotals: '='
        },
        link: function (scope, element) {
            element.highcharts({
            	chart: {
            		spacingTop: 0
            	},
                title: {
                    text: 'Total Projected Jobs',
                    x: -20 //center
                },
                /*subtitle: {
                    text: 'Source: Employment and Social Development Canada',
                    x: -20
                },
                */
                xAxis: {
                    categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018',
                        '2019', '2020', '2021', '2022', '2022']
                },
                
                yAxis: {
                	labels: {
                		formatter: function() {
                			return this.value * 1000;
                			}
                	},
                    title: {
                        text: 'Jobs'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                	formatter: function() {
                				return this.y * 1000;
                			}
                },
                credits: {
                	enabled: false
                },
                /*
                legend: {
                	spaceTop: 10,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    borderWidth: 0,
                    floating: true
                },
                */
                series: [{
                	//type: 'column',
                    name: 'Total Projected Jobs ',
                    data: scope.jobTotals
                }]
            });
        }
    };
});
