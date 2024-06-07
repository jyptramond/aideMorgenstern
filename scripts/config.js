function generateButtonListener() {

    document.getElementById('generer').addEventListener("click", function(event) {

        resetDisplay();
        let character = createCharacter();
        displayCharacter(character);
    });
}


function rotateButton(target) {    
    let amount = 0
    document.getElementById(target).addEventListener("click", function(event) {

        let icon = document.querySelector('#'+target+" i")

        amount += 180;

        if (icon) {
            icon.style.transform = `rotate(${amount}deg)`;
        }
        
        
    });
}

function customHeader(character) {



    let baliseIdentite = document.getElementById("identite");

    let userName = getUserInputs('champTexte', character.name) ;
    let userAge = getUserInputs('champAge', character.age) ;



    if (!userName && !champAge) {
        baliseIdentite.innerHTML = `${character.name}, ${character.origin} <span class="sub-h1">(${character.archetype}, ${character.age} ans)</span>`
    }
    else if (userName && champAge) {
        baliseIdentite.innerHTML = `${userName}, ${character.origin} <span class="sub-h1">(${character.archetype}, ${userAge} ans)</span>`
    }
    else if (userName && !champAge) {
        baliseIdentite.innerHTML = `${userName}, ${character.origin} <span class="sub-h1">(${character.archetype}, ${character.age} ans)</span>`
    }
    else if (!userName && champAge) {
        baliseIdentite.innerHTML = `${character.name}, ${character.origin} <span class="sub-h1">(${character.archetype}, ${userAge} ans)</span>`
    }
}


function userInput(character, target, targetID, inputLength) {
    target = document.getElementById(targetID);
    target.addEventListener('input', function() {
            // Si la longueur de la valeur du champ de texte dépasse 20 caractères, raccourcir la valeur
        if (target.value.length > inputLength) {
            target.value = target.value.slice(0, inputLength);
        }

        customHeader(character);
    });
}




/** 
 *  Menu configuration
 * 
 */

function getConfig(config) {

    config.name = configFromSelect('selectName');
    config.archetype = configFromSelect('selectArchetype');
    config.origin = configFromSelect('selectPeuple');
    config.group = configFromSelect('selectGroupe');
    config.mode = configFromSelect('selectMode');
    config.role = configFromSelect('selectRole');

let job = parseInt(document.getElementById('selectCarriere').value);

if (!isNaN(job)) {
    // DEBUG : console.log('valueCarriere:', valueCarriere);
    if (job !== -1) {
        config.job= (8*config.group)+job
    }
    else {
        config.job = -1
    }
} 
}




function configFromSelect(srcID) {
    let data = parseInt(document.getElementById(srcID).value);
    return data
}
