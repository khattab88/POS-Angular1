"use strict";

// angular.module("myApp.services")
//     .service("SharedSvc", [function(){

//     this.appName = "My App";

// }]);


angular.module("myApp.services")
    .config(["$provide", function($provide){

        $provide.service("SharedSvc", function(){
            this.appName = "My App";
        });

    }]);