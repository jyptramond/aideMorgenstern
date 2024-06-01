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

function lancerGeneration() {
            
        // fonction de redondance pour être sûr que tout est vierge à la création d'un personnage
        initialiserGenerateur();
        initialisationWeb();

        // -1 pour aléatoire (archétype, métiers, peuple)
        genererPeuple(configPeuple);
        genererPrenom(configPrenom);
        genererAge();

        //genererCompetences();
        switch (configMode) {
            case 0:
                genererCompetences();
                break;
            case 1:
                genererCompetencesTirage(configMode);
                break;
            case 2:
                genererCompetencesTirage(configMode);
                break;
        }

        ajouterArchetype(configArchetype);
        ajouterMetiers(configGroupe, configCarriere);
        attribuerScoreMagie()
        calculateMagic();

        if (configRole !== 0) {
            giveCharacterMorePower();
        }

        calculerAtouts();
        calculateAttributes();
        calculateEquipment();

        // étapes supplémentaires si le PJ pratique la magie
        if (valeurMagie > 0) {
            grimoireToursDeMagie = genererGrimoire(toursDeMagie);
            grimoireSortilege = genererGrimoire(sortileges);
            //afficherGrimoire()
            selectionnerTours()
            selectionnerSortileges()
        } 





        afficherWeb()


        //verifierCaracteristiques()      
}




/**
 * Cette fonction permet de générer des spécialistes, des champions, des héros mineurs et des héros majeurs
 * 
 */

function giveCharacterMorePower() {

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
    if (valeurMagie <= 10) { 
        x = aleatoire(2)
        if (x === 1) {
            valeursCaracteristiques[0] += howMuch
            modifCaracteristiques[0][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
        } else {
            valeursCaracteristiques[10] += howMuch
            modifCaracteristiques[10][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
        }
    } else {
        valeurMagie += howMuch
        modifCaracteristiques[12][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
    }

    do {
        x = aleatoire(valeursCaracteristiques.length)
    } while (x === 0 || x === 10)
    
    valeursCaracteristiques[x] += howMuch*2
    modifCaracteristiques[x][2] = `${who} (<span class="is-green strong">+${howMuch*2}</span>)`
}


function increaseFightStats(howMuch, who) {
    if (valeurMagie <= 10) {
        valeursCaracteristiques[0] += howMuch
        modifCaracteristiques[0][2] = `${who} (<span class="is-green strong">+${howMuch}</span>)`
        valeursCaracteristiques[3] += howMuch
        modifCaracteristiques[3][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        valeursCaracteristiques[4] += howMuch
        modifCaracteristiques[4][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
        valeursCaracteristiques[10] += howMuch
        modifCaracteristiques[10][2] = `${who}  (<span class="is-green strong">+${howMuch}</span>)`
    } else {
        valeurMagie += howMuch
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

    if (valeurMagie >= 10) {
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
 * Cette fonction s'occupe de tirer un peuple au hasard (si vaut -1)
 * puis détermine le destin et le spécial par rapport au peuple
 *  
 * @param {number} : l'index du peuple. Si aléatoire index vaut -1
 *  
 */

function genererPeuple(peuple) {

    // tirage du peuple
    if (peuple === -2) {
    let y = aleatoire(100)+1

    // sélectionne un peuple selon la répartition statistique des peuples
        for (let i = 0 ; i < repartitionPeuples.length ; i++) {
            if (y >= repartitionPeuples[i][0] && y <= repartitionPeuples[i][1]) {

                switch (i) {
                    case 0 : 
                        peuple = 0
                        break ;
                    case 1 : 
                        peuple = 3
                        break ;
                    case 2 : 
                        peuple = 4
                        break ;
                    case 3 : 
                        peuple = 5
                        break ;
                    case 4 : 
                        peuple = 7
                        break ;
                    case 5 : 
                        peuple = 8
                        break ;
                    case 6 : 
                        peuple = 6
                        break ;
                    case 7 : 
                        peuple = 2
                        break ;
                    case 8 : 
                        peuple = 1
                        break ;
                }
            }
        }
    }

    if (peuple === -1) {
        let y = aleatoire(origine.length)
        peuple = y
    }



    // le destin
    if (peuple === 0 || peuple === 3) {
        attributsSecondaires[5][1] = 3 ;
    } else {
        attributsSecondaires[5][1] = 2 ;
    }

    attributsPrincipaux[6] = peuple
    attributsPrincipaux[1] = origine[peuple][0]
    

    switch (peuple) {

        case 0 :    //humain
            break ;

        case 1 :    //elfe
            attributsSecondaires[6][1] = "Nyctalopie"
            break ;

        case 2 :    //nain
            attributsSecondaires[1][1] += 1 // PV : il faut encore corriger l'implémentation des PV après
            attributsSecondaires[3][1] += 1 // SF : idem
            attributsSecondaires[6][1] = "PV+1, SF+1"
            attributsSecondaires[1][3] = 1 // PV add.
            attributsSecondaires[3][3] = 1 // SF add.
            break ;

        case 3 :    //halfelin
            break ;
            
        case 4 :    //elvin
            attributsSecondaires[6][1] = "Nyctalopie"
            break ;

        case 5 :    //hudvàr
            attributsSecondaires[1][1] += 1 // PV : il faut encore corriger l'implémentation des PV après
            attributsSecondaires[3][1] += 1 // SF : idem
            attributsSecondaires[6][1] = "PV+1, SF+1"
            attributsSecondaires[1][3] = 1 // PV add.
            attributsSecondaires[3][3] = 1 // SF add.
            break ;

        case 6 :    //ogrin
            attributsSecondaires[6][1] = `PV+2,<br>Rés. aux maladies`
            attributsSecondaires[3][1] += 2 // SF : idem
            attributsSecondaires[1][3] = 2 // PV add.
            break ;

        case 7 :    //orquin
            attributsSecondaires[6][1] = `Nyctalopie,<br>Rés. aux maladies`
            break ;

        case 8 :    //morvelin
            attributsSecondaires[6][1] = `Nyctalopie,<br>Rés. aux maladies`
            break ;
    }

    return peuple
}


/**
 * Générer l'âge aléatoire en fonction du peuple'
 *
 */

function genererAge() {

    // attributsPrincipaux[3] = age

    switch (attributsPrincipaux[6]) {
        case 0 :
            //humain
            attributsPrincipaux[3] = aleatoire(33)+12
            break ;
        case 1 :
            //elfe
            attributsPrincipaux[3] = aleatoire(288)+12
            break ;
        case 2 :
            //nain
            attributsPrincipaux[3] = aleatoire(88)+12
            break ;
        case 3 :
            //halfelin
            attributsPrincipaux[3] = aleatoire(68)+12
            break ;
        case 4 :
            //elvin
            attributsPrincipaux[3] = aleatoire(48)+12
            break ;
        case 5 :
            //hudvàr
            attributsPrincipaux[3] = aleatoire(58)+12
            break ;
        case 6 :
            //ogrin
            attributsPrincipaux[3] = aleatoire(28)+12
            break ;
        case 7 :
            //orquin
            attributsPrincipaux[3] = aleatoire(28)+12
            break ;
        case 8 :
            //orquin
            attributsPrincipaux[3] = aleatoire(38)+12
            break ;
        
    }

}





/**
 * Générer les compétences du personnage
 * Un personnage dispose de 120 points à répartir parmi ses 12 caractéristiques (sans compter la magie)
 *
 */

function genererCompetences() {

let sommeCaracteristiques = 0
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
        
            valeursCaracteristiques[i] = y       
            // puis on diminue la pool d'un chiffre équivalent 
            pool -= y 
        }


        for (i = 0; i < 12 ; i++) {
            sommeCaracteristiques += valeursCaracteristiques[i];
          }

        // si la somme des caractéristiques n'est pas égale à 120, on lance une nouvelle création
        if (sommeCaracteristiques !== 120) {
            genererCompetences()
        } else {
            
            shuffle(valeursCaracteristiques)

            for (i = 0 ; i < valeursCaracteristiques.length ; i++) {
                attributsSecondaires[10][6] += valeursCaracteristiques[i]
            }
            
            for (i = 0; i < valeursCaracteristiques.length; i++) {
                valeursCaracteristiques[i] += origine[attributsPrincipaux[6]][i+1] ;
                attributsSecondaires[10][1] += valeursCaracteristiques[i]
              }
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



/**
 * Cette fonction s'occupe de tout ce qui est lié à l'archétype.
 * Elle choisit les modifications à apporter aux caractéristiques lorsque nécessaire avec stringrandom()
 * Elle indique les vices et vertus sélectionne depuis la liste en évitant les doublons
 *  
 * @param {number} : l'index de l'archétype. Si aléatoire index vaut -1
 *  
 */

function ajouterArchetype(i) {

    if (i === -1) {
        i = aleatoire(archetype.length)
    }

let v = []
let y = []

    attributsPrincipaux[2] = archetype[i][0]

    // applique les modificateurs de caractéristiques de l'archétype un par un
    for (let x = 0 ; x < archetype[i][1].length ; x++) {
        v[x] = stringrandom(archetype[i][1][x])
        incrementerCaracteristiques(v[x])
    }

    // tire deux vices et vertus selon l'archétype. Si les deux sont identiques, il y a relance
    while (y[0] === y[1]) {

        // si il y a deux entrées vices et vertus dans le tableau
        if (archetype[i][2][1]) {
            y[0] = stringrandom(archetype[i][2][0])
            y[1] = stringrandom(archetype[i][2][1])
        }
        // si il n'y en a qu'une seule
        else {
            y[0] = stringrandom(archetype[i][2][0])
            y[1] = stringrandom(archetype[i][2][0])
        }
    }

    attributsPrincipaux[4] = y[0]
    attributsPrincipaux[5] = y[1]
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

function incrementerCaracteristiques(str) {

let competence
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

competence = str.slice(0, z)

    for (let i = 0 ; i < nomsCaracteristiques.length ; i++) {
        if (competence === abrevCaracteristiques[i]) {
            if (operateur === "+") {
                //console.log(`la valeur de ${abrevCaracteristiques[i]} a été incrémenté de ${x}`)
                valeursCaracteristiques[i] += Number(x)
                modifCaracteristiques[i][0] = `archétype (<span class="is-green strong">+${x}</span>)`
                attributsSecondaires[10][2] += Number(x)
            }
            else {
                //console.log(`la valeur de ${abrevCaracteristiques[i]} a été décrémenté de ${x}`)
                valeursCaracteristiques[i] -= Number(x) 
                modifCaracteristiques[i][0] = `archétype (<span class="is-red strong">-${x}</span>)`
                attributsSecondaires[10][2] -= Number(x)
            }
        }}

//console.log(competence, operateur, x)

}




/**
 * Cette fonction tire une branche de métiers au sort puis un métier
 * Elle détermine également l'équipement de départ
 * 
 * @param {number} x : la branche de métiers
 * @param {number} xx : le métier
 * 
 */

function ajouterMetiers(x, xx) {
    
    // si tout est aléatoire
    if (x === -2 && xx === -1) {

        let y = aleatoire(100)+1

        // sélectionne un métier selon la répartition statistique des métiers
        for (let i = 0 ; i < repartitionMetiers[attributsPrincipaux[6]].length ; i++) {
            
            if (y >= repartitionMetiers[attributsPrincipaux[6]][i][0] && y <= repartitionMetiers[attributsPrincipaux[6]][i][1]) {
                x = i ;
            }
        }

        // tirer un métier au hasard parmi la branche
        xx = (aleatoire(8))+(8*(x))
    }

    if (x === -1 && xx === -1 ) {
        x = aleatoire(carrieres.length)
        xx = (aleatoire(8))+(8*(x))
    }

   
    // si BRANCHE CHOISE && METIER ALEATOIRE
    if (x >= 0 && xx === -1) {
        xx = (aleatoire(8))+(8*(x))
    }

    // si BRANCHE ALEATOIRE && METIER CHOISI
    if (x < 0 && xx !== -1) {
        x = Math.floor(xx/8)
    }

    // afficher le métier
    attributsSecondaires[7][1] = x
    attributsSecondaires[8][1] = xx
 
}


/**
 * Cette fonction détermine l'équipement du PJ
 * 
 */

function calculateEquipment() {

let i
let x = 0
    
    for (i = 1 ; i < carrieres[attributsSecondaires[7][1]].length ; i++) {

        //générer l'équipement de la branche de métiers
        equipement[i] = faireCalcul(stringrandom(carrieres[attributsSecondaires[7][1]][i]))
        x++
    }

        x++

    for (i = 21 ; i < metiers[attributsSecondaires[8][1]].length ; i++) {

        //générer l'équipement additionnel du métier
        equipement[x] = faireCalcul(stringrandom(metiers[attributsSecondaires[8][1]][i]))
        x++
    }
    equipement.splice(0,1)
}


/**
 * Calculer les atouts.
 * 
 * Un personnage possède autant n atouts = *CNS* - 1 
 * On shuffle les atouts puis on prend les n premiers 
 * 
 */

function calculerAtouts() {

    attributsSecondaires[9][1] = indice(valeursCaracteristiques[1])-1
    let i
    let pjEstUnMage = verifierSiPJMage()
    let x = []

        // si le PJ a un score de magie positif...
        if (valeurMagie > 0 ) {
            // ... et suit une carrière de mage...
            if (pjEstUnMage) {

                calculerAtoutsMagicien();
            } 
            else {

                calculerAtoutsFauxMagicien();   
            } 
        }
        else {
            // SI LE PJ N'EST PAS UN MAGE !
            // remplit un tableau avec les 20 atouts possibles        
            for (let i = 0 ; i < 20 ; i++) {
                x[i] = metiers[attributsSecondaires[8][1]][i+1]
            }
            shuffle(x)
            for (i = 0 ; i < attributsSecondaires[9][1] ; i++) {
                atouts[i] = stringrandom(x[i])
                //console.log(atouts[i])
            } 
        }
}


/**
 * Calculer les atouts pour un magicien
 * 
 * 
 */


function calculerAtoutsMagicien() {

let i
let z = 0
let x = []

        // ... on génère une liste d'atouts qui omet les domaines magiques et...
    for (i = 2 ; i < 20 ; i++) {
        x[i] = metiers[attributsSecondaires[8][1]][i+1]
    }

        // ... son premier atout est un domaine magique...
    atouts[0] = stringrandom(metiers[attributsSecondaires[8][1]][1])


        // on supprime les deux premiers éléments (car vides) de la liste des atouts
    x.splice(0,2)
    shuffle(x)

        // ... et si sa magie est égale à 50 (et qu'il peut avoir 2 atouts) alors il possède un second domaine de magie !
        if (valeurMagie >= 50 && attributsSecondaires[9][1] > 1) {
            
            if (magicienDuoVar === true) {

                // on vérifie qu'il n'y ai pas de doublon
                do {
                    
                    atouts[1] = stringrandom(metiers[attributsSecondaires[8][1]][2])

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

        if (valeurMagie >= 70 && attributsSecondaires[9][1] > 2) {
            do {
               atouts[2]=stringrandom(domaineMagique)
            }
            while (atouts[0] === atouts[2] || atouts[1] === atouts[2])
        z = 3 ;
        } 
    

    // tirer les atouts suivants en vérifiant qu'aucun atout n'est un doublon du premier atout (domaine magique)
    for (i = 0 ; i < attributsSecondaires[9][1]-z ; i++) {

        atouts[i+z] = stringrandom(x[i])

    }

}



/**
 * Calculer les atouts pour un magicien non-professionnel
 * 
 * 
 */


function calculerAtoutsFauxMagicien() {


let x = []
let z = 0

    // si le PJ est MAGE sans suivre une carrière de mage
    atouts[0]=stringrandom(domaineMagique)

     if (valeurMagie >= 50 && attributsSecondaires[9][1] > 1) {
         do {
            atouts[1]=stringrandom(domaineMagique)
         }
         while (atouts[0] === atouts[1])
    z = 2 ;
    } 
    else {
    z = 1 ;
    }

    if (valeurMagie >= 70 && attributsSecondaires[9][1] > 2) {
        do {
           atouts[2]=stringrandom(domaineMagique)
        }
        while (atouts[0] === atouts[2] || atouts[1] === atouts[2])
    z = 3 ;
    } 

    // remplit un tableau avec les 20 atouts possibles        
    for (let i = 0 ; i < 20 ; i++) {
        x[i] = metiers[attributsSecondaires[8][1]][i+1]
    }

     shuffle(x)
     
    for (i = 0 ; i < attributsSecondaires[9][1]-z; i++) {
         atouts[i] = stringrandom(x[i]) // WARNING ? atouts[i+z] = stringrandom(x[i])
        }
    }


/**
 * 
 * Retourne "true" si le PJ est un mage
 * 
 */

function verifierSiPJMage() {

    let x = false
    let i = 0

    for (i = 0 ; i < magicienDuo.length ; i++) {
        if (attributsSecondaires[8][1] === magicienDuo[i]) {
            x = true
            magicienDuoVar = true
        }
    }

    for (i = 0 ; i < magicienMono.length ; i++) {
        if (attributsSecondaires[8][1] === magicienMono[i]) {
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

function attribuerScoreMagie() {

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
                    valeurMagie = magCat1
                }
        }

        // mage catégorie 2
        for (i = 0 ; i < magicienMono.length ; i++) {
                if (attributsSecondaires[8][1] === magicienMono[i]) {
                    pjEstUnMage = 2
                    valeurMagie = magCat2[1]
                }
            }
    
        // mage catégorie 3
        for (i = 0 ; i < magicienDuo.length ; i++) {
                if (attributsSecondaires[8][1] === magicienDuo[i]) {
                    pjEstUnMage = 3
                    valeurMagie = magCat2[1]
                }
            }
}



/**
 * 
 * Calculer la magie d'un personnage selon les différents cas de figure
 * 
 */

function calculateMagic() {

// initiatilisation des catégories de mages
    
let x = 0
let profilApprentissageMagie = [0,0,0,0,0,0,0,0,0,0,0,0]
let i = 0
let ii = 0
let ajusterCombat = 0
let y = []
let poolDeMagie = 0

poolDeMagie = valeurMagie

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
    attributsSecondaires[10][4] = ajusterCombat


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
                if (profilApprentissageMagie[0] > 0 && valeurMagie > profilApprentissageMagie[0]) {
                
                        // DEBUG : console.log("MAGIE/COMBAT init... tentative sur... "+y[i]+" : "+abrevCaracteristiques[y[i]]+" ---> vaut "+profilApprentissageMagie[y[i]])

                        if (profilApprentissageMagie[y[i]] >= 5) {
                            // DEBUG : console.log("correcteur -5 aux points prélevés à "+profilApprentissageMagie[y[i]]+" "+abrevCaracteristiques[y[i]])
                            profilApprentissageMagie[y[i]] -= 5
                            ajusterCombat -= 5
                        } 
                }
                // si les points prélevés en COM sont sup. à 0 et que la MAG est égale aux pts prélevés en COM
                else if (profilApprentissageMagie[0] > 0 && valeurMagie === profilApprentissageMagie[0]) {
                        valeurMagie += profilApprentissageMagie[0]
                        ajusterCombat = 0
                }
        }
    }

    // verifierMagieEtCombat()
    
    // applique le profil d'apprentissage de la magie aux caractéristiques
    for (i = 0 ; i < profilApprentissageMagie.length ; i++) {
        if (profilApprentissageMagie[i] !== 0) {
            // DEBUG : console.log(`"correction de ${profilApprentissageMagie[i]} à la stat ${abrevCaracteristiques[i]}`)
            valeursCaracteristiques[i] -= profilApprentissageMagie[i]
            modifCaracteristiques[i][1] = `magie (<span class="is-red strong">-${profilApprentissageMagie[i]}</span>)`
        }
        else {
            modifCaracteristiques[i][1] = ""
        }
    }
}


/**
 * Générer les sortilèges/tours de magie
 * 
 * @param {string} : la base de données dans laquelle piocher
 * 
 */

function genererGrimoire(mode) {
    
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

            if (valeurMagie >= mode[i][2]) {
                // DEBUG : console.log("... initialisation : recherche d'un sort...")
                    if (mode[i][1][ii] === domaine1) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : 
                        console.log(mode[i][0][0]+"... correspondance avec domaine 1 : inscrit sur le grimoire")
                    } 
                    if (mode[i][1][ii] === domaine2) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : 
                        console.log(mode[i][0][0]+"... correspondance avec domaine 2 : inscrit sur le grimoire")
                    } 
                    if (mode[i][1][ii] === domaine3) {
                        grimoire[x] = mode[i][0][0]
                        x++
                        // DEBUG : 
                        console.log(mode[i][0][0]+"... correspondance avec domaine 3 : inscrit sur le grimoire")
                    } 
            }

        }
    }

    // DEBUG : console.log("mon grimoire (avant removeDuplicates")
    // DEBUG : 
    console.log(grimoire)
    grimoire = removeDuplicates(grimoire)
    // DEBUG : 
    console.log(grimoire)

    return grimoire
}


/**
 * Retirer les doublons d'un array
 * 
 * @param {array} : choix de l'array dans lequel tirer les sorts 
 * 
 */

function selectionnerSortileges() {

shuffle(grimoireSortilege)
// DEBUG : console.log(array)
let x = attributsSecondaires[9][1]+1
// quel est le plus court entre le grimoire et la capacité d'apprentissage
    if (grimoireSortilege.length < x) {
    x = grimoireSortilege.length
    }
    for (let i = 0 ; i < x ; i++) {
        grimSortileges[i] = grimoireSortilege[i]
    }
}

function selectionnerTours() {

    shuffle(grimoireToursDeMagie)
    // DEBUG : console.log(array)
    let x = attributsSecondaires[9][1]+1
    // quel est le plus court entre le grimoire et la capacité d'apprentissage
        if (grimoireToursDeMagie.length < x) {
        x = grimoireToursDeMagie.length
        }
        for (let i = 0 ; i < x ; i++) {
            grimTours[i] = grimoireToursDeMagie[i]
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


function calculateAttributes() {

    let i = 0

    // initiative
    attributsSecondaires[0][1] = indice(valeursCaracteristiques[0])+indice(valeursCaracteristiques[6])+indice(valeursCaracteristiques[7])

    // vitalité
    attributsSecondaires[1][2] = Math.floor((valeursCaracteristiques[4]/5)+(valeursCaracteristiques[3]/5)+indice(valeursCaracteristiques[11]))
    attributsSecondaires[1][1] = attributsSecondaires[1][2]+attributsSecondaires[1][3]

    // seuil de blessure
    attributsSecondaires[2][1] = Math.floor(attributsSecondaires[1][1]/2)

    // sang-froid
    attributsSecondaires[3][2] = Math.floor((valeursCaracteristiques[11]/5)+(valeursCaracteristiques[1]/5)+indice(valeursCaracteristiques[0]))
    attributsSecondaires[3][1] = attributsSecondaires[3][2]+attributsSecondaires[3][3]

    // instabilité
    attributsSecondaires[4][1] = Math.floor(attributsSecondaires[3][1]/4)

    // total : [initiale + archétype] - [magie - mod combat] = total final
    for (i = 0 ; i < valeursCaracteristiques.length ; i++) {
        attributsSecondaires[10][3] += valeursCaracteristiques[i]
    }
    attributsSecondaires[10][5] = (attributsSecondaires[10][1] + attributsSecondaires[10][2]) - (valeurMagie - attributsSecondaires[10][4]) ;

}



/**
 * Se lance avant toute génération pour réinitialiser certains paramètres pour éviter certains problèmes d'affichage (ou autre)
 * 
 */

function initialiserGenerateur() {

    let i = 0

    
        for (i = 0 ; i < valeursCaracteristiques.length ; i++) {
            valeursCaracteristiques[i] =0
        }

    
        // a priori cette partie est rendondante et pourrait être retirée sans altération
        for (i = 0 ; i < modifCaracteristiques.length ; i++) {
            modifCaracteristiques[i][0] = ""
            modifCaracteristiques[i][1] = ""
            modifCaracteristiques[i][2] = ""
        }
        
        valeurMagie = 0
    
        for (i = 0 ; i < grimoireSortilege.length ; i++) {
            grimoireSortilege[i] = ""
        }
    
        for (i = 0 ; i < grimoireToursDeMagie.length ; i++) {
            grimoireToursDeMagie[i] = ""
        }

        atouts = []
        
        equipement = []
        magicienDuoVar = false ;

        grimSortileges= []
        grimTours = []

        attributsSecondaires = [
            /*0*/ ["Initiative : ", 0],                                      
            /*1*/ ["Vitalité : ", 0,0,0],
            /*2*/ ["Seuil de blessure : ", 0],
            /*3*/ ["Sang-Froid : ", 0,0,0],
            /*4*/ ["Instabilité : ", 0],
            /*5*/ ["Destin : ", 0],
            /*6*/ ["Spécial : ", ""],

            /*7*/ ["Branche : ", ""],
            /*8*/ ["Metiers : ", ""],
            /*9*/ ["Atouts : ", 0],
            /*10*/["Total : ",0,0,0,0,0,0]
        ]

        attributsPrincipaux = ["", "", "", 0, "", ""]
    
    }


