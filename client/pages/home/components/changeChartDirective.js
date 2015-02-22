var app = angular.module('careerPath');

app.directive('changeChart', function () {
    return {
        scope: {
            jobSeekers: '=',
            jobChange: '='
        },
        link: function (scope, element) {
            element.highcharts({
            	chart: {
            		spacingTop: 0
            	},
                title: {
                    text: 'Jobs Projections: Changes vs Seekers',
                    //align: 'center',
                    //verticalAlign: 'top'
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
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'top',
                    borderWidth: 0,
                    floating: true
                },
                */
                series: [{
                	type: 'column',
                    name: 'Job Demands',
                    data: scope.jobChange
                }, {
                	type: 'column',
                    name: 'Job Seekers',
                    data: scope.jobSeekers
                }]
            }); 
        }
    };
});
