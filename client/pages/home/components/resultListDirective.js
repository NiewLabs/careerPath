angular.module('careerPath').directive('resultList', function() {
    return {
        templateUrl: 'client/pages/home/components/resultListDirective.html',
        controller: ResultListCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            fields: '='
        }
    };
});

var ResultListCtrl = function($timeout) {


};