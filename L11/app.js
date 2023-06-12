
(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Fannie";
  $scope.stateOfMood = "angry";
  $scope.sayMessage = function () {
    return "Fannie likes to sleep at night!"
  }
  $scope.delight = function () {
    $scope.stateOfMood = "grinning"
  }
}

})();