
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////// LES FONCTIONS D'ALÉATOIRE OU DE CALCUL /////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */





function findPropertyByName(obj, targetName) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === targetName) {
                return obj[key];
            }
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                let found = findPropertyByName(obj[key], targetName);
                if (found) {
                    return found;
                }
            }
        }
    }
    return null;
}

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




function rollDices(str) {
    let numberOfDice = 0
    let index = str.indexOf("d10")
    let sum = 0
    // on recherche si la mention 1d10 ou 2d10 existe dans la chaîne de caractère.
    // Cette mention est remplacé par un caractère £ pour mieux le repérer ensuite. On lance les dés associés
    // Attention : cette fonction ne calcule les jets de dés que jusqu'à 9d10

    do {
        sum += lancerD10()
        numberOfDice--
    } 
    while (numberOfDice > 0)

    if (index !== -1) {
        numberOfDice = Number(str.slice(index-1,index))
            //DEBUG : console.log(numberOfDice)
        str = str.replace(`${numberOfDice}`+"d10", `${sum}¤`)
    }

    index = str.indexOf('¤+')

    if (index === -1) {
        str = str.replace('¤', '')
    }


    return str
}


function indiceStat(character, str) {

    let index = str.indexOf("*") ;

    if (index !== -1) {

        let stat = str.slice(index+1,index+4).toLowerCase();
        
        let property = findPropertyByName(character, stat);

        stat = stat.toUpperCase();

        str = str.replace(`*${stat}*`, `§${indice(property.value)}`);

        if (str.indexOf('+§') === -1) {
            str = str.replace(`§`, ``) ;
        }

    }

    return str
}


function weaponsDamage(str) {

    let result = 0;

    let index = str.indexOf('§') ;
    str = str.replace('§','')
    let calcul = str.slice(index, index+3)
    let operator = calcul.slice(1,2);
    let number1 = calcul.slice(0,1);
    let number2 = calcul.slice(2,3);

    if (operator === '+') {
        result = Number(number1) + Number(number2) ;
    }
    else {
        result = Number(number1) - Number(number2) ;
    }

    str = str.replace(calcul, result) ;

    if (result < 0) {
        str = str.replace('+','')
    }

    return str
}


function dicePlusStat(str) {

    let index = str.indexOf('¤') ;

    str = str.replace(`¤+§`, `+`);

    let calcul = str.slice(index-1, index+2)

    let number1 = calcul.slice(0, 1)
    let number2 = calcul.slice(2, 3)

    let result = Number(number1) + Number(number2) ;

    str = str.replace(`${calcul}`,`${result}`);

    return str
}


/** 
 * Cette fonction va calculer les notations des types suivants : "RU+*FOR*+1",//"1d10+*CNS*" ou //"5d10"
 *  
 * @param {string} str : la chaîne de caractère que l'on veut analyser
 */

function translate(character, str) {

    // init des variables nécessaires

    if (str.indexOf('d10') !== -1) {
        str = rollDices(str);
    }

    if (str.indexOf("*") !== -1) {
        str = indiceStat(character, str);
    }

    if (str.indexOf('RU+§') !== -1) {
        str = weaponsDamage(str);
    }

    if (str.indexOf('¤+§') !== -1) {
        str = dicePlusStat(str);
    }


    return str
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



    function extractDomain(str) {
        let start = str.indexOf('(');
        let end = str.indexOf(')');
        
        // Vérifie si les parenthèses ont été trouvées
        if (start !== -1 && end !== -1 && start < end) {
            return str.slice(start + 1, end);
        }
        // Retourne null si les parenthèses ne sont pas trouvées ou dans le mauvais ordre
        return null;
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


