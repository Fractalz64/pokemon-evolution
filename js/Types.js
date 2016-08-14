
(function(pokevo) {
    function Type(name, weaknesses, resistances, immunities) {
        this.name = name;
        this.weaknesses = weaknesses;
        this.resistances = resistances;
        this.immunities = immunities;
        this.isWeakTo = function(type) {
            return weaknesses.includes(type.name);
        };
        this.isResistantTo = function(type) {
            return resistances.includes(type.name);
        };
        this.isImmuneTo = function(type) {
            return immunities.includes(type.name);
        };
    }

    var grass = new Type(
        "Grass", 
        ["Fire", "Ice", "Poison", "Flying", "Bug"],        //weaknesses
        ["Grass", "Electric", "Ground", "Water"],          //resistances
        []);                                               //immunities

    var fire = new Type(
        "Fire",
        ["Water", "Ground", "Rock"],                         //weaknesses
        ["Grass", "Fire", "Bug", "Fairy", "Ice", "Steel"],   //resistances
        []);                                                 //immunities

    var water = new Type(
        "Water",
        ["Grass", "Electric"],                               //weaknesses
        ["Fire", "Water", "Ice", "Steel"],                   //resistances
        []);                                                 //immunities

    var electric = new Type(
        "Electric",
        ["Ground"],                               //weaknesses
        ["Electric", "Flying", "Steel"],          //resistances
        []);                                      //immunities

    var normal = new Type(
        "Normal",
        ["Fighting"],                     //weaknesses
        [],                               //resistances
        ["Ghost"]);                       //immunities

    var bug = new Type(
        "Bug",
        ["Fire", "Flying", "Rock"],               //weaknesses
        ["Fighting", "Grass", "Ground"],          //resistances
        []);                                      //immunities

    var dark = new Type(
        "Dark",
        ["Bug", "Fairy", "Fighting"],             //weaknesses
        ["Dark", "Ghost"],                        //resistances
        ["Psychic"]);                             //immunities

    var dragon = new Type(
        "Dragon",
        ["Dragon", "Ice", "Fairy"],                   //weaknesses
        ["Grass", "Fire", "Water", "Electric"],       //resistances
        []);                                          //immunities

    var fairy = new Type(
        "Fairy",
        ["Poison", "Steel"],                    //weaknesses
        ["Bug", "Dark", "Fighting"],            //resistances
        ["Dragon"]);                            //immunities

    var fighting = new Type(
        "Fighting",
        ["Flying", "Psychic", "Fairy"],           //weaknesses
        ["Bug", "Dark", "Rock"],                  //resistances
        []);                                      //immunities

    var flying = new Type(
        "Flying",
        ["Electric", "Ice", "Rock"],            //weaknesses
        ["Bug", "Fighting", "Grass"],           //resistances
        ["Ground"]);                            //immunities

    var ghost = new Type(
        "Ghost",
        ["Ghost", "Dark"],                  //weaknesses
        ["Bug", "Poison"],                  //resistances
        ["Normal", "Fighting"]);            //immunities

    var ground = new Type(
        "Ground",
        ["Grass", "Water", "Ice"],              //weaknesses
        ["Poison", "Rock"],                     //resistances
        ["Electric"]);                          //immunities

    var ice = new Type(
        "Ice",
        ["Fire", "Fighting", "Rock", "Steel"],        //weaknesses
        ["Ice"],                                      //resistances
        []);                                          //immunities

    var poison = new Type(
        "Poison",
        ["Ground", "Psychic"],                              //weaknesses
        ["Bug", "Fairy", "Fighting", "Grass", "Poison"],    //resistances
        []);                                                //immunities

    var psychic = new Type(
        "Psychic",
        ["Dark", "Ghost", "Bug"],             //weaknesses
        ["Fighting", "Psychic"],              //resistances
        []);                                  //immunities

    var rock = new Type(
        "Rock",
        ["Fighting", "Grass", "Ground", "Water", "Steel"],  //weaknesses
        ["Fire", "Flying", "Normal", "Poison"],             //resistances
        []);                                                //immunities

    var steel = new Type(
        "Steel",
        ["Fire", "Ground", "Fighting"],                   //weaknesses
        ["Bug", "Dragon", "Fairy", "Flying", "Grass",     //resistances
        "Ice", "Normal", "Psychic", "Rock", "Steel"],   
        ["Poison"]);                                      //immunities

    var noneType = new Type("none", [], [], []);

    pokevo.types = [grass, fire, water, electric, normal, fighting, psychic, dark, ghost, bug, flying, ice, ground, rock, steel, poison, fairy, dragon];

    pokevo.getDamageMultiplier = function(moveType, pokeType) {
        type1 = pokeType[0];
        type2 = pokeType[1] || noneType;

        if (type1.isImmuneTo(moveType) || type2.isImmuneTo(moveType)) {
            return 0;
        }
        if (type1.isWeakTo(moveType) && type2.isWeakTo(moveType)) {
            return 4;
        }
        if (type1.isWeakTo(moveType) && !type2.isResistantTo(moveType)
            || !type1.isResistantTo(moveType) && type2.isWeakTo(moveType)) {
            return 2;
        }
        if (type1.isResistantTo(moveType) && type2.isResistantTo(moveType)) {
            return 0.25;
        }
        if (type1.isResistantTo(moveType) || type2.isResistantTo(moveType)) {
            return 0.5;
        }
        else {
            return 1;
        }
    }
})(window.pokevo = window.pokevo || {});
