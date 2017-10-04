'use strict';

describe('myApp.home module', function() {

  var $scope;

  beforeEach(module('myApp.home'));

  beforeEach(inject(function($rootScope, $controller, InvoiceSvc) {
    $scope = $rootScope.$new();
    $controller('HomeCtrl', {$scope: $scope});
  }));

  describe('home controller', function(){

    it('should define HomeCtrl', inject(function($controller) {
       //spec body
       var homeCtrl = $controller('HomeCtrl');
       expect(homeCtrl).toBeDefined();
    }));

    it("should have title property", function(){
        var expected = "Home Page";
        var actual = $scope.title;

        expect(expected).toEqual(actual);
    });

  });

});