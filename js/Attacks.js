(function(pokevo) {
	var special = 0;
	var physical = 1;
	var categories = ["special", "physical"];

	function Attack(type, category, damage) {
		this.type = type;
		this.category = category;
		this.damage = damage;
		this.toString = type.name + ' ' + categories[category] + ' ' + damage;
	}

	var damage = 100;
	pokevo.attacks = [];
	// 1 special and 1 physical attack per type
	for (var i = 0; i < pokevo.types.length; i++) {
		pokevo.attacks.push(new Attack(pokevo.types[i], special, damage));
		pokevo.attacks.push(new Attack(pokevo.types[i], physical, damage));
	}
})(window.pokevo = window.pokevo || {});
