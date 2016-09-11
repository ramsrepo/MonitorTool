angular.module('taskToolApp', ['ui.router', 'chart.js', 'pageslide-directive']).

//Configuring Routes
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.
	
	//Route to show HOME page
	state('home', {
						url : '/home',
						templateUrl : '../views/dtimonitor.html',
						controller : 'UserController'
							
	}).
	
	state('monitor', {
						url : '/monitor',
						templateUrl : '../views/dtimonitor.html'
			
	}).
	
	state('infosys', {
						url : '/infosys',
						templateUrl : '../views/infosys.html'

	}).
	
	state('user', {
						url : '/user',
						templateUrl : '../views/user.html'
	}).
	
	state('stats', {
						url: '/statistics',
						templateUrl : '../views/statistics.html',
						controller : 'StatisticsController',
						controllerAs : 'statsControl'
						
	});
	
	$urlRouterProvider.otherwise('/statistics');
	
}]);



