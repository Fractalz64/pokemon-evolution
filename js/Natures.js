(function(pokevo) {

	function Nature(name, modifiers, description) {
		this.name = name;
		this.modifiers = modifiers;
		this.description = description;
	}

	var neutral = [1, 1, 1, 1, 1, 1];

	var adamant = new Nature("Adamant", [1, 1.1, 1, .9, 1, 1], "+Atk/-Sp.Atk");
	var lonely 	= new Nature("Lonely", 	[1, 1.1, .9, 1, 1, 1], "+Atk/-Def");
	var naughty = new Nature("Naughty", [1, 1.1, 1, 1, .9, 1], "+Atk/-Sp.Def");
	var brave 	= new Nature("Brave", 	[1, 1.1, 1, 1, 1, .9], "+Atk/-Speed");
	var relaxed = new Nature("Relaxed", [1, 1, 1.1, 1, 1, .9], "+Def/-Speed");
	var lax 	= new Nature("Lax", 	[1, 1, 1.1, 1, .9, 1], "+Def/-Sp.Def");
	var impish 	= new Nature("Impish", 	[1, 1, 1.1, .9, 1, 1], "+Def/-Sp.Atk");
	var bold 	= new Nature("Bold", 	[1, .9, 1.1, 1, 1, 1], "+Def/-Atk");
	var rash 	= new Nature("Rash", 	[1, 1, 1, 1.1, .9, 1], "+Sp.Atk/-Sp.Def");
	var quiet 	= new Nature("Quiet",	[1, 1, 1, 1.1, 1, .9], "+Sp.Atk/-Speed");
	var modest 	= new Nature("Modest", 	[1, .9, 1, 1.1, 1, 1], "+Sp.Atk/-Atk");
	var mild 	= new Nature("Mild", 	[1, 1, .9, 1.1, 1, 1], "+Sp.Atk/-Def");
	var sassy 	= new Nature("Sassy", 	[1, 1, 1, 1, 1.1, .9], "+Sp.Def/-Speed");
	var gentle 	= new Nature("Gentle", 	[1, 1, .9, 1, 1.1, 1], "+Sp.Def/-Def");
	var careful = new Nature("Careful", [1, 1, 1, .9, 1.1, 1], "+Sp.Def/-Sp.Atk");
	var calm 	= new Nature("Calm", 	[1, .9, 1, 1, 1.1, 1], "+Sp.Def/-Atk");
	var timid 	= new Nature("Timid", 	[1, .9, 1, 1, 1, 1.1], "+Speed/-Atk");
	var naive 	= new Nature("Naive", 	[1, 1, 1, 1, .9, 1.1], "+Speed/-Sp.Def");
	var jolly 	= new Nature("Jolly", 	[1, 1, 1, .9, 1, 1.1], "+Speed/-Sp.Atk");
	var hasty 	= new Nature("Hasty", 	[1, 1, .9, 1, 1, 1.1], "+Speed/-Def");
	var serious = new Nature("Serious", neutral, "neutral");
	var quirky	= new Nature("Quirky", 	neutral, "neutral");
	var hardy 	= new Nature("Hardy", 	neutral, "neutral");
	var docile 	= new Nature("Docile", 	neutral, "neutral");
	var bashful = new Nature("Bashful", neutral, "neutral");

	pokevo.natures = [adamant, lonely, naughty, brave, relaxed, lax, impish, bold, rash, quiet, modest, mild,
						sassy, gentle, careful, calm, timid, naive, jolly, hasty, serious, quirky, hardy, docile, bashful];
})(window.pokevo = window.pokevo || {});
