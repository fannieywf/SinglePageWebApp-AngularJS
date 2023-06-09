// Minification: process of removing all unncessary chars from source code without changing its functionality 
// Purpose: reduces amount of data transferred from server
// https://www.toptal.com/developers/javascript-minifier

// Input JS:
// (function () {
//     'use strict';
    
//     angular.module('DIApp', [])
//     .controller('DIController', DIController);
    
//     function DIController ($scope, $filter) {
//       $scope.name = "Fannie";
    
//       $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//       };
//     }
    
//     })();

// minified JS Output does not work:
    // angular.module("DIApp",[]).controller("DIController",function e(n,o){n.name="Yaakov",n.upper=function(){var e=o("uppercase");n.name=e(n.name)}});
// not working due to error: $injector:unpr
// because $scope and $filter disappeared, which are looked for by AngularJS to know what to inject into this DI controller


// Input JS:
// (function () {
//     'use strict';
    
//     angular.module('DIApp', [])
//     // instead of just putting DIController as function value, put it in last element of an array
//     // also specify what the DIController function expects: $scope & $filter (as defined in function DIController())
//     // strings in array are protected from minification
//     .controller('DIController', ['$scope', '$filter', DIController]);
    
//     function DIController ($scope, $filter) {
//       $scope.name = "Fannie";
    
//       $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//       };
//     }
    
//     })();

// minified JS Output works:
// angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function e(n,o){n.name="Fannie",n.upper=function(){var e=o("uppercase");n.name=e(n.name)}}]);


// Input JS:
// (function () {
//     'use strict';
    
//     angular.module('DIApp', [])
//     // instead of just putting DIController as function value, put it in last element of an array
//     // also specify what the DIController function expects: $scope & $filter (as defined in function DIController())
//     // strings in array are protected from minification
//     .controller('DIController', DIController);
    
//     DIController.$inject = ['$scope', '$filter'];
//     function DIController ($scope, $filter) {
//       $scope.name = "Fannie";
    
//       $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//       };
//     }
    
//     })();

// minified JS Output works elegantly:
!function(){"use strict";function e(e,n){e.name="Fannie",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();

// Summary:
// - DI in Angular needs to be minification proof 
// - 2 methods:
//     - inline array w function as last Element
//     - attach $inject property to function object