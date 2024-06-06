    /**
     * 
     * Retourne le nombre de domaines connus 
     * 0 : n'est pas un mage
     * 1 : connait un domaine magique
     * 2 : connait deux domaines magiques
     * 
     */
    
    function checkMagic(character) {
    
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

    function checkMagicValue(character) {

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

        return magicKnowledge
    }



function getAbilitiesWizard(character, isWizard) {

    let magicKnowledge = checkMagicValue(character) ;

    switch (isWizard) {
        case 0 : 
            wizard0(character, magicKnowledge);
            break;
        case 1 : 
            wizard1(character, magicKnowledge)
            break;
        case 2 :
            wizard2(character, magicKnowledge)
            break; 
    }
}

 
    
    /**
     * Calculer les atouts pour un magicien qui n'a pas d'atouts magiques disponibles de base
     */
    
    
    function wizard0(character, magicKnowledge) {
    
        let domain1 = "";
        let domain2 = "";
        let domain3 = "";
        

    // sélectionner trois domaines différents

    do {
        domain1 = stringrandom(domaineMagique)
        domain2 = stringrandom(domaineMagique)
        domain3 = stringrandom(domaineMagique)
    }
    while (domain1 === domain2 || domain2 === domain3 || domain3 === domain1)
               
        
        let abilities = getAbilitiesFromData(character)
        
            shuffle(x)
            
        for (let i = 0 ; i < character.abilitiesSum-magicKnowledge; i++) {

            character.abilities[i] = stringrandom(abilities[i])

        }
    }
        
    
        
























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
     * 
     * Attribue un score de magie selon certaines échelles de valeur :
     * Retourne : 0 si non-mage / 1 si un mage-non-professionnel / 2 si carrière-mi-magie / 3 si carrière full-magie
     * 
     */
    
    function getMagicRank(character) {
    
        let x = 0
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
                    character.stats[key].magic = profilApprentissageMagie[i]
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
    