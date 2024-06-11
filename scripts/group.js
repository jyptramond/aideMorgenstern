


function renamingGroup() {

    nameDisplay = document.getElementById("nameDisplay") ;

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
        name: old.name.original,
        archetype: old.archetype,
        job: old.job,
        origin: old.origin,
        id: 0,

        input: "",

        description: getDescription(),

        com: getStrFromCom(old.stats.com.value),
        init: old.initiative,
        pvmax: old.pv.sum,
        pv: old.pv.sum,
        armor: old.armor,

        dg: getStrFromWeapon(old.weapons[aleatoire(old.weapons.length)]),
        stats: getStatsForCard(old.stats),
    }

    return newCharacter
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
