var HomeCtrl = function($location, $rootScope, $filter, fieldData) {
    var _this = this;

    this.$location = $location;
    this.$filter = $filter;

    this.liveSearch = this.getSearch();

    $rootScope.showBackground = function() {
        return (!_this.getSearch() && !_this.getFieldId());
    };

    fieldData.load().then(function(data) {
        _this.fieldData = data;
    });
};

angular.module('careerPath').controller('HomeCtrl', HomeCtrl);

HomeCtrl.prototype.preformSearch = function() {
    var search = {search: this.liveSearch};

    var results = this.$filter('filter')(this.fieldData.descriptions, this.liveSearch);

    if (results.length === 1) {
        search.id = results[0].id;
    }

    this.$location.search(search);
};

HomeCtrl.prototype.getFieldId = function() {
    return this.$location.search().id;
};

HomeCtrl.prototype.getSearch = function() {
    return this.$location.search().search;
};