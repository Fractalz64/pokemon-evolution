(function(pokevo) {
	pokevo.battle = {
		calculateDamage: function(attacker, defender, move) {
			var attack = move.category == 0 ? attacker.spatk : attacker.atk;
			var defense = move.category == 0 ? defender.spdef : defender.def;
			var stab = attacker.typing.includes(move.type) ? 1.5 : 1;
			var typeEffectiveness = pokevo.getTypeEffectiveness(move.type, defender.typing);
			var damage = (((2*pokevo.LEVEL + 10)/250) * (attack/defense) * move.damage + 2) * stab * typeEffectiveness;
			return Math.floor(damage);
		},

		// calculate how much damage each move will do, and set the current best attack
		calcMovesDamage: function(attacker, defender) {
			var bestDamage = 0;
			attacker.currentBestAttack = 0;
			for (var i = 0; i < pokevo.N_MOVES; i++) {
				var damage = this.calculateDamage(attacker, defender, attacker.moves[i]);
				attacker.movesDamage[i] = damage;
				if (damage > bestDamage) {
					bestDamage = damage; 
					attacker.currentBestAttack = i;
				}
			}
		},

		makeMove: function(attacker, defender) {
			var move = pokevo.pokeAI.chooseAttack(attacker, defender);
			defender.damage(attacker.movesDamage[move]);
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

		hpPercent: function(poke) {
			return poke.hp/poke.stats[0];
		},

		startBattle: function(poke1, poke2) {
			console.log("Starting battle between " + poke1.id + " and " + poke2.id);
			poke1.resetStats();
			poke2.resetStats();
			this.calcMovesDamage(poke1, poke2);
			this.calcMovesDamage(poke2, poke1);
			if (poke1.movesDamage[poke1.currentBestAttack] == 0 && poke2.movesDamage[poke1.currentBestAttack] == 0) {
				console.log("can't damage each other, ending battle.");
				return null; // this pokemon can't damage each other, end the battle with no winner
			}
			var first;
			var second;
			var turns = 0;

			while (poke1.hp > 0 && poke2.hp > 0) {
				if (turns > 20) { // don't let a battle go on too long
					console.log("ending battle after 20 turns");
					return this.hpPercent(poke1) > this.hpPercent(poke2) ? [poke1, poke2] : [poke2, poke1];
				}
				var order = this.setTurnOrder(poke1, poke2);
				first = order[0];
				second = order[1];
				this.makeMove(first, second);
				if (poke1.hp > 0 && poke2.hp > 0) {
					this.makeMove(second, first);
				}
				turns++;
			}

			// return [winner, loser]
			if (poke1.hp > 0) {
				console.log(poke1.id + " wins!!\n")
				console.log("-");
				return [poke1, poke2];
			}
			else if (poke2.hp > 0) {
				console.log(poke2.id + " wins!!\n")
				console.log("-");
				return [poke2, poke1];
			}
			return null; // draw
		}
	}
})(window.pokevo = window.pokevo || {});
