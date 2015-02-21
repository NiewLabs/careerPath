var FieldData = function($http) {
    this.loadFieldsPromise = $http.get('client/data/fields.json').then(function(response) {
        return response.data;
    });
};

angular.module('careerPath').service('fieldData', FieldData);

FieldData.prototype.load = function() {
    return this.loadFieldsPromise;
};