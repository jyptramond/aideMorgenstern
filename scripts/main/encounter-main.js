let myGroup = {
        name: "Mon groupe",
        editing: null,
        character: []
    }

let erasing = false;

function launchEncounter() {
    
    screenshot('encounter')
    trashListener();
    deselectOnWindow();
    refreshCard();
    toggleConfig();
    displayJobsOnClick();
    addButtonListener();
    initListener();
    toggleNav();
    changeScreenRatio();
    erasingCards();

 
    rotateButton("generer","encounter");

    
    if (cookieExists("encounter-cookie")) {
        myGroup = getObjectFromCookie("encounter-cookie") ;

        //console.log(myCustomSpellbook)
        if (myGroup.character[0]) {
            displayGroupFromObj(myGroup)
        }
    }

    renamingGroup();
    displayNotes();

}


launchEncounter() ;

