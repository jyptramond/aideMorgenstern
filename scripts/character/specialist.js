   /**
 * Cette fonction permet de générer des spécialistes, des champions, des héros mineurs et des héros majeurs
 * 
 */

   function getTitle(character, config) {

    let x = 0
    
        if (config.role === 1) {
            increaseSpecialist(character, 5, "spec.")
        }
    
        if (config.role === 2) {
            increaseFightStats(character, 10, "champ.");
            increaseOtherStats(character, 1, 10, "champ.")
        }
    
        if (config.role === 3) {
            increaseFightStats(character, 20, "héros min.");
            increaseOtherStats(character, 2, 20, "héros min.")
        }
    
        if (config.role === 4) {
            increaseFightStats(character, 30,  "héros maj.");
            increaseOtherStats(character, 3, 30,  "héros maj.")
        }
    }
    
    
    function increaseSpecialist(character, howMuch, who) {

        let i = 0;

        if (character.stats.mag.value <= 10) { 
            x = aleatoire(2)
            if (x === 1) {
                increaseAnyStat(character.stats.com, howMuch, who) ;
            } else {
                increaseAnyStat(character.stats.tir, howMuch, who) ;
            }
        } else {
            increaseAnyStat(character.stats.mag, howMuch, who) ;
        }
    
        do {
            i = aleatoire(keys.length)
        } while (i === 0 || i === 10)
        
        let property = findPropertyByName(character, keys[i])  
        
        increaseAnyStat(property, howMuch*2, who) ;
    }


    function increaseAnyStat(property, howMuch,who) {
        property.value += howMuch ;
        property.title = howMuch ;
        property.whatTitle= who ;
    }
    
    
    function increaseFightStats(character, howMuch, who) {
        if (character.stats.mag.value <= 10) {
            increaseAnyStat(character.stats.com, howMuch, who) ;
            increaseAnyStat(character.stats.end, howMuch, who) ;
            increaseAnyStat(character.stats.for, howMuch, who) ;
            increaseAnyStat(character.stats.tir, howMuch, who) ;

        } 
        else {
            increaseAnyStat(character.stats.mag, howMuch, who) ;
            increaseAnyStat(character.stats.cns, howMuch, who) ;
            increaseAnyStat(character.stats.vol, howMuch, who) ;
        }
    }
    
    
    function increaseOtherStats(character, howMany, howMuch, who) {
    
        let x = 0
        let y = 0
        let z = 0
    
        if (character.stats.mag.value >= 10) {
            do {
                x = aleatoire(keys.length)
                y = aleatoire(keys.length)
                z = aleatoire(keys.length)
            } while (   x === 1 || y === 1 || z === 1 || 
                        x === 11 || y === 11 || z === 11 ||
                        x === y || y === z || z === x)
        } else {
            do {
                x = aleatoire(keys.length)
                y = aleatoire(keys.length)
                z = aleatoire(keys.length)
            } while (   x === 0 || y === 0 || z === 0 || 
                        x === 3 || y === 3 || z === 3 || 
                        x === 4 || y === 4 || z === 4 || 
                        x === 10 || y === 10 || z === 10 || 
                        x === y || y === z || z === x)
        }
    
            let property = findPropertyByName(character, keys[x])  
            increaseAnyStat(property, howMuch, who) ;
    
        if (howMany > 1) {

            let property = findPropertyByName(character, keys[y])  
            increaseAnyStat(property, howMuch, who) ;

        }
        if (howMany > 2) {

            let property = findPropertyByName(character, keys[z])  
            increaseAnyStat(property, howMuch, who) ;

        }
    }



