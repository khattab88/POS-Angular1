'use strict';

describe('myApp.products module', function() {

  beforeEach(module('myApp.products'));

  describe('products controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var ProductsCtrl = $controller('productsCtrl');
      expect(ProductsCtrl).toBeDefined();
    }));

  });
});