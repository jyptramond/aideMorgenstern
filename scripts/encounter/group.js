


function renamingGroup() {

    nameDisplay = document.getElementById("nameDisplay") ;

    nameDisplay.value = myGroup.name;

    nameDisplay.addEventListener("input", function(event) {

        let value = getUserInputs("nameDisplay");
        
        if (value) {
            myGroup.name = value ;
        }
        else {
            myGroup.name = 'Mon groupe';
        }


    });
}





function transformCharacter(old) {


    let newCharacter = {
        name: `${old.name.original}, ${old.job}`,
        subname: `${old.origin} (${old.archetype})`,
        id: 0,

        description: getDescription(),

        com: getStrFromCom(old.stats.com.value),
        init: old.initiative,
        roll: old.initiative,
        pvmax: old.pv.sum,
        pv: old.pv.sum,
        armor: old.armor,

        dg: getStrFromWeapon(old.weapons[aleatoire(old.weapons.length)]),
        stats: getStatsForCard(old.stats),
    }

    return newCharacter
}


function rollinitiative(value) {

    let rollDisplay = document.getElementsByClassName("character-roll");
    //const groupSheet = document.getElementById("groupSheet") ;

    for (let i = 0 ; i < myGroup.character.length ; i++) {
        let myRoll = (aleatoire(value))+1 ;
        myGroup.character[i].roll = Number(myGroup.character[i].init) + myRoll ;
        rollDisplay[i].value = String(myGroup.character[i].roll);
    }

    myGroup.character.sort((a, b) => b.roll - a.roll);
    groupSheet.innerHTML = "";
    displayGroupFromObj(myGroup) ;
}


function initListener() {

    let initButton = document.getElementById("initButton");
    
    initButton.addEventListener("click", function(event) {
        let value = getUserInputs("selectDice")
        rollinitiative(value)
    });
}






function getStrFromWeapon(weapon) {

    let str ;
    let index = weapon.indexOf(')')
    let remove = weapon.slice(index+1)
    str = weapon.replace(remove, '')

    return str
}




function getDescription() {
    let descr = descriptions[aleatoire(descriptions.length)];

    return descr
}

function getStatsForCard(stats) {

let array = [];

    for (let i = 0 ; i < allkeys.length ; i++) {

        if (allkeys[i] !== 'com') {
            let property = findPropertyByName(stats, allkeys[i]);
            array.push(`${property.value} (${allkeys[i].toUpperCase()})`) ;
        }
        
       
    }
    array.sort((a, b) => b.localeCompare(a));

    let stat1 = transformStatFromArray(array[0]);
    let stat2 = transformStatFromArray(array[1]);
    let stat3 = transformStatFromArray(array[2]);
    let stat4 = transformStatFromArray(array[3]);

    let myStats = `${stat1} | ${stat2} | ${stat3} | ${stat4}`;

    return myStats
}

function transformStatFromArray(string) {

    let index = string.indexOf('(') ;
    let stat = string.slice(index+1, index+4)
    let value = string.slice(0,2);
    let myNewStr = `${stat} ${value}`;

    return myNewStr ;
}

function getStrFromCom(number) {

    let string = ""
    let bonus = number - 50 ;

    let strBonus = String(bonus)

    if (strBonus.indexOf('-') !== -1) {
        strBonus = strBonus.replace('-','');
    }
    
    if (bonus <= 0) {
        string = `${number}/+${strBonus}`
    } 
    else {
        string = `${number}/-${bonus}`
    }

    return string
}


function displayGroupFromObj(obj) {
    
    //console.log(myGroup)
    //console.log(obj)

    for (let i = 0 ; i < obj.character.length ; i++) {
        
        displayCard(obj.character[i]);
        cardIdentifier(obj.character[i]);
    }
}

function areWeEditing() {

    let edit = document.querySelector(".editing") ;
    if (edit !== null) {
        return true
    }
    else {
        return false
    }

}




function refreshCard() {

    const refreshButton = document.getElementById("generer") ;

    refreshButton.addEventListener('click', function(event) {

        let edit = areWeEditing() ;
        if (edit) {

        let i = getEditedCard();
        let cards = document.getElementsByClassName("characterCard");
        let myConfig = initConfig();
        let character = createCharacter(myConfig);
        newCharac = transformCharacter(character);

        myGroup.character[i] = newCharac ;

        groupSheet.innerHTML = "";
        displayGroupFromObj(myGroup) ;
        cardIdentifier(null);

        cards[i].classList.add("editing");
        }
    });
}




function erasingCards() {
    const eraserButton = document.getElementById("eraser")

    eraserButton.addEventListener("click", function(event) {

        erasing = !erasing;
        eraserButton.classList.toggle("alert")

        
        console.log(erasing) ;

    });
}



function addButtonListener() {
    const add = document.getElementById("add")



    add.addEventListener("click", function(event) {

        const cards = document.getElementsByClassName("characterCard") ;
        if (cards.length < 12) {
            let myConfig = initConfig();
            let character = createCharacter(myConfig);
            newCharac = transformCharacter(character);
            displayCard(newCharac);
            cardIdentifier(newCharac);
        }
    });
}