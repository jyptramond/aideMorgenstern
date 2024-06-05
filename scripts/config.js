function generate() {

    document.getElementById('generer').addEventListener("click", function(event) {

        getConfig();
        createCharacter();
        displayCharacter()
    });
}


function rotateButton(target) {    
    let amount = 0
    document.getElementById(target).addEventListener("click", function(event) {

        let icon = document.querySelector('#'+target+" i")

        amount += 360;

        if (icon) {
            icon.style.transform = `rotate(${amount}deg)`;
        }
        
        
    });
}

function customHeader() {

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


function userInput(target, targetID, inputLength) {
    target = document.getElementById(targetID);
    target.addEventListener('input', function() {
            // Si la longueur de la valeur du champ de texte dépasse 20 caractères, raccourcir la valeur
        if (target.value.length > inputLength) {
            target.value = target.value.slice(0, inputLength);
        }

        customHeader();
    });
}