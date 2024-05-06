/*********************************************************************************
 * 
 * Ce fichier contient les scripts nécessaires au fonctionnement du générateur
 * 
 * 
 *********************************************************************************/


/** 
 *  Fonction pour tester le programme en version alpha
 * 
 */

function lancerGeneration() {
            
        // fonction de redondance pour être sûr que tout est vierge à la création d'un personnage
        initialiserGenerateur();

        console.log("////////////////////////////////////////////////////////////////////////////")
        console.log("////////////////////////////////////////////////////////////////////////////")
        console.log("////////////////////////////////////////////////////////////////////////////")
        genererPrenom();
        
        // -1 pour aléatoire (archétype, métiers, peuple)
        let peuple = genererPeuple(-1)
        genererCompetences(peuple);
        ajouterArchetype(0);
        ajouterMetiers(10, -1, peuple);
        calculerMagie()
        calculerAtouts();
        calculerAttributsSecondaires();
        afficherCaracteristiques();
        afficherEquipement();

        // étapes supplémentaires si le PJ pratique la magie
        if (verifierSiPJMage()) {
            grimoireToursDeMagie = genererListeSortileges(toursDeMagie);
            grimoireSortilege = genererListeSortileges(sortileges);
            //afficherGrimoire()
            console.log("/// Tours de Magie ///")
            tirerGrimoire(grimoireToursDeMagie)
            console.log("/// Sortilège ///")
            tirerGrimoire(grimoireSortilege)
        } 

        

        //verifierCaracteristiques()      
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
    if (peuple === -1) {
        peuple = aleatoire(origine.length)
    }

    // le destin
    if (peuple === 0 || peuple === 3) {
        attributsSecondaires[5][1] = 3 ;
    } else {
        attributsSecondaires[5][1] = 2 ;
    }

    switch (peuple) {

        case 0 :    //humain
            break ;

        case 1 :    //elfe
            attributsSecondaires[6][1] = "Nyctalopie"
            break ;

        case 2 :    //nain
            attributsSecondaires[1][1] += 1 // PV : il faut encore corriger l'implémentation des PV après
            attributsSecondaires[3][1] += 1 // SF : idem
            attributsSecondaires[6][1] = "PV+1 / SF+1"
            attributsSecondaires[1][3] = 1
            attributsSecondaires[3][3] = 1
            break ;

        case 3 :    //halfelin
            break ;
            
        case 4 :    //elvin
            attributsSecondaires[6][1] = "Nyctalopie"
            break ;

        case 5 :    //hudvàr
            attributsSecondaires[1][1] += 1 // PV : il faut encore corriger l'implémentation des PV après
            attributsSecondaires[3][1] += 1 // SF : idem
            attributsSecondaires[6][1] = "PV+1 / SF+1"
            attributsSecondaires[1][3] = 1
            attributsSecondaires[3][3] = 1
            break ;

        case 6 :    //ogrin
            attributsSecondaires[6][1] = "PV+2, Résistance aux maladies"
            attributsSecondaires[3][1] += 2 // SF : idem
            attributsSecondaires[3][2] = 2
            break ;

        case 7 :    //orquin
            attributsSecondaires[6][1] = "Nyctalopie, Résistance aux maladies"
            break ;

        case 8 :    //morvelin
            attributsSecondaires[6][1] = "Nyctalopie, Résistance aux maladies"
            break ;
    }

// attributsSecondaires[6][1] = SPÉCIAL



    return peuple
}





/**
 * Générer les caractéristiques du personnage et tire au sort le peuple s'il n'est pas préselectionné 
 * Un personnage dispose de 120 points à répartir parmi ses 12 caractéristiques (sans compter la magie)
 * 
 * @param {string}
 * @param {string} 
 *
 */

function genererCompetences(peuple) {

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


        for (let i = 0; i < 12 ; i++) {
            sommeCaracteristiques += valeursCaracteristiques[i];
          }

        // si la somme des caractéristiques n'est pas égale à 120, on lance une nouvelle création
        if (sommeCaracteristiques !== 120) {
            genererCompetences(peuple)
        } else {
            
            // donner l'origine du personnage
            console.log(peuple,"Peuple : "+origine[peuple][0])

            shuffle(valeursCaracteristiques)

            for (let i = 0; i < valeursCaracteristiques.length; i++) {
                valeursCaracteristiques[i] += origine[peuple][i+1] ;
                attributsSecondaires[10][1] += valeursCaracteristiques[i]
              }
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
console.log("Archétype : "+archetype[i][0])


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

    console.log("Vices et vertus : "+y[0]+", "+y[1])

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
                modifCaracteristiques[i][0] = `(+${x})`
                attributsSecondaires[10][2] += Number(x)
            }
            else {
                //console.log(`la valeur de ${abrevCaracteristiques[i]} a été décrémenté de ${x}`)
                valeursCaracteristiques[i] -= Number(x) 
                modifCaracteristiques[i][0] = `(-${x})`
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
 * @param {number} peuple : le peuple/origine du personnange (aléatoire si vaut -1)
 * 
 */

function ajouterMetiers(x, xx, peuple) {
    
    // si tout est aléatoire
    if (x === -1 && xx === -1) {

        let y = aleatoire(100)+1

        // sélectionne un métier selon la répartition statistique des métiers
        for (let i = 0 ; i < repartitionMetiers[peuple].length ; i++) {
            
            if (y >= repartitionMetiers[peuple][i][0] && y <= repartitionMetiers[peuple][i][1]) {
                x = i ;
            }
        }

        // tirer un métier au hasard parmi la branche
        xx = (aleatoire(8))+(8*(x))
    }
   
    // si une branche de métiers est choisie mais que le métier est aléatoire
    if (x !== -1 && xx === -1) {
        xx = (aleatoire(8))+(8*(x))
    }

    // si le métier est choisi mais que la branche de métiers ne l'est pas
    if (x === -1 && xx !== -1) {
        x = Math.floor(xx/8)
    }

    // afficher le métier
    attributsSecondaires[7][1] = x
    attributsSecondaires[8][1] = xx
 
}


/**
 * Cette fonction détermine l'équipement du PJ
 * 
 * 
 */

function afficherEquipement() {

let i

    for (i = 1 ; i < carrieres[attributsSecondaires[7][1]].length ; i++) {

        //générer l'équipement de la branche de métiers
        console.log(faireCalcul(stringrandom(carrieres[attributsSecondaires[7][1]][i])))
    }


    for (i = 21 ; i < metiers[attributsSecondaires[8][1]].length ; i++) {

        //générer l'équipement additionnel du métier
        console.log(faireCalcul(stringrandom(metiers[attributsSecondaires[8][1]][i])))
    }
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
    let x = []
    let i
    let pjEstUnMage = verifierSiPJMage()

    if (pjEstUnMage) {
        // SI LE PJ EST UN MAGE (il faut qu'il possède absolument un domaine magique)
        for (i = 1 ; i < 20 ; i++) {
            x[i] = metiers[attributsSecondaires[8][1]][i+1]
        }

        // enlever l'entrée vide du tableau puis le mélanger
        atouts[0]=stringrandom(metiers[attributsSecondaires[8][1]][1])
        console.log(atouts[0])
        x.splice(0,1)
        shuffle(x)

        // tirer les atouts suivants en vérifiant qu'aucun atout n'est un doublon du premier atout (domaine magique)
        for (i = 1 ; i < attributsSecondaires[9][1] ; i++) {

            atouts[i] = stringrandom(x[i])

            while (atouts[0] === atouts[i]) {
                atouts[i] = stringrandom(x[i])
            }
            console.log(atouts[i])
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
            console.log(atouts[i])
        } 
    }
}


/**
 * 
 * Retourne "true" si le PJ est un mage
 * 
 */

function verifierSiPJMage() {

    let x = false

    for (let i = 0 ; i < magicienDuo.length ; i++) {
        if (attributsSecondaires[8][1] === magicienDuo[i] || attributsSecondaires[8][1] === magicienMono[i]) {
            x = true
        }
    }
    //console.log(x)
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
    let magCat3 = [(aleatoire(10)+1)*5,(aleatoire(10)+1)*5,(aleatoire(10)+1)*5]
    magCat3.sort(function(a, b) {
        return a - b;
        });
    
    // trouver à quel catégorie de mages appartient le PJ
    
        // mage catégorie 1 (1 chance sur 100)
        if (pjEstUnMage === 0) {
            x = aleatoire(100)
                if (x === 99) {
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
                    valeurMagie = magCat3[2]
                }
            }
    return pjEstUnMage
}



/**
 * 
 * Calculer la magie d'un personnage selon les différents cas de figure
 * 
 */

function calculerMagie() {

// initiatilisation des catégories de mages
    
let x = 0
let profilApprentissageMagie = [0,0,0,0,0,0,0,0,0,0,0,0]
let i = 0
let ajusterCombat = 0
let y = 0
let poolDeMagie = 0

attribuerScoreMagie()
poolDeMagie = valeurMagie
// console.log ("valeur de magie : " + valeurMagie)

    // on ne peut prélever plus de 10% dans une caractéristique
        for (i = 0 ; i < profilApprentissageMagie.length ; i++) {
            if (poolDeMagie >= 10) {
                x = (aleatoire(2)+1)*5
                profilApprentissageMagie[i] += x
                poolDeMagie -= x
                //console.log("/////////"+poolDeMagie)
            }
            else if (poolDeMagie === 5) {
                x = 5
                profilApprentissageMagie[i] += x
                poolDeMagie = 0
                //console.log("/////////"+poolDeMagie)
            }          
        }
    
    shuffle(profilApprentissageMagie)
    ajusterCombat = profilApprentissageMagie[0]
    attributsSecondaires[10][4] = ajusterCombat

    while (ajusterCombat > 0) {

        // chaque point prélevé en combat compte double
        // si les points prélevés en combat sont supérieurs à 0 ET que la valeur de combat est inférieure à la valeur de magie
        if (profilApprentissageMagie[0] > 0 && valeurMagie > profilApprentissageMagie[0]) {

                    y = aleatoire(11)+1
                    // DEBUG : console.log("MAGIE/COMBAT init... tentative sur... "+y+" : "+abrevCaracteristiques[y]+" ---> vaut "+profilApprentissageMagie[y])
                                
                if (profilApprentissageMagie[y] >= 5) {
                    // DEBUG : console.log("correcteur -5 à la stat "+profilApprentissageMagie[y]+" "+abrevCaracteristiques[y])
                    profilApprentissageMagie[y] -= 5
                    ajusterCombat -= 5
                } 
        }
        else if (profilApprentissageMagie[0] > 0 && valeurMagie === profilApprentissageMagie[0]) {
                valeurMagie += profilApprentissageMagie[0]
                ajusterCombat = 0
        }
    }

    // verifierMagieEtCombat()
    
    // applique le profil d'apprentissage de la magie aux caractéristiques
    for (i = 0 ; i < profilApprentissageMagie.length ; i++) {
        if (profilApprentissageMagie[i] !== 0) {
            // DEBUG : console.log(`"correction de ${profilApprentissageMagie[i]} à la stat ${abrevCaracteristiques[i]}`)
            valeursCaracteristiques[i] -= profilApprentissageMagie[i]
            modifCaracteristiques[i][1] = `[-${profilApprentissageMagie[i]}]`
        }
        else {
            modifCaracteristiques[i][1] = ""
        }
    }
}


/**
 * Générer les sortilèges/tours de magie
 * 
 * @param {string} : peut-être branché sur toursDeMagie ou sortileges
 * @param {string} : le grimoire à remplir
 * 
 */

function genererListeSortileges(mode) {
    
let domaine1
let domaine2
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

    // cette partie doit chercher dans tous les atouts du personnages !!! (ce n'est pas encore le cas)
    if (atouts[1] != undefined) {
        for (i = 1 ; i < attributsSecondaires[9][1] ; i++) {
                domaine2 = atouts[i].indexOf('Domaine magique (')
            if (domaine2 !== -1) {
                // DEBUG : console.log(atouts[i])
                domaine2 = atouts[i].slice(16)
            }
        }
    }

    // pour chaque tour de magie on vérifie s'il appartient au.x domaine.s magique.s du PJ
    for (i = 0 ; i < mode.length ; i++) {
        for (ii = 0 ; ii < mode[i][1].length ; ii++) {
            if (mode[i][1][ii] === domaine1 || mode[i][1][ii] === domaine2) {
                grimoire[x] = mode[i][0][0]
                // DEBUG : console.log(grimoire[x])
                x++
            }
        }
    }

    grimoire = removeDuplicates(grimoire)
    //console.log(grimoire)

    return grimoire
}


/**
 * Retirer les doublons d'un array
 * 
 * @param {array} : choix de l'array dans lequel tirer les sorts 
 * 
 */

function tirerGrimoire(array) {

shuffle(array)
//console.log(array)

for (let i = 0 ; i < attributsSecondaires[9][1] ; i++) {
    console.log(array[i])
}
}


/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////////// AFFICHAGE //////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */






/** 
 *  Fonction pour afficher les valeurs dans la console
 * 
 */

function afficherCaracteristiques() {

    console.log(0,"Combat : "                 +(valeursCaracteristiques[0])+" "+modifCaracteristiques[0][0]+" "+modifCaracteristiques[0][1])
    console.log(1,"Connaissances : "          +(valeursCaracteristiques[1])+" "+modifCaracteristiques[1][0]+" "+modifCaracteristiques[1][1])
    console.log(2,"Discrétion : "             +(valeursCaracteristiques[2])+" "+modifCaracteristiques[2][0]+" "+modifCaracteristiques[2][1])
    console.log(3,"Endurance : "              +(valeursCaracteristiques[3])+" "+modifCaracteristiques[3][0]+" "+modifCaracteristiques[3][1])
    console.log(4,"Force : "                  +(valeursCaracteristiques[4])+" "+modifCaracteristiques[4][0]+" "+modifCaracteristiques[4][1])
    console.log(5,"Habileté : "               +(valeursCaracteristiques[5])+" "+modifCaracteristiques[5][0]+" "+modifCaracteristiques[5][1])
    console.log(6,"Mouvement : "              +(valeursCaracteristiques[6])+" "+modifCaracteristiques[6][0]+" "+modifCaracteristiques[6][1])
    console.log(7,"Perception : "             +(valeursCaracteristiques[7])+" "+modifCaracteristiques[7][0]+" "+modifCaracteristiques[7][1])
    console.log(8,"Sociabilité : "            +(valeursCaracteristiques[8])+" "+modifCaracteristiques[8][0]+" "+modifCaracteristiques[8][1])
    console.log(9,"Survie : "                 +(valeursCaracteristiques[9])+" "+modifCaracteristiques[9][0]+" "+modifCaracteristiques[9][1])
    console.log(10,"Tir : "                   +(valeursCaracteristiques[10])+" "+modifCaracteristiques[10][0]+" "+modifCaracteristiques[10][1])
    console.log(11,"Volonté : "               +(valeursCaracteristiques[11])+" "+modifCaracteristiques[11][0]+" "+modifCaracteristiques[11][1])
    console.log(12,"Magie : "                 +(valeurMagie))
    
    }




/**
 * Cette fonction sert à calculer les attributs secondaires :
 * Initiative : *COM* + *MOU* + *PER*
 * Vitalité : FOR/5 + END/5 + *VOL*
 * Seuil de blessure: PV/2
 * Sang-Froid : VOL/5 + CNS/5 + *COM*
 * Instabilité: SF/4
 */


function calculerAttributsSecondaires() {
    // initiative
    attributsSecondaires[0][1] = indice(valeursCaracteristiques[0])+indice(valeursCaracteristiques[6])+indice(valeursCaracteristiques[7])
    console.log(attributsSecondaires[0][0],attributsSecondaires[0][1])

    // vitalité
    attributsSecondaires[1][2] = (valeursCaracteristiques[4]/5)+(valeursCaracteristiques[3]/5)+indice(valeursCaracteristiques[11])
    attributsSecondaires[1][1] = attributsSecondaires[1][2]+attributsSecondaires[1][3]
        if (attributsSecondaires[1][3] !== 0) {
            console.log(`${attributsSecondaires[1][0]}${attributsSecondaires[1][1]} (${attributsSecondaires[1][2]}+${attributsSecondaires[1][3]})`)
        } else {
            console.log(attributsSecondaires[1][0],attributsSecondaires[1][1]) 
        }

    // seuil de blessure
    attributsSecondaires[2][1] = Math.floor(attributsSecondaires[1][1]/2)
    console.log(attributsSecondaires[2][0],attributsSecondaires[2][1])

    // sang-froid
    attributsSecondaires[3][2] = (valeursCaracteristiques[11]/5)+(valeursCaracteristiques[1]/5)+indice(valeursCaracteristiques[0])
    attributsSecondaires[3][1] = attributsSecondaires[3][2]+attributsSecondaires[3][3]
    if (attributsSecondaires[3][3] !== 0) {
        console.log(`${attributsSecondaires[3][0]}${attributsSecondaires[3][1]} (${attributsSecondaires[3][2]}+${attributsSecondaires[3][3]})`)
    } else {
        console.log(attributsSecondaires[3][0],attributsSecondaires[3][1]) 
    }

    // instabilité
    attributsSecondaires[4][1] = Math.floor(attributsSecondaires[3][1]/4)
    console.log(attributsSecondaires[4][0],attributsSecondaires[4][1])

    // destin
    console.log(attributsSecondaires[5][0],attributsSecondaires[5][1])

    // spécial
    console.log(attributsSecondaires[6][0],attributsSecondaires[6][1])

    // branche de métiers
    console.log(attributsSecondaires[7][0],attributsSecondaires[7][1], carrieres[attributsSecondaires[7][1]][0])

    // métiers
    console.log(attributsSecondaires[8][0],attributsSecondaires[8][1], metiers[attributsSecondaires[8][1]][0])

    // nombre d'atouts
    console.log(attributsSecondaires[9][0],attributsSecondaires[9][1])

    // total : [initiale + archétype] - [magie - mod combat] = total final
    for (let i = 0 ; i < valeursCaracteristiques.length ; i++) {
        attributsSecondaires[10][3] += valeursCaracteristiques[i]
    }
    attributsSecondaires[10][5] = (attributsSecondaires[10][1] + attributsSecondaires[10][2]) - (valeurMagie - attributsSecondaires[10][4]) ;
    console.log(`${attributsSecondaires[10][0]}[${attributsSecondaires[10][1]} (initial) + ${attributsSecondaires[10][2]} (archetype)] - [${valeurMagie} (magie) - ${attributsSecondaires[10][4]} (prélevé sur combat)] = ${attributsSecondaires[10][3]} (${attributsSecondaires[10][5]})`)

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
        }
        
        valeurMagie = 0
    
        for (i = 0 ; i < grimoireSortilege.length ; i++) {
            grimoireSortilege[i] = ""
        }
    
        for (i = 0 ; i < grimoireToursDeMagie.length ; i++) {
            grimoireToursDeMagie[i] = ""
        }
        
        attributsSecondaires = [
            /*0*/ ["Initiative : ", 0],                                      
            /*1*/ ["Vitalité : ", 0,0,0],
            /*2*/ ["Seuil de blessure : ", 0],
            /*3*/ ["Sang-Froid : ", 0,0,0],
            /*4*/ ["Instabilité : ", 0],
            /*5*/ ["Destin : ", 0],
            /*6*/ ["Spécial : ", 0],

            /*7*/ ["Branche : ", 0],
            /*8*/ ["Metiers : ", 0],
            /*9*/ ["Atouts : ", 0],
            /*10*/["Total : ",0,0,0,0,0]
        ]
    
    }



/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////// LES FONCTIONS D'ALÉATOIRE OU DE CALCUL /////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


/** 
 * 
 * Cette fonction va calculer les notations des types suivants : "RU+*FOR*1","1d10+*CNS" ou "5d10"
 * Attention : cette fonction ne calcule les jets de dés que jusqu'à 9d10
 * 
 * @param {string} str : la chaîne de caractère que l'on veut analyser
 *
 */

function faireCalcul(str) {

    // init des variables nécessaires
    let x = str.indexOf("d10")
    let newStr = str
    let finalStr
    let valeurd10 = 0
    let numberOfDice = 0

    // on recherche si la mention 1d10 ou 2d10 existe dans la chaîne de caractère.
    // Cette mention est remplacé par un caractère £ pour mieux le repérer ensuite. On lance les dés associés

    if (x !== -1) {
        numberOfDice = Number(str.slice(x-1,x))
        newStr = str.replace(`${numberOfDice}`+"d10", '£')

            while (numberOfDice > 0)
                {
                    valeurd10 += lancerD10()
                    numberOfDice--
                }
    }

    // on recherche si la mention +* et RU existent dans la chaîne de caractère
    let position = str.indexOf("+*")
    let calculDegats = str.indexOf("RU")

    // Si oui on déclenche la suite qui remplace une mention du type £+*XXX* par le résultat au calcul associé SI la mention RU était absente
    if (position !== -1)  {
    let competence = str.slice(position+2, position+5)
    
        for (let i = 0 ; i < abrevCaracteristiques.length ; i++) {

            // si on calcule on calcule une chaîne d'une type : "1d10+*CNS"
            if (abrevCaracteristiques[i] === competence && calculDegats === -1) {    
                    if (i = 12) {
                        finalStr = newStr.replace(`£+*${competence}*`, valeurd10 + indice(valeurMagie))
                    } else {
                        finalStr = newStr.replace(`£+*${competence}*`, valeurd10 + indice(valeursCaracteristiques[i]))
                    }
                    
            } 

            // si on calcule les dégâts d'une arme, soit une chaîne du type : "RU+*FOR*+1"
            else if (abrevCaracteristiques[i] === competence && calculDegats !== -1) {
                    let y = str.slice(position+6, position+8) // l'opérateur et le chiffre
                    finalStr = newStr.replace(`RU+*${competence}*${y}`,"RU+"+eval(`${indice(valeursCaracteristiques[i])}${y}`))
            }
        }
    }
    // On remplace seulement £ par le calcul du résultat du dé
    position = newStr.indexOf("£")

        if (finalStr !== undefined) {
            newStr = finalStr
        } else {
            finalStr = newStr
        }

        if (valeurd10 !== 0 && position !== -1) {
            finalStr = newStr.replace('£', valeurd10)
        }

    // Finalement on retourne la valeur modifiée
    return finalStr
    }



/**
 * Cette fonction va lire une chaîne de caractère et retourner un élement aléatoire
 * parmi ceux séparés par des "/" si ils sont présents. 
 * 
 * @param {string} str : la chaîne de caractère que l'on veut analyser
 *
 */

function stringrandom(str) {

    let position = []
    let i = -1
    let x
    let indexStart
    
    // relève où se trouve les "/" dans la chaîne de caractère
    // enregistre dans la variable position les différentes positions des "/"
    // si position[i] = -1 c'est à dire qu'il n'y pas de caractère "/" dans la chaîne de caractère
    
        while (position[i] !== -1) {
            i++
            position[i] = str.indexOf("/", indexStart+1)
            indexStart = position[i]
        }
    
            // la dernière inscription dans le tableau est vierge de toute information. On la supprime
            position.pop();
    
            // le nombre de proposition est +1 le nombre de "/". La fonction aléatoire ne retourne pas le plafond. donc on inscrit +2
            x = aleatoire(position.length+2)
    
        switch (x) {
            case 0:
                // l'aléatoire retourné est la première proposition
                return str.slice(0, position[0])
            
            case position.length+1:
                // l'aléatoire retourné est la dernière proposition
                return str.slice(position[x-2]+1)
    
            default:
                // toute autre proposition [x-2] : retourne le "/" au début de la xème proposition, +1 enlève de "/" de la valeur retournée 
                return str.slice((position[x-2]+1), position[x-1])
        }
    
    }



/**
 * Générer un prénom aléatoire
 * 
 */

function genererPrenom() {
    let x = aleatoire(prenomsMedievaux.length)

    
    console.log("Nom : "+prenomsMedievaux[x])

    return prenomsMedievaux[x]
}


/**
 * Retirer les doublons d'un array
 * 
 * @param {array} 
 * 
 */


function removeDuplicates(array) {
    return array.filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}


/** 
 *  Fonction pour relancer 1d10
 * 
 */

function lancerD10() {

    let i = (Math.floor(Math.random()*10))+1
    
    return i
}


/** 
 *  Fonction pour retourner l'indice d'une compétence :
 *  @param {number} : nom de l'array + son emplacement (ex : valeursCaracteristiques[0])
 * 
 */

function indice(x) {
    let i = Math.trunc((x)/10)
    return i
}


/** 
 * Cette fonction retourne un index aléatoire parmi un ARRAY ou un nombre aléatoire entre et 0 et l'input (exclus)
 * 
 * 
 * @param {number} input : la liste parmi laquelle je veux chercher un élément aléatoire
 */ 

function aleatoire(input) {

    let i
        
    if (Array.isArray(input)) {    
        i = Math.floor(Math.random() * input.length)
        }
    else if (!isNaN(input)) {
        i = Math.floor(Math.random() * input)
    }
        return i
} 


/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////// LES FONCTIONS DE DEBOGAGES //////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */



/**
 * Cette fonction mélange un array avec la méthode Fisher-Yates shuffle
 * 
 * 
 * @param {array} : l'array a mélanger
 *
 */

function shuffle(array) {

    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }







/**
 * Cette fonction permet de vérifier si les scores de caractéristiques + magie produisent un résultat cohérent
 * Il conseillé de l'utiliser avec les réglages peuple(0) et archétype (0) pour plus de clarté
 * 
 */

function verifierCaracteristiques() {

    let y = 0 ;
    for (i = 0 ; i < valeursCaracteristiques.length ; i++) {
        y += valeursCaracteristiques[i]
    }
    let z = y+valeurMagie ;
    let u = x - z
    
    // DEBUG
    console.log("valeur initiale (humain : 430) = "+x+"  ; valeur après magie : "+y+" (valeur attendue : "+z+" / différence : "+u+")")

}




/**
 * Afficher le grimoire (tours de magie et sortilèges)
 * 
 */


function afficherGrimoire() {
    // Pour afficher tout le grimoire disponible pour le PJ
    console.log("TOURS")
        for (i = 0 ; i < grimoireToursDeMagie.length; i++) {
            console.log(grimoireToursDeMagie[i])
        }
    console.log("SORTILEGES")
        for (i = 0 ; i < grimoireSortilege.length ; i++) {
            console.log(grimoireSortilege[i])
        }
}



/**
 * Cette fonction effectue la somme de toutes les altérations aux caractéritiques liés à l'apprentissage de la 
 * magie. On y ajoute la modification de la caractéristique de combat car elle compte double. 
 * Si le calcul ne tombe pas juste, il y a un problème...
 */

function verifierMagieEtCombat() {
        let x = 0
    for (i = 0 ; i < profilApprentissageMagie.length ; i++) {
        x+= profilApprentissageMagie[i]
    }
        // DEBUG
        console.log(x+" + "+profilApprentissageMagie[0]+" = "+valeurMagie)
}

