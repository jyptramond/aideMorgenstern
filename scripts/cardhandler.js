function cardSelector(card) {

        card.addEventListener("click", function(event) {
            
            
            if (this.classList.contains("editing")) {
                this.classList.remove("editing") ;
                console.log(card)
            } else {
                deselectAllCards();
                this.classList.add("editing") ;
                myGroup.editing = this ;
                console.log(card)
            }
        })
    }    


function addCardListener() {
    const add = document.getElementById("add")

    add.addEventListener("click", function(event) {

        let myConfig = initConfig();

        let character = createCharacter(myConfig);

        newCharac = transformCharacter(character);

        displayCard(newCharac);
        cardIdentifier();

    });
}


function displayCard(character) {

    // Création d’une balise dédiée à un sortilège
    const groupSheet = document.getElementById("groupSheet") ;

    const card = document.createElement("article");
    card.classList.add("card-effect", "characterCard");
    
    const name = document.createElement("h3");
    name.innerHTML =    `<input type="text" class='customName transparent' maxlength="40" style='display: inline' value='${character.name}, ${character.job}'></input>
                        <input type="text" class='customSubName transparent' maxlength="40" style='display: inline' value='${character.origin} (${character.archetype})'></input>`


    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `<input type="text" class='customDescription transparent' maxlength="50" value='${character.description}'>`;

    const header = document.createElement("p");
    header.classList.add("header");


    if (character.armor) {
        header.innerHTML =     `<span><strong>COM</strong>:&nbsp;<input type="text" class='customCOM transparent' maxlength="7" style='display: inline' value='${character.com}'>
                                <strong>PV</strong>:&nbsp;<input type="text" class='customPV transparent' maxlength="3" style='display: inline' value='${character.pv}'> / <input type="text" class='customPVMax transparent' maxlength="3" style='display: inline' value='${character.pv}'>
                                <strong>Init</strong>:&nbsp;<input type="text" class='customInit transparent' maxlength="7" style='display: inline' value='${character.init}'></span>
                                <span><strong>Prot</strong>:&nbsp;<input type="text" class='customProt transparent' maxlength="32" value='${character.armor}'></span>
                                <span><strong>DG</strong>:&nbsp;<input type="text" class='customDG transparent' maxlength="32" value='${character.dg}'></span>
                                <span><input type="text" class='customComp transparent' maxlength="35" value='${character.stats}'></span>`
    } else {
        header.innerHTML =     `<span><strong>COM</strong>:&nbsp;<input type="text" class='customCOM transparent' maxlength="7" style='display: inline' value='${character.com}'>
                                <strong>PV</strong>:&nbsp;<input type="text" class='customPV transparent' maxlength="3" style='display: inline' value='${character.pv}'> / <input type="text" class='customPVMax transparent' maxlength="3" style='display: inline' value='${character.pv}'>
                                <strong>Init</strong>:&nbsp;<input type="text" class='customInit transparent' maxlength="7" style='display: inline' value='${character.init}'></span>
                                <span><strong>DG</strong>:&nbsp;<input type="text" class='customDG transparent' maxlength="32" value='${character.dg}'></span>
                                <span><input type="text" class='customComp transparent' maxlength="35" value='${character.stats}'></span>`
    }

    


    // On rattache la balise article a la section Fiche

        groupSheet.appendChild(card);

		card.appendChild(name);
        card.appendChild(description);
        card.appendChild(header);
        cardSelector(card);
}

function cardIdentifier() {

    const cards = document.getElementsByClassName("characterCard") ;

    for (let i = 0 ; i < cards.length ; i++) {
        cards[i].id = `card${i}` ;
    }


}




function deleter() {

    const currentEdit = document.getElementsByClassName("editing") ;
    const groupSheet = document.getElementById("groupSheet") ;

    console.log("super ok")

    if (!currentEdit[0]) {
        groupSheet.innerHTML = "";
    } else {
        currentEdit[0].remove(); ;
    }

    cardIdentifier();
}

function trashListener() {

    const trashButton = document.getElementById("delete-group") ;

    trashButton.addEventListener("click", function(event) {
        console.log("ok")
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
                        console.log("Clicked outside the cards");
                        deselectAllCards();
                }
    });
}




