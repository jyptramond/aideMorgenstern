

    //DEBUG : console.log(numberOfDice)


    // on recherche si la mention +* et RU existent dans la chaîne de caractère
    let position = str.indexOf("+*")
    let calculDegats = str.indexOf("RU")

    // Si oui on déclenche la suite qui remplace une mention du type £+*XXX* par le résultat au calcul associé SI la mention RU était absente
    if (position !== -1)  {
    let competence = str.slice(position+2, position+5)

        for (let i = 0 ; i < abrevCaracteristiques.length ; i++) {

            i = 0;
            for (let key in allkeys) {
                if (character.stats.hasOwnProperty(key)) {


                        // si on calcule on calcule une chaîne d'une type : "1d10+*CNS"
                        if (abrevCaracteristiques[i] === competence && calculDegats === -1) {    
                            //DEBUG: console.log("correspondance (via mode £+*XXX*)"+abrevCaracteristiques[i]+" avec "+competence+" soit i = "+i+" et valeur d10: "+valeurd10+"soit + "+indice(valeursCaracteristiques[i]))
                            finalStr = newStr.replace(`£+*${competence}*`, valeurd10 + indice(key.value))
                        
                        } 

                        // si on calcule les dégâts d'une arme, soit une chaîne du type : "RU+*FOR*+1"
                        else if (abrevCaracteristiques[i] === competence && calculDegats !== -1) {
                            //DEBUG: console.log("correspondance (via mode RU+*XXX*+x)"+abrevCaracteristiques[i]+" avec "+competence+" soit i = "+i)
                                let y = str.slice(position+6, position+8) // l'opérateur et le chiffre
                                finalStr = newStr.replace(`RU+*${competence}*${y}`,"RU+"+eval(`${indice(key.value)}${y}`))
                        }
                    i++;
                }
            }



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