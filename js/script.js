var app1 = angular.module('app1', []);
app1.controller('ctrl1', function($scope) {
	var population;
	$scope.size = 180;
	$scope.generatePopulation = function() {
		population = new pokevo.Population($scope.size);
		$scope.population = population.pokemon;
	}
});
