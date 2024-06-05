
/** 
 *  Fonction qui s'effectue lorsqu'on appuie sur le bouton de génération
 * 
 */

function launch() {

    document.getElementById('generer').addEventListener("click", function(event) {

        menuConfiguration();
        initiateGeneration();
    });
}


function rotateButton(target) {    
    let amount = 0
    document.getElementById(target).addEventListener("click", function(event) {
        console.log("ok")

        let icon = document.querySelector('#'+target+" i")

        amount += 360;

        if (icon) {
            icon.style.transform = `rotate(${amount}deg)`;
        }
        
        
    });
}


function personnalizeDisplay() {

    let config = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

    let baliseIdentite = document.getElementById("identite");
    let champAge = DOMPurify.sanitize(document.getElementById("champAge").value, config);
    let champTexte = DOMPurify.sanitize(document.getElementById("champTexte").value, config);

    if (!champTexte && !champAge) {
        baliseIdentite.innerHTML = `${attributsPrincipaux[0]}, ${attributsPrincipaux[1]} <span class="sub-h1">(${attributsPrincipaux[2]}, ${attributsPrincipaux[3]} ans)</span>`
    }
    else if (champTexte && champAge) {
        baliseIdentite.innerHTML = `${champTexte}, ${attributsPrincipaux[1]} <span class="sub-h1">(${attributsPrincipaux[2]}, ${champAge} ans)</span>`
    }
    else if (champTexte && !champAge) {
        baliseIdentite.innerHTML = `${champTexte}, ${attributsPrincipaux[1]} <span class="sub-h1">(${attributsPrincipaux[2]}, ${attributsPrincipaux[3]} ans)</span>`
    }
    else if (!champTexte && champAge) {
        baliseIdentite.innerHTML = `${attributsPrincipaux[0]}, ${attributsPrincipaux[1]} <span class="sub-h1">(${attributsPrincipaux[2]}, ${champAge} ans)</span>`
    }


}


/** 
 *  Prénom personnalisé
 * 
 */

// champTexte, "champTexte",30
// champAge, "champAge", 5

function personnalizedInput(target, targetID, inputLength) {
    target = document.getElementById(targetID);
    target.addEventListener('input', function() {
            // Si la longueur de la valeur du champ de texte dépasse 20 caractères, raccourcir la valeur
        if (target.value.length > inputLength) {
            target.value = target.value.slice(0, inputLength);
        }

        personnalizeDisplay();
    });
}


function setCharacteristics(tag, tagID, tagValue, tagInfo, tagInfoID, x) {
    tag = document.getElementById(tagID);
    tag.textContent = tagValue;
    tagInfo = document.getElementById(tagInfoID)
    tagInfo.innerHTML = `${modifCaracteristiques[x][0]} ${modifCaracteristiques[x][1]} ${modifCaracteristiques[x][2]}`
}


function displayAllCharacteristics() {

let baliseCombat, baliseCombatInfo, baliseConnaissances, baliseConnaissancesInfo, baliseDiscretion, baliseDiscretionInfo, 
baliseEndurance, baliseEnduranceInfo, baliseForce, baliseForceInfo, baliseHabilete, baliseHabileteInfo, 
baliseMouvement, baliseMouvementInfo, balisePerception, balisePerceptionInfo, baliseSociabilite, baliseSociabiliteInfo, 
baliseSurvie, baliseSurvieInfo, baliseTir, baliseTirInfo, baliseVolonte, baliseVolonteInfo, baliseMagie, baliseMagieInfo;

setCharacteristics(baliseCombat, "COM", valeursCaracteristiques[0], baliseCombatInfo, "COMinfo", 0);
setCharacteristics(baliseConnaissances, "CNS", valeursCaracteristiques[1], baliseConnaissancesInfo, "CNSinfo", 1);
setCharacteristics(baliseDiscretion, "DIS", valeursCaracteristiques[2], baliseDiscretionInfo, "DISinfo", 2);
setCharacteristics(baliseEndurance, "END", valeursCaracteristiques[3], baliseEnduranceInfo, "ENDinfo", 3);
setCharacteristics(baliseForce, "FOR", valeursCaracteristiques[4], baliseForceInfo, "FORinfo", 4);
setCharacteristics(baliseHabilete, "HAB", valeursCaracteristiques[5], baliseHabileteInfo, "HABinfo", 5);
setCharacteristics(baliseMouvement, "MOU", valeursCaracteristiques[6], baliseMouvementInfo, "MOUinfo", 6);
setCharacteristics(balisePerception, "PER", valeursCaracteristiques[7], balisePerceptionInfo, "PERinfo", 7);
setCharacteristics(baliseSociabilite, "SOC", valeursCaracteristiques[8], baliseSociabiliteInfo, "SOCinfo", 8);
setCharacteristics(baliseSurvie, "SUR", valeursCaracteristiques[9], baliseSurvieInfo, "SURinfo", 9);
setCharacteristics(baliseTir, "TIR", valeursCaracteristiques[10], baliseTirInfo, "TIRinfo", 10);
setCharacteristics(baliseVolonte, "VOL", valeursCaracteristiques[11], baliseVolonteInfo, "VOLinfo", 11);
setCharacteristics(baliseMagie, "MAG", valeurMagie, baliseMagieInfo, "MAGinfo", 12);

}


/** 
 *  Fonction pour afficher les valeurs dans la console
 * 
 */

function displayFullCharacter() {

    let i = 0

    personnalizeDisplay();
    displayAllCharacteristics();

    let baliseVices = document.getElementById("vices")
    baliseVices.textContent = `${attributsPrincipaux[4]}+1, ${attributsPrincipaux[5]}+1`

    let baliseInitiative = document.getElementById("INIT");
    baliseInitiative.textContent = attributsSecondaires[0][1]

    let balisePV = document.getElementById("PV");
    let balisePV2 = document.getElementById("PV2")
if (attributsSecondaires[1][3] !== 0) {
    balisePV.textContent = attributsSecondaires[1][1]
    balisePV2.textContent = ` (${attributsSecondaires[1][2]}+${attributsSecondaires[1][3]})`
} else {
    balisePV.textContent = attributsSecondaires[1][1]
    balisePV2.innerHTML = ""
}

    let baliseSB = document.getElementById("SB");
    baliseSB.textContent = attributsSecondaires[2][1]

    let baliseSF = document.getElementById("SF");
    let baliseSF2 = document.getElementById("SF2")
if (attributsSecondaires[3][3] !== 0) {
    baliseSF.textContent = attributsSecondaires[3][1]
    baliseSF2.textContent = ` (${attributsSecondaires[3][2]}+${attributsSecondaires[3][3]})`
} else {
    baliseSF.textContent = attributsSecondaires[3][1]
    baliseSF2.innerHTML = ""
}


    let baliseInstabilite = document.getElementById("INST");
    baliseInstabilite.textContent = attributsSecondaires[4][1]

    let baliseDestin = document.getElementById("DEST");
    baliseDestin.textContent = attributsSecondaires[5][1]

    let baliseSpecial = document.getElementById("SPE");
    baliseSpecial.innerHTML = attributsSecondaires[6][1]

    let baliseTotal = document.getElementById("COMP")



    // attribut secondaire [10][1] : 120 + profil de répartion du peuple
    // valeur de base = [10][1]-[10][6] : valeur de base
    // attribut secondaire [10][2] : modification apportée par l'archétype
    // attribut secondaire [10][3] : somme de toutes les caractéristiques
    // attribut secondaire [10][4] : magie prélevée sur le combat
    // attribut secondaire [10][5] : issu du calcul suivant : (initial + archétype) - (magie - magie prélevée sur le combat)
    // attributs secondaire[10][6] : pts de compétences sup.

    let valeurDeBase = attributsSecondaires[10][1] - attributsSecondaires[10][6]
    let valeursTotales = attributsSecondaires[10][5] + valeurMagie

    if (valeurMagie > 0) {
    baliseTotal.innerHTML = `((${valeurDeBase}+${attributsSecondaires[10][6]}+${attributsSecondaires[10][2]})-(${valeurMagie}-${attributsSecondaires[10][4]}))+${valeurMagie}=${attributsSecondaires[10][3]}+${valeurMagie}(${valeursTotales})`
    }
    else {
    baliseTotal.innerHTML = `${valeurDeBase}+${attributsSecondaires[10][6]}+${attributsSecondaires[10][2]}=${attributsSecondaires[10][3]}(${attributsSecondaires[10][5]})`
    }



    let baliseCarriere = document.getElementById("CARR");
    baliseCarriere.innerHTML = `<span class="strong">${stringrandom(metiers[attributsSecondaires[8][1]][0])}</span>`


    // afficher les atouts
    // DEBUG : console.log(atouts)

    for (i = 0 ; i < atouts.length ; i++) {
        let baliseAtouts = document.getElementById("listeAtouts")
        let nouvelAtout = document.createElement("li")
        nouvelAtout.textContent = atouts[i]
        baliseAtouts.appendChild(nouvelAtout)
    }

    // afficher l'équipement

    let baliseEquipement = document.getElementById("listeEquipement")
    for (i = 0 ; i < equipement.length ; i++) {   
        let nouvelEquipement = document.createElement("li")
        nouvelEquipement.textContent = equipement[i]
        baliseEquipement.appendChild(nouvelEquipement)
    }
    // DEBUG : console.log("equipement.length"+equipement.length)

    let baliseGrimoireTours = document.getElementById("listeGrimoireTours")
    let baliseGrimoireSortileges = document.getElementById("listeGrimoireSortileges")
    let baliseTableGrimoire = document.getElementById("spellbook")
    let baliseGrimoireh2 = document.querySelector("#spellbook h2")
    let baliseGrimoireDiv = document.querySelector("#spellbook div")
    baliseGrimoireTours.classList.remove("do-not-display")
    baliseGrimoireSortileges.classList.remove("do-not-display")
    baliseTableGrimoire.classList.remove("do-not-display")
    baliseGrimoireh2.classList.remove("do-not-display")
    baliseGrimoireDiv.classList.remove("do-not-display")

    if (valeurMagie >= 10) {
    // afficher le grimoire de tours de magie
    for (i = 0 ; i < grimTours.length ; i++) {
        let nouveauTours = document.createElement("li")
        nouveauTours.textContent = grimTours[i]
        baliseGrimoireTours.appendChild(nouveauTours)
    }
    for (i = 0 ; i < grimSortileges.length ; i++) {
        let nouveauSorts = document.createElement("li")
        nouveauSorts.innerHTML = replaceIco(grimSortileges[i]);
        baliseGrimoireSortileges.appendChild(nouveauSorts)
    }
    } else {
        let baliseTableGrimoire = document.getElementById("spellbook")
        let baliseGrimoireh2 = document.querySelector("#spellbook h2")
        let baliseGrimoireDiv = document.querySelector("#spellbook div")
        baliseGrimoireTours.classList.add("do-not-display")
        baliseGrimoireSortileges.classList.add("do-not-display")
        baliseTableGrimoire.classList.add("do-not-display")
        baliseGrimoireh2.classList.add("do-not-display")
        baliseGrimoireDiv.classList.add("do-not-display")
    }

    // afficher la magie
    let baliseAfficherMagie = document.getElementsByClassName("magie")

    if (valeurMagie > 0) {
        for (i = 0 ; i < baliseAfficherMagie.length ; i++) {
        baliseAfficherMagie[i].classList.remove("do-not-display-magie")
        }
    } else {
        for (i = 0 ; i < baliseAfficherMagie.length ; i++) {
            baliseAfficherMagie[i].classList.add("do-not-display-magie")
            }
    }
}


function configFromSelect(target, targetID, newVar) {
    target = document.getElementById(targetID).value;
    target = parseInt(target);
        if (!isNaN(target)) {
            // DEBUG : console.log('valueNom:', valueNom);
            newVar = target;
        } 
}

/** 
 *  Menu configuration
 * 
 */

function menuConfiguration() {

let valueNom, valueArchetype, valuePeuple, valueGroupe, valueMode, valueRole, configPrenom, configArchetype, configPeuple, configGroupe, configMode, configRole, configCarriere;

configFromSelect(valueNom, 'selectName', configPrenom);
configFromSelect(valueArchetype, 'selectArchetype', configArchetype);
configFromSelect(valuePeuple, 'selectPeuple', configPeuple);
configFromSelect(valueGroupe, 'selectGroupe', configGroupe);
configFromSelect(valueMode, 'selectMode', configMode);
configFromSelect(valueRole, 'selectRole', configRole)

let valueCarriere = document.getElementById('selectCarriere').value;
valueCarriere = parseInt(valueCarriere);
if (!isNaN(valueCarriere)) {
    // DEBUG : console.log('valueCarriere:', valueCarriere);
    if (valueCarriere !== -1) {
        configCarriere = (8*configGroupe)+valueCarriere
    }
    else {
        configCarriere = -1
    }
} 
}


/** 
 *  Fonction pour afficher les carrières suivant le choix de groupe
 * 
 */

function afficherSelectionCarriere() {


    document.getElementById('selectGroupe').addEventListener('change', function(event) {

        let baliseGroupe = document.getElementById('selectGroupe')
        let baliseCarriere = document.getElementById('selectCarriere')
        let valueGroupe = document.getElementById('selectGroupe').value;
        valueGroupe = parseInt(valueGroupe);
    
        if (valueGroupe >= 0) {
    
        let newOptions =   `<option value="-1">Aléatoire</option>
                            <option value="0">${metiers[(8*valueGroupe)+0][0]}</option>
                            <option value="1">${metiers[(8*valueGroupe)+1][0]}</option>
                            <option value="2">${metiers[(8*valueGroupe)+2][0]}</option>
                            <option value="3">${metiers[(8*valueGroupe)+3][0]}</option>
                            <option value="4">${metiers[(8*valueGroupe)+4][0]}</option>
                            <option value="5">${metiers[(8*valueGroupe)+5][0]}</option>
                            <option value="6">${metiers[(8*valueGroupe)+6][0]}</option>
                            <option value="7">${metiers[(8*valueGroupe)+7][0]}</option>` 
    
        baliseCarriere.innerHTML = newOptions
        }
        else {
            baliseCarriere.innerHTML = `<option value="-1">Aléatoire</option>`
        }
    
        
        });

}






/** 
 *  Remplacer l'icone squelette par l'icone fontawesome appropriée
 * 
 */

function replaceIco(str) {

    let position = str.indexOf("☠");

    if (position !== -1) {
        str = str.replace("☠",`<i class="fa-solid fa-skull"></i>`);
    }
    return str
} 




/** 
 *  Mode avancé pour afficher tous les calculs
 * 
 */

function displayDetailedView() {

let baliseCocherInfo = document.getElementById("cocherInfo");
baliseCocherInfo.addEventListener("change", function(event) {

    // Récupérer toutes les balises <span> avec la classe "monSpan"
    let balisesExpert = document.getElementsByClassName("expert");

    // Votre logique de traitement ici
    if (baliseCocherInfo.checked) {
        // Parcourir tous les spans récupérés
        for (let i = 0; i < balisesExpert.length; i++) {
        balisesExpert[i].classList.remove("do-not-display")
        }  
    }      
    else {
        for (let i = 0; i < balisesExpert.length; i++) {
        balisesExpert[i].classList.add("do-not-display")
        }
    }
});
}



/** 
 *  Mode avancé pour afficher tous les calculs
 * 
 */

function displayNotes() {

    let baliseCocherNotes = document.getElementById("cocherNotes");
    let baliseDisplayNotes = document.getElementById("notes");

    baliseCocherNotes.addEventListener("change", function(event) {
    
        // Récupérer toutes les balises <span> avec la classe "monSpan"

        // Votre logique de traitement ici
        if (baliseCocherNotes.checked) {
            baliseDisplayNotes.classList.remove("do-not-display")
        }      
        else {
            baliseDisplayNotes.classList.add("do-not-display")
        }
    });
    }
    


/** 
 *  Ré.initialiser avant la création d'un nouveau personnage
 * 
 */


function initialisationWeb() {

    let baliseAtouts = document.getElementById("listeAtouts")
    baliseAtouts.innerHTML = ""

    let baliseEquipement = document.getElementById("listeEquipement")
    baliseEquipement.innerHTML = ""

    let baliseGrimoireTours = document.getElementById("listeGrimoireTours")
    baliseGrimoireTours.innerHTML = ""

    let baliseGrimoireSortileges = document.getElementById("listeGrimoireSortileges")
    baliseGrimoireSortileges.innerHTML = ""

    let baliseTableGrimoire = document.getElementById("spellbook")
    let baliseGrimoireh2 = document.querySelector("#spellbook h2")
    let baliseGrimoireDiv = document.querySelector("#spellbook div")
    baliseGrimoireTours.classList.add("do-not-display")
    baliseGrimoireSortileges.classList.add("do-not-display")
    baliseTableGrimoire.classList.add("do-not-display")
    baliseGrimoireh2.classList.add("do-not-display")
    baliseGrimoireDiv.classList.add("do-not-display")
}



function takeScreenshotWeb() {
    document.getElementById('save').addEventListener('click', function(event) {

        let baliseCocherNotes = document.getElementById("cocherNotes");
        if (baliseCocherNotes.checked) {
            var textarea = document.getElementById('champNotes');
            var text = textarea.value;
            var textSave = text;
            textarea.value =""
        } 

        html2canvas(document.getElementById('content')).then(function(canvas) {
            
            
            if (baliseCocherNotes.checked) {
                drawTextArea(canvas, textarea, text);
            } 

            // Créer un lien pour télécharger l'image
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');

            // Déterminer le nom de fichier basé sur le contenu du textarea et d'autres variables
            var filename;
            if (champTexte.value.length > 0) {
                filename = `Brigandyne-${champTexte.value}-${attributsPrincipaux[1]}.jpeg`;
            } else {
                filename = `Brigandyne-${attributsPrincipaux[0]}-${attributsPrincipaux[1]}.jpeg`;
            }
            link.download = filename;

            document.body.appendChild(link);

            // Déclencher le téléchargement
            link.click();

            // Supprimer l'élément de lien
            document.body.removeChild(link);
        });
        
    textarea.value = text;

    });
}

// Fonction pour dessiner le contenu du textarea sur le canvas avec le retour automatique à la ligne
function drawTextArea(canvas, textarea, text) {
    var ctx = canvas.getContext('2d');
    var lines = text.split('\n');

    // Définir la police et la couleur de remplissage
    ctx.font = ' 16px "Segoe UI"';
    ctx.fillStyle = '#000';
    

    // Obtenir les coordonnées de l'emplacement du champTexte dans le document
    var textareaRect = textarea.getBoundingClientRect();
    var textareaX = textareaRect.left;
    var textareaY = textareaRect.top;

    

// Définir les variables pour le positionnement du texte
var x = textareaX + 10; // Position horizontale relative à l'emplacement du champTexte
var y = textareaY + 20; // Position verticale relative à l'emplacement du champTexte
var maxWidth = textareaRect.width - 20; // Largeur maximale pour le texte en fonction de la largeur du champTexte

// Dessiner chaque ligne de texte avec le retour automatique à la ligne proportionnel à la largeur du champTexte
lines.forEach(function(line) {
    var words = line.split(' ');
    var lineText = '';
    words.forEach(function(word, index) {
        var testLine = lineText + word + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && index > 0) {
            ctx.fillText(lineText, x, y);
            lineText = word + ' ';
            y += 20; // Espacement vertical entre les lignes
        } else {
            lineText = testLine;
        }
    });
    ctx.fillText(lineText, x, y);
    y += 20; // Espacement vertical entre les lignes
});
}




