(function(pokevo) {
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
		this.currentBestAttack = null;
		this.movesDamage = [];
		this.children = [];
		this.defeated = [];
		this.defeatedBy = [];
		this.tiedWith = [];

		this.resetStats = function() {
			this.hp = this.stats[0];
			this.atk = this.stats[1];
			this.def = this.stats[2];
			this.spatk = this.stats[3];
			this.spdef = this.stats[4];
			this.speed = this.stats[5];
			this.currentBestAttack = null;
		}

		this.setStats = function() {
			// HP formula
			this.stats[0] = Math.floor(((2*this.baseStats[0] + this.ivs[0])*pokevo.LEVEL)/100 + pokevo.LEVEL + 10);
			
			// Other stats formula
			for (var i = 1; i < this.baseStats.length; i++) {
				this.stats[i] = Math.floor(((((2*this.baseStats[i] + this.ivs[i])*pokevo.LEVEL)/100 + 5)*this.nature.modifiers[i]));
			}
			this.resetStats();
		}
		if (baseStats != undefined && nature != undefined) {
			this.setStats();
		}

		this.damage = function(amount) {
			this.hp -= amount;
			if (this.hp < 0) {
				this.hp = 0;
			}
		}

		this.heal = function(amount) {
			this.hp += amount;
			if (this.hp > this.stats[0]) {
				this.hp = this.stats[0];
			}
		}

		this.printTyping = function() {
			return this.typing.length == 2 ? this.typing[0].name + "/" + this.typing[1].name : this.typing[0].name;
		}

		this.printMoves = function() {
			var s = "";
			for (var i = 0; i < this.moves.length; i++) {
				s += "      -" + this.moves[i].toString + '\n';
			}
			return s;
		}

		this.printParents = function() {
			if (parentA !== null) {
				return parentA.id + ", " + parentB.id;
			}
			return "none";
		}
	}
	pokevo.Pokemon = Pokemon;
})(window.pokevo = window.pokevo || {});
