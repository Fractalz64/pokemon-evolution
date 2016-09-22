var app1 = angular.module('app1', []);
// variables
pokevo.MAX_INTEL = 100;
pokevo.BST = 600;
pokevo.LEVEL = 100;
pokevo.DUAL_TYPE_CHANCE = 0.7;
pokevo.IVS_INHERITED = 3;
pokevo.NATURE_INHERITANCE = 0.5;
pokevo.MUTATION_RATE = 0.01;
pokevo.STATE = "";

// basic pokemon stuff that won't change
pokevo.MAX_IV = 31;
pokevo.N_STATS = 6;
pokevo.N_MOVES = 4;
pokevo.random = Math.random;

app1.controller('ctrl1', function($scope) {

	var population;
	$scope.pop_size = 20;
	$scope.mutationRate = 0.01;
	$scope.disableBattle = true;
	$scope.disableBreed = true;

	$scope.generatePopulation = function() {
		if (typeof $scope.pop_size === 'number' && $scope.pop_size >=2 && $scope.pop_size <= 200) {
			population = new pokevo.Population($scope.pop_size, $scope.mutationRate);
			pokevo.MUTATION_RATE = $scope.mutationRate;
			$scope.population = population.pokemon;
			$scope.generations = population.generations;
			$scope.disableBattle = false;
		}
	}

	$scope.message = "";
	function loadingMessage(message) {
		$scope.message = message;
		setInterval(change, 1000);
		function change() {
			if (pokevo.STATE == "") {
				return;
			}
			$scope.message += '.';
		}
	}


	$scope.sortByFitness = true;
	$scope.battle = function() {
		//$scope.message = "battling...";
		population.battleAll();
		//$scope.message = "done";
		$scope.disableBreed = false;
	}

	$scope.nextGen = function() {
		population.populateNextGeneration();
		$scope.population = population.pokemon;
		$scope.disableBreed = true;
	}

	$scope.showGeneration = function(index) {
		$scope.population = population.generations[index];
	}

});

// $("p:contains(Grass)").css("color", "green");
