"use strict";

angular.module("myApp").factory("ProductSvc", ["$http", "$q", function ($http, $q) {

    var getProducts = function(success, error){

        var deferred = $q.defer();

        $http({
            method: "GET",
            url: "api/products.json"
        }
        )
        .then(function (response) {
            deferred.resolve(response.data);
        }
        , function (response, status, headers, config) {
            deferred.reject(status);
        });

        return deferred.promise;
    };

    
    return{
        getProducts: getProducts
    };

}]);