function becomingWizard(character, isWizard) {
    console.log("becomingWizard")
    let magicKnowledge = getMagicKnowledge(character) ;

    let domains = getDomains(character, isWizard);
           
    let abilities = getAbilitiesArray(character)

    getAbilitiesWizard(character, magicKnowledge, abilities, domains)
}
    
    


    /**
     * 
     * Attribue un score de magie selon certaines échelles de valeur :
     * Retourne : 0 si non-mage / 1 si un mage-non-professionnel / 2 si carrière-mi-magie / 3 si carrière full-magie
     * 
     */
    
    function getMagicStat(character) {
    
        let x = 0
        let magCat1 = (aleatoire(10)+1)*5
        let magCat2 = [(aleatoire(10)+1)*5,(aleatoire(10)+1)*5]
        magCat2.sort((a, b) => b - a);
        console.log(magCat2)
        
        let isWizard = checkWizardry(character);

            // mage catégorie 1 (1 chance sur 100)
            if (isWizard === 0) {
                x = aleatoire(100) 
                    if (x === 66) {
                        character.stats.mag.value = magCat1
                    }
            }
    

            if (isWizard > 0) {
                character.stats.mag.value = magCat2[0]
            }
    }



    /**
     * 
     * Retourne le nombre de domaines connus 
     * 0 : n'est pas un mage
     * 1 : possède déjà 1 domaine dans ses atouts de métiers
     * 2 : possède déjà 2 domaines dans ses atouts de métiers
     * 
     */
    
    function checkWizardry(character) {
    
        let isWizard = 0 ;
    
        for (let i = 0 ; i < knowsTwoDomains.length ; i++) {
            if (character.jobID === knowsTwoDomains[i]) {
                isWizard = 2 ;
            }
        }
    
        for (i = 0 ; i < knowsOneDomain.length ; i++) {
            if (character.jobID === knowsOneDomain[i]) {
                isWizard = 1 ;
            }
        }
    
        return isWizard
    }


    function getMagicKnowledge(character) {

        let magicKnowledge = 0;

        if (character.stats.mag.value < 50) {
            magicKnowledge = 1;
        }
        else if (character.stats.mag.value >= 50 && character.stats.mag.value < 70) {
            magicKnowledge = 2;
        }
        else if (character.stats.mag.value >= 70) {
            magicKnowledge = 3;
        }

        if (magicKnowledge > character.abilitiesSum) {
            magicKnowledge = character.abilitiesSum;
        }

        return magicKnowledge
    }


 
    function getAbilitiesWizard(character, magicKnowledge, abilities, domains) {
        for (let i = 0 ; i < magicKnowledge ; i++) {
            character.abilities[i] = domains[i];
        }

        for (i = magicKnowledge ; i < character.abilitiesSum; i++) {
            character.abilities[i] = stringrandom(abilities[i])
        }
    }    



    function getDomains(character, isWizard) {
        let domains = []
        console.log(character.jobID)
        do {
            switch (isWizard) {
                case 0 :
                    domains[0] = stringrandom(domaineMagique)
                    domains[1] = stringrandom(domaineMagique)
                    domains[2] = stringrandom(domaineMagique)
                    break;
                case 1 :
                    domains[0] = stringrandom(jobs[character.jobID].skills[0]);
                    domains[1] = stringrandom(domaineMagique)
                    domains[2] = stringrandom(domaineMagique)
                    break;

                case 2 :
                    domains[0] = stringrandom(jobs[character.jobID].skills[0]);
                    domains[1] = stringrandom(jobs[character.jobID].skills[1]);
                    domains[2] = stringrandom(domaineMagique)
                    break;
            }
        }
        while (domains[0] === domains[1] && domains[1] === domains[2] && domains[2] === domains[0])

        return domains
    }

    /**
     * 
     * Calculer la magie d'un personnage selon les différents cas de figure
     * 
     */
    
    function magicImpact(character) {
    
    // initiatilisation des catégories de mages
        
    let x = 0
    let pool = character.stats.mag.value
    

    let profile = getMagicProfile(pool)
    let correction = profile[0]
    character.sum.comDecrease = correction;

    if (character.sum.comDecrease > 0) {
    profile = correctingCombat(character, profile, correction);
    }

    applyMagicProfile(character, profile);   
    }
    
    

    function getMagicProfile(pool) {
        let profile = [0,0,0,0,0,0,0,0,0,0,0,0]
        // on ne peut prélever plus de 10% dans une caractéristique
            for (let i = 0 ; i < profile.length ; i++) {
                if (pool >= 10) {
                    x = (aleatoire(2)+1)*5
                    profile[i] += x
                    pool -= x
                }
                else if (pool === 5) {
                    x = 5
                    profile[i] += x
                    pool = 0
                }          
            }
        
        shuffle(profile)

        return profile
    }
    
    
    function correctingCombat(character, profile, correction) {

        if (character.stats.mag.value > profile[0]) {
            for (let i = 1 ; i < keys.length ; i++) {
                if (profile[i] >= 5 && correction > 0) {
                    profile[i] -= 5
                    correction -= 5
                } 
                console.log("correction : "+correction);
            }
        }
        else if (character.stats.mag.value === profile[0]) {
                character.stats.mag.value += profile[0]
        }
        return profile
    }


    function applyMagicProfile(character, profile) {
 
        for (let i = 0 ; i < keys.length ; i++) {
    
            if (profile[i] !== 0) {
                let property = findPropertyByName(character, keys[i]);
                property.magic += profile[i];
                property.value -= profile[i];
            }
        }
    }
    




    /**
     * Générer les sortilèges ou les tours de magie
     */
    
    function getBook(character, book) {
        
    let domains = [];
    let filteredArray = [];

        let magicKnowledge = getMagicKnowledge(character);

        for (let i = 0 ; i < magicKnowledge ; i++) {
            domains[i] = extractDomain(character.abilities[i]);
        }
        console.log(domains)

        switch (magicKnowledge) {
            case 1 :
                filteredArray = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && 
                            type.toLowerCase().includes(domains[0].toLowerCase())
                        )
                    );
                break;
            case 2 :
                filteredArray = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && (
                            type.toLowerCase().includes(domains[0].toLowerCase()) || 
                            type.toLowerCase().includes(domains[1].toLowerCase())
                        )
                    )
                );
                break;
            case 3 :
                filteredArray = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && 
                        type.toLowerCase().includes(domains[0].toLowerCase()) || 
                        type.toLowerCase().includes(domains[1].toLowerCase()) ||
                        type.toLowerCase().includes(domains[2].toLowerCase())
                    )
                );
                break;
        }
        
        filteredArray = removeDuplicates(filteredArray) ;
    
        return filteredArray
    }
    


    
    function getPowers(character, property, book) {
    console.log(property)
    shuffle(book);
    // DEBUG : console.log(array)
    let knownItems = character.abilitiesSum + 1 ;
    // quel est le plus court entre le grimoire et la capacité d'apprentissage
        if (book.length < knownItems) {
            knownItems = book.length;
        }
        for (let i = 0 ; i < knownItems ; i++) {
            property.push(book[i]);
        }
    }
    
    