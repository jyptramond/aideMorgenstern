
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////// LES FONCTIONS D'ALÉATOIRE OU DE CALCUL /////////////////////////////////////////////////// */
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
            //DEBUG : console.log(numberOfDice)
        newStr = str.replace(`${numberOfDice}`+"d10", '£')

            do 
                {
                    valeurd10 += lancerD10()
                    numberOfDice--
                } while (numberOfDice > 0)
    }

    //DEBUG : console.log(numberOfDice)


    // on recherche si la mention +* et RU existent dans la chaîne de caractère
    let position = str.indexOf("+*")
    let calculDegats = str.indexOf("RU")

    // Si oui on déclenche la suite qui remplace une mention du type £+*XXX* par le résultat au calcul associé SI la mention RU était absente
    if (position !== -1)  {
    let competence = str.slice(position+2, position+5)

        for (let i = 0 ; i < abrevCaracteristiques.length ; i++) {


            // si on calcule on calcule une chaîne d'une type : "1d10+*CNS"
            if (abrevCaracteristiques[i] === competence && calculDegats === -1) {    
                //DEBUG: console.log("correspondance (via mode £+*XXX*)"+abrevCaracteristiques[i]+" avec "+competence+" soit i = "+i+" et valeur d10: "+valeurd10+"soit + "+indice(valeursCaracteristiques[i]))
                    if (i === 12) {
                        finalStr = newStr.replace(`£+*${competence}*`, valeurd10 + indice(valeurMagie))
                    } else {
                        finalStr = newStr.replace(`£+*${competence}*`, valeurd10 + indice(valeursCaracteristiques[i]))
                    } 
            } 

            // si on calcule les dégâts d'une arme, soit une chaîne du type : "RU+*FOR*+1"
            else if (abrevCaracteristiques[i] === competence && calculDegats !== -1) {
                //DEBUG: console.log("correspondance (via mode RU+*XXX*+x)"+abrevCaracteristiques[i]+" avec "+competence+" soit i = "+i)
                    let y = str.slice(position+6, position+8) // l'opérateur et le chiffre
                    finalStr = newStr.replace(`RU+*${competence}*${y}`,"RU+"+eval(`${indice(valeursCaracteristiques[i])}${y}`))
            }
        }
    }

        if (finalStr !== undefined) {
            newStr = finalStr
        } else {
            finalStr = newStr
        }

// On remplace seulement £ par le calcul du résultat du dé
position = finalStr.indexOf("£")

        if (valeurd10 !== 0 && position !== -1) {
            //DEBUG (parfois doublon): console.log("correspondance (via mode xd10) et valeur d10: "+valeurd10)
            finalStr = finalStr.replace('£', valeurd10)
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

function genererPrenom(p) {

    if (p === -1) {
            // choix d'une liste de prénoms
        let x = aleatoire(prenoms.length)
            // choix du masculin ou féminin
        let y = aleatoire(prenoms[x].length)
            // choix du prénom
        let i = aleatoire(prenoms[x][y].length)
    
        attributsPrincipaux[0] = prenoms[x][y][i]
    }

    // choix aléatoire en fonction du peuple
    if (p === -2) {

        switch (attributsPrincipaux[6]) {
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

    attributsPrincipaux[0] = prenoms[x][y][i]
    }


    if (p >= 0) {
            // choix du masculin ou féminin
        let y = aleatoire(prenoms[p].length)
            // choix du prénom
        let i = aleatoire(prenoms[p][y].length)
        
        attributsPrincipaux[0] = prenoms[p][y][i]
    }
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


