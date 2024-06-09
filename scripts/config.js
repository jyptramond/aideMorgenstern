function generateButtonListener() {

    document.getElementById('generer').addEventListener("click", function(event) {

        newCharacter();
    });
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 'q') {
            event.preventDefault(); // Prevent the default browser behavior for Ctrl+S
            //console.log('Ctrl+S was pressed');
    
            // Your custom save logic here
            newCharacter();
    
            return false; // Prevent the default browser behavior for Ctrl+S (alternative way)
        }
    });
}

function newCharacter() {
    resetDisplay();
    let character = createCharacter(initConfig());
    displayCharacter(character);
    //console.log(character);
    setObjectAsCookie("character-cookie", character, 360);
    inputListenersLaunch(character, champTexte, "champTexte", 30);
    inputListenersLaunch(character, champAge, "champAge", 5);
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


function getUserInputs(id) {

    const configDOMPurify = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

    let input = DOMPurify.sanitize(document.getElementById(id).value, configDOMPurify);
    return input

}




function inputListenersLaunch(character, target, targetID, inputLength) {
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




function savingCharacter(character) {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault(); // Prevent the default browser behavior for Ctrl+S
            //console.log('Ctrl+S was pressed');

            // Your custom save logic here
            takeScreenshotWeb(character);

            return false; // Prevent the default browser behavior for Ctrl+S (alternative way)
        }
    });
    document.getElementById('save').addEventListener('click', function(event) {
        takeScreenshotWeb(character);
    });
}



function takeScreenshotWeb(character) {

        let baliseCocherNotes = document.getElementById("cocherNotes");
        let textarea;
        let text;

        if (baliseCocherNotes.checked) {
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
            const filename = `${character.name.value}-${character.origin}-${character.archetype}-${character.age.value}-Brigandyne.jpeg`;
            
            link.download = filename;

            document.body.appendChild(link);

            // Déclencher le téléchargement
            link.click();

            // Supprimer l'élément de lien
            document.body.removeChild(link);
        });
    if (textarea) {
        textarea.value = text;
    }
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




function toggleNav() {
    let toggleButton = document.getElementById('toggle-button');
    let navLinks = document.getElementById('nav-links');
    toggleButton.addEventListener("click", function(event) {
        navLinks.classList.toggle('active');
    });
}


function changeScreenRatio() {
    document.getElementById('screen').addEventListener('click', function(event) {

        let fullWindow = document.getElementById('fullWindow');

        if (fullWindow.classList.contains("phoneRatio")) {
            fullWindow.classList.remove("phoneRatio");
            this.innerHTML = `<i class="fa-solid fa-mobile-screen button-size">`
        }
        else {
            fullWindow.classList.add("phoneRatio") ;
            this.innerHTML = `<i class="fa-solid fa-display button-size">`
        }
    });
}

function toggleConfig() {
    let toggleButton = document.getElementById('toggle-button-config');
    let allConfigs = document.getElementsByClassName('toggle');
    
    toggleButton.addEventListener("click", function(event) {
        
        for (let element of allConfigs) {
            //console.log(element)
            element.classList.toggle('active');
        }
        
    });
}