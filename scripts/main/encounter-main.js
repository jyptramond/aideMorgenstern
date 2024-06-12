let myGroup = {
        name: "Mon groupe",
        editing: null,
        character: []
    }

function launchEncounter() {

    
    screenshot('encounter')
    trashListener();
    deselectOnWindow();
    
    toggleConfig();
    displayJobsOnClick();
    addButtonListener();
    initListener();
    toggleNav();
    changeScreenRatio();

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

