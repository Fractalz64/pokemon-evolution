	
var poke1 = new pokevo.Pokemon();
poke1.moves = [pokevo.attacks[0], pokevo.attacks[1], pokevo.attacks[2], pokevo.attacks[3]];
poke1.intelligence = 70;
poke1.typing = [pokevo.types[grass]];
poke1.baseStats = [100, 100, 100, 120, 120, 100];
poke1.ivs = [1, 1, 1, 1, 1, 1];
poke1.nature = pokevo.natures[22]; // neutral nature
poke1.setStats();

var poke2 = new pokevo.Pokemon();
poke2.moves = [pokevo.attacks[8], pokevo.attacks[9], pokevo.attacks[2], pokevo.attacks[3]];
poke2.intelligence = 10;
poke2.typing = [pokevo.types[normal]]; 
poke2.baseStats = [100, 120, 120, 100, 100, 100];
poke2.ivs = [1, 1, 1, 1, 1, 1];
poke2.nature = pokevo.natures[22]; // neutral nature
poke2.setStats();


QUnit.test("PokeAI: test choose best attack", function(assert) {
	assert.equal(pokevo.pokeAI.chooseBestAttack(poke1, poke2), 0, "best attack should be move 0");
	assert.equal(pokevo.pokeAI.chooseBestAttack(poke2, poke1), 3, "best attack should be move 3");
});

QUnit.test( "PokeAI: test choose attack", function( assert ) {
	pokevo.random = function() {
		return .7;
	};
  	assert.equal(pokevo.pokeAI.chooseRandomAttack(poke1), 2, "'random' attack should be attack 2");
  	assert.equal(pokevo.pokeAI.chooseAttack(poke1, poke2), 2, "should choose random attack");
  	assert.equal(pokevo.pokeAI.chooseAttack(poke2, poke1), 2, "should choose random attack");

	pokevo.random = function() {
		return .6;
	};
	assert.equal(pokevo.pokeAI.chooseAttack(poke1, poke2), 0, "should choose best attack");
	assert.equal(pokevo.pokeAI.chooseAttack(poke2, poke1), 2, "should choose random attack");
	pokevo.random = function() {
		return .01;
	};
	assert.equal(pokevo.pokeAI.chooseAttack(poke1, poke2), 0, "should choose best attack");
	assert.equal(pokevo.pokeAI.chooseAttack(poke2, poke1), 3, "should choose best attack");
});
