(function(pokevo) {
	pokevo.Population = function(size = 180, mutationRate = 0.01) {
		this.pokemon = [size];
		this.generation = 0;
		this.maxFitness = 0;

		this.initPopulation = function() {
			var p = 0; //index in population
			var id = 0;
			var nextID;

			// evenly distribute types
			var numPerType = Math.floor(size/pokevo.types.length); 	
			for (var t in pokevo.types) {
				for (var i = 0; i < numPerType; i++) {
					nextID = this.generation + "-" + id++;
					this.pokemon[p++] = pokevo.generators.randomPokemon(this.generation, nextID, pokevo.types[t]);
				}
			}

			// fill up the rest with pokemon of random types
			while (p < size) {
				nextID = this.generation + "-" + id++;
				this.pokemon[p++] = pokevo.generators.randomPokemon(this.generation, nextID);
			}
			console.log(this.pokemon);
		}
		this.initPopulation();

		this.calculateFitness = function() {
			pokevo.STATE = "battling";
			// battle every pokemon with every other pokemon.
			// the winner gets +1 fitness.
			for (var i = 0; i < this.pokemon.length; i++) {
				for (var j = i+1; j < this.pokemon.length; j++) { 
					// don't battle two pokemon that cannot damage each other
					if (!pokevo.battle.mutuallyImmune(this.pokemon[i], this.pokemon[j])) { 
						var winner = pokevo.battle.startBattle(this.pokemon[i], this.pokemon[j]);
						if (winner != null) {
							winner.fitness++;
							if (winner.fitness > this.maxFitness) {
								maxFitness = winner.fitness;
							}
						}
					}
				}
			}
		}

		this.acceptReject = function() {
			while (true) {
				var poke = this.pokemon[pokevo.generators.randInt(this.pokemon.length)]; // random pokemon
				var r = pokevo.generators.randInt(maxFitness); // random number between 0 and maxFitness
				if (r <= poke.fitness) { // accept pokemon if its fitness is >= the random number, allows for pokemon with 0 fitness to be accepted 
					return poke;
				}
			}
		}

		this.breedPokemon = function() {
			var parentA = this.acceptReject();
			var parentB = this.acceptReject();
			while (parentA === parentB) { // don't breed a pokemon with itself!
				parentB = this.acceptReject();
			}
			return pokevo.breed(parentA, parentB);
		}

		this.populateNextGeneration = function() {
			var nextGen = [size];
			for (var i = 0; i < size; i++) {
				nextGen[i] = this.breedPokemon();
			}
			this.pokemon = nextGen;
		}
	}
})(window.pokevo = window.pokevo || {});