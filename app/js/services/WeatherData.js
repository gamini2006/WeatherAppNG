

weatherApp.factory('weatherData', function ($http, $log) {
	return {
		getWeather: function(successcb, cityid){
			$http({method:'GET', url:'http://api.openweathermap.org/data/2.5/weather?id=' + cityid}).
			success(function(data, status, headers, config){
				successcb(data);
			}).
			error(function(data, status, headers, config) {
				$log.warn(data, status, headers, config);
			});
		}
		/*getCountry: function(successcb){
			$http({method:'GET', url:'json/countries.json'}).
			success(function(data, status, headers, config){
				successcb(data);
			}).
			error(function(data, status, headers, config) {
				$log.warn(data, status, headers, config);
			});
			
		}*/
	};
});
/*weatherApp.factory('countryData', function ($http) {
	return {
		getCountry: function(successcb){
			$http({method:'GET', url:'json/countries.json'}).
			success(function(data, status, headers, config){
				successcb(data);
			}).
			error(function(data, status, headers, config) {
				$log.warn(data, status, headers, config);
			});
			
		}
	};
});*/