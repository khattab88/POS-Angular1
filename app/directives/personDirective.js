"use strict";

angular.module("myApp.directives")
    .controller("personInfoCtrl", function($scope){
        
    })
    .directive("personInfo", function(){
        return{
            restrict: "EA",
            replace: false,
            templateUrl: "directives/personDirective.html"
        };
    });