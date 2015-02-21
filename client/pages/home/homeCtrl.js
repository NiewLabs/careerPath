var HomeCtrl = function($http) {
    var _this = this;

    $http.get('client/data/fields.json').then(function(response) {
        _this.fields = response.data;
    });
};

angular.module('careerPath').controller('HomeCtrl', HomeCtrl);