var GlassDoorApi = function($http, $q, $timeout) {
    this.$http = $http;
    this.$q = $q;
    this.$timeout = $timeout;
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
                var results = [];
                var promiseMgr = _this.$q.defer();

                var test = function(glassDoorCodes) {
                    if(glassDoorCodes.length) {
                        var glassDoorCode = glassDoorCodes.pop();
                        _this.$timeout(function() {
                            _this.$http.jsonp('http://api.glassdoor.com/api/api.htm?t.p=30382&t.k=eBFiKASn4PW&userip=74.125.226.136&useragent=&format=json&v=1&action=jobs-stats&jc=' + glassDoorCode + '&admLevelRequested=1&country=Canada&returnJobTitles=true&callback=JSON_CALLBACK')
                                .then(function(response) {
                                    results.push({
                                        name: _this.glassDoorCodeNameMap[glassDoorCode].join(', '),
                                        jobTitles: response.data.response.jobTitles
                                    });
                                    promiseMgr.resolve(results);
                                    test(glassDoorCodes);
                                });
                        },1000);
                    }
                };

                test(curGlassDoorCodes);
                return promiseMgr.promise;
            }
        });
};
