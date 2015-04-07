var CourseraApi = function($http, $q, $timeout) {
    this.$http = $http;
    this.$q = $q;
    this.$timeout = $timeout;
};

angular.module('careerPath').service('courseraApi', CourseraApi);

CourseraApi.prototype.load = function(groupingId) {
    var _this = this;
    return this.$http.get('client/data/groupings_to_coursera.json', { cache: true})
        .then(function(response) {
            var curSearchKeywords = response.data[groupingId];
            if(curSearchKeywords && curSearchKeywords.length) {
                var results = [];
                var promiseMgr = _this.$q.defer();

                var test = function(searchKeywords) {
                    if(searchKeywords.length) {
                        var searchKey = searchKeywords.pop();
                        var url = 'https://api.coursera.org/api/catalog.v1/courses?q=search&query=' + searchKey + '&callback=JSON_CALLBACK';

/*
                        $.getJSON(url, function (aResponse) {
                            alert(JSON.stringify(aResponse));
                        },'jsonp');

                        _this.$http.get(url).then(function(cResponse) {
                            return cResponse.data;
                        });
*/
                        //_this.$timeout(function() {
// Their API does not support JSONP :(
                            _this.$http.jsonp(url)
                             // + '&callback=JSON_CALLBACK')
                                .then(function(bResponse) {
                                    results.push({
                                        //name: _this.glassDoorCodeNameMap[searchKey].join(', '),
                                        courses: bResponse.data.response.elements
                                    });
                                    promiseMgr.resolve(results);
                                    test(searchKeywords);
                                });
                        //},1000);

                    }
                };

                test(curSearchKeywords);
                return promiseMgr.promise;
            }
        });
};
