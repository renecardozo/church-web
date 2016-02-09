'use strict'
/**
 * Module to start all app
 * @namespace main module
 */
var appChurchLvc = angular.module('appChurchLvc', ['ngRoute']);

appChurchLvc.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'scripts/modules/home/views/home.html',
			controller: 'homeController'
		})
		.when('/contact', {
			templateUrl: 'scripts/modules/contact/views/contact.html',
		 	controller: 'contactController'
		 })
		.when('/about', {
		 	templateUrl: 'scripts/modules/about/views/about.html',
		 	controller: 'aboutController'
		})
		.when('/news', {
		 	templateUrl: 'scripts/modules/news/views/news.html',
		 	controller: 'newsController'
		})
		.when('/login', {
		 	templateUrl: 'scripts/modules/login/views/login.html',
		 	controller: 'loginController'
		}).
		otherwise({
        	redirectTo: '/home'
      });
}]);