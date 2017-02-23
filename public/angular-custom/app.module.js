/**
 * Created by a598519 on 20-02-2017.
 */
var app = angular.module('conti-demo',["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/views/template/planner-template.html"
        })
        .when("/menu",{
            templateUrl:"/views/template/menu-template.html"
        });

});
