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
            compile: function(elem, attrs){

                console.log("compiling...");
                console.log(elem.html());
                console.log(attrs);

                return{
                    pre: function(scope, elements, attrs){
                        console.log("pre-linking...");
                        console.log(elements);
                    },
                    post: function(scope, elements, attrs){
                        console.log("post-linking...");
                        console.log(elements);
                    }
                }

            }
        };

}]);