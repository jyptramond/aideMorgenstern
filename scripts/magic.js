function becomingWizard(character, domainsInJob) {
    let magicScope = checkMagicScope(character) ;

    let domains = getDomains(character, domainsInJob);
           
    let abilities = getAbilitiesArray(character)

    getAbilitiesWizard(character, magicScope, abilities, domains)
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
        
        let domainsInJob = checkDomainsInJob(character);

            // mage catégorie 1 (1 chance sur 100)
            if (domainsInJob === 0) {
                x = aleatoire(100) 
                    if (x === 66) {
                        character.stats.mag.value = magCat1
                    }
            }
    

            if (domainsInJob > 0) {
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
    
    function checkDomainsInJob(character) {
    
        let domainsInJob = 0 ;
    
        for (let i = 0 ; i < knowsTwoDomains.length ; i++) {
            if (character.jobID === knowsTwoDomains[i]) {
                domainsInJob = 2 ;
            }
        }
    
        for (i = 0 ; i < knowsOneDomain.length ; i++) {
            if (character.jobID === knowsOneDomain[i]) {
                domainsInJob = 1 ;
            }
        }
    
        return domainsInJob
    }


    function checkMagicScope(character) {

        let magicScope = 0;

        if (character.stats.mag.value < 50) {
            magicScope = 1;
        }
        else if (character.stats.mag.value >= 50 && character.stats.mag.value < 70) {
            magicScope = 2;
        }
        else if (character.stats.mag.value >= 70) {
            magicScope = 3;
        }

        if (magicScope > character.abilitiesSum) {
            magicScope = character.abilitiesSum;
        }

        return magicScope
    }


 
    function getAbilitiesWizard(character, magicScope, abilities, domains) {
        for (let i = 0 ; i < magicScope ; i++) {
            character.abilities[i] = domains[i];
        }

        for (i = magicScope ; i < character.abilitiesSum; i++) {
            character.abilities[i] = stringrandom(abilities[i])
        }
    }    



    function getDomains(character, domainsInJob) {
        let domains = []
        do {
            switch (domainsInJob) {
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
            //console.log(domains);
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
    


    function findDomains(character) {

        let magicScope = checkMagicScope(character);
        let domains = []

        for (let i = 0 ; i < magicScope ; i++) {
            domains[i] = extractDomain(character.abilities[i]);
        }

        return domains
    }



    /**
     * Générer les sortilèges ou les tours de magie
     */
    
    function getBook(character, book, mode) {
        
    let domains = findDomains(character);
    
    let filteredArray = filterByDomains(character, domains, book)

    console.log(filteredArray);

    if (mode === "spells") {
        filteredArray = filterByDifficulty(character, filteredArray)
    }

    console.log(filteredArray);
    
    filteredArray = removeDuplicates(filteredArray) ;
    
        return filteredArray
    }
    
    function filterByDomains(character, domains, book) {

        let array = [];

        let magicScope = checkMagicScope(character);

        switch (magicScope) {
            case 1 :
                array = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && 
                            type.toLowerCase().includes(domains[0].toLowerCase())
                        )
                    );
                break;
            case 2 :
                array = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && (
                            type.toLowerCase().includes(domains[0].toLowerCase()) || 
                            type.toLowerCase().includes(domains[1].toLowerCase())
                        )
                    )
                );
                break;
            case 3 :
                array = book.filter(array => 
                    Array.isArray(array.type) && array.type.some(type => 
                        typeof type === 'string' && 
                        type.toLowerCase().includes(domains[0].toLowerCase()) || 
                        type.toLowerCase().includes(domains[1].toLowerCase()) ||
                        type.toLowerCase().includes(domains[2].toLowerCase())
                    )
                );
                break;
        }

        return array

    }





    function filterByDifficulty(character, array) {
        return array.filter(spell => (character.stats.mag.value + spell.difficulty) >= 40);
    }

    
    function getPowers(character, property, book) {
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
        property.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    