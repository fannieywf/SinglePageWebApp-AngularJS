(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  // 2a.
  $scope.onceCounter = 0;
  // 3a.
  $scope.counter = 0;

  $scope.showNumberOfWatchers = function () {
    // 1.
    console.log("no. of Watchers: ", $scope.$$watchersCount);
  };

  // 2c.
  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  }

  // 3b.
  $scope.upCounter = function () {
    $scope.counter++;
  }

  $scope.$watch('onceCounter', function (newValue, oldValue) {
    console.log("onceCounter old value: ", oldValue);
    console.log("onceCounter new value: ", newValue);
  });

  // 3d.
  $scope.$watch('counter', function (newValue, oldValue) {
    console.log("counter old value: ", oldValue);
    console.log("counter new value: ", newValue);
  });
  

}

})();
