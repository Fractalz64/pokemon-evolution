
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


QUnit.test("Battle: test damage calculation", function(assert) {
	pokevo.battle.calcMovesDamage(grassPoke, normalPoke);
	assert.equal(grassPoke.movesDamage[0], 129, "grass stab special damage calculation");
	assert.equal(grassPoke.movesDamage[1], 129, "grass stab physical damage calculation");
	assert.equal(grassPoke.movesDamage[2], 86, "fire non-stab special damage calculation");
	assert.equal(grassPoke.movesDamage[3], 86, "dark non-stab special damage calculation");
	assert.equal(grassPoke.movesDamage[grassPoke.currentBestAttack], 129, "best attack damage");

	pokevo.battle.calcMovesDamage(normalPoke, grassPoke);
	assert.equal(normalPoke.movesDamage[0], 108, "normal stab special damage calculation");
	assert.equal(normalPoke.movesDamage[1], 153, "normal stab physical damage calculation");
	assert.equal(normalPoke.movesDamage[2], 72, "fighting non-stab special damage calculation");
	assert.equal(normalPoke.movesDamage[3], 102, "fighting non-stab physical damage calculation");
	assert.equal(normalPoke.movesDamage[normalPoke.currentBestAttack], 153, "best attack damage");

	pokevo.battle.calcMovesDamage(grassPoke, ghostPoke);
	assert.equal(grassPoke.movesDamage[0], 153, "non-super effective special stab damage calculation");
	assert.equal(grassPoke.movesDamage[1], 108, "non-super effective physical stab damage calculation");
	assert.equal(grassPoke.movesDamage[2], 102, "non-super effective special non-stab damage calculation");
	assert.equal(grassPoke.movesDamage[3], 204, "super effective non-stab damage calculation");
	assert.equal(grassPoke.movesDamage[grassPoke.currentBestAttack], 204, "best attack damage");

	pokevo.battle.calcMovesDamage(ghostPoke, grassPoke);
	assert.equal(ghostPoke.movesDamage[ghostPoke.currentBestAttack], 153, "best attack damage");
});

QUnit.test("Battle: test mutually immune", function(assert) {
	pokevo.battle.calcMovesDamage(normalPoke, ghostPoke);
	pokevo.battle.calcMovesDamage(ghostPoke, normalPoke);
	assert.equal(normalPoke.movesDamage[normalPoke.currentBestAttack], 0, "normal cant damage ghost")
	assert.equal(ghostPoke.movesDamage[ghostPoke.currentBestAttack], 0, "ghost cant damage normal")
	assert.equal(pokevo.battle.startBattle(normalPoke, ghostPoke), null, "no winner");
});

QUnit.test("Battle: test turn order", function(assert) {
	var grassNormalOrder = pokevo.battle.setTurnOrder(grassPoke, normalPoke);
	assert.equal(grassNormalOrder[0], grassPoke, "grass is faster");
	assert.equal(grassNormalOrder[1], normalPoke, "normal is slower");

	pokevo.random = function() {
		return .7;
	};

	var grassGhostOrder = pokevo.battle.setTurnOrder(ghostPoke, grassPoke);
	assert.equal(grassGhostOrder[0], grassPoke, "speed tie determined randomly");
	assert.equal(grassGhostOrder[1], ghostPoke, "speed tie determined randomly");

	pokevo.random = function() {
		return .3;
	};

	grassGhostOrder = pokevo.battle.setTurnOrder(ghostPoke, grassPoke);
	assert.equal(grassGhostOrder[0], ghostPoke, "speed tie determined randomly");
	assert.equal(grassGhostOrder[1], grassPoke, "speed tie determined randomly");
});

QUnit.test("Battle: test make move and hp%", function(assert) {
	pokevo.random = function() {
		return .5;
	};
	grassPoke.resetStats();
	normalPoke.resetStats();
	ghostPoke.resetStats();

	assert.equal(grassPoke.hp, 271, "max hp");
	assert.equal(pokevo.battle.hpPercent(grassPoke), 1, "max hp");
	assert.equal(normalPoke.hp, 471, "max hp");
	assert.equal(pokevo.battle.hpPercent(normalPoke), 1, "max hp");
	assert.equal(ghostPoke.hp, 311, "max hp");
	assert.equal(pokevo.battle.hpPercent(ghostPoke), 1, "max hp");

	pokevo.battle.calcMovesDamage(grassPoke, normalPoke);
	assert.equal(grassPoke.movesDamage[grassPoke.currentBestAttack], 129, "best attack damage");
	pokevo.battle.makeMove(grassPoke, normalPoke);
	assert.equal(normalPoke.hp, 342, "should have used best attack");
	pokevo.battle.makeMove(grassPoke, normalPoke);
	assert.equal(normalPoke.hp, 213, "should have used best attack");
	pokevo.battle.makeMove(grassPoke, normalPoke);
	assert.equal(normalPoke.hp, 84, "should have used best attack");
	pokevo.battle.makeMove(grassPoke, normalPoke);
	assert.equal(normalPoke.hp, 0, "should have used best attack");
	assert.equal(pokevo.battle.hpPercent(normalPoke), 0, "hp%");

	pokevo.battle.calcMovesDamage(normalPoke, grassPoke);
	pokevo.battle.makeMove(normalPoke, grassPoke);
	assert.equal(grassPoke.hp, 199, "should have used random attack");
});

QUnit.test("Battle: test battle", function(assert) {
	pokevo.random = function() {
		return .01;
	};

	var results = pokevo.battle.startBattle(grassPoke, normalPoke);
	assert.equal(results[0], normalPoke, "normal should beat grass");
	assert.equal(results[1], grassPoke, "normal should beat grass");

	pokevo.random = function() {
		return .4;
	};

	var results2 = pokevo.battle.startBattle(grassPoke, ghostPoke);
	assert.equal(results2[0], grassPoke, "speed tie: grass should beat ghost");
	assert.equal(results2[1], ghostPoke, "speed tie: grass should beat ghost");

	pokevo.random = function() {
		return .5;
	};

	results2 = pokevo.battle.startBattle(grassPoke, ghostPoke);
	assert.equal(results2[0], ghostPoke, "speed tie: ghost should beat grass");
	assert.equal(results2[1], grassPoke, "speed tie: ghost should beat grass");
});
