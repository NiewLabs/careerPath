angular.module('careerPath').directive('fieldDetails', function() {
    return {
        templateUrl: 'client/pages/home/components/fieldDetailsDirective.html',
        controller: FieldDetailsCtrl,
        controllerAs: 'ctrl',
        bindToCtrl: true
    };
});

var FieldDetailsCtrl = function() {

};