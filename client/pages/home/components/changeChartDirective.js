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
            		marginTop: 70,
            		//backgroundColor: '#FCFFC5'//'#FCFFC5'
            	},
                title: {
                    text: 'Jobs Projections: New Jobs vs Seekers',
                    //align: 'center',
                    //verticalAlign: 'top'
                    x: -20, //center
                    style: {
							//color: 'blue',
							fontWeight: 'bold',
							fontSize: '17px'
						}
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
                		format: '{value:,.0f}',
                		formatter: function() {
                			return this.value * 1000;
                			}
                },
                title: {
                        text: 'Jobs',
                        style: {
							//color: 'blue',
							fontWeight: 'bold',
							fontSize: '15px'
						}
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    backgroundColor: 'white',//'#FCFFC5',
    				borderColor: 'black',
    				borderRadius: 10,
    				borderWidth: 1.5,
                    formatter: function() {
                    		return this.y * 1000 + ' jobs';
                    		},
                },
                credits: {
                	enabled: false
                },
                
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'top',
                    y: 20,
                    borderWidth: 0,
                    floating: true
                },
                series: [{
                	type: 'column',
                    name: 'New Jobs',
                    data: scope.jobChange,
                    //color: 'blue',
					shadow: {
						color: '#00BFFF',
						width: 1,
						offsetX: 0,
						offsetY: 0
					}
                }, {
                	type: 'column',
                    name: 'Job Seekers',
                    data: scope.jobSeekers,
                    color: '#848484',
					shadow: {
						color: '#424242',
						width: 1,
						offsetX: 0,
						offsetY: 0
					}
                }]
            }); 
        }
    };
});
