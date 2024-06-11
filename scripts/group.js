function renamingGroup() {
    let nameBalise = document.getElementById("champGroup") ;
    let nameDisplay = document.getElementById("nameDisplay") ;

    nameBalise.addEventListener('input', function(event) {
    let name = getUserInputs("champGroup") ;
        if (name) {
            nameDisplay.textContent = name ;
            myGroup.name = name ;
            
        }
        else {
            nameDisplay.textContent = "Mon groupe"
            myGroup.name =  "Mon groupe";
        }
    });
}


function displayCard(character) {

    // Création d’une balise dédiée à un sortilège
    const groupSheet = document.getElementById("groupSheet") ;

    const card = document.createElement("article");
    card.classList.add("card-effect", "characterCard");
    
    const name = document.createElement("h3");
    name.innerHTML = `<input type="text" class='customName transparent' maxlength="40" style='display: inline' value='${character.name}, ${character.archetype} (${character.job} ${character.origin})'></input>`


    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `<input type="text" class='customDescription transparent' maxlength="50" value='${character.description}'>`;

    const header = document.createElement("p");
    header.classList.add("header");

    header.innerHTML =     `<span><strong>COM</strong>:&nbsp;<input type="text" class='customCOM transparent' maxlength="7" style='display: inline' value='${character.com}'>
                            <strong>PV</strong>:&nbsp;<input type="text" class='customPV transparent' maxlength="3" style='display: inline' value='${character.pv}'> / <input type="text" class='customPVMax transparent' maxlength="3" style='display: inline' value='${character.pv}'></span>
                            <span><i class="fa-solid fa-shield-halved"></i>&nbsp;<input type="text" class='customProt transparent' maxlength="32" value='${character.armor}'></span>
                            <span><strong>DG</strong>:&nbsp;<input type="text" class='customDG transparent' maxlength="32" value='${character.dg}'></span>
                            <span><strong>//</strong>&nbsp;<input type="text" class='customComp transparent' maxlength="35" value='${character.stats}'></span>`


    // On rattache la balise article a la section Fiche

        groupSheet.appendChild(card);

		card.appendChild(name);
        card.appendChild(description);
        card.appendChild(header);
}


function transformCharacter() {
    let character = createCharacter()
}


function addingMember() {
    let character = createCharacter(initGroupConfig());
}






function initGroupConfig() {

    const leader = document.getElementById("leader")
    if (leader.classList.contains("active")) {
        mode = {
            name: "selectName",
            archetype: "selectLeadArchetype",
            origin: "selectLeadPeuple",
            group: "selectLeadGroupe",
            job: "selectLeadCarriere",
            mode: "selectLeadMode",
            role: "selectLeadRole"
        }
    } else {
        mode = {
            name: "selectLeadName",
            archetype: "selectMiArchetype",
            origin: "selectMiPeuple",
            group: "selectMiGroupe",
            job: "selectMiCarriere",
            mode: "selectMiMode",
            role: "selectMiRole"
        }
    }

    return config
}


/** 
 *  Menu configuration
 * 
 */

function getGroupConfig(mode, config) {

    config.name = configFromSelect(mode.name);
    config.archetype = configFromSelect(mode.archetype);
    config.origin = configFromSelect(mode.origin);
    config.group = configFromSelect(mode.group);
    config.mode = configFromSelect(mode.mode);
    config.role = configFromSelect(mode.role);

let job = parseInt(document.getElementById(mode.job).value);

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

