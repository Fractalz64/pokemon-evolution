(function(pokevo) {
	pokevo.breeder = {
		inheritMoves: function(parentA, parentB) {
			// child gets moves 0 and 2 from parentA and moves 1 and 3 from parentB
			return [parentA.moves[0], parentB.moves[1], parentA.moves[2], parentB.moves[3]];
		},

		inheritTyping: function(parentA, parentB) {
			console.log("generating typing...");
			var typePool = parentA.typing.concat(parentB.typing);

			if (pokevo.random() < pokevo.MUTATION_RATE) { 
				// remove a type from the type pool and add a random type
				console.log("mutating type");
				typePool.pop();
				typePool.push(pokevo.generators.randomType());
			}

			if (pokevo.random() < pokevo.DUAL_TYPE_CHANCE) { 
				var type1 = typePool[randInt(typePool.length)];
				var type2 = typePool[randInt(typePool.length)];
				if (type1 !== type2) { // if the same type is picked twice, it will be monotype
					return [type1, type2];
				}
			}

			// pick one random type from type pool
			return [typePool[randInt(typePool.length)]];
		},

		scaleStats: function(baseStats) {
			console.log("scaling stats...");
			console.log("before: " + baseStats);
			var diff = pokevo.BST-sumArray(baseStats);
			var sign = diff > 0 ? 1 : -1;
			while (diff != 0) {
				console.log("diff = " + diff);
				var n = randInt(diff) + sign; // pick random number up to diff
				var i = randInt(pokevo.N_STATS); // pick random stat and add that number if possible
				if (baseStats[i] + n >= 0) {
					console.log("n = " + n);
					console.log("stat: " + i + " = " + baseStats[i]);
					baseStats[i] += n;
					console.log("now = " + baseStats[i]);
					diff -= n;
				}
			}
			return baseStats;
		},

		inheritStats: function(parentA, parentB) {
			// console.log("generating stats...");
			// var baseStats = [];
			// for (var i = 0; i < pokevo.N_STATS; i++) { // inherit each stat from random parent
			// 	var r = randInt(2);
			// 	baseStats[i] = r == 0 ? parentA.baseStats[i] : parentB.baseStats[i];
			// }
			// baseStats = scaleStats(baseStats);
			// return baseStats;
			return randInt(2) == 0 ? parentA.baseStats : parentB.baseStats;
		},

		inheritIVs: function(parentA, parentB) {
			console.log("generating ivs...");
			var childIVs = [pokevo.N_STATS];
			var inherited = 0;
			
			while (inherited < pokevo.IVS_INHERITED) { // inherit 3 random IVs from parents, other 3 are random
				var p = randInt(2); // pick random parent
				var parent = p == 0 ? parentA : parentB;
				var stat = randInt(pokevo.N_STATS);
				if (childIVs[stat] === undefined) { // pick a stat that hasn't already been inherited
					childIVs[stat] = parent.ivs[stat];
					inherited++;
				}
			}

			for (var i = 0; i < pokevo.N_STATS; i++) { // the rest are random
				if (childIVs[i] === undefined) {
					childIVs[i] = randInt(pokevo.MAX_IV);
				}
			}

			return childIVs;
		},

		inheritIntelligence: function(parentA, parentB) {
			console.log("generating intelligence...");
			if (pokevo.random() < pokevo.MUTATION_RATE) { // mutate a random intelligence
				return pokevo.generators.randomIntelligence(); 
			}
			return Math.floor((parentA.intelligence + parentB.intelligence)/2); // take averate of parent's intelligence
		},

		inheritNature: function(parentA, parentB) {
			console.log("generating nature...");
			if (pokevo.random() < pokevo.NATURE_INHERITANCE) { // inherit random parent's nature
				var n = randInt(2);
				return n == 0 ? parentA.nature : parentB.nature;
			}
			return pokevo.generators.randomNature(); // get a random nature
		},


		breed: function(parentA, parentB, generation, id) {
			var typing = this.inheritTyping(parentA, parentB);
			var baseStats = this.inheritStats(parentA, parentB);
			var ivs = this.inheritIVs(parentA, parentB);
			var nature = this.inheritNature(parentA, parentB);
			var intelligence = this.inheritIntelligence(parentA, parentB);
			var moves = this.inheritMoves(parentA, parentB);
			var child = new pokevo.Pokemon(generation, id, parentA, parentB, typing, baseStats, ivs, nature, intelligence, moves);
			parentA.children.push(id);
			parentB.children.push(id);
			return child;
		}
	}
})(window.pokevo = window.pokevo || {});
