var types = pokevo.types;
// [grass, fire, water, electric, normal, fighting, psychic, dark, ghost, bug, flying, ice, ground, rock, steel, poison, fairy, dragon];
var grass = 0, fire = 1, water = 2, electric = 3, normal = 4, fighting = 5, psychic = 6, dark = 7, ghost = 8, bug = 9, flying = 10, ice = 11,
	ground = 12, rock = 13, steel = 14, poison = 15, fairy = 16, dragon = 17;

// just practicing QUnit
QUnit.test( "Types: test type names", function( assert ) {
  	assert.equal(types[grass].name, "Grass", "grass" );
  	assert.equal(types[fire].name, "Fire", "fire" );
  	assert.equal(types[water].name, "Water", "water" );
  	assert.equal(types[ground].name, "Ground", "ground" );
  	assert.equal(types[dragon].name, "Dragon", "dragon" );
});

QUnit.test("Types: test type effectiveness with monotypes", function(assert) {
	assert.equal(pokevo.getTypeEffectiveness(types[fire], [types[grass]]), 2, "grass weak to fire");
	assert.equal(pokevo.getTypeEffectiveness(types[water], [types[grass]]), .5, "grass resistant to water");
	assert.equal(pokevo.getTypeEffectiveness(types[normal], [types[grass]]), 1, "grass neutral to fire");
	assert.equal(pokevo.getTypeEffectiveness(types[normal], [types[ghost]]), 0, "ghost immune to normal");
});

QUnit.test("Types: test type effectiveness with dualtypes", function(assert) {
	assert.equal(pokevo.getTypeEffectiveness(types[fire], [types[grass], types[water]]), 1, "fire netural to grass/water");
	assert.equal(pokevo.getTypeEffectiveness(types[water], [types[fire], types[ground]]), 4, "water 4x effective on fire/ground");
	assert.equal(pokevo.getTypeEffectiveness(types[grass], [types[dark], types[psychic]]), 1, "grass neutral to dark/psychic");
	assert.equal(pokevo.getTypeEffectiveness(types[dragon], [types[fairy], types[dragon]]), 0, "fairy/dragon immune to dragon");
	assert.equal(pokevo.getTypeEffectiveness(types[fire], [types[dragon], types[flying]]), .5, "dragon/flying resistant to fire");
	assert.equal(pokevo.getTypeEffectiveness(types[bug], [types[fighting], types[flying]]), .25, "fighting/flying 2x resistant to bug");
	assert.equal(pokevo.getTypeEffectiveness(types[electric], [types[steel], types[water]]), 2, "steel/water weak to electric");
	assert.equal(pokevo.getTypeEffectiveness(types[fighting], [types[ice], types[normal]]), 4, "ice/normal 2x weak to fighting");
	assert.equal(pokevo.getTypeEffectiveness(types[flying], [types[electric], types[psychic]]), .5, "electric/psychic resistant to flying");
	assert.equal(pokevo.getTypeEffectiveness(types[steel], [types[poison], types[rock]]), 2, "poison/rock weak to steel");
});