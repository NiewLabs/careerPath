var app = angular.module('careerPath', ['ngRoute', 'ui.bootstrap']);

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