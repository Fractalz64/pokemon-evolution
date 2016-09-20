var grassPoke = new pokevo.Pokemon();
grassPoke.moves = [pokevo.attacks[0], pokevo.attacks[1], pokevo.attacks[2], pokevo.attacks[14]];
grassPoke.intelligence = 70;
grassPoke.typing = [pokevo.types[grass]]; 
grassPoke.baseStats = [80, 100, 100, 120, 120, 120];
grassPoke.ivs = [1, 1, 1, 1, 1, 1];
grassPoke.nature = pokevo.natures[22]; // neutral nature
grassPoke.setStats();

var normalPoke = new pokevo.Pokemon();
normalPoke.moves = [pokevo.attacks[8], pokevo.attacks[9], pokevo.attacks[10], pokevo.attacks[11]];
normalPoke.intelligence = 10;
normalPoke.typing = [pokevo.types[normal]]; 
normalPoke.baseStats = [180, 120, 100, 100, 120, 100];
normalPoke.ivs = [1, 1, 1, 1, 1, 1];
normalPoke.nature = pokevo.natures[22]; // neutral nature
normalPoke.setStats();

var ghostPoke = new pokevo.Pokemon();
ghostPoke.moves = [pokevo.attacks[16], pokevo.attacks[17], pokevo.attacks[17], pokevo.attacks[16]];
ghostPoke.intelligence = 60;
ghostPoke.typing = [pokevo.types[ghost]]; 
ghostPoke.baseStats = [100, 120, 120, 100, 100, 120];
ghostPoke.ivs = [1, 1, 1, 1, 1, 1];
ghostPoke.nature = pokevo.natures[22]; // neutral nature
ghostPoke.setStats();

QUnit.test("Breeder: test move inheritence", function(assert) {
	var moves = pokevo.breeder.inheritMoves(grassPoke, ghostPoke);
	assert.equal(moves[0], grassPoke.moves[0]);
	assert.equal(moves[1], ghostPoke.moves[1]);
	assert.equal(moves[2], grassPoke.moves[2]);
	assert.equal(moves[3], ghostPoke.moves[3]);
});


QUnit.test("Breeder: test type inheritence", function(assert) {
	pokevo.random = function() {
		return 0.1;
	};
	var typing = pokevo.breeder.inheritTyping(grassPoke, ghostPoke);
	assert.equal(typing.length, 1, "should be monotype");
	assert.equal(typing[0], pokevo.types[grass], "should be grass type");

	var nums = [0.9, 0.5, 0.1, 0.9];
	var i = 0;
	pokevo.random = function() {
		return nums[i++];
	};

	typing = pokevo.breeder.inheritTyping(grassPoke, ghostPoke);
	assert.equal(typing.length, 2, "should be dual type");
	assert.equal(typing[0], pokevo.types[grass], "type 1 should be grass");
	assert.equal(typing[1], pokevo.types[ghost], "type 2 should be ghost");
});

