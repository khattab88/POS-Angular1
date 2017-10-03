"use strict";

angular.module('myApp.products')
    .controller("ProductDetailCtrl", ["$scope", "$routeParams", "ProductSvc",
         function($scope, $routeParams, ProductSvc){
            
            var id = $routeParams.id;
            console.log(id);

            //products.find(x => x.productId == this.productId);

            $scope.product = {};

            $scope.product = ProductSvc.getProducts().then(
                function (data) {
                  $scope.product = data.find(x => x.productId == id);
                }
                , function (status) {
                  console.log(status);
                });

         }]);