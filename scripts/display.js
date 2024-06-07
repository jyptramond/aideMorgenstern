

/** 
 *  Fonction pour afficher les valeurs dans la console
 */

function displayCharacter(character) {

    let i = 0;
    customHeader(character);
    displayAllStats(character);

    if (character.stats.mag.value > 0) {
        displayMagicItems(character.tricks, "tricks-list");
        displayMagicItems(character.spells, "spells-list");
        displayMagic(character);
    }

    displayVitals(character.pv, "PV");
    displayVitals(character.sf, "SF");

    displayAttributes(character);

    displayAbilities(character);
    displayEquipment(character);

    if (character.weapons.length >0 || character.armor !== "") { 
    displayWeaponsItems(character);
    displayWeapons(character);
    }
    
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
        displayStat(property, allkeys[i])
    }
}



function displayStat(property, tagID) {
    let tag = document.getElementById(tagID);
    tag.textContent = property.value;
    let tagInfo = document.getElementById(tagID+"info")

    let magicInfo = "";
    let archetypeInfo = "";
    if (property.archetype !== undefined) {
        archetypeInfo = displayStatInfo(property.archetype, "archétype");
    }
    if (property.magic !== undefined) {
        magicInfo = displayStatInfo(property.magic, "magie");
    }
    let titleInfo = displayStatInfo(property.title, "titre", property.whatTitle);

    tagInfo.innerHTML = `${archetypeInfo} ${magicInfo} ${titleInfo}`
}
    
function displayStatInfo(property, name, what) {
    let bonus = "";

    if (name !== "titre") {
        if (property !== 0) {
            property > 0 ?  bonus = `${name} (<span class="is-green strong">+${property}</span>)<br>` : 
                            bonus = `${name} (<span class="is-red strong">${property}</span>)<br>` ;
            }
    }
    else {
        if (property !== 0) {
            bonus = `${what} (<span class="is-green strong">+${property}</span>)<br>` ;
        }
    }

        return bonus
}


function displayMagicItems(property, id) {
    // afficher le grimoire de tours de magie
    for (i = 0 ; i < property.length ; i++) {
        let element = document.createElement("li");
        
        if (id === 'spells-list') {
            if (property[i].difficulty >= 0) {
                element.textContent = `${property[i].name} (+${property[i].difficulty})`;
            }
            else {
                element.textContent = `${property[i].name} (${property[i].difficulty})`;
            }
        }
        else {
            element.textContent = `${property[i].name}`;
        }
            
        
        document.getElementById(id).appendChild(element);
    }
}

function displayMagic(character) {
    // afficher la magie
    let baliseMagie = document.getElementsByClassName("magie")

    for (let element of baliseMagie) {
        if (!element.classList.contains("expert")) {
            element.classList.remove("do-not-display");
        }
    }
}


function displayWeaponsItems(character) {
        
    let array = [];
    // afficher le grimoire de tours de magie

    if (character.weapons.length > 0) {
        for (let i = 0 ; i < character.weapons.length ; i++) {
            array.push(character.weapons[i]);
        }
    }

    if (character.armor.length > 0) {
        array.push(character.armor);
    }

    array.sort((a, b) => a - b);

    for (i = 0 ; i < array.length ; i++) {
        let element = document.createElement("li");   
        element.textContent = `${array[i]}`;
        document.getElementById('weapons-list').appendChild(element);
    }     
}


function displayWeapons(character) {
    // afficher les armes
    document.getElementById("weapons").classList.remove("do-not-display");
}


function displayEquipment(character) {

    let nouvelEquipement ;

    character.equipment.sort((a, b) => a.localeCompare(b));

    for (i = 0 ; i < character.equipment.length ; i++) {   
        nouvelEquipement = document.createElement("li");
        nouvelEquipement.textContent = character.equipment[i];
        document.getElementById("listeEquipement").appendChild(nouvelEquipement);
    }
    if (character.money !== "") {
        nouvelEquipement.textContent = character.money;
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

    character.sum.origin = character.sum.rollorigin - character.sum.roll
    character.sum.final = character.sum.resultBeforeMagic + character.stats.mag.value

    if (character.stats.mag.value > 0) {
        document.getElementById("COMP").innerHTML =     `((${character.sum.origin}+
                                                        ${character.sum.roll}+
                                                        ${character.sum.archetype})-
                                                        (${character.stats.mag.value}-
                                                        ${character.sum.comDecrease}))
                                                        +${character.stats.mag.value}=
                                                        ${character.sum.sum12}+
                                                        ${character.stats.mag.value}
                                                        (${character.sum.final})`
    }
    else {
        document.getElementById("COMP").innerHTML =     `${character.sum.origin}+
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

        let baliseCarriere = document.getElementById('selectCarriere')
        let valueGroupe = document.getElementById('selectGroupe').value;
        valueGroupe = parseInt(valueGroupe);
    
        if (valueGroupe >= 0) {
    
        let newOptions =   `<option value="-1">Aléatoire</option>
                            <option value="0">${jobs[(8*valueGroupe)+0].name}</option>
                            <option value="1">${jobs[(8*valueGroupe)+1].name}</option>
                            <option value="2">${jobs[(8*valueGroupe)+2].name}</option>
                            <option value="3">${jobs[(8*valueGroupe)+3].name}</option>
                            <option value="4">${jobs[(8*valueGroupe)+4].name}</option>
                            <option value="5">${jobs[(8*valueGroupe)+5].name}</option>
                            <option value="6">${jobs[(8*valueGroupe)+6].name}</option>
                            <option value="7">${jobs[(8*valueGroupe)+7].name}</option>` 
    
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
    document.getElementById("spells-list").innerHTML = "";
    document.getElementById("weapons-list").innerHTML = "";

    baliseMagie = document.getElementsByClassName("magie")

    let baliseWeapons = document.getElementById("weapons");
    if (!baliseWeapons.classList.contains("do-not-display")) {
        baliseWeapons.classList.add("do-not-display");
    }

    for (let element of baliseMagie) {
        if (!element.classList.contains("do-not-display")) {
        element.classList.add("do-not-display");
        }
    }
}


function getUserInputs(character, id, property) {
    let input = document.getElementById(id).value; 
    if (input === "") {
        input = property;
    } 
    return input
}



function takeScreenshotWeb(character) {

    let userName = getUserInputs(character, 'champTexte', character.name) ;
    let userAge = getUserInputs(character, 'champAge', character.age) ;

    document.getElementById('save').addEventListener('click', function(event) {

        let baliseCocherNotes = document.getElementById("cocherNotes");
        let textarea;
        let text;

        if (baliseCocherNotes.checked) {
            console.log("hello world");
            textarea = document.getElementById('champNotes');
            text = textarea.value;
            textarea.value = "";
        } 


        html2canvas(document.getElementById('content')).then(function(canvas) {
            
            
            if (baliseCocherNotes.checked) {
                drawTextArea(canvas, text);
            } 

            // Créer un lien pour télécharger l'image
            let link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');

            // Déterminer le nom de fichier basé sur le contenu du textarea et d'autres variables
            const filename = `${userName}-${character.origin}-${character.archetype}-${userAge}-Brigandyne.jpeg`;
            
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

// Function to draw the content of the textarea on the canvas with automatic line break
function drawTextArea(canvas, text) {
    let ctx = canvas.getContext('2d');
    let lines = text.split('\n');

    // Define font and fill color
    ctx.font = '16px "Segoe UI"';
    ctx.fillStyle = '#000';

    // Get the absolute position of the textarea on the webpage
    let textarea = document.getElementById('champNotes');
    let textareaRect = textarea.getBoundingClientRect();
    let textareaX = window.scrollX + textareaRect.left; // Absolute X position
    let textareaY = window.scrollY + textareaRect.top;  // Absolute Y position

    // Define variables for text positioning
    let x = textareaX + 20; // Horizontal position relative to textarea
    let y = textareaY + 30; // Vertical position relative to textarea
    let maxWidth = textareaRect.width - 20; // Maximum width for text based on textarea width

    // Draw each line of text with automatic line break proportional to the textarea width
    lines.forEach(function(line) {
        let words = line.split(' ');
        let lineText = '';
        words.forEach(function(word, index) {
            let testLine = lineText + word + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && index > 0) {
                ctx.fillText(lineText, x, y);
                lineText = word + ' ';
                y += 20; // Vertical spacing between lines
            } else {
                lineText = testLine;
            }
        });
        ctx.fillText(lineText, x, y);
        y += 20; // Vertical spacing between lines
    });
}



