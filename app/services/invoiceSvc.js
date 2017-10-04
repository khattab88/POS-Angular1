"use strict";

angular.module("myApp.services")
    .factory("InvoiceSvc", ["$q", function($q){

        return{
            calculateInvoiceTotal: function(quantity, cost){
                return quantity * cost;
            }
        };

}]);