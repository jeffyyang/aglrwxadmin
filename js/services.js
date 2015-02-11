'use strict';

/* Services */

// Demonstrate how to register services
angular.module('app.services', []);

appServices.factory('accessService', function($rootScope) {
    var accessService = {};
 

    accessService.login = function(type, msg) {

    };
 
    accessService.logout = function(alert) {

    };
 
    return accessService;
});

appServices.factory('userService', function($rootScope) {
    var userService = {};
 
    userService.add = function(user) {

    };
 
    userService.del = function(userId) {

    };
 
    userService.update = function(user) {


    };
 
    return userService;
});