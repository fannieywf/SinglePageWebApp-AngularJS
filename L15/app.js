// Digest Cycle: running digest loops until all watchers report that nothing has changed - Dirty checking
// Several ways to set up watchers:
// 1. $scope.$watch - do not do this in a controller
// 2. {{ someProp }}
// 3. <input ... ng-model="someProp">
// Only applies to things done inside Angular context

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
  // 3.way setting watches
  $scope.name = "Fannie";

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

  $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })

  // 1.way setting watches: manually
  // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log("onceCounter old value: ", oldValue);
  //   console.log("onceCounter new value: ", newValue);
  // });

  // // 3d.
  // $scope.$watch('counter', function (newValue, oldValue) {
  //   console.log("counter old value: ", oldValue);
  //   console.log("counter new value: ", newValue);
  // });
  

}

})();
