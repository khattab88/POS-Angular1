angular.module("myApp.users")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider.when("/users/:name", {
            templateUrl: "users/userDetailsTemplate.html",
            controller: "UserDetailsCtrl"
        });
    }])

    .controller("UserDetailsCtrl", ["$scope", "$routeParams", function($scope, $routeParams){

        var userName = $routeParams.name;
        $scope.title = "User Details: " + userName;
    }]);