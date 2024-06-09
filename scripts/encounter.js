function configGroupListener() {
    const leader = document.getElementById("leader");
    const minions = document.getElementById("minions");
    const leaderConfig = document.getElementById("leaderConfigSection");
    const minionsConfig = document.getElementById("minionsConfigSection");

    leader.addEventListener("click", function (event) {
        console.log("leader")
        switchGroupConfig(leader, minions, leaderConfig, minionsConfig);

    });

    minions.addEventListener("click", function (event) {
        console.log("minions")
        switchGroupConfig(minions, leader, minionsConfig, leaderConfig);

    });
}


function switchGroupConfig(add, remove, addConfig, removeConfig) {

    if (!add.classList.contains("active")) {
        add.classList.add("active");
        addConfig.classList.remove("do-not-display");
    }

    if (remove.classList.contains("active")) {
        remove.classList.remove("active");
        removeConfig.classList.add("do-not-display")
    }
}

function renamingGroup() {
    let nameBalise = document.getElementById("champGroup") ;
    let nameDisplay = document.getElementById("nameDisplay") ;

    nameBalise.addEventListener('input', function(event) {
    let name = getUserInputs("champGroup") ;
        console.log("ok")
        if (name) {
            nameDisplay.textContent = name ;
        }
        else {
            nameDisplay.textContent = "Mon groupe"
        }

    });
}


function displayLeader(character) {

    // Création d’une balise dédiée à un sortilège
    const groupSheet = document.getElementById("groupSheet") ;

    const card = document.createElement("article");
    card.classList.add("card-effect");
    
    const name = document.createElement("h3");
    name.innerHTML = `${character.name}, ${character.archetype} (${character.job} ${character.origin})`;


    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `<i>${character.description}</i>`;

    const header = document.createElement("p");
    header.classList.add("header");
    header.innerHTML =     `<strong>COM</strong>:&nbsp;${character.com} <strong>PV</strong>:&nbsp;${character.pv}<br>
                                <strong>Prot</strong>:&nbsp;${character.armor ? `${character.armor}` : `0`}<br>
                                <strong>DG</strong>:&nbsp;${character.weapon}<br>
                                <strong>Comp</strong>:&nbsp;${character.stats}`;

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




function initGroupConfig(mode) {

    let config = {
        name: -2,
        archetype: -1,
        origin: -2,
        group: -2,
        job: -1,
        mode: 0,
        role: 0
    } 

    let mode ;

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




    getGroupConfig(mode, config);

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


let character = {
    name: "Jonathan",
    archetype: "Loup",
    job: "Chômeur",
    origin: "Humain",

    description: "particulièrement beau",

    com: "45/+5",
    pv: "18",
    armor : "brigandine (+1)",
    weapon: "couteau RU+1",
    stats: "PER 50  MOU 45  CNS 60"
}

displayLeader(character);
displayLeader(character);
displayLeader(character);
displayLeader(character);
displayLeader(character);
displayLeader(character);
displayLeader(character);
displayLeader(character);

renamingGroup();
configGroupListener();
displayNotes();