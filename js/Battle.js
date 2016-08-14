(function(pokevo) {
	function battle(poke1, poke2) {
		poke1.resetStats();
		poke2.resetStats();
		this.first;
		this.second;

		while (poke1.hp > 0 && poke2.hp > 0) {
			turnOrder(poke1, poke2);
			console.log("first speed: " + first.speed + ", second speed: " + second.speed)
		}

		// set who goes first and second
		this.turnOrder = function() {
			order = function(first, second) {
				this.first = first;
				this.second = second;
			}

			// speed tie, randomly choose who goes first
			if (poke1.speed == poke2.speed) {
				var r = Math.floor((Math.random() * 2));
				r == 0 ? order(poke1, poke2) : order(poke2, poke1);
			}

			else {
				poke1.speed > poke2.speed ? order(poke1, poke2) : order(poke2, poke1);
			}
		}
	}
})(window.pokevo = window.pokevo || {});
