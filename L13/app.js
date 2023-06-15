(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
// 2nd step: register factory filter with Angular application
.filter('loves', LovesFilter);

// 4th step: inject loveFilter into controller
// loveFilter: loves comes from filter name loves, Filter is appended by Angular.js
MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.stateOfMood = "angry";

  $scope.sayMessage = function () {
    var msg = "Fannie likes to sleep at night!";
    return msg;
  };

  // 3rd step: create sayLoveMessage
  $scope.sayLovesMessage = function () {
    var msg = "Fannie likes to sleep at night!";
    msg = lovesFilter(msg)
    return msg;
  };

  $scope.delight = function () {
    $scope.stateOfMood = "grinning";
  };
}

// 1st step: create filter factory function
function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }
}

})();
