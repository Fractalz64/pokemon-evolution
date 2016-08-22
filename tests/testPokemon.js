
QUnit.test("Pokemon: test stats", function(assert) {
	var poke = new pokevo.Pokemon();
	poke.baseStats = [100, 100, 100, 100, 100, 100];

	poke.ivs = [0, 0, 0, 0, 0, 0];

	poke.nature = pokevo.natures[21];
	poke.setStats();
	assert.equal(poke.hp, 310, "hp with 0 ivs and neutral nature");
	assert.equal(poke.atk, 205, "attack with 0 ivs and neutral nature");
	assert.equal(poke.def, 205, "def with 0 ivs and neutral nature");
	assert.equal(poke.spatk, 205, "sp atk with 0 ivs and neutral nature");
	assert.equal(poke.spdef, 205, "sp def with 0 ivs and neutral nature");
	assert.equal(poke.speed, 205, "speed with 0 ivs and neutral nature");

	poke.nature = pokevo.natures[0];
	poke.setStats();
	assert.equal(poke.hp, 310, "hp with 0 ivs and adamant nature");
	assert.equal(poke.atk, 225, "attack with 0 ivs and adamant nature");
	assert.equal(poke.def, 205, "def with 0 ivs and adamant nature");
	assert.equal(poke.spatk, 184, "sp atk with 0 ivs and adamant nature");
	assert.equal(poke.spdef, 205, "sp def with 0 ivs and adamant nature");
	assert.equal(poke.speed, 205, "speed with 0 ivs and adamant nature");

	poke.nature = pokevo.natures[18];
	poke.ivs = [31, 31, 31, 31, 31, 31];
	poke.setStats();
	assert.equal(poke.hp, 341, "hp with 31 ivs and jolly nature");
	assert.equal(poke.atk, 236, "attack with 31 ivs and jolly nature");
	assert.equal(poke.def, 236, "def with 31 ivs and jolly nature");
	assert.equal(poke.spatk, 212, "sp atk with 31 ivs and jolly nature");
	assert.equal(poke.spdef, 236, "sp def with 31 ivs and jolly nature");
	assert.equal(poke.speed, 259, "speed with 31 ivs and jolly nature");

	poke.nature = pokevo.natures[13];
	poke.ivs = [8, 19, 5, 1, 27, 10];
	poke.setStats();
	assert.equal(poke.hp, 318, "hp with various ivs and gentle nature");
	assert.equal(poke.atk, 224, "attack with various ivs and gentle nature");
	assert.equal(poke.def, 189, "def with various ivs and gentle nature");
	assert.equal(poke.spatk, 206, "sp atk with various ivs and gentle nature");
	assert.equal(poke.spdef, 255, "sp def with various ivs and gentle nature");
	assert.equal(poke.speed, 215, "speed with various ivs and gentle nature");

	poke.baseStats = [106, 110, 90, 154, 90, 130];
	poke.nature = pokevo.natures[8];
	poke.ivs = [16, 7, 20, 11, 13, 30];
	poke.setStats();
	assert.equal(poke.hp, 338, "hp with various ivs and rash nature");
	assert.equal(poke.atk, 232, "attack with various ivs and rash nature");
	assert.equal(poke.def, 205, "def with various ivs and rash nature");
	assert.equal(poke.spatk, 356, "sp atk with various ivs and rash nature");
	assert.equal(poke.spdef, 178, "sp def with various ivs and rash nature");
	assert.equal(poke.speed, 295, "speed with various ivs and rash nature");
});

QUnit.test("Pokemon: test damage and healing and reset stats", function(assert) {
	var poke = new pokevo.Pokemon();
	poke.baseStats = [100, 100, 100, 100, 100, 100];
	poke.ivs = [0, 0, 0, 0, 0, 0];
	poke.nature = pokevo.natures[21];
	poke.setStats();
	assert.equal(poke.hp, 310, "before damage/healing");
	poke.damage(91);
	assert.equal(poke.hp, 219, "after damaging");
	poke.damage(200);
	assert.equal(poke.hp, 19, "after more damaging");
	poke.damage(53);
	assert.equal(poke.hp, 0, "after overkill");
	poke.heal(64);
	assert.equal(poke.hp, 64, "after healing from 0");
	poke.heal(600);
	assert.equal(poke.hp, 310, "after healing past full");
	poke.damage(6);
	assert.equal(poke.hp, 304, "after damaging");
	poke.resetStats();
	assert.equal(poke.hp, 310, "after reset stats");
});
