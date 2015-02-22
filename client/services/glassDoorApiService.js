var GlassDoorApi = function($http, $q) {
    this.$http = $http;
    this.$q = $q;
};

angular.module('careerPath').service('glassDoorApi', GlassDoorApi);

GlassDoorApi.prototype.load = function(groupingId) {
    var _this = this;
    return this.$http.get('client/data/glassdoor_job_categories.json', { cache: true})
        .then(function(response) {
            _this.glassDoorCodeNameMap = response.data;
            return _this.$http.get('client/data/groupings_to_glassCodes.json', { cache: true})
        })
        .then(function(response) {
            var curGlassDoorCodes = response.data[groupingId];
            if(curGlassDoorCodes && curGlassDoorCodes.length) {
                return _this.$q.all(curGlassDoorCodes.map(function(glassDoorCode) {
                    return _this.$http.jsonp('http://api.glassdoor.com/api/api.htm?t.p=30382&t.k=eBFiKASn4PW&userip=74.125.226.136&useragent=&format=json&v=1&action=jobs-stats&jc=' + glassDoorCode + '&admLevelRequested=1&country=Canada&returnJobTitles=true&callback=JSON_CALLBACK')
                        .then(function(response) {
                            return {
                                name: _this.glassDoorCodeNameMap[glassDoorCode].join(', '),
                                jobTitles: response.data.response.jobTitles
                            };
                        });
                }));
            }
        });
};
