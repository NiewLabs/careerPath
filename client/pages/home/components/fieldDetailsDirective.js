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

var FieldDetailsCtrl = function(fieldData) {
    var _this = this;
    fieldData.load().then(function(data) {
        _this.fieldData = data;
        _this.sampleJobs = data.sampleJobMap[_this.field.groupingCode];
    });
};