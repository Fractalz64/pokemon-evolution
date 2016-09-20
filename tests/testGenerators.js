
QUnit.test( "Generators: test random stats", function( assert ) {
	pokevo.random = Math.random;
	for (var i = 0; i < 100; i++) {
		assert.equal(sumArray(pokevo.generators.randomStats()), 600, "random stats always add up to 600");
	}
});
