angular.module('careerPath').directive('fieldDetails', function() {
    return {
        templateUrl: 'client/pages/home/components/fieldDetailsDirective.html',
        controller: FieldDetailsCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            field: '='
        }
    };
});

var FieldDetailsCtrl = function() {
    this.field;
};