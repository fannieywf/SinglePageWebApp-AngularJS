// Digest Cycle does not get triggered automatically if events are unaware of Angular
// instead of jQuery, $digest & $apply for not Angular-aware 
// Solution:
// 1) Call $digest after your custom code
// 2) Wrap your custom code inside of $apply
// 3) Find Angular specific service that handles the same functioality, e.g. $timeout

(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

// 3) $timeout
CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function () {
        $scope.counter++;
        console.log("Counter incremented!");
    }, 2000);
  }

  // 2) $apply
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //       console.log("Counter incremented!");
  //     });
  //   }, 2000);
  // };

  // 1) $digest
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("Counter incremented!");
  //     $scope.$digest();
  //   }, 2000);
  // };
}

})();
