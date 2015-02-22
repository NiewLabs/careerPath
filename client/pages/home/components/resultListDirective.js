angular.module('careerPath').directive('resultList', function() {
    return {
        templateUrl: 'client/pages/home/components/resultListDirective.html',
        controller: ResultListCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            descriptions: '=',
            fieldMap: '=',
            search: '='
        }
    };
});

var ResultListCtrl = function(fieldData) {
    var _this = this;

    fieldData.load().then(function(fieldData) {
        _this.fieldData = fieldData;
        for(id in fieldData.fieldMap) {
            if(fieldData.sampleJobMap[id] && fieldData.sampleJobMap[id].length) {

                fieldData.fieldMap[id].sampleJob = _this.getRandomElement(fieldData.sampleJobMap[id]);
            }
        }

    });
};

ResultListCtrl.prototype.getRandomElement = function(anArray) {
  return anArray[Math.floor(Math.random()*anArray.length)];
};