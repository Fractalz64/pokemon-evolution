
(function(pokevo) {
    function Type(name, damageFrom) {
        this.name = name;
        this.damageFrom = damageFrom;
    }

    var grass = new Type("Grass", 
        {"Grass": .5, "Fire": 2, "Water": .5, "Electric": .5, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 2, "Flying": 2, "Ice": 2, "Ground": .5, "Rock": 1, "Steel": 1, "Poison": 2, "Fairy": 1, "Dragon": 1});

    var fire = new Type("Fire",
        {"Grass": .5, "Fire": .5, "Water": 2, "Electric": 1, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": .5, "Flying": 1, "Ice": .5, "Ground": 2, "Rock": 2, "Steel": .5, "Poison": 1, "Fairy": .5, "Dragon": 1}); 

    var water = new Type("Water",
        {"Grass": 2, "Fire": .5, "Water": .5, "Electric": 2, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 1, "Ice": .5, "Ground": 1, "Rock": 1, "Steel": .5, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var electric = new Type("Electric",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": .5, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": .5, "Ice": 1, "Ground": 2, "Rock": 1, "Steel": .5, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var normal = new Type("Normal",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": 2, "Psychic": 1, "Dark": 1, "Ghost": 0, 
        "Bug": 1, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var bug = new Type("Bug",
        {"Grass": .5, "Fire": 2, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": .5, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 2, "Ice": 1, "Ground": .5, "Rock": 2, "Steel": 1, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var dark = new Type("Dark",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": 2, "Psychic": 0, "Dark": .5, "Ghost": .5, 
        "Bug": 2, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": 1, "Fairy": 2, "Dragon": 1});

    var dragon = new Type("Dragon",
        {"Grass": .5, "Fire": .5, "Water": .5, "Electric": .5, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 1, "Ice": 2, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": 1, "Fairy": 2, "Dragon": 2});

    var fairy = new Type("Fairy",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": .5, "Psychic": 1, "Dark": .5, "Ghost": 1, 
        "Bug": .5, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 2, "Poison": 1, "Fairy": 2, "Dragon": 0});

    var fighting = new Type("Fighting",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": 1, "Psychic": 2, "Dark": .5, "Ghost": 1, 
        "Bug": .5, "Flying": 2, "Ice": 1, "Ground": 1, "Rock": .5, "Steel": 1, "Poison": 1, "Fairy": 2, "Dragon": 1});

    var flying = new Type("Flying",
        {"Grass": .5, "Fire": 1, "Water": 1, "Electric": 2, "Normal": 1, "Fighting": .5, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": .5, "Flying": 1, "Ice": 2, "Ground": 0, "Rock": 2, "Steel": 1, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var ghost = new Type("Ghost",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 0, "Fighting": 0, "Psychic": 1, "Dark": 2, "Ghost": 2, 
        "Bug": .5, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": .5, "Fairy": 1, "Dragon": 1});

    var ground = new Type("Ground",
        {"Grass": 2, "Fire": 1, "Water": 2, "Electric": 0, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 1, "Ice": 2, "Ground": 1, "Rock": .5, "Steel": 1, "Poison": .5, "Fairy": 1, "Dragon": 1});

    var ice = new Type("Ice",
        {"Grass": 1, "Fire": 2, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": 2, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 1, "Ice": .5, "Ground": 1, "Rock": 2, "Steel": 2, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var poison = new Type("Poison",
        {"Grass": .5, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": .5, "Psychic": 2, "Dark": 1, "Ghost": 1, 
        "Bug": .5, "Flying": 1, "Ice": 1, "Ground": 2, "Rock": 1, "Steel": 1, "Poison": .5, "Fairy": .5, "Dragon": 1});

    var psychic = new Type("Psychic",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": .5, "Psychic": .5, "Dark": 2, "Ghost": 2, 
        "Bug": 2, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": 1, "Fairy": 1, "Dragon": 1});

    var rock = new Type("Rock",
        {"Grass": 2, "Fire": .5, "Water": 2, "Electric": 1, "Normal": .5, "Fighting": 2, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": .5, "Ice": 1, "Ground": 2, "Rock": 1, "Steel": 2, "Poison": .5, "Fairy": 1, "Dragon": 1});

    var steel = new Type("Steel",
        {"Grass": .5, "Fire": 2, "Water": 1, "Electric": 1, "Normal": .5, "Fighting": 2, "Psychic": .5, "Dark": 1, "Ghost": 1, 
        "Bug": .5, "Flying": .5, "Ice": .5, "Ground": 2, "Rock": .5, "Steel": .5, "Poison": 0, "Fairy": .5, "Dragon": .5});

    var noneType = new Type("none",
        {"Grass": 1, "Fire": 1, "Water": 1, "Electric": 1, "Normal": 1, "Fighting": 1, "Psychic": 1, "Dark": 1, "Ghost": 1, 
        "Bug": 1, "Flying": 1, "Ice": 1, "Ground": 1, "Rock": 1, "Steel": 1, "Poison": 1, "Fairy": 1, "Dragon": 1});

    pokevo.types = [grass, fire, water, electric, normal, fighting, psychic, dark, ghost, bug, flying, ice, ground, rock, steel, poison, fairy, dragon];

    pokevo.getTypeEffectiveness = function(moveType, pokeType) {
        type1 = pokeType[0];
        type2 = pokeType[1] || noneType;
        return type1.damageFrom[moveType.name] * type2.damageFrom[moveType.name];
    }
})(window.pokevo = window.pokevo || {});
