(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    // anthing (not just in Angular) with $ is referred to as a service 
    // inject filter service in DIController
    function DIController ($scope, 
                           $filter, 
                           $injector) {
      $scope.name = "Fannie";

      $scope.upper = function () {
        // upCase function filter
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    //   internally used by Angular to figure out where to inject which services
      console.log($injector.annotate(DIController));
    }
    
function AnnonateMe(name, job, blah) {
    return "Blah!";
}

// console.log(AnnonateMe);
// console.log(AnnonateMe());
// console.log(AnnonateMe.toString());
console.log(DIController.toString());

})();