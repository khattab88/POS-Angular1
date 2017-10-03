'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ["$scope", "InvoiceSvc", function($scope, InvoiceSvc) {

  $scope.title = "Home Page";

  // $scope.title = 'Click me to expand';
  // $scope.text = 'Hi there folks, I am the content'
  // + 'that was hidden but is now shown.';

  // $scope.myText = 'Not Selected';
  // $scope.currentDate = '';
  // $scope.updateMyText = function(date) {
  // $scope.myText = 'Selected';
  // };

  var invoice = {
    total: 0,
    quantity: 0,
    cost: 0,
    calculateInvoiceTotal: function(quantity, cost){
      this.total = InvoiceSvc.calculateInvoiceTotal(quantity, cost);
    }
  };

  $scope.invoice = invoice;

}]);