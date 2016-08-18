(function(pokevo) {

	function inheritMoves(parentA, parentB) {
		// child gets moves 0 and 2 from parentA and moves 1 and 3 from parentB
		return [parentA.moves[0], parentB.moves[1], parentA.moves[2], parentB.moves[3]];
	}

	function inheritTyping(parentA, parentB) {
		var typePool = parentA.typing.concat(parentB.typing);

		if (Math.random() < pokevo.MUTATION_RATE) { 
			// remove a type from the type pool and add a random type
			typePool.pop();
			typePool.push(pokevo.generators.randomType());
		}

		if (Math.random() < pokevo.DUAL_TYPE_CHANCE) { // (try to) make this pokemon a dual type
			var type1 = typePool[pokevo.generators.randInt(typePool.length)];
			var type2 = typePool[pokevo.generators.randInt(typePool.length)];
			if (type1 !== type2) { // if the same type is picked twice, it will be monotype
				return [type1, type2];
			}
		}

		// pick one random type from type pool
		return [typePool[pokevo.generators.randInt(typePool.length)]];
	}

	function sumArray(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}

	function scaleStats(parentA, parentB, baseStats) {
		var sum = sumArray(baseStats);
		var n = sum < pokevo.BST ? 1 : -1; // determine whether to increase or decrease stats
		while (sum != pokevo.BST) {

		}
	}

	function inheritStats(parentA, parentB) {
		var baseStats = [];
		for (var i = 0; i < pokevo.N_STATS; i++) { // inherit each stat from random parent
			var r = pokevo.generators.randInt(2);
			baseStats[i] = r == 0 ? parentA.baseStats[i] : parentB.baseStats[i];
		}

		if (baseStats != pokevo.BST) {
			baseStats = scaleStats(parentA, parentB, baseStats);
		}


	}

	function inheritIVs(parentA, parentB) {
		var childIVs = [pokevo.N_STATS];
		var inherited = 0;
		
		while (inherited < pokevo.IVS_INHERITED) { // inherit 3 random IVs from parents, other 3 are random
			var p = pokevo.generators.randInt(2); // pick random parent
			var parent = p == 0 ? parentA : parentB;
			var stat = pokevo.generators.randInt(pokevo.N_STATS);
			if (childIVs[stat] === undefined) { // pick a stat that hasn't already been inherited
				childIVs[stat] = parent.ivs[stat];
				inherited++;
			}
		}

		for (var i = 0; i < N_STATS; i++) { // the rest are random
			if (childIVs[i] === undefined) {
				childIVs[i] = pokevo.generators.randomIV();
			}
		}

		return childIVs;
	}

	function inheritIntelligence(parentA, parentB) {
		if (Math.random() < pokevo.MUTATION_RATE) { // mutate a random intelligence
			return pokevo.generators.randomIntelligence(); 
		}
		return Math.floor((parentA.intelligence + parentB.intelligence)/2); // take averate of parent's intelligence
	}

	function inheritNature(parentA, parentB) {
		if (Math.random() < pokevo.NATURE_INHERITANCE) { // inherit random parent's nature
			var n = pokevo.generators.randInt(2);
			return n == 0 ? parentA.nature : parentB.nature;
		}
		return pokevo.generators.randomNature(); // get a random nature
	}


	pokevo.breed = function(parentA, parentB) {
		var childMoves = this.inheritMoves(parentA, parentB);
		var childStats = this.inheritStats(parentA, parentB);
	}
})(window.pokevo = window.pokevo || {});
