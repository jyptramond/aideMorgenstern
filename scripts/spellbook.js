function generateMySpellbook() {
    const fullWindow = document.querySelector("#fullWindow");
    const bookTitle = document.createElement("h2");
    bookTitle.innerText = "Mon Grimoire";
    //tricksTitle.classList.add('do-not-display');
    const divSpellbook = document.createElement("div");
    //divTricks.classList.add('do-not-display');
    divSpellbook.id = "mySpellbook";
    

            // On rattache la balise article a la section Fiches
            fullWindow.appendChild(bookTitle);
            fullWindow.appendChild(divSpellbook);
}



function generateTricks(tricks) {
    const searchArea = document.querySelector("#searchArea");
    const tricksTitle = document.createElement("h2");
    tricksTitle.innerText = "TOURS DE MAGIE";
    searchArea.appendChild(tricksTitle);

    for (let y = 0 ; y < tricks.length ; y++) {
        const trick = tricks[y];

        // Création d’une balise dédiée à un sortilège
        const trickCard = document.createElement("article");
        trickCard.classList.add("notsaved");
        
        const nameTrick = document.createElement("h3");
        nameTrick.innerHTML = `${trick.name}`;

        const descriptionTrick = document.createElement("p");
        descriptionTrick.classList.add("description-spell");
        descriptionTrick.innerHTML = `${trick.description}`;

        // On rattache la balise article a la section Fiches
        searchArea.appendChild(trickCard);
            trickCard.appendChild(nameTrick);
            trickCard.appendChild(descriptionTrick);
    }
    }


function generateSpells(spells) {
    const searchArea = document.querySelector("#searchArea");
    const spellTitle = document.createElement("h2");
    spellTitle.innerText = "SORTILÈGES";
    searchArea.appendChild(spellTitle);

for (let i = 0 ; i < spells.length ; i++) {
    const spell = spells[i];

    // Création d’une balise dédiée à un sortilège
    const spellCard = document.createElement("article");
    spellCard.classList.add("notsaved");
    
    const nameSpell = document.createElement("h3");
    nameSpell.innerHTML = `${spell.name} ${spell.isForbidden ? `<i class="fa-solid fa-book-skull"></i>` : ''}`;

    const formulaSpell = document.createElement("p");
    formulaSpell.classList.add("formula");
    formulaSpell.innerHTML = spell.formula;

    const ritualSpell = document.createElement("p");
    ritualSpell.innerHTML = `${spell.isRitual ? `RITUEL` : ''}`
    ritualSpell.classList.add("ritual");

    const headerSpell = document.createElement("p");
    headerSpell.classList.add("header");
    headerSpell.innerHTML =   `<strong>Difficulté</strong>:&nbsp;${spell.difficulty > 0 ? `+${spell.difficulty}` : `${spell.difficulty}`} |   
                                <strong>Durée</strong>:&nbsp;${spell.duration}<br>
                                <strong>Portée</strong>:&nbsp;${spell.range} | 
                                <strong>Résistance</strong>:&nbsp;${spell.resistance} <br>
                                <strong>R+</strong>:&nbsp;${spell.success}`;

    const descriptionSpell = document.createElement("p");
    descriptionSpell.classList.add("description");
    descriptionSpell.innerHTML = `${spell.description}`;



    // On rattache la balise article a la section Fiches
        searchArea.appendChild(spellCard);
        
		spellCard.appendChild(nameSpell);
        spellCard.appendChild(formulaSpell);
        if (ritualSpell.innerHTML !== null) {
            spellCard.appendChild(ritualSpell);
        }
        spellCard.appendChild(headerSpell);
        spellCard.appendChild(descriptionSpell);

}
}

function lockingCard() {
const cards = document.querySelectorAll(".notsaved");

	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", function(event) {
            const clonedElement = cards[i].cloneNode(true);
            clonedElement.classList.add("saved");
            clonedElement.classList.remove("notsaved")
            const saved = document.querySelectorAll(".saved");
            const mySpellbook = document.getElementById("mySpellbook")
            mySpellbook.appendChild(clonedElement);

            clonedElement.addEventListener("click", function(event) {
                clonedElement.remove();
            })

        });   
	}
}



function userFiltering() {
    const userSearch = document.getElementById('userSearch');

    userSearch.addEventListener("input", function(event) {
    
        const filteredTricks = tricks.filter(function (trick) {
            return trick.name.toLowerCase().includes(userSearch.value) || trick.description.toLowerCase().includes(userSearch.value) || trick.type.includes(userSearch.value);
        });

        const filteredSpells = spells.filter(function (spell) {
            return spell.alt.includes(userSearch.value) || spell.name.toLowerCase().includes(userSearch.value) || spell.description.toLowerCase().includes(userSearch.value) || spell.type.includes(userSearch.value);
        });


        document.querySelector("#searchArea").innerHTML = "";
        generateTricks(filteredTricks);
        generateSpells(filteredSpells);
        lockingCard()       
    });
}

userFiltering();
generateTricks(tricks);
generateSpells(spells);
generateMySpellbook();

lockingCard();
