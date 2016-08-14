window.pokevo;
var population = new pokevo.Population(18);
var app1 = angular.module('app1', []);
app1.controller('ctrl1', function($scope) {
    $scope.population = population.pokemon;
});


