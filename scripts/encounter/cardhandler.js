function cardSelector(card) {

        card.addEventListener("click", function(event) {
            
            if (!this.classList.contains("editing")) {
                deselectAllCards();
                this.classList.add("editing") ;
                myGroup.editing = this ;
            }
        })

        card.addEventListener("focusin", function(event) {
            
            if (!this.classList.contains("editing")) {
                deselectAllCards();
                this.classList.add("editing") ;
                myGroup.editing = this ;
            }
        })

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




function displayCard(character) {

    let haveArmor = false ;

    // Création d’une balise dédiée à un sortilège
    const groupSheet = document.getElementById("groupSheet") ;

    const card = document.createElement("article");
    card.classList.add("card-effect", "characterCard");
    
    const name = document.createElement("h3");
    name.innerHTML =    `<input oninput="validateInputStats(event)" type="text" class='customName transparent' maxlength="30" style='display: inline' value="${character.name}"></input>
                        <input oninput="validateInputStats(event)" type="text" class='customSubName transparent' maxlength="35" style='display: inline' value="${character.subname}"></input>`


    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `<input oninput="validateInputStats(event)" type="text" class='customDescription transparent' maxlength="30" value="${character.description}">`;

    const header = document.createElement("p");
    header.classList.add("header");


    if (character.armor) {
        haveArmor = true ;
        header.innerHTML =     `<span><strong>COM</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customCOM transparent' maxlength="7" style='display: inline' value="${character.com}">
                                <strong>PV</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customPV transparent' maxlength="3" style='display: inline' value='${character.pv}'> / <input type="text" class='customPVMax transparent' maxlength="3" style='display: inline' value='${character.pv}'>
                                <strong>Init</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customInit transparent' maxlength="2" style='display: inline' value='${character.init}'><input oninput="validateInputNumbers(event)" type="text" class='character-roll transparent' maxlength="3" style='display: inline' value="${character.roll}"></span>
                                <span><strong>Prot</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customProt transparent' maxlength="30" value="${character.armor}"></span>
                                <span><strong>DG</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customDG transparent' maxlength="30" value="${character.dg}"></span>
                                <span><input oninput="validateInputStats(event)" type="text" class='customComp transparent' maxlength="40" value="${character.stats}"></span>`
    } else {
        header.innerHTML =     `<span><strong>COM</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customCOM transparent' maxlength="7" style='display: inline' value="${character.com}">
                                <strong>PV</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customPV transparent' maxlength="3" style='display: inline' value='${character.pv}'> / <input type="text" class='customPVMax transparent' maxlength="3" style='display: inline' value='${character.pv}'>
                                <strong>Init</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customInit transparent' maxlength="2" style='display: inline' value="${character.init}"><input oninput="validateInputNumbers(event)" type="text" class='character-roll transparent' maxlength="3" style='display: inline' value="${character.roll}"></span>
                                <span><strong>DG</strong>:&nbsp;<input oninput="validateInputStats(event)" type="text" class='customDG transparent' maxlength="32" value="${character.dg}"></span>
                                <span><input oninput="validateInputStats(event)" type="text" class='customComp transparent' maxlength="40" value="${character.stats}"></span>`
    }

    


    // On rattache la balise article a la section Fiche

        groupSheet.appendChild(card);

		card.appendChild(name);
        card.appendChild(description);
        card.appendChild(header);
        cardSelector(card);
        modifyObject(card, haveArmor);        
}

function cardIdentifier(character) {

    const cards = document.getElementsByClassName("characterCard") ;

    for (let i = 0 ; i < cards.length ; i++) {
        cards[i].id = `card${i}` ;

        if (character) {
            myGroup.character[cards.length-1] = character ;
        }
        myGroup.character[i].id = i ;
        setObjectAsCookie("encounter-cookie", myGroup, 360);
    }
}


function modifyInput(context, classId, saveSpot, target) {
    let custom = context.querySelector(classId) ;

custom.addEventListener("blur", function(event) {

    let i = getEditedCard();
    let cardi = `card${i}`
    let input = getUserInputsFromStr(custom.value) ;
    let id = context.id ;

    if (cardi === id) {
        saveSpot[i][target] = input;
    }

    if (target === 'roll') {
        myGroup.character.sort((a, b) => b.roll - a.roll);
        groupSheet.innerHTML = "";
        displayGroupFromObj(myGroup) ;
    }

    setObjectAsCookie("encounter-cookie", myGroup, 360);
});
}



function modifyObject(context, haveArmor) {

modifyInput(context, ".customName", myGroup.character, "name")
modifyInput(context, ".customSubName", myGroup.character, "subname")
modifyInput(context, ".customDescription", myGroup.character, "description")
modifyInput(context, ".customCOM", myGroup.character, "com")
modifyInput(context, ".customPV", myGroup.character, "pv")
modifyInput(context, ".customPVMax", myGroup.character, "pvmax")
modifyInput(context, ".customInit", myGroup.character, "init")
modifyInput(context, ".customDG", myGroup.character, "dg")
modifyInput(context, ".customComp", myGroup.character, "stats")
modifyInput(context, ".character-roll", myGroup.character, "roll")

if (haveArmor) {
    modifyInput(context, ".customProt", myGroup.character, "armor")
}


}




function getEditedCard() {
    const cards = document.getElementsByClassName("characterCard") ;

    for (let i = 0 ; i < cards.length ; i++) {
        if (cards[i].classList.contains('editing')) {
            //console.log('you edit card n°'+i)
            return i
        }
    }
}




function deleter() {

    let i = getEditedCard();

    myGroup.character.splice(i,1)
    const currentEdit = document.getElementsByClassName("editing") ;
    const groupSheet = document.getElementById("groupSheet") ;


    if (!currentEdit[0]) {
        groupSheet.innerHTML = "";
        myGroup.character = [] ;
    } else {
        currentEdit[0].remove(); ;
    }


    cardIdentifier(null);
    setObjectAsCookie("encounter-cookie", myGroup, 360);
}

function trashListener() {

    const trashButton = document.getElementById("delete-group") ;

    trashButton.addEventListener("click", function(event) {

        deleter();

    });

}




function deselectAllCards() {
    let cards = document.getElementsByClassName("characterCard")
        for (let i = 0 ; i < cards.length ; i++) {
            if (cards[i].classList.contains("editing")) {
                cards[i].classList.remove("editing");
            }
        }
    myGroup.editing = null ;
}



function deselectOnWindow() {
    window.addEventListener("click", function(event) {
        
        let cards = document.getElementsByClassName("characterCard") ;
        let fullWindow = document.getElementById("fullWindow") ;
        let clickedInsideCard = false;

                Array.from(cards).forEach((card) => {
                    if (card.contains(event.target)) {
                        clickedInsideCard = true;
                    }
                });

                if (fullWindow.contains(event.target) && (!clickedInsideCard)) {
                        //console.log("Clicked outside the cards");
                        deselectAllCards();
                }
    });
}




