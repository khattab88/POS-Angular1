'use strict';

angular.module('myApp.products', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/products', {
      templateUrl: 'products/products.html',
      controller: 'ProductsCtrl'
    });

    $routeProvider.when('/products/:id', {
      templateUrl: 'products/productDetails.html',
      controller: 'ProductDetailCtrl'
    });

  }])

  .controller('ProductsCtrl', ["$scope", "ProductSvc", function ($scope, ProductSvc) {

    $scope.title = "Product List";
    $scope.products = [];

    $scope.products = ProductSvc.getProducts().then(
      function (data) {
        $scope.products = data;
      }
      , function (status) {
        console.log(status);
      });

  

  }]);