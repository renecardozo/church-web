'use strict'
/**
 * Module to start all app
 * @namespace main module
 */
var appChurchLvc = angular.module('appChurchLvc', ['ngRoute']);

appChurchLvc.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'scripts/modules/home/views/home.html',
			controller: 'homeController'
		});
		// .when('/home', {
		// 	templateUrl: '../modules/views/contact.html',
		// 	controller: 'contactController'
		// })
		// .when('/about', {
		// 	templateUrl: '../scripts/modules/views/about.html',
		// 	controller: 'aboutController'
		// });
		// .when('/news', {
		// 	templateUrl: '../modules/views/news.html',
		// 	controller: 'newsController'
		// })
		// .when('/login', {
		// 	templateUrl: '../modules/views/login.html',
		// 	controller: 'loginController'
		// });
}]);