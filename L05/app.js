(function () {
'use strict';

angular.module('myFirstApp', [])

// share data between view model and view: $scope
// $ sign in front of some variable name: reserved for Angular

.controller('MyFirstController', function ($scope) {
// 1. $scope.xx
    $scope.name = "Fannie";
    $scope.sayHello = function () {
        return "Hello!";
    };
});

})();