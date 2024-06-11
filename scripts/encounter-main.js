let myGroup = {
        name: "Mon groupe",
        editing : null,
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

