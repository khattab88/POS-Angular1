'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ["$scope", "InvoiceSvc", "SharedSvc", function($scope, InvoiceSvc, SharedSvc) {

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
    calculateInvoiceTotal: function(quantity, cost, event){
      this.total = InvoiceSvc.calculateInvoiceTotal(quantity, cost);

      console.log(event);
    }
  };
  $scope.invoice = invoice;

  
  $scope.appName = SharedSvc.appName;

  $scope.person = {
    name: "omar",
    age: 30
  };

  // search result directive model
  $scope.searchResult = {
    heading: "Search Result Heading",
    text: "Search Result Text"
  };

  $scope.formatSearchResult = function(searchResult){

    return `${searchResult.heading} - ${searchResult.text}`;

  };


}]);