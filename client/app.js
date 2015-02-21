var app = angular.module('careerPath', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'client/pages/home/home.html',
            controller: 'HomeCtrl as ctrl',
            reloadOnSearch: false
        })
        .otherwise({
            redirectTo: '/home'
        })
});