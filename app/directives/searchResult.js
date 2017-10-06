"use strict";

angular.module("myApp.directives")
    .directive("searchResult", [function(){

        return{
            templateUrl: "directives/searchResult.html",
            replace: true,
            restrict: "EA",
            scope: {
                searchResultHeading: "@",
                searchResultText: "@"
            }
        };

}]);