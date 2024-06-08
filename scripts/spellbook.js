let difficultyFilter = -30;
let lastSelectedOptionId = 'ascending';

let myCustomSpellbook = [] ;




function launch() {

    generateMySpellbook();

    //console.log(cookieExists("character-cookie"));
    if (cookieExists("spellbook-cookie")) {
        myCustomSpellbook = getObjectFromCookie("spellbook-cookie") ;

        //console.log(myCustomSpellbook)
        if (myCustomSpellbook[0]) {
            displayCustomSpellbookFromCookie(myCustomSpellbook)
        }
    }

    toggleNav();
    changeScreenRatio();
    toggleConfig();
    userFiltering();
    userTypeFiltering();
    userDifficultyFiltering();
    difficultySorting();
    theFilter();
    displaySpellbook();
    displayTricksAndSpells();
    customizeSpellbookName();
    takeScreenshotWeb();
    deletingCustomSpeelbook();
}

launch();


function deletingCustomSpeelbook() {

    const button = document.getElementById("delete-spellbook");

    button.addEventListener("click", function(event) {
        myCustomSpellbook = [] ;
        const myDiv = document.getElementById("mySpellbook");
        myDiv.innerHTML = "";
        setObjectAsCookie("spellbook-cookie", myCustomSpellbook, 1);
        
        theFilter();
    });
}








function displayCustomSpellbookFromCookie(spellbook) {

    const myDiv = document.getElementById("mySpellbook");
    let savedElement

    for(let i = 0 ; i < spellbook.length ; i++) {

        let elementToFind = spellbook[i] ;
        let type = spellbook[i].slice(0,1) ;
        let foundObject = [...spells, ...tricks].find(obj => obj.id === elementToFind);
        
        if (type === 't') {
            //displaySpell(i)
            savedElement = displayTrick(foundObject, myDiv)
            savedElement.classList.remove("notsaved");
            attachListener(savedElement);
            createRecap(savedElement);
        } 
        else {
            //displayTrick(i)
            savedElement = displaySpell(foundObject, myDiv)
            savedElement.classList.remove("notsaved");
            attachListener(savedElement);
            createRecap(savedElement);
        }

        //console.log(savedElement)



    }
}


function attachListener(savedElement) {
    savedElement.addEventListener("click", function(event) {
        let allRecapElements = document.querySelectorAll("aside ul li");
        for (let element of allRecapElements) {
            if (element.textContent === savedElement.firstChild.textContent) {
                element.remove();
                theFilter();
                break;
            }
        }
        
        removeFromCustomSpellbook(savedElement);
        cardRemove(savedElement);
    })

}


function generateMySpellbook() {
    const content = document.querySelector("#content");
    const bookTitle = document.createElement("h2");
    bookTitle.id = "mySpellbookTitle"
    bookTitle.innerText = "Mon Grimoire";
    const divSpellbook = document.createElement("div");
    divSpellbook.id = "mySpellbook";
    
            // On rattache la balise article a la section Fiches
            content.appendChild(bookTitle);
            content.appendChild(divSpellbook);
}



function generateTricks(tricks) {
    const searchArea = document.querySelector("#searchArea");
    const tricksTitle = document.createElement("h2");
    const tricksDiv = document.createElement("div");
    tricksTitle.innerText = "TOURS DE MAGIE";

    searchArea.appendChild(tricksTitle);
    searchArea.appendChild(tricksDiv)

    tricksTitle.id = "myTricksTitle";
    tricksDiv.id = "myTricksDiv";

    for (let i = 0 ; i < tricks.length ; i++) {

        let trick = tricks[i]

        displayTrick(trick, tricksDiv)
    }
    }



function displayTrick(trick, tricksDiv) {

    // Création d’une balise dédiée à un sortilège
    const trickCard = document.createElement("article");
    trickCard.classList.add("notsaved");
    trickCard.classList.add("card-effect");
    
    const nameTrick = document.createElement("h3");
    nameTrick.innerHTML = `${trick.name}`;

    const descriptionTrick = document.createElement("p");
    descriptionTrick.classList.add("description-spell");
    descriptionTrick.innerHTML = `${trick.description}`;

    // On rattache la balise article a la section Fiches
    
        tricksDiv.appendChild(trickCard);
        trickCard.appendChild(nameTrick);
        trickCard.appendChild(descriptionTrick);

        return trickCard
}




function generateSpells(spells) {
    const searchArea = document.querySelector("#searchArea");
    const spellsTitle = document.createElement("h2");
    const spellsDiv = document.createElement("div");
    spellsTitle.innerText = "SORTILÈGES";

    searchArea.appendChild(spellsTitle);
    searchArea.appendChild(spellsDiv);

    spellsTitle.id = "mySpellsTitle";
    spellsDiv.id = "mySpellsDiv";

for (let i = 0 ; i < spells.length ; i++) {

    let spell = spells[i]

    //console.log(spells[i]);
    displaySpell(spell, spellsDiv)

}
}


function displaySpell(spell, spellsDiv) {

    // Création d’une balise dédiée à un sortilège
    const spellCard = document.createElement("article");
    spellCard.classList.add("notsaved");
    spellCard.classList.add("card-effect");
    
    const nameSpell = document.createElement("h3");
    nameSpell.innerHTML = `${spell.isForbidden ? `${spell.name} <i class="fa-solid fa-book-skull"></i>` : `${spell.name}`}`;

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



    // On rattache la balise article a la section Fiche

        spellsDiv.appendChild(spellCard);

		spellCard.appendChild(nameSpell);
        spellCard.appendChild(formulaSpell);
        if (ritualSpell.innerHTML !== null) {
            spellCard.appendChild(ritualSpell);
        }
        spellCard.appendChild(headerSpell);
        spellCard.appendChild(descriptionSpell);

        return spellCard
}



function savingCard() {
const cards = document.querySelectorAll(".notsaved");

	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", function(event) {

            let isDuplicate = false;
            let savedElements = document.querySelectorAll("#mySpellbook article")
            
            for (let element of savedElements) {
                //console.log(element.firstChild.textContent)
                if (element.firstChild.textContent === cards[i].firstChild.textContent || cards[i].firstChild.innerHTML === '<i class="fa-solid fa-book-bookmark full-size"></i>') {
                    isDuplicate = true;
                }
            }

            if (!isDuplicate) {

                createRecap(cards[i]);
                createClone(cards[i]);
                cardRemove(cards[i]);

            }
        });   
	}
}


function cardRemove(src) {

    let height = src.clientHeight-32;
    //console.log(height);
    src.style.height = height + 'px';
    
    if (src.classList.contains('notsaved')) {
        src.classList.add('addedToSpellbook');
        src.classList.add('fade');
        const print = `<span><i class="fa-solid fa-book-bookmark full-size"></i></span>`;
        src.innerHTML = print ;
        setTimeout(() => {
            src.remove.bind(src);
            theFilter();
        }, 500);
    }
    else {
        src.innerHTML = `<span><i class="fa-solid fa-trash-can full-size"></i></span>`;
        src.classList.add('addedToSpellbook');
        theFilter();
        setTimeout(src.remove.bind(src), 500);
    }
}

function createRecap(src) {
    let spellbookRecap = document.querySelector("aside ul");
    let recapElement = document.createElement("li");
    recapElement.innerText = src.firstChild.textContent;
    spellbookRecap.appendChild(recapElement);
}


function createClone(src) {
    const clonedElement = src.cloneNode(true);
    clonedElement.classList.add("card-effect");
    clonedElement.classList.remove("notsaved");

    const mySpellbook = document.getElementById("mySpellbook");
    mySpellbook.appendChild(clonedElement);

    addToCustomSpellbook(clonedElement) ;

    clonedElement.addEventListener("click", function(event) {
        let allRecapElements = document.querySelectorAll("aside ul li");
        for (let element of allRecapElements) {
            if (element.textContent === clonedElement.firstChild.textContent) {
                element.remove();
                theFilter();
                break;
            }
        }
        
        removeFromCustomSpellbook(clonedElement);
        cardRemove(clonedElement);
    })
}





function userTypeFiltering() {
    
    document.getElementById('selectType').addEventListener("change", function(event) {
        theFilter();
    });
}


function userFiltering() {
    const userSearch = document.getElementById('userSearch');
    userSearch.addEventListener("input", function(event) {
        theFilter();
    });
}



function userDifficultyFiltering() {
    let difficulty = document.getElementById('difficultyOfSpell');
    let labelDifficulty = document.getElementById('labelDifficulty');
    

    difficulty.addEventListener("input", function(event) {

        switch (difficulty.value) {
            case '0': 
            labelDifficulty.innerHTML = `Difficulté max. : +20&nbsp;`;
            difficultyFilter = 20;
            break;

            case '10': 
            labelDifficulty.innerHTML = `Difficulté max. : +10&nbsp;`; 
            difficultyFilter = 10;
            break;

            case '20': 
            labelDifficulty.innerHTML = `Difficulté max. : 0&nbsp;`; 
            difficultyFilter = 0;
            break;

            case '30': 
            labelDifficulty.innerHTML = `Difficulté max. : -10&nbsp;`; 
            difficultyFilter = -10;
            break;

            case '40': 
            labelDifficulty.innerHTML = `Difficulté max. : -20&nbsp;`;
            difficultyFilter = -20;
            break;

            case '50': 
            labelDifficulty.innerHTML = `Difficulté max. : -30&nbsp;`; 
            difficultyFilter = -30;
            break;
        }

        theFilter();

        
    });
    
}


function filterMagicType(array) {
    let magicType = document.getElementById('selectType').value ;
    let filteredArray = []

    if (magicType !== 'Tous') {
        filteredArray = array.filter(item => item.type.includes(magicType));
    }
    else {
    filteredArray = array;
    }

    return filteredArray
}

function getTricks(data) {

    let array = tricks.filter(trick => 
        trick.alt.includes(data) || 
        trick.name.toLowerCase().includes(data) || 
        trick.description.toLowerCase().includes(data)
    );

    return array
}


function getSpells(data) {

    let array = spells.filter(spell =>
        (spell.alt.includes(data) ||
        spell.name.toLowerCase().includes(data) ||
        spell.description.toLowerCase().includes(data) ||
        spell.formula.toLowerCase().includes(data)) &&
        spell.difficulty >= difficultyFilter
    );

    return array
}

function theFilter() {

    let configDOMPurify = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

let data = DOMPurify.sanitize(userSearch.value.toLowerCase(), configDOMPurify);

let filteredTricks = getTricks(data);
let filteredSpells = getSpells(data);

filteredTricks = filterMagicType(filteredTricks) ;
filteredSpells = filterMagicType(filteredSpells) ;

filteredTricks = filterDuplicates(filteredTricks);
filteredSpells = filterDuplicates(filteredSpells);



    document.querySelector("#searchArea").innerHTML = "";
    generateTricks(filteredTricks);    

    if (lastSelectedOptionId === 'ascending') {
        let spellsByDifficulty = filteredSpells.sort((a, b) => b.difficulty - a.difficulty);
        generateSpells(spellsByDifficulty);
    }
    else if (lastSelectedOptionId === 'descending') {
        let spellsByDifficulty = filteredSpells.sort((a, b) => a.difficulty - b.difficulty);
        generateSpells(spellsByDifficulty);
    }
    else {
        generateSpells(filteredSpells);
    }
    
    
    savingCard();  

    if (document.querySelector("#myTricksDiv")) {
        display9articles('displayedTricks','#myTricksDiv .notsaved', 'myTricksDiv','tricks');
        displayMagic('checkTricks', 'myTricksDiv', 'myTricksTitle', 'buttonArrow-tricks')
    }
    if (document.querySelector("#mySpellsDiv")) {
        display9articles('displayedSpells','#mySpellsDiv .notsaved', 'mySpellsDiv','spells');

        displayMagic('checkSpells', 'mySpellsDiv', 'mySpellsTitle', 'buttonArrow-spells')
    } 
}


function filterDuplicates(array) {

    let savedCards = document.querySelectorAll('#mySpellbook article')
    let mySavedElements = []
    let config = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

    if (savedCards) {
        for (let card of savedCards) {

            let filteredCard = DOMPurify.sanitize(card.firstChild.innerHTML, config)
            filteredCard = filteredCard.trimEnd();

            mySavedElements.push(filteredCard);
        }
    }
    
    const removeElements = (originalArray, elementsToRemove) => originalArray.filter(item => !elementsToRemove.includes(DOMPurify.sanitize(item.name, config)));
    let filteredArray = removeElements(array, mySavedElements)

    // console.log("original array : ")
    // console.log(array);
    // console.log("duplicates to remove : ")
    // console.log(mySavedElements);
    // console.log("filtered array : ")
    // console.log(filteredArray);

    return filteredArray
}




function displaySpellbook() {
    let checkSpellbook = document.getElementById("checkSpellbook");
    let mySpellbookTitle = document.getElementById("mySpellbookTitle")
    let mySpellbook = document.getElementById("mySpellbook")
    
    checkSpellbook.addEventListener("change", function(event) {
        
        if (!checkSpellbook.checked) {
            mySpellbook.classList.add("do-not-display");
            mySpellbookTitle.classList.add("do-not-display");
        } else {
            mySpellbook.classList.remove("do-not-display");
            mySpellbookTitle.classList.remove("do-not-display");
        }
    });
}

function displayTricksAndSpells() {
    
    let checkSpells = document.getElementById("checkSpells");
    let checkTricks = document.getElementById("checkTricks");

    checkTricks.addEventListener("change", function(event) {
        displayMagic('checkTricks', 'myTricksDiv', 'myTricksTitle', 'buttonArrow-tricks')
    });

    checkSpells.addEventListener("change", function(event) {
        displayMagic('checkSpells', 'mySpellsDiv', 'mySpellsTitle', 'buttonArrow-spells')
    });
}



function displayMagic(checkId, divId, titleId, buttonId) {
    let check = document.getElementById(checkId);
    let myDiv = document.getElementById(divId);
    let myTitle = document.getElementById(titleId);
    let button = document.getElementById(buttonId);
    if (!check.checked) {
        myDiv.classList.add("do-not-display");
        myTitle.classList.add("do-not-display");
        if (button) {
            button.classList.add('do-not-display');
        }
    } else {
        myDiv.classList.remove("do-not-display");
        myTitle.classList.remove("do-not-display");
        if (button) {
            button.classList.remove('do-not-display');
        }
    }
}



function takeScreenshotWeb() {
    document.getElementById('save').addEventListener('click', function(event) {


        html2canvas(document.getElementById('content')).then(function(canvas) {
            
            // Créer un lien pour télécharger l'image
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');

            let mySpellbookTitle = document.getElementById('mySpellbookTitle') ;

            let filename = `${mySpellbookTitle.textContent}-aideBrigandyne.jpeg`;
            
            link.download = filename;

            document.body.appendChild(link);

            // Déclencher le téléchargement
            link.click();

            // Supprimer l'élément de lien
            document.body.removeChild(link);
        });

    });
}


function display9articles(displayedArray, location, buttonLocation,mode) {
    displayedArray = document.querySelectorAll(location)
    if (displayedArray.length>9) {
        for (let i=9 ; i < displayedArray.length ; i++) {
            displayedArray[i].classList.add('do-not-display');
        }

        const showMore = document.createElement("button");
        showMore.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;
        showMore.classList.add("card-effect")
        showMore.classList.add("show-more-button")
        const button = document.getElementById(buttonLocation);
        button.appendChild(showMore);
        showMore.id = `buttonArrow-${mode}`

        pressToShowMore(showMore, displayedArray);

    }
}

function pressToShowMore(button, displayedArray) {
    button.addEventListener("click", function(event) {
        let range = 0;
        let count = 0;
        for (let i=9 ; i < displayedArray.length ; i++) {
            if (displayedArray[i].classList.contains('do-not-display') && range<6) {
                displayedArray[i].classList.remove('do-not-display');
                range++
            };
        }

        for (let element of displayedArray) {
            if (element.classList.contains('do-not-display')) {
                count++
            }
        } 
        if (count === 0) {
            button.remove();
        }
    });
}


function customizeSpellbookName() {

    let config = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

    let customSpellbook = document.getElementById('customSpellbook');
    let mySpellbookTitle = document.getElementById('mySpellbookTitle');
    customSpellbook.addEventListener("input", function(event) {
        
        if (customSpellbook && customSpellbook.value !== "") {
            mySpellbookTitle.textContent = DOMPurify.sanitize(customSpellbook.value, config);
        }
        else {
            mySpellbookTitle.textContent = "Mon Grimoire";
        }
    });
}

function difficultySorting() {

    const radioButtons = document.querySelectorAll('input[name="options"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                lastSelectedOptionId = this.id;
                theFilter();
            }
        });
    });
}




function addToCustomSpellbook(element) {

    const configDOMPurify = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };


    let elementToFind = element.firstChild.textContent.trimEnd();



    let foundObject = [...spells, ...tricks].find(obj => DOMPurify.sanitize(obj.name, configDOMPurify) === elementToFind);

    if (foundObject) {
        myCustomSpellbook.push(foundObject.id) ;
        //console.log(myCustomSpellbook)
    }
    else {
        console.log("Error 666 : "+elementToFind+" not found...");
    }
    

    setObjectAsCookie("spellbook-cookie", myCustomSpellbook, 360);
}



function removeFromCustomSpellbook(element) {

    const configDOMPurify = {
        ALLOWED_TAGS: false,
        ALLOWED_ATTR: false
    };

    //console.log(element)

    let elementToFind = element.firstChild.textContent.trimEnd();
    //console.log("elementToFind : "+elementToFind)
    let foundObject = [...spells, ...tricks].find(obj => DOMPurify.sanitize(obj.name, configDOMPurify) === elementToFind);
    //console.log("foundObject : "+foundObject+" ("+foundObject.id+")")
    
    if (foundObject) {
        myCustomSpellbook = myCustomSpellbook.filter(obj => obj !== foundObject.id);
    }
    else {
        console.log("Error 666 : "+elementToFind+" not found...");
    }
    

    //console.log(myCustomSpellbook)

    setObjectAsCookie("spellbook-cookie", myCustomSpellbook, 360);
}