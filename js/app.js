'use strict';


angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).otherwise({
            redirectTo: '/'
        })
    });