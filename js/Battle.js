(function(pokevo) {
	pokevo.battle = {
		calculateDamage: function(attacker, defender, move) {
			console.log("calculating damage for " + attacker.id + " using " + move.toString + " on " + defender.id);
			var attack = move.category == 0 ? attacker.spatk : attacker.atk;
			var defense = move.category == 0 ? defender.spdef : defender.def;
			console.log("attacking stat is " + attack);
			console.log("defending stat is " + defense);
			var stab = attacker.typing.includes(move.type) ? 1.5 : 1;
			console.log("STAB is " + stab);
			var typeEffectiveness = pokevo.getTypeEffectiveness(move.type, defender.typing);
			console.log("type effectiveness is " + typeEffectiveness);
			var damage = (((2*pokevo.LEVEL + 10)/250) * (attack/defense) * move.damage + 2) * stab * typeEffectiveness;
			console.log("damage is " + damage);
			return Math.floor(damage);
		},

		makeMove: function(attacker, defender) {
			// attacker must choose a move
			var move = pokevo.pokeAI.chooseAttack(attacker, defender);
			var damage = this.calculateDamage(attacker, defender, move);
			defender.damage(damage);
		},

		// set who goes first and second
		setTurnOrder: function(poke1, poke2) {
			// speed tie, randomly choose who goes first
			if (poke1.speed == poke2.speed) {
				var r = randInt(2);
				return r == 0 ? [poke1, poke2] : [poke2, poke1];
			}

			else {
				return poke1.speed > poke2.speed ? [poke1, poke2] : [poke2, poke1];
			}
		},

		startBattle: function(poke1, poke2) {
			//console.log("Starting battle between " + poke1.id " and " + poke2.id);
			poke1.resetStats();
			poke2.resetStats();
			var first;
			var second;

			while (poke1.hp > 0 && poke2.hp > 0) {
				var order = this.setTurnOrder(poke1, poke2);
				first = order[0];
				second = order[1];
				console.log("first speed: " + first.speed + ", second speed: " + second.speed);
				this.makeMove(first, second);
				console.log("hp: " + second.hp + "\n");
				console.log("-");
				if (poke1.hp > 0 && poke2.hp > 0) {
					this.makeMove(second, first);
					console.log("hp: " + first.hp + "\n");
					console.log("-");
				}
			}

			// increment fitness of the winner. 
			if (poke1.hp > 0) {
				console.log(poke1.id + " wins!!\n")
				console.log("-");
				poke1.fitness++;
			}
			else if (poke2.hp > 0) {
				console.log(poke2.id + " wins!!\n")
				console.log("-");
				poke2.fitness++;
			}
		}
	}
})(window.pokevo = window.pokevo || {});
