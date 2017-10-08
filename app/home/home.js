'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  

  .controller('HomeCtrl', ["$scope", "InvoiceSvc", "SharedSvc", "configuration" , function ($scope, InvoiceSvc, SharedSvc, configuration) {

    $scope.userName = configuration.userName;
    console.log(configuration.userName);

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
      calculateInvoiceTotal: function (quantity, cost, event) {
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
    $scope.searchResults = [
      {
        heading: "Search Result Heading 1",
        text: "Search Result Text 1"
      },
      {
        heading: "Search Result Heading 2",
        text: "Search Result Text 2"
      },
      {
        heading: "Search Result Heading 3",
        text: "Search Result Text 3"
      },
    ];

    $scope.formatSearchResult = function (searchResult) {

      return `${searchResult.heading} - ${searchResult.text}`;

    };


  }]);




  