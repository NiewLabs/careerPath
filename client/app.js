var app = angular.module('careerPath', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'client/pages/home/home.html',
            controller: 'HomeCtrl as ctrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
});