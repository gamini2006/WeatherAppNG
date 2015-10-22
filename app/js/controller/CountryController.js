

/*countryApp.controller('CountryCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('json/countries.json')
	.success(function(data){
		debugger;
		$scope.countries = data;
	})
}])*/

weatherApp.controller('CountryCtrl', function ($scope, $http, $log, $filter, weatherData) {
	$scope.selectedCountry = null,
	$scope.filteredcitydata = null,
	$scope.selectedCity = null,
	$scope.weather = null,
	$scope.apikey = "e44c5cf5cb3b90ab8432daf8e3962200",
	$http.get('json/countries.json')
		.success(function(data){
			$scope.countries = data;
		}).
		error(function(data, status, headers, config) {
				$log.warn(data, status, headers, config);
		}),
	$scope.updateCountry = function(){
		console.log($scope.selectedCountry);

		$http.get('json/citylist.json')
		.success(function(data){
			$scope.citydata = data;
			$scope.filteredcitydata = $filter('filter')($scope.citydata, {country: $scope.selectedCountry}, true);
		}).
		error(function(data, status, headers, config) {
			$log.warn(data, status, headers, config);
		});
	},
	$scope.updateCity = function(){
		
		weatherData.getWeather( function(weather){
			console.log(weather); 	
			$scope.weather = weather;
		}, $scope.selectedCity, $scope.apikey);
	}
});