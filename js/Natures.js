(function(pokevo) {

	function Nature(name, modifiers) {
		this.name = name;
		this.modifiers = modifiers;
	}

	var neutral = [1, 1, 1, 1, 1, 1];

	var adamant = new Nature("Adamant", [1, 1.1, 1, .9, 1, 1]);
	var lonely 	= new Nature("Lonely", 	[1, 1.1, .9, 1, 1, 1]);
	var naughty = new Nature("Naughty", [1, 1.1, 1, 1, .9, 1]);
	var brave 	= new Nature("Brave", 	[1, 1.1, 1, 1, 1, .9]);
	var relaxed = new Nature("Relaxed", [1, 1, 1.1, 1, 1, .9]);
	var lax 	= new Nature("Lax", 	[1, 1, 1.1, 1, .9, 1]);
	var impish 	= new Nature("Impish", 	[1, 1, 1.1, .9, 1, 1]);
	var bold 	= new Nature("Bold", 	[1, .9, 1.1, 1, 1, 1]);
	var rash 	= new Nature("Rash", 	[1, 1, 1, 1.1, .9, 1]);
	var quiet 	= new Nature("Quiet",	[1, 1, 1, 1.1, 1, .9]);
	var modest 	= new Nature("Modest", 	[1, .9, 1, 1.1, 1, 1]);
	var mild 	= new Nature("Mild", 	[1, 1, .9, 1.1, 1, 1]);
	var sassy 	= new Nature("Sassy", 	[1, 1, 1, 1, 1.1, .9]);
	var gentle 	= new Nature("Gentle", 	[1, 1, .9, 1, 1.1, 1]);
	var careful = new Nature("Careful", [1, 1, 1, .9, 1.1, 1]);
	var calm 	= new Nature("Calm", 	[1, .9, 1, 1, 1.1, 1]);
	var timid 	= new Nature("Timid", 	[1, .9, 1, 1, 1, 1.1]);
	var naive 	= new Nature("Naive", 	[1, 1, 1, 1, .9, 1.1]);
	var jolly 	= new Nature("Jolly", 	[1, 1, 1, .9, 1, 1.1]);
	var hasty 	= new Nature("Hasty", 	[1, 1, .9, 1, 1, 1.1]);
	var serious = new Nature("Serious", neutral);
	var quirky	= new Nature("Quirky", 	neutral);
	var hardy 	= new Nature("Hardy", 	neutral);
	var docile 	= new Nature("Docile", 	neutral);
	var bashful = new Nature("Bashful", neutral);

	pokevo.natures = [adamant, lonely, naughty, brave, relaxed, lax, impish, bold, rash, quiet, modest, mild,
						sassy, gentle, careful, calm, timid, naive, jolly, hasty, serious, quirky, hardy, docile, bashful];
})(window.pokevo = window.pokevo || {});
