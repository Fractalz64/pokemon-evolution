(function(pokevo) {
	var pokeAI = {
		// return the attack that will do the most damage
		chooseBestAttack: function(attacker, defender) {
			var bestMove = 0;
			var bestDamage = 0;
			for (var i = 0; i < pokevo.N_MOVES; i++) {
				var damage = pokevo.battle.calculateDamage(attacker, defender, attacker.moves[i]);
				if (damage > bestDamage) {
					bestDamage = damage;
					bestMove = i;
				}
			}
			console.log("choosing move " + bestMove + "\n");
			return attacker.moves[bestMove];
		},

		chooseRandomAttack: function(poke) {
			return poke.moves[randInt(pokevo.N_MOVES)];
		},

		chooseAttack: function(attacker, defender) {
			// chance to pick best attack proportional to intelligence
			var r = randInt(pokevo.MAX_INTEL);
			if (r < attacker.intelligence) {
				console.log("choosing best attack");
				return pokeAI.chooseBestAttack(attacker, defender);
			}
			else {
				console.log("choosing random attack");
				return pokeAI.chooseRandomAttack(attacker);
			}
		}
	}
	pokevo.pokeAI = pokeAI;
})(window.pokevo = window.pokevo || {});
