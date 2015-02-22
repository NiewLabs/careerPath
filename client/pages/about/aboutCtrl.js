var AboutCtrl = function($rootScope) {
    $rootScope.showBackground = function() {
        return true;
    };
};

angular.module('careerPath').controller('AboutCtrl', AboutCtrl);