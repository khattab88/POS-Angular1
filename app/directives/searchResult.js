"use strict";

angular.module("myApp.directives")
    .directive("searchResult", [function(){

        return{
            templateUrl: "directives/searchResult.html",
            replace: true,
            restrict: "EA",
            scope: {
                searchResultObject: "=",
                formatSearchResultFunction: "&"
            },
            link: function(scope, elements, attrs){
                    console.log("linking...");
                    console.log(elements);
            }
        };

}]);