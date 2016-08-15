var app1 = angular.module('app1', []);
// variables
pokevo.MAX_INTEL = 100;
pokevo.BST = 600;
pokevo.LEVEL = 100;

// basic pokemon stuff that won't change
pokevo.MAX_IV = 31;
pokevo.N_STATS = 6;
pokevo.N_MOVES = 4;

app1.controller('ctrl1', function($scope) {
	var population;
	$scope.size = 2;
	$scope.generatePopulation = function() {
		population = new pokevo.Population($scope.size);
		$scope.population = population.pokemon;
	}

	$scope.calcFitness = function() {
		console.log(pokevo);
		population.calculateFitness();
	}
});

// $("p:contains(Grass)").css("color", "green");
