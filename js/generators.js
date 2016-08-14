
(function(pokevo) {
	var nStats = 6;
	var maxIV = 31;
	var maxIntelligence = 100;

	function sortNumbers(a,b) {
	    return a - b;
	}

	function randInt(bound) {
		return Math.floor(Math.random()*bound);
	}

  	// generate stats that sum to BST
	function randomStats(BST = 600) {
		stats = [];
		nums = [];
		for (var i = 0; i < nStats-1; i++) {
			nums[i] = randInt(BST);
		}
		nums.push(0);
		nums.push(BST);
		nums.sort(sortNumbers); 
		for (var i = 0; i < nStats; i++) {
			stats[i] = nums[i+1] - nums[i];
		}
		return stats;
	}

	function randomIVs() {
		var ivs = [];
		for (var i = 0; i < nStats; i++) {
			ivs[i] = randInt(maxIV);
		}
		return ivs;
	}

	function randomNature() {
		return pokevo.natures[randInt(pokevo.natures.length)];
	}

	function randomType() {
		return pokevo.types[randInt(pokevo.types.length)];
	}

	function randomIntelligence() {
		return randInt(maxIntelligence)+1;
	}

	function randomMoves() {
		//TODO: write this
		return null;
	}

	function randomPokemon(generation = 0, id = "?", type = randomType()) {
		return new pokevo.Pokemon(generation, id, null, null, [type], randomStats(), randomIVs(), randomNature(), randomIntelligence(), randomMoves());
	}

	pokevo.generators = {
		randomPokemon: randomPokemon
	};

})(window.pokevo = window.pokevo || {});