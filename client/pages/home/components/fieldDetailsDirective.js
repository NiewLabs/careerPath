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

    this.jobSeekers = this.getJobSeekers();
    this.jobsChange = this.getJobsChange();
    this.jobTotals = this.getJobTotals();
};

FieldDetailsCtrl.prototype.getJobSeekers = function() {
    return this.field.projections.map(function(projection) {
        return projection.jobSeekers;
    });
};

FieldDetailsCtrl.prototype.getJobsChange = function() {
    return this.field.projections.map(function(projection) {
        return projection.jobsChange;
    });
};

FieldDetailsCtrl.prototype.getJobTotals = function() {
    return this.field.projections.map(function(projection) {
        return projection.jobsTotal;
    });
};