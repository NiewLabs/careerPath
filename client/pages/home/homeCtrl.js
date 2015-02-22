var HomeCtrl = function($location, $rootScope, $filter, $timeout, fieldData) {
    var _this = this;

    this.$location = $location;
    this.$filter = $filter;
    this.$timeout = $timeout;

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
    var _this = this;
    var search = {search: this.liveSearch};

    var results = this.$filter('filter')(this.fieldData.allDescriptions, this.liveSearch);
    var uniqueResults = this.$filter('unique')(results, 'id');
    if (uniqueResults.length === 1) {

        //hack to make sure the current details get unloaded
        this.$timeout(function() {
            var newSearch = _this.$location.search();
            angular.extend(newSearch, {id: uniqueResults[0].id});
            _this.location.search(newSearch);
        });

    }

    this.$location.search(search);
};

HomeCtrl.prototype.getFieldId = function() {
    return this.$location.search().id;
};

HomeCtrl.prototype.getSearch = function() {
    return this.$location.search().search;
};