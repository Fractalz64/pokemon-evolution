describe("type tests", function() {
	var types = pokevo.types;
  	it("test weaknesses", function() {
    	expect(types.grass.isWeakTo(types.fire)).toBe(true);
  	});
});