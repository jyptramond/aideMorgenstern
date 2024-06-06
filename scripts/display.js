

/** 
 *  Fonction pour afficher les valeurs dans la console
 */

function displayCharacter(character) {

    let i = 0
    console.log(character);
    customHeader(character);
    displayAllStats(character);

    if (character.stats.mag.value > 0) {
        displayMagic(character);
    }

    displayVitals(character.pv, "PV");
    displayVitals(character.sf, "SF");

    displayAttributes(character);

    displayAbilities(character);
    displayEquipment(character);
    
    recapCharacteristics(character)
}


function displayAttributes(character) {
    document.getElementById("vices").textContent = `${character.traits[0]}+1, ${character.traits[1]}+1`
    document.getElementById("CARR").innerHTML = `<span class="strong">${character.job}</span>`
    document.getElementById("INIT").textContent = character.initiative;
    document.getElementById("DEST").textContent = character.fate;
    document.getElementById("SB").textContent = character.sb;
    document.getElementById("INST").textContent = character.instability;
    document.getElementById("SPE").innerHTML = character.special;
}

function displayAllStats(character) {

    for (let i=0 ; i < allkeys.length ; i++) {
        let property = findPropertyByName(character, allkeys[i])
        displayStat(property, abrevCaracteristiques[i])
    }
}





function displayStat(property, tagID) {
    let tag = document.getElementById(tagID);
    tag.textContent = property.value;
    let tagInfo = document.getElementById(tagID+"info")


    let bonusArchetype = displayStatInfo(property.archetype, "archétype");
    let bonusMagic = displayStatInfo(property.magic, "magie");
    let bonusTitle = displayStatInfo(property.title, "titre");

    tagInfo.innerHTML = `${bonusArchetype} ${bonusMagic} ${bonusTitle}`
}
    
function displayStatInfo(property, name) {
    let bonus = "";

    if (property !== 0) {
        property > 0 ?  bonus = `${name} (<span class="is-green strong">+${property}</span>)<br>` : 
                        bonus = `${name} (<span class="is-red strong">${property}</span>)<br>` ;
        }
        return bonus
}



function displayMagic(character) {

    if (valeurMagie >= 10) {
        // afficher le grimoire de tours de magie
        for (i = 0 ; i < grimTours.length ; i++) {
            let nouveauTours = document.createElement("li")
            nouveauTours.textContent = character.tricks[i]
            document.getElementById("tricks-list").appendChild(nouveauTours)
        }
        for (i = 0 ; i < grimSortileges.length ; i++) {
            let nouveauSorts = document.createElement("li")
            nouveauSorts.innerHTML = replaceIco(character.spells[i]);
            document.getElementById("spells-list").appendChild(nouveauSorts)
        }
        }
    
    // afficher la magie
    let baliseMagie = document.getElementsByClassName("magie")

    for (let element of baliseMagie) {
        element.classList.remove("do-not-display")
    }

}


function displayEquipment(character) {
    for (let i = 0 ; i < character.equipment.length ; i++) {   
        let nouvelEquipement = document.createElement("li");
        nouvelEquipement.textContent = character.equipment[i];
        document.getElementById("listeEquipement").appendChild(nouvelEquipement);
    }
    // DEBUG : console.log("equipement.length"+equipement.length)
}


function displayAbilities(character) {
    for (let i = 0 ; i < character.abilitiesSum ; i++) {
        let abilities = document.createElement("li")
        abilities.textContent = character.abilities[i]
        document.getElementById("listeAtouts").appendChild(abilities)
    }
}



function displayVitals(attribute, ID) {
    if (attribute[3] !== 0) {
        document.getElementById(ID+"info").textContent = ` (${attribute.base}+${attribute.bonus})  `;
        document.getElementById(ID).textContent = attribute.sum
    } else {
        document.getElementById(ID).textContent = attribute.sum;
        document.getElementById(ID+"info").innerHTML = ""
    }
}



function recapCharacteristics(character) {

    character.sum.race = character.sum.rollrace - character.sum.roll
    character.sum.final = character.sum.resultBeforeMagic + character.stats.mag.value

    if (character.stats.mag.value > 0) {
        document.getElementById("COMP").innerHTML =     `((${character.sum.race}+
                                                        ${character.sum.roll}+
                                                        ${character.sum.archetype})-
                                                        (${character.magic.value}-
                                                        ${comDecrease}))
                                                        +${character.magic.value}=
                                                        ${character.sum.resultBis}+
                                                        ${character.magic.value}
                                                        (${character.sum.final})`
    }
    else {
        document.getElementById("COMP").innerHTML =     `${character.sum.race}+
                                                        ${character.sum.roll}+
                                                        ${character.sum.archetype}=
                                                        ${character.sum.sum12}
                                                        (${character.sum.final})`
    }

    return character
}


function configFromSelect(srcID, config) {
    let data = parseInt(document.getElementById(srcID).value);
        if (isNaN(data)) {
            data = config;
        } 
    return data
}



/** 
 *  Fonction pour afficher les carrières suivant le choix de groupe
 * 
 */

function displayJobSelection() {

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


function resetDisplay() {

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
            let textarea = document.getElementById('champNotes');
            let text = textarea.value;
            let textSave = text;
            textarea.value =""
        } 

        html2canvas(document.getElementById('content')).then(function(canvas) {
            
            
            if (baliseCocherNotes.checked) {
                drawTextArea(canvas, textarea, text);
            } 

            // Créer un lien pour télécharger l'image
            let link = document.createElement('a');
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




