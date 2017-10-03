"use strict";

angular.module("myApp.directives").directive("hello", function(){
    return{
        restrict: "E",
        templateUrl: "directives/helloDirective.html",
        replace: false
    };
});