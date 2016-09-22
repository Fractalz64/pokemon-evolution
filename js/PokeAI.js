(function(pokevo) {
	pokevo.pokeAI = {
		chooseBestAttack: function(attacker, defender) { // return the attack that will do the most damage
			if (attacker.currentBestAttack == null) { // find the best move in the current battle
				pokevo.battle.calcMovesDamage(attacker, defender);
			}
			return attacker.currentBestAttack;
		},

		chooseRandomAttack: function(poke) {
			return randInt(pokevo.N_MOVES);
		},

		chooseAttack: function(attacker, defender) {
			// chance to pick best attack proportional to intelligence
			var r = randInt(pokevo.MAX_INTEL);
			if (r < attacker.intelligence) {
				return this.chooseBestAttack(attacker, defender);
			}
			else {
				return this.chooseRandomAttack(attacker);
			}
		}
	}
})(window.pokevo = window.pokevo || {});
