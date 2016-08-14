(function(pokevo) {
	function Population(size = 180) {
		this.pokemon = [size];
		this.generation = 0;

		this. initPopulation = function initPopulation() {
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
	}
	pokevo.Population = Population;
})(window.pokevo = window.pokevo || {});
