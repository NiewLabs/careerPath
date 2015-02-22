var app = angular.module('careerPath');

app.directive('totalChart', function () {
    return {
        scope: {
            jobTotals: '='
        },
        link: function (scope, element) {
            element.highcharts({
            	chart: {
            		marginTop: 60,
            		//backgroundColor: '#FCFFC5'//'#FCFFC5'
            	},
                title: {
                    text: 'Total Projected Jobs',
                    //align: 'center',
                    //verticalAlign: 'top',
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
                	floor: 0,
                	//ceiling: 100000,
                	labels: {
                		formatter: function() {
                			return this.value; // * 1000;
                		}
                		//format: '{value:,.0f}'
                	},
                    title: {
                        text: 'Jobs (in thousands)',
                        style: {
							//color: 'blue',
							fontWeight: 'bold',
							fontSize: '14.5px'
						}
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    backgroundColor: 'white', //#FCFFC5',
    				borderColor: 'black',
    				borderRadius: 2,
    				borderWidth: 1.5,
                    formatter: function() {
                    		return this.y * 1000 + ' jobs';
                    		},
                	format: '{this.y*1000,.0f}'
                },
                credits: {
                	enabled: false
                },
                
                legend: {
                	//enabled: false,
                	spaceTop: 10,
                    layout: 'vertical',
                    //align: 'center',
                    x: -20, //center
                	verticalAlign: 'top',
                	y: 20,
                    borderWidth: 0,
                    floating: true
                },
                
                series: [{
                	//type: 'column',
                    name: 'Total Projected Jobs ',
                    data: scope.jobTotals,
                    //color: 'blue',
					shadow: {
						color: 'grey',
						width: 5,
						offsetX: 0,
						offsetY: 0
					}
                }]
            });
        }
    };
});
