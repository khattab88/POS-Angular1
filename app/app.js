(function (){

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.directives',
  'myApp.home',
  'myApp.products',
  'myApp.users',
  'myApp.version'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])

.provider("configuration", function(){

  var configurationData;

  this.initialize = function(data){
    configurationData = data;
  };

  this.$get = function(){
    return configurationData;
  };

});


angular.element(document).ready(function(){
  
  // dummy response
  var response = {
    userName: "omar"
  };

    //$.get("config.json", function(response){
      angular.module("myApp").config(function(configurationProvider){
        configurationProvider.initialize(response);
      });
    //});
  
    angular.bootstrap(document, ["myApp"]);
  
  });



})();