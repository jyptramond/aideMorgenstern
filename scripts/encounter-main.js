let myGroup = {
        name: "Mon groupe",
        editing: null,
        character: []
    }

function launchEncounter() {

    displayNotes();
    renamingGroup();
    savingCharacter(myGroup, 'encounter')
    trashListener();
    deselectOnWindow();

    toggleNav();
    displayJobsOnClick();
    toggleConfig();
    addCardListener();
}


launchEncounter() ;

