var FieldData = function($http, $q) {
    var fieldData = {
        descriptions: [],
        fieldMap: {},
        allDescriptions: [],
        sampleJobMap: {}
    };

    this.loadFieldsPromise = $q.all([
        $http.get('client/data/fields.json'),
        $http.get('client/data/groupings_to_titles.json')
    ])
        .then(function(responses) {
            var fields = responses[0].data;
            var sampleJobMap = responses[1].data;

            for(var i = 0; i < fields.length; i++) {
                var curField = fields[i];

                fieldData.descriptions.push({
                    id: curField.groupingCode,
                    description: curField.description
                });
                fieldData.allDescriptions.push({
                    id: curField.groupingCode,
                    description: curField.description
                });

                fieldData.fieldMap[curField.groupingCode] = curField;
            }

            fieldData.sampleJobMap = sampleJobMap;

            for(id in sampleJobMap) {
                for(var j = 0; j < sampleJobMap[id].length; j++) {
                    fieldData.allDescriptions.push({
                        id: id,
                        description: sampleJobMap[id][j]
                    });
                }
            }

            return fieldData;
    });
};

angular.module('careerPath').service('fieldData', FieldData);

FieldData.prototype.load = function() {
    return this.loadFieldsPromise;
};