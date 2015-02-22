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

var FieldDetailsCtrl = function($sce, fieldData, glassDoorApi) {
    var _this = this;
    fieldData.load().then(function(data) {
        _this.fieldData = data;
        _this.sampleJobs = data.sampleJobMap[_this.field.groupingCode];
    });

    this.jobSeekers = this.getJobSeekers();
    this.jobsChange = this.getJobsChange();
    this.jobTotals = this.getJobTotals();

    glassDoorApi.load(this.field.groupingCode).then(function(results) {
        _this.glassDoorListings = results;
    });

    this.details = [];

    for(title in this.field.details) {
        this.details.push({
            title: title,
            content: $sce.trustAsHtml(this.field.details[title])
        });
    }
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

FieldDetailsCtrl.prototype.getLinkToGlassdoor = function(jobTitle) {
    var dashedTitle = jobTitle.replace(/ /g, '-');
    return 'http://www.glassdoor.ca/Job/' + dashedTitle + '-jobs-SRCH_KO0,'+dashedTitle.length+'.htm';
};