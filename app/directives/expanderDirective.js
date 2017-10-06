"use strict";

angular.module("myApp.directives")
    .directive("expanderDirective", function () {
        return {
            restrict: "EA",
            //templateUrl: "directives/expanderDirective.html",
            replace: true,
            transclude: true,
            scope: { title: '=expanderTitle' },
            template: '<div>' +
            '<div class="title" ng-click="toggle()">{{title}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>' +
            '</div>',
            link: function (scope, element, attrs) {
                scope.showMe = false;
                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;
                }
            }
        };
    });