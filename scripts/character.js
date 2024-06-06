/*********************************************************************************
 * 
 * Ce fichier contient les scripts nécessaires au fonctionnement du générateur
 * 
 * 
 *********************************************************************************/

/** 
 *  Fonction qui regroupe les sous-fonctions de génération
 * 
 */


function initConfig() {
    let config = {
        name: 0,
        race: 0,
        archetype: 0,
        group: 0,
        job: 0,
        mode: 0,
        role: 0
    } 

    getConfig(config);

    return config
}

function createCharacter() {
            
        let config = initConfig();
        let character = initCharacter();

        getRace(character, config);
        getFate(character);
        getSecondaryAttributes(character);
        getName(character, config);
        getAge(character);

        //genererCompetences();
        switch (configMode) {
            case 0:
                getStats(character);
                break;
            case 1:
                genererCompetencesTirage(configMode);
                break;
            case 2:
                genererCompetencesTirage(configMode);
                break;
        }

        getArchetype(character, config);
        getTraits(character);
        getJob(character, config);
        getMagicRank(character)
        getMagic(character);

        if (configRole !== 0) {
            getPrestigiousTitle(character);
        }

        getAbilities(character);
        getMainAttributes(character);
        getEquipment(character);

        // étapes supplémentaires si le PJ pratique la magie
        if (character.stats.mag.value > 0) {
            let tricksbook = getSpellbook(toursDeMagie);
            let spellsbook = getSpellbook(sortileges);
            //afficherGrimoire()
            getTricks(character, tricksbook)
            getSpells(character, spellsbook)
        } 

        return character
}



/**
 * Cette fonction s'occupe de tirer un peuple au hasard (si vaut -1)
 * puis détermine le destin et le spécial par rapport au peuple
 *  
 * @param {number} : l'index du peuple. Si aléatoire index vaut -1
 *  
 */

function getRace(character, config) {

    // tirage du peuple
    if (config.race === -2) {
    let y = aleatoire(100)+1

    // sélectionne un peuple selon la répartition statistique des peuples
        for (let i = 0 ; i < repartitionPeuples.length ; i++) {
            if (y >= repartitionPeuples[i][0] && y <= repartitionPeuples[i][1]) {

                switch (i) {
                    case 0 : 
                        character.raceID = 0;
                        break ;
                    case 1 : 
                        character.raceID = 3;
                        break ;
                    case 2 : 
                        character.raceID = 4;
                        break ;
                    case 3 : 
                        character.raceID = 5;
                        break ;
                    case 4 : 
                        character.raceID = 7;
                        break ;
                    case 5 : 
                        character.raceID = 8;
                        break ;
                    case 6 : 
                        character.raceID = 9;
                        break ;
                    case 7 : 
                        character.raceID = 2;
                        break ;
                    case 8 : 
                        character.raceID = 1;
                        break ;
                }
            }
        }
    }

    if (config.race === -1) {
        let y = aleatoire(origine.length)
        character.raceID = y
    }

    if (config.race >= 0) {
        character.raceID = config.race
    }

    character.race = origine[character.raceID][0];
}



function getFate(character) {
        // le destin
        if (character.race === 0 || character.race === 3) {
           character.fate = 3 ;
        } else {
           character.fate = 2 ;
        }
}

function getSecondaryAttributes(character) {

    switch (character.race) {

        case 0 :    //humain
            break ;

        case 1 :    //elfe
            character.special = "Nyctalopie"
            break ;

        case 2 :    //nain
            character.pv.sum += 1 // PV 
            character.sf.sum += 1 // SF 
            character.special = "PV+1, SF+1"
            character.pv.bonus = 1 // PV add.
            character.sf.bonus = 1 // SF add.
            break ;

        case 3 :    //halfelin
            break ;
            
        case 4 :    //elvin
            character.special = "Nyctalopie"
            break ;

        case 5 :    //hudvàr
            character.pv.sum += 1 // PV
            character.sf.sum += 1 // SF
            character.special = "PV+1, SF+1"
            character.pv.bonus = 1 // PV add.
            character.sf.bonus = 1 // SF add.
            break ;

        case 6 :    //ogrin
            character.special = `PV+2,<br>Rés. aux maladies`
            character.pv.sum += 2 // SF : idem
            character.pv.bonus = 2 // PV add.
            break ;

        case 7 :    //orquin
            character.special = `Nyctalopie,<br>Rés. aux maladies`
            break ;

        case 8 :    //morvelin
            character.special = `Nyctalopie,<br>Rés. aux maladies`
            break ;
    }
}

/**
 * Générer un prénom aléatoire
 * 
 */

function getName(character, config) {

    if (config.name === -1) {
            // choix d'une liste de prénoms
        let x = aleatoire(prenoms.length)
            // choix du masculin ou féminin
        let y = aleatoire(prenoms[x].length)
            // choix du prénom
        let i = aleatoire(prenoms[x][y].length)
    
        character.name = prenoms[x][y][i]
    }

    // choix aléatoire en fonction du peuple
    if (config.name === -2) {

        switch (character.race) {
            case 1: 
                x = 10;
                break;
            case 2:
                x = 11;
                break;
            case 3:
                x = 12;
                break;
            case 6:
                x = 9;
                break;
            case 7:
                x = 9;
                break;
            case 8:
                x = 9;
                break;
            default:
                x = aleatoire(9)
        }

        // choix du masculin ou féminin
    let y = aleatoire(prenoms[x].length)
        // choix du prénom
    let i = aleatoire(prenoms[x][y].length)

    character.name = prenoms[x][y][i]
    }


    if (config.name >= 0) {
            // choix du masculin ou féminin
        let y = aleatoire(prenoms[p].length)
            // choix du prénom
        let i = aleatoire(prenoms[p][y].length)
        
        character.name = prenoms[p][y][i]
    }
}



/**
 * Générer l'âge aléatoire en fonction du peuple'
 *
 */

function getAge(character) {

    switch (character.raceID) {
        case 0 :
            //humain
            character.age = aleatoire(33)+12
            break ;
        case 1 :
            //elfe
            character.age = aleatoire(288)+12
            break ;
        case 2 :
            //nain
            character.age = aleatoire(88)+12
            break ;
        case 3 :
            //halfelin
            character.age = aleatoire(68)+12
            break ;
        case 4 :
            //elvin
            character.age = aleatoire(48)+12
            break ;
        case 5 :
            //hudvàr
            character.age = aleatoire(58)+12
            break ;
        case 6 :
            //ogrin
            character.age = aleatoire(28)+12
            break ;
        case 7 :
            //orquin
            character.age = aleatoire(28)+12
            break ;
        case 8 :
            //orquin
            character.age = aleatoire(38)+12
            break ;
    }
}





/**
 * Générer les compétences du personnage
 * Un personnage dispose de 120 points à répartir parmi ses 12 caractéristiques (sans compter la magie)
 *
 */

function getStats(character) {

let sum = 0
let stats = []
let pool = 120
let y = 0 // le tableau des caractéristiques    
let i = 0

    // pour chaque caractéristique on attribue une valeur aléatoire (0, 5, 10, 15 ou 20)
    for (i = 0; i < 12; i++) {

        // s'il reste plus de 20 points dans la pool on tire un nombre aléatoire
        if (pool >= 20) { 
            y = (aleatoire(5))*5; 
        } 
        // sinon on met juste le reste dans la caractéristique en cours
        else {  
            y = pool  
        }

        stats[i] = y       
        // puis on diminue la pool d'un chiffre équivalent 
        pool -= y 
    }

    for (i = 0; i < 12 ; i++) {
        sum += stats[i];
    }

    // si la somme des caractéristiques n'est pas égale à 120, on lance une nouvelle création
    if (sum !== 120) {
        getStats(character)
    } 
    else {  

        shuffle(stats)
        getSum(character, stats);
        checkStatsSum(stats);
        addRaceStats(character, stats)

    }
}

function getSum(character, stats) {
    for (let i = 0 ; i < keys.length ; i++) {
        character.sum.roll += stats[i]
    }
}

function addRaceStats(character, stats) {

    for (i = 0; i < stats.length; i++) {
        character.sum.race += origine[character.raceID][i+1] ;
        stats[i] += origine[character.raceID][i+1] ;
        }
        character.sum.rollrace = character.sum.roll + character.sum.race;

    for (i = 0 ; i < keys.length ; i++) {
        //console.log(keys[i])
        let property = findPropertyByName(character, keys[i])
        //console.log(property.value);
        property.value += stats[i];
        //console.log(property.value);
    }
    //console.log(character.sum.rollrace)
}


function checkStatsSum(stats) {
    let mySum = 0;
    console.log(stats)
        for (i = 0 ; i < stats.length ; i++) {
            mySum += stats[i];
        }
    console.log("somme : "+mySum)
}


/**
 * Cette fonction s'occupe de tout ce qui est lié à l'archétype.
 * Elle choisit les modifications à apporter aux caractéristiques lorsque nécessaire avec stringrandom()
 * Elle indique les vices et vertus sélectionne depuis la liste en évitant les doublons
 *  
 * @param {number} : l'index de l'archétype. Si aléatoire index vaut -1
 *  
 */

function getArchetype(character, config) {

    let i = 0;

    if (config.archetype === -1) {
        character.archetypeID = aleatoire(newArchetype.length);
        character.archetype = newArchetype[character.archetypeID].name;
    }
    else {
        character.archetype = newArchetype[config.archetype].name;
        character.archetypeID = config.archetype;
    }

    // applique les modificateurs de caractéristiques de l'archétype un par un
    for (i = 0 ; i < newArchetype[character.archetypeID].bonus.length ; i++) {

        bonusArchetype(character, stringrandom(newArchetype[character.archetypeID].bonus[i]))

    }
}


function getTraits(character) {

    let trait1 = "";
    let trait2 = "";

        // tire deux vices et vertus selon l'archétype. Si les deux sont identiques, il y a relance
        while (trait1 === trait2) {

            // si il y a deux entrées vices et vertus dans le tableau
            if (newArchetype[character.archetypeID].traits.length === 2) {
                trait1 = stringrandom(newArchetype[character.archetypeID].traits[0])
                trait2 = stringrandom(newArchetype[character.archetypeID].traits[1])
            }
            // si il n'y en a qu'une seule
            else {
                trait1 = stringrandom(newArchetype[character.archetypeID].traits[0])
                trait2 = stringrandom(newArchetype[character.archetypeID].traits[0])
            }
        }
    
        character.traits[0] = trait1;
        character.traits[1] = trait2;
}




/**
 * Cette fonction complète la fonction de création de sélection de l'archétype
 * Elle reçoit en entrée une chaîne de caractère du type "FOR+5".
 * Elle décline la valeur entre trois variables "FOR", "+" et "5"
 * Elle s'occupe ensuite d'incrémenter la valeur concernée
 * 
 * @param {string} str : la chaîne de caractère à traduire en instructions
 * 
 */

function bonusArchetype(character, str) {

let characteristic
let operateur
let x   // valeur d'incrémentation/décrémentation
let z

    // récupérer l'opérateur
    if (str.indexOf("+") !== -1) {
        operateur = "+"
        z = str.indexOf("+")
    }
    else {
        operateur = "-"
        z = str.indexOf("-")
    }

// récupérer la valeur d'incrémentation/décrémentation

x = str.slice(z+1)

// récupérer la caractéristiques

characteristic = str.slice(0, z)


    for (let i = 0 ; i < nomsCaracteristiques.length ; i++) {
        if (characteristic === abrevCaracteristiques[i]) {

            let property = findPropertyByName(character, keys[i])

            if (operateur === "+") {
                //console.log(`la valeur de ${abrevCaracteristiques[i]} a été incrémenté de ${x}`)
                property.value += Number(x)
                property.archetype = `archétype (<span class="is-green strong">+${x}</span>)`
                character.sum.archetype += Number(x)
                
            }
            else {
                //console.log(`la valeur de ${abrevCaracteristiques[i]} a été décrémenté de ${x}`)
                property.value -= Number(x) 
                property.archetype = `archétype (<span class="is-red strong">-${x}</span>)`
                character.sum.archetype -= Number(x)
            }
        }}

//console.log(characteristic, operateur, x)

}




/**
 * Cette fonction tire une branche de métiers au sort puis un métier
 * Elle détermine également l'équipement de départ
 * 
 * @param {number} x : la branche de métiers
 * @param {number} xx : le métier
 * 
 */

function getJob(character, config) {
    
    // LOGIQUE
    if (config.group === -2 && config.job === -1) {

        let y = aleatoire(100)+1

        // sélectionne un métier selon la répartition statistique des métiers
        for (let i = 0 ; i < repartitionMetiers[character.raceID].length ; i++) {
            
            if (y >= repartitionMetiers[character.raceID][i][0] && y <= repartitionMetiers[character.raceID][i][1]) {
                character.groupID = i ;
            }
        }

        // tirer un métier au hasard parmi la branche
        character.jobID = (aleatoire(8))+(8*(character.groupID))
    }

        // Aléatoire
    if (config.group === -1 && xx === -1 ) {
        character.groupID = aleatoire(groups.length)
        character.jobID = (aleatoire(8))+(8*(character.groupID))
    }

   
    // si BRANCHE CHOISE && METIER ALEATOIRE
    if (config.group >= 0 && config.job === -1) {
        character.groupID = config.group;
        character.jobID = (aleatoire(8))+(8*(config.group));
    }

    // si BRANCHE ALEATOIRE && METIER CHOISI
    if (config.group < 0 && config.job !== -1) {
        character.jobID = config.job
        character.groupID = Math.floor(character.jobID/8)
    }

    // afficher le métier=
    character.group = groups[character.groupID].name;
    character.job = stringrandom(jobs[character.jobID].name);
}


/**
 * Cette fonction détermine l'équipement du PJ
 * 
 */

function getEquipment(character) {
    let stuff = ""

    getFromList(character, groups[character.groupID].inventory, character.equipment);
    getFromList(character, groups[character.groupID].weapons, character.weapons);
    stuff = getFromList(character, groups[character.groupID].money, character.money);
    character.money = stuff;

    getFromList(character, jobs[character.jobID].inventory, character.equipment);
    getFromList(character, jobs[character.jobID].weapons, character.weapons);

    stuff = getFromList(character, groups[character.groupID].armor, character.armor);
    
    if (character.armor !== "") {
        stuff = getFromList(character, jobs[character.jobID].armor, character.armor);
    }
    character.armor = stuff;
}


function getFromList(character, id, stuff) {

            console.log("///////////////////////////////////")
        if (Array.isArray(stuff)) {
            for (let i = 0 ; i < id.length ; i++) {
                //générer l'équipement de la branche de métiers
                
                //console.log(id[i]);
                stuff.push(translate(character, stringrandom(id[i])));
                //console.log("# "+translate(character, stringrandom(id[i])));

            }
        }
        else {
            //console.log(id)
            stuff = `${translate(character, stringrandom(id))}`;
            //console.log("# "+stuff)
            return stuff
        }
}



/**
 * Calculer les atouts.
 * 
 * Un personnage possède autant n atouts = *CNS* - 1 
 * On shuffle les atouts puis on prend les n premiers 
 * 
 */

function getAbilities(character) {

    character.abilitiesSum = indice(character.stats.cns.value)-1
    let pjEstUnMage = checkMagic(character)
    let array = [];

        // si le PJ a un score de magie positif...
        if (character.stats.mag.value > 0 ) {
            // ... et suit une carrière de mage...
            if (pjEstUnMage) {

                atouts = getAbilitiesWizard();
            } 
            else {

                atouts = getAbilitiesNonWizard();   
            } 
        }
        else {
            // SI LE PJ N'EST PAS UN MAGE !
            // remplit un tableau avec les 20 atouts possibles        

            for (let skill of jobs[character.jobID].skills) {
                array.push(skill);
            }

            for (let talent of jobs[character.jobID].talents) {
                array.push(talent);
            }

            shuffle(array)
            for (let i = 0 ; i < character.abilitiesSum ; i++) {
                character.abilities.push(stringrandom(array[i]))
                //console.log(atouts[i])
            } 
        }
}


/**
 * Calculer les atouts pour un magicien
 * 
 * 
 */


function getAbilitiesWizard() {

let i
let z = 0
let x = []

        // ... on génère une liste d'atouts qui omet les domaines magiques et...
    for (i = 2 ; i < 20 ; i++) {
        x[i] = metiers[character.jobID][i+1]
    }

        // ... son premier atout est un domaine magique...
    atouts[0] = stringrandom(metiers[character.jobID][1])


        // on supprime les deux premiers éléments (car vides) de la liste des atouts
    x.splice(0,2)
    shuffle(x)

        // ... et si sa magie est égale à 50 (et qu'il peut avoir 2 atouts) alors il possède un second domaine de magie !
        if (character.magic.value >= 50 && character.abilitiesSum > 1) {
            
            if (magicienDuoVar === true) {
                // on vérifie qu'il n'y ai pas de doublon
                do {
                    atouts[1] = stringrandom(metiers[character.jobID][2])
                }
                while (atouts[1] === atouts[0])
    
                // le nombre d'atouts en moins dont bénéficie le personnage
                z = 2 ;
            }
            else {
                // on vérifie qu'il n'y ai pas de doublon
                do {
                    atouts[1] = stringrandom(domaineMagique)
                }
                while (atouts[1] === atouts[0])

                // le nombre d'atouts en moins dont bénéficie le personnage
                z = 2 ;
            } 
        } 
        else {
            z = 1 

        }

        if (character.magic.value >= 70 && character.abilitiesSum > 2) {
            do {
               atouts[2]=stringrandom(domaineMagique)
            }
            while (atouts[0] === atouts[2] || atouts[1] === atouts[2])
        z = 3 ;
        } 
    
    // tirer les atouts suivants en vérifiant qu'aucun atout n'est un doublon du premier atout (domaine magique)
    for (i = 0 ; i < character.abilitiesSum-z ; i++) {
        atouts[i+z] = stringrandom(x[i])
    }
}



/**
 * Calculer les atouts pour un magicien non-professionnel
 * 
 * 
 */


function getAbilitiesNonWizard() {


let x = []
let z = 0

    // si le PJ est MAGE sans suivre une carrière de mage
    atouts[0]=stringrandom(domaineMagique)

     if (character.magic.value >= 50 && character.abilitiesSum > 1) {
         do {
            atouts[1]=stringrandom(domaineMagique)
         }
         while (atouts[0] === atouts[1])
    z = 2 ;
    } 
    else {
    z = 1 ;
    }

    if (character.magic.value >= 70 && character.abilitiesSum > 2) {
        do {
           atouts[2]=stringrandom(domaineMagique)
        }
        while (atouts[0] === atouts[2] || atouts[1] === atouts[2])
    z = 3 ;
    } 

    // remplit un tableau avec les 20 atouts possibles        
    for (let i = 0 ; i < 20 ; i++) {
        x[i] = metiers[character.jobID][i+1]
    }

     shuffle(x)
     
    for (i = 0 ; i < character.abilitiesSum-z; i++) {
         atouts[i] = stringrandom(x[i]) // WARNING ? atouts[i+z] = stringrandom(x[i])
        }
    }


/**
 * 
 * Retourne "true" si le PJ est un mage
 * 
 */

function checkMagic(character) {

    let x = false
    let i = 0

    for (i = 0 ; i < magicienDuo.length ; i++) {
        if (character.jobID === magicienDuo[i]) {
            x = true
            magicienDuoVar = true
        }
    }

    for (i = 0 ; i < magicienMono.length ; i++) {
        if (character.jobID === magicienMono[i]) {
            x = true
        }
    }

    return x
}




/**
 * 
 * Attribue un score de magie selon certaines échelles de valeur :
 * Retourne : 0 si non-mage / 1 si un mage-non-professionnel / 2 si carrière-mi-magie / 3 si carrière full-magie
 * 
 */

function getMagicRank(character) {

    let pjEstUnMage = 0
    let magCat1 = (aleatoire(10)+1)*5
    let magCat2 = [(aleatoire(10)+1)*5,(aleatoire(10)+1)*5]
    magCat2.sort(function(a, b) {
        return a - b;
        });

        /*
    let magCat3 = [(aleatoire(10)+1)*5,(aleatoire(10)+1)*5,(aleatoire(10)+1)*5]
    magCat3.sort(function(a, b) {
        return a - b;
        }); */
    
    // trouver à quel catégorie de mages appartient le PJ
    
        // mage catégorie 1 (1 chance sur 100)
        if (pjEstUnMage === 0) {
            x = aleatoire(100) 
                if (x === 99) { /////////////////////////////////////////////////////////////////////////////// CETTE VALEUR DOIT ÊTRE (x === 99)
                    pjEstUnMage = 1
                    character.magic.value = magCat1
                }
        }

        // mage catégorie 2
        for (i = 0 ; i < magicienMono.length ; i++) {
                if (character.jobID === magicienMono[i]) {
                    pjEstUnMage = 2
                    character.magic.value = magCat2[1]
                }
            }
    
        // mage catégorie 3
        for (i = 0 ; i < magicienDuo.length ; i++) {
                if (character.jobID === magicienDuo[i]) {
                    pjEstUnMage = 3
                    character.magic.value = magCat2[1]
                }
            }
}



/**
 * 
 * Calculer la magie d'un personnage selon les différents cas de figure
 * 
 */

function getMagic(character) {

// initiatilisation des catégories de mages
    
let x = 0
let profilApprentissageMagie = [0,0,0,0,0,0,0,0,0,0,0,0]
let i = 0
let ii = 0
let ajusterCombat = 0
let y = []
let poolDeMagie = 0

poolDeMagie = character.stats.mag.value

    // on ne peut prélever plus de 10% dans une caractéristique
        for (i = 0 ; i < profilApprentissageMagie.length ; i++) {
            if (poolDeMagie >= 10) {
                x = (aleatoire(2)+1)*5
                profilApprentissageMagie[i] += x
                poolDeMagie -= x
            }
            else if (poolDeMagie === 5) {
                x = 5
                profilApprentissageMagie[i] += x
                poolDeMagie = 0
            }          
        }
    
    shuffle(profilApprentissageMagie)
    ajusterCombat = profilApprentissageMagie[0]
    character.sum.comDecrease = ajusterCombat


    for (ii = 1 ; ii < 12 ; ii++) {
        y[ii] = ii
    }

    y.splice(0,1)
    shuffle(y)
    // DEBUG : console.log(y)



    for (i = 0 ; i < 11 ; i++) {
        if (ajusterCombat > 0) {
                // chaque point prélevé en COM compte double
                // si les points prélevés en COM sont sup. à 0 ET que COM est inférieure à MAG
                if (profilApprentissageMagie[0] > 0 && character.magic.value > profilApprentissageMagie[0]) {
                
                        // DEBUG : console.log("MAGIE/COMBAT init... tentative sur... "+y[i]+" : "+abrevCaracteristiques[y[i]]+" ---> vaut "+profilApprentissageMagie[y[i]])

                        if (profilApprentissageMagie[y[i]] >= 5) {
                            // DEBUG : console.log("correcteur -5 aux points prélevés à "+profilApprentissageMagie[y[i]]+" "+abrevCaracteristiques[y[i]])
                            profilApprentissageMagie[y[i]] -= 5
                            ajusterCombat -= 5
                        } 
                }
                // si les points prélevés en COM sont sup. à 0 et que la MAG est égale aux pts prélevés en COM
                else if (profilApprentissageMagie[0] > 0 && character.magic.value === profilApprentissageMagie[0]) {
                        character.magic.value += profilApprentissageMagie[0]
                        ajusterCombat = 0
                }
        }
    }


    i = 0
    for (let key of keys) {
        if (character.stats.hasOwnProperty(key)) {

            if (profilApprentissageMagie[i] !== 0) {
                // DEBUG : console.log(`"correction de ${profilApprentissageMagie[i]} à la stat ${abrevCaracteristiques[i]}`)
                character.stats[key].value -= profilApprentissageMagie[i]
                character.stats[key].magic = `magie (<span class="is-red strong">-${profilApprentissageMagie[i]}</span>)`
            }
            else {
                character.stats[key].magic = ""
            }
            i++;
        }
    }

    // applique le profil d'apprentissage de la magie aux caractéristiques
    for (i = 0 ; i < profilApprentissageMagie.length ; i++) {

    }
}


/**
 * Générer les sortilèges/tours de magie
 * 
 * @param {string} : la base de données dans laquelle piocher
 * 
 */

function getSpellbook(mode) {
    
let domaine1
let domaine2
let domaine3
let i = 0
let ii = 0
let x = 0
let grimoire = []

    if (atouts[0] != undefined) {
                domaine1 = atouts[0].indexOf('Domaine magique (')
            if (domaine1 !== -1) {
                // DEBUG : console.log(atouts[0])
                domaine1 = atouts[0].slice(16) 
            }
        }

    // cette partie cherche si le deuxième atout est un domaine magique
    if (atouts[1] != undefined) {
        domaine2 = atouts[1].indexOf('Domaine magique (')
            if (domaine2 !== -1) {
                // DEBUG : console.log(atouts[1])
                domaine2 = atouts[1].slice(16)
                // DEBUG : console.log(domaine2)
            }
    }

    // cette partie cherche si le troisième atout est un domaine magique
    if (atouts[2] != undefined) {
        domaine3 = atouts[2].indexOf('Domaine magique (')
            if (domaine3 !== -1) {
                // DEBUG : console.log(atouts[1])
                domaine3 = atouts[1].slice(16)
                // DEBUG : console.log(domaine2)
            }
    }

    // DEBUG : inspectionDuGrimoire(mode)

    // pour chaque tour de magie on vérifie s'il appartient au.x domaine.s magique.s du PJ
    for (i = 0 ; i < mode.length ; i++) {
        for (ii = 0 ; ii < mode[i][1].length ; ii++) {

            if (character.magic.value >= mode[i][2]) {
                // DEBUG : console.log("... initialisation : recherche d'un sort...")
                    if (mode[i][1][ii] === domaine1) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : console.log(mode[i][0][0]+"... correspondance avec domaine 1 : inscrit sur le grimoire")
                    } 
                    if (mode[i][1][ii] === domaine2) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : console.log(mode[i][0][0]+"... correspondance avec domaine 2 : inscrit sur le grimoire")
                    } 
                    if (mode[i][1][ii] === domaine3) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : console.log(mode[i][0][0]+"... correspondance avec domaine 3 : inscrit sur le grimoire")
                    } 
            }

        }
    }

    // DEBUG : console.log("mon grimoire (avant removeDuplicates")
    // DEBUG : console.log(grimoire)
    grimoire = removeDuplicates(grimoire)
    // DEBUG : console.log(grimoire)

    return grimoire
}


/**
 * Retirer les doublons d'un array
 * 
 * @param {array} : choix de l'array dans lequel tirer les sorts 
 * 
 */

function getSpells(character, spellsbook) {

shuffle(spellsbook)
// DEBUG : console.log(array)
let x = character.abilitiesSum+1
// quel est le plus court entre le grimoire et la capacité d'apprentissage
    if (grimoireSortilege.length < x) {
    x = grimoireSortilege.length
    }
    for (let i = 0 ; i < x ; i++) {
        character.spells[i] = spellsbook[i]
    }
}

function getTricks(character, book) {

    shuffle(book)
    // DEBUG : console.log(array)
    let x = character.abilitiesSum+1
    // quel est le plus court entre le grimoire et la capacité d'apprentissage
        if (grimoireToursDeMagie.length < x) {
        x = grimoireToursDeMagie.length
        }
        for (let i = 0 ; i < x ; i++) {
            character.tricks[i] = tricksbook[i]
        }
    }


/**
 * Cette fonction sert à afficher les attributs principaux et secondaires :
 * Initiative : *COM* + *MOU* + *PER*
 * Vitalité : FOR/5 + END/5 + *VOL*
 * Seuil de blessure: PV/2
 * Sang-Froid : VOL/5 + CNS/5 + *COM*
 * Instabilité: SF/4
 */


function getMainAttributes(character) {

    // initiative
    character.initiative = indice(character.stats.com.value)+indice(character.stats.mou.value)+indice(character.stats.per.value);

    // vitalité
    character.pv.base = Math.floor((character.stats.for.value/5)+(character.stats.end.value5)+indice(character.stats.vol.value));
    character.pv.sum = character.pv.base + character.pv.bonus;

    // seuil de blessure
    character.sb = Math.floor(character.pv.sum/2);

    // sang-froid
    character.sf.base = Math.floor((character.stats.vol.value/5)+(character.stats.cns.value/5)+indice(character.stats.com.value));
    character.sf.sum = character.sf.base + character.sf.bonus;

    // instabilité
    character.instability = Math.floor(character.sf.sum/4)

    // total : [initiale + archétype] - [magie - mod combat] = total final

        for(let i = 0 ; i < keys.length ; i++) {
            let property = findPropertyByName(character, keys[i])
            character.sum.sum12 += property.value;
        }

    character.sum.resultBeforeMagic = 
                    (character.sum.rollrace + 
                    character.sum.archetype) - 
                    (character.stats.mag.value - 
                    character.sum.comDecrease) ;

}




/**
 * Se lance avant toute génération pour réinitialiser certains paramètres pour éviter certains problèmes d'affichage (ou autre)
 * 
 */

function initCharacter() {

        let character = {
            name : "",
            traits: [],
            race: "",
            archetype: "",
            age: "",
            group: "",
            job: "",

            weapons: [],
            equipment: [],
            armor: "",
            money: "",

            raceID: 0,
            archetypeID: 0,
            groupID: 0,
            jobID: 0,

            pv: {
                base: 0,
                bonus: 0,
                sum: 0,
            },
            sf: {
                base: 0,
                bonus: 0,
                sum: 0,
            },
            initiative: "",
            fate: "",
            sb: "",
            instability: "",
            special: "",
            abilitiesSum: 0,
            abilities: [],

            // caractéristiques :
            stats : {
                com: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                cns: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                dis: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                end: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                for: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                hab: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                mou: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                per: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                soc: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                sur: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                tir: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                vol: {
                    value: 0,
                    roll: 0,
                    race: 0,
                    archetype: 0,
                    magic: 0,
                    title: 0,
                },
                mag:  {
                    value: 0,
                    title: 0,
                }
            },

            

            sum: { 
                race: 0,
                roll: 0,                //10-6
                rollrace: 0,                //10-1
                archetype: 0,           //10-2
                comDecrease: 0,         //10-4
                resultBeforeMagic: 0,   //10-5 (initial + archetype) - (character.magic - magieDue)
                sum12: 0,               //10-3 somme de toutes les caractéristiques
                final: 0,
                
                

            },
    
            tricks: [],
            spells: [],
        }

        return character
    }



















    /**
 * Cette fonction permet de générer des spécialistes, des champions, des héros mineurs et des héros majeurs
 * 
 */

function getPrestigiousTitle() {

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














    
/**
 * Générer les compétences du personnage
 * Un personnage dispose de 120 points à répartir parmi ses 12 caractéristiques (sans compter la magie)
 *
 */

function genererCompetencesTirage(x) {

    let y = 0 // le tableau des caractéristiques    
    let i = 0

            // pour chaque caractéristique on attribue une valeur égale à 2d10
            for (i = 0; i < 12; i++) {

                if (x === 1) {
                    y = (lancerD10()+lancerD10()) 
                } 
                else if (x === 2) {
                    y = aleatoire(5)*5
                }

                valeursCaracteristiques[i] = y  
            }

            for (i = 0 ; i < valeursCaracteristiques.length ; i++) {
                attributsSecondaires[10][6] += valeursCaracteristiques[i]
            }

            // on modifie les variables globales par rapport aux résultats
            for (let i = 0; i < valeursCaracteristiques.length; i++) {
                valeursCaracteristiques[i] += origine[attributsPrincipaux[6]][i+1] ;
                attributsSecondaires[10][1] += valeursCaracteristiques[i]
            }
            
    }
