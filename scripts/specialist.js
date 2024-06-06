   /**
 * Cette fonction permet de générer des spécialistes, des champions, des héros mineurs et des héros majeurs
 * 
 */

   function getTitle() {

    let x = 0
    
        if (configRole === 1) {
            increaseSpecialist(5, "spec.")
        }
    
        if (configRole === 2) {
            increaseFightStats(10, "champ.");
            increaseOtherStats(1,10, "champ.")
        }
    
        if (configRole === 3) {
            increaseFightStats(20, "héros min.");
            increaseOtherStats(2,20, "héros min.")
        }
    
        if (configRole === 4) {
            increaseFightStats(30,  "héros maj.");
            increaseOtherStats(3,30,  "héros maj.")
        }
    }
    
    
    function increaseSpecialist(howMuch, who) {

        let x = 0;

        if (character.magic.value <= 10) { 
            x = aleatoire(2)
            if (x === 1) {
                valeursCaracteristiques[0] += howMuch
                modifCaracteristiques[0][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
            } else {
                valeursCaracteristiques[10] += howMuch
                modifCaracteristiques[10][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
            }
        } else {
            character.magic.value += howMuch
            modifCaracteristiques[12][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
        }
    
        do {
            x = aleatoire(valeursCaracteristiques.length)
        } while (x === 0 || x === 10)
        
        valeursCaracteristiques[x] += howMuch*2
        modifCaracteristiques[x][2] = `${who} (<span class="is-green strong">+${howMuch*2}</span>)`
    }
    
    
    function increaseFightStats(howMuch, who) {
        if (character.magic.value <= 10) {
            valeursCaracteristiques[0] += howMuch
            modifCaracteristiques[0][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
            valeursCaracteristiques[3] += howMuch
            modifCaracteristiques[3][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
            valeursCaracteristiques[4] += howMuch
            modifCaracteristiques[4][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
            valeursCaracteristiques[10] += howMuch
            modifCaracteristiques[10][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        } else {
            character.magic.value += howMuch
            modifCaracteristiques[12][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
            valeursCaracteristiques[1] += howMuch
            modifCaracteristiques[1][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
            valeursCaracteristiques[11] += howMuch
            modifCaracteristiques[11][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        }
    }
    
    
    function increaseOtherStats(howMany, howMuch, who) {
    
        let x = 0
        let y = 0
        let z = 0
    
        if (character.magic.value >= 10) {
            do {
                x = aleatoire(valeursCaracteristiques.length)
                y = aleatoire(valeursCaracteristiques.length)
                z = aleatoire(valeursCaracteristiques.length)
            } while (x === 1 || x === 11 || y === 1 || y === 11 || z === 1 || z === 11 ||x === y || y === z || z === x)
        } else {
            do {
                x = aleatoire(valeursCaracteristiques.length)
                y = aleatoire(valeursCaracteristiques.length)
                z = aleatoire(valeursCaracteristiques.length)
            } while (x === 0 || x === 3 || x === 4 || x === 10 || y === 0 || y === 3 || y === 4 || y === 10 || z === 0 || z === 3 || z === 4 || z === 10 || x === y || y === z || z === x)
        }
    
        valeursCaracteristiques[x] += howMuch
        modifCaracteristiques[x][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
    
        if (howMany > 1) {
            valeursCaracteristiques[y] += howMuch
            modifCaracteristiques[y][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        }
        if (howMany > 2) {
            valeursCaracteristiques[z] += howMuch
            modifCaracteristiques[z][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        }
    }



