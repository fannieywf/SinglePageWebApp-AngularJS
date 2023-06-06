// 1. start with IIFE: no local var blled into global scope
// ()();

(function () {
// declaring our function with use strict
// enable certain things to protect us from making mistakes
// x = "hello"; 
// var x = "hello";
// if x is not defined using var, it will go ahead and define itself on global scope
// see Console from Firefox: Tools/BrowserTools/Web Developer Tools
'use strict';



    // 2. Angular JS exposes on global scope is really just 1 particular object - angular
    // module method first takes the name of application
    // module method then takes a list of dependencies in our application is going to need, in form of array
    // first leaves as empty array as no dependencies at this point, just a regular plain AngularJS application
    angular.module('myFirstApp', [])

    // 3. define view model of view (index.html)
    // 1st parameter: name of viewmodel or controller
    // 2nd parameter: function defines functionality of controller
    .controller('MyFirstController', function() {

    });

})();