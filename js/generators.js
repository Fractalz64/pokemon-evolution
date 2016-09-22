
(function(pokevo) {
	sortNumbers = function(a,b) {
		    return a - b;
	}

	randInt = function(bound) {
			return Math.floor(pokevo.random()*bound);
	}

	sumArray = function(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}


	pokevo.generators = {
	  	// generate stats that sum to BST
		randomStats: function() {
			stats = [];
			nums = [];
			for (var i = 0; i < pokevo.N_STATS-1; i++) {
				nums[i] = randInt(pokevo.BST);
			}
			nums.push(0);
			nums.push(pokevo.BST);
			nums.sort(sortNumbers); 
			for (var i = 0; i < pokevo.N_STATS; i++) {
				stats[i] = nums[i+1] - nums[i];
			}
			return stats;
		},

		randomIVs: function() {
			var ivs = [];
			for (var i = 0; i < pokevo.N_STATS; i++) {
				ivs[i] = randInt(pokevo.MAX_IV);
			}
			return ivs;
		},

		randomNature: function() {
			return pokevo.natures[randInt(pokevo.natures.length)];
		},

		randomType: function() {
			return pokevo.types[randInt(pokevo.types.length)];
		},

		randomIntelligence: function() {
			return randInt(pokevo.MAX_INTEL)+1;
		},

		randomAttack: function(type = randomType()) {
			var t = 2*pokevo.types.indexOf(type); // type
			var c = randInt(2); // category, 0 = special, 1 = physical
			return pokevo.attacks[t+c];
		},

		randomMoveset: function(type) {
			var maxMoves = 4;
			moves = [];
			for (var i = 0; i < maxMoves; i++) {
				moves.push(this.randomAttack(type));
			}
			return moves;
		},

		randomPokemon: function(generation = 0, id = "?", type = this.randomType()) {
			return new pokevo.Pokemon(generation, id, null, null, [type], this.randomStats(), this.randomIVs(), 
				this.randomNature(), this.randomIntelligence(), this.randomMoveset(type));
		}
	}
})(window.pokevo = window.pokevo || {});