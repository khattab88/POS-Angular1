"use strict";

angular.module("myApp.users", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider){

        $routeProvider.when("/users", {
            templateUrl: "users/usersTemplate.html",
            controller: "UsersCtrl"
        });

    }])

    .controller("UsersCtrl", ["$scope", function($scope){
        $scope.title = "Users Page";
    }]);