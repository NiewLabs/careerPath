var FieldData = function($http) {
    this.loadFieldsPromise = $http.get('client/data/fields.json').then(function(response) {
        var descriptions = [];
        var fieldMap = {};
        for(var i = 0; i < response.data.length; i++) {
            var curField = response.data[i];

            descriptions.push({
                id: curField.groupingCode,
                descriptions: [curField.description]
            });

            fieldMap[curField.groupingCode] = curField;
        }

        return {
            descriptions: descriptions,
            fieldMap: fieldMap
        };
    });
};

angular.module('careerPath').service('fieldData', FieldData);

FieldData.prototype.load = function() {
    return this.loadFieldsPromise;
};