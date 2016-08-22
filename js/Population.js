(function(pokevo) {
	pokevo.Population = function(size = 180, mutationRate = 0.01) {
		this.pokemon = [size];
		this.generation = 0;
		this.maxFitness = 0;
		this.id = 0;

		this.initPopulation = function() {
			var p = 0; //index in population
			var nextID;

			// evenly distribute types
			var numPerType = Math.floor(size/pokevo.types.length); 	
			for (var t in pokevo.types) {
				for (var i = 0; i < numPerType; i++) {
					nextID = this.generation + "-" + this.id++;
					this.pokemon[p++] = pokevo.generators.randomPokemon(this.generation, nextID, pokevo.types[t]);
				}
			}

			// fill up the rest with pokemon of random types
			while (p < size) {
				nextID = this.generation + "-" + this.id++;
				this.pokemon[p++] = pokevo.generators.randomPokemon(this.generation, nextID);
			}
			console.log(this.pokemon);
		}
		this.initPopulation();

		this.battle = function(poke1, poke2) {
			var results = pokevo.battle.startBattle(poke1, poke2);
			if (results == null) {
				poke1.tiedWith.push(poke2.id);
				poke2.tiedWith.push(poke1.id);
			}
			else{
				results[0].defeated.push(results[1].id);
				results[1].defeatedBy.push(results[0].id);
				results[0].fitness++;
				if (results[0].fitness > this.maxFitness) {
					maxFitness = results[0].fitness;
				}
			}
		}

		this.battleAll = function() {
			pokevo.STATE = "battling";
			// battle every pokemon with every other pokemon.
			// the winner gets +1 fitness.
			for (var i = 0; i < this.pokemon.length; i++) {
				for (var j = i+1; j < this.pokemon.length; j++) { 
					this.battle(this.pokemon[i], this.pokemon[j]);
				}
			}
		}

		// TODO: tournament style battling

		this.selectParent = function() {
			console.log("choosing a pokemon...");
			while (true) {
				var poke = this.pokemon[randInt(this.pokemon.length)]; // random pokemon
				var r = randInt(maxFitness); // random number between 0 and maxFitness
				if (r <= poke.fitness) { // accept pokemon if its fitness is >= the random number, allows for pokemon with 0 fitness to be accepted 
					return poke;
				}
			}
		}

		this.breedPokemon = function() {
			var parentA = this.selectParent();
			var parentB = this.selectParent();
			while (parentA === parentB) { // don't breed a pokemon with itself!
				parentB = this.selectParent();
			}
			console.log("breeding " + parentA.id + " and " + parentB.id);
			return pokevo.breeder.breed(parentA, parentB, this.generation, this.generation + "-" + this.id++);
		}

		this.populateNextGeneration = function() {
			console.log("populating next generation...");
			this.generation++;
			this.id = 0;
			var nextGen = [size];
			for (var i = 0; i < size; i++) {
				nextGen[i] = this.breedPokemon();
			}
			this.pokemon = nextGen;
			console.log(this.pokemon);
		}
	}
})(window.pokevo = window.pokevo || {});