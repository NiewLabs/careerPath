var HomeCtrl = function(fieldData) {
    var _this = this;

    fieldData.load().then(function(data) {
        _this.fieldData = data;
    });
};

angular.module('careerPath').controller('HomeCtrl', HomeCtrl);