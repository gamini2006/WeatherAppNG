'use strict';

var cmmnApp = angular.module('cmmnApp', []);
//var countryApp = angular.module('countryApp', []);
var weatherApp = angular.module('waetherApp', []);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
