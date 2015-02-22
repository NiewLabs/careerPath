var app = angular.module('careerPath');

app.directive('ifReloadOnChange', function ($timeout) {
    return {
        restrict: 'A',
        transclude: true,
        template: '<span ng-if="condition"><ng-transclude></ng-transclude></span>',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.ifReloadOnChange, function(value){
                scope.condition = false;
                $timeout(function() {
                    scope.condition = value;
                });
            });
        }
    };
});