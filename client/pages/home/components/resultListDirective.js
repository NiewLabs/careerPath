angular.module('careerPath').directive('resultList', function() {
    return {
        templateUrl: 'client/pages/home/components/resultListDirective.html',
        controller: ResultListCtrl,
        controllerAs: 'ctrl',
        bindToCtrl: true
    };
});

var ResultListCtrl = function() {

};