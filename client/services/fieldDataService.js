var FieldData = function($http) {
    var descriptions = [];
    var fieldMap = {};
    var allDescriptions = [];

    this.loadFieldsPromise = $http.get('client/data/fields.json').then(function(response) {
        for(var i = 0; i < response.data.length; i++) {
            var curField = response.data[i];

            descriptions.push({
                id: curField.groupingCode,
                description: curField.description
            });
            allDescriptions.push({
                id: curField.groupingCode,
                description: curField.description
            });

            fieldMap[curField.groupingCode] = curField;
        }

        return {
            descriptions: descriptions,
            allDescriptions: allDescriptions,
            fieldMap: fieldMap
        };
    });

    $http.get('client/data/groupings_to_titles.json').then(function(response) {
        for(id in response.data) {
            for(var i = 0; i < response.data[id].length; i++) {
                allDescriptions.push({
                    id: id,
                    description: response.data[id][i]
                });
            }
        }
        console.log('dont loading');
    });
};

angular.module('careerPath').service('fieldData', FieldData);

FieldData.prototype.load = function() {
    return this.loadFieldsPromise;
};