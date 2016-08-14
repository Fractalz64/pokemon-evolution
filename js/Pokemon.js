(function(pokevo) {
	var LEVEL = 100;

	function Pokemon(generation, id, parentA, parentB, typing, baseStats, ivs, nature, intelligence, moves) {
		this.generation = generation;
		this.id = id;
		this.parentA = parentA;
		this.parentB = parentB;
		this.typing = typing;
		this.baseStats = baseStats;
		this.ivs = ivs;
		this.nature = nature;
		this.intelligence = intelligence;
		this.moves = moves;
		this.stats = [];
		this.fitness = 0;
		this.children = [];

		this.setStats = function() {
			// HP formula
			this.stats[0] = Math.floor(((2*baseStats[0] + ivs[0])*LEVEL)/100 + LEVEL + 10);
			
			// Other stats formula
			for (var i = 1; i < baseStats.length; i++) {
				this.stats[i] = Math.floor(((((2*baseStats[i] + ivs[i])*LEVEL)/100 + 5)*nature.modifiers[i]));
			}
		}
		this.setStats();

		this.resetStats = function() {
			this.hp = stats[0];
			this.atk = stats[1];
			this.def = stats[2];
			this.spatk = stats[3];
			this.spdef = stats[4];
			this.speed = stats[5];
		}

		this.damage = function(amount) {
			this.hp -= amount;
			if (hp < 0) {
				hp = 0;
			}
		}

		this.heal = function(amount) {
			this.hp += damage;
			if (hp > this.stats[0]) {
				hp = this.stats[0];
			}
		}

		// this.chooseAttack() {

		// };

		this.printTyping = function() {
			return typing.length == 2 ? typing[0].name + "/" + typing[1].name : typing[0].name;
		}
	}
	pokevo.Pokemon = Pokemon;
})(window.pokevo = window.pokevo || {});
