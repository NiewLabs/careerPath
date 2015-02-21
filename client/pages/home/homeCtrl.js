var HomeCtrl = function($location, fieldData) {
    var _this = this;

    this.$location = $location;

    if($location.search().id) {
        this.fieldId = $location.search().id;
    }
    if($location.search().search) {
        this.search = $location.search().search;
    }

    fieldData.load().then(function(data) {
        _this.fieldData = data;
    });
};

angular.module('careerPath').controller('HomeCtrl', HomeCtrl);

HomeCtrl.prototype.preformSearch = function() {
    this.$location.search({search: this.liveSearch});
};