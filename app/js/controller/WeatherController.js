'use strict';

weatherApp.controller('WeatherCtrl', ['$scope', 'weatherData',  function ($scope, weatherData) {
	weatherData.getWeather( function(weather){
		debugger;
		log.debug(weather);
		$scope.weather = weather;
	});
	weatherData.getCountry( function(countries){
		debugger;
		log.debug(countries);
		$scope.countries = countries;
	});
}])