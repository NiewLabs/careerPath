;(function(){
  'use strict';

  var AboutCtrl = function($rootScope) {
    $rootScope.showBackground = function() {
      return true;
    };
  };
  AboutCtrl.$inject = ['$rootScope'];

  angular.module('careerPath').controller('AboutCtrl', AboutCtrl);

})();