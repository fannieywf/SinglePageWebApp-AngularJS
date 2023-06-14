(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

// augment $inject property that MsgController is placed
MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Fannie";
  $scope.stateOfMood = "angry";
  $scope.smileCost = .78;

  $scope.sayMessage = function () {
    var msg = "Fannie likes to sleep at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.delight = function () {
    $scope.stateOfMood = "grinning";
  };
}

})();
