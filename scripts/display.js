function displayCharacteristic(tagID, tagValue,  i) {
    let tag = document.getElementById(tagID);
    tag.textContent = tagValue;
    let tagInfo = document.getElementById(tagID+"info")
    tagInfo.innerHTML = `${modifCaracteristiques[i][0]} ${modifCaracteristiques[i][1]} ${modifCaracteristiques[i][2]}`
}


function displayCharacteristics() {

    for (let i = 0 ; i < 12 ; i++) {
        displayCharacteristic(abrevCaracteristiques[i], valeursCaracteristiques[i], i);
    }
        displayCharacteristic("MAG", valeurMagie, 12);

}


/** 
 *  Fonction pour afficher les valeurs dans la console
 * 
 */

function displayCharacter() {

    let i = 0

    customHeader();
    displayCharacteristics();

    document.getElementById("vices").textContent = `${attributsPrincipaux[4]}+1, ${attributsPrincipaux[5]}+1`

    document.getElementById("CARR").innerHTML = `<span class="strong">${stringrandom(metiers[attributsSecondaires[8][1]][0])}</span>`
    getVitals(attributsSecondaires[1], "PV");
    getVitals(attributsSecondaires[3], "SF");
    document.getElementById("INIT").textContent = attributsSecondaires[0][1]
    document.getElementById("DEST").textContent = attributsSecondaires[5][1]
    document.getElementById("SB").textContent = attributsSecondaires[2][1]
    document.getElementById("INST").textContent = attributsSecondaires[4][1]
    document.getElementById("SPE").innerHTML = attributsSecondaires[6][1]
    recapCharacteristics()

    displayAttributes();
    displayEquipment();

    if (valeurMagie > 0) {
        displayMagic();
    }
}

function displayMagic() {
    if (valeurMagie >= 10) {
        // afficher le grimoire de tours de magie
        for (i = 0 ; i < grimTours.length ; i++) {
            let nouveauTours = document.createElement("li")
            nouveauTours.textContent = grimTours[i]
            document.getElementById("tricks-list").appendChild(nouveauTours)
        }
        for (i = 0 ; i < grimSortileges.length ; i++) {
            let nouveauSorts = document.createElement("li")
            nouveauSorts.innerHTML = replaceIco(grimSortileges[i]);
            document.getElementById("spells-list").appendChild(nouveauSorts)
        }
        }
    
    // afficher la magie
    let baliseMagie = document.getElementsByClassName("magie")

    for (let element of baliseMagie) {
        element.classList.remove("do-not-display")
    }

}


function displayEquipment() {
    for (let i = 0 ; i < equipement.length ; i++) {   
        let nouvelEquipement = document.createElement("li");
        nouvelEquipement.textContent = equipement[i];
        document.getElementById("listeEquipement").appendChild(nouvelEquipement);
    }
    // DEBUG : console.log("equipement.length"+equipement.length)
}


function displayAttributes() {
    for (let i = 0 ; i < atouts.length ; i++) {
        let nouvelAtout = document.createElement("li")
        nouvelAtout.textContent = atouts[i]
        document.getElementById("listeAtouts").appendChild(nouvelAtout)
    }
}



function getVitals(attribute, ID) {
    if (attribute[3] !== 0) {
        document.getElementById(ID).textContent = attribute[1]
        document.getElementById(ID+"info").textContent = ` (${attribute[2]}+${attribute[3]})`
    } else {
        document.getElementById(ID).textContent = attribute[1]
        document.getElementById(ID+"info").innerHTML = ""
    }
}



function recapCharacteristics() {
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
        document.getElementById("COMP").innerHTML = `((${valeurDeBase}+${attributsSecondaires[10][6]}+${attributsSecondaires[10][2]})-(${valeurMagie}-${attributsSecondaires[10][4]}))+${valeurMagie}=${attributsSecondaires[10][3]}+${valeurMagie}(${valeursTotales})`
    }
    else {
        document.getElementById("COMP").innerHTML = `${valeurDeBase}+${attributsSecondaires[10][6]}+${attributsSecondaires[10][2]}=${attributsSecondaires[10][3]}(${attributsSecondaires[10][5]})`
    }
}


function configFromSelect(srcID, config) {
    let data = parseInt(document.getElementById(srcID).value);
        if (isNaN(data)) {
            data = config;
        } 
    return data
}

/** 
 *  Menu configuration
 * 
 */

function getConfig() {

    configPrenom = configFromSelect('selectName', configPrenom);
    configArchetype = configFromSelect('selectArchetype', configArchetype);
    configPeuple = configFromSelect('selectPeuple', configPeuple);
    configGroupe = configFromSelect('selectGroupe', configGroupe);
    configMode = configFromSelect('selectMode', configMode);
    configRole = configFromSelect('selectRole', configRole);

// console.log('configPrenom : '+configPrenom);
// console.log('configArchetype : '+configArchetype);
// console.log('configPeuple : '+configPeuple);
// console.log('configGroupe : '+configGroupe);
// console.log('configMode : '+configMode);
// console.log('configRole : '+configRole);

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


function resetCharacter() {

    document.getElementById("listeAtouts").innerHTML = "";
    document.getElementById("listeEquipement").innerHTML = "";
    document.getElementById("tricks-list").innerHTML = "";
    document.getElementById("spells-list").innerHTML = ""

    baliseMagie = document.getElementsByClassName("magie")

    for (let element of baliseMagie) {
        if (!element.classList.contains("do-not-display")) {
        element.classList.add("do-not-display");
        }
    }
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




