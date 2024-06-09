let myGroup = {
        name: "Mon groupe",
        editing : null,
    }

function launchEncounter() {


    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    displayLeader(character);
    
    renamingGroup();
    configGroupListener();
    displayNotes();
    
    savingCharacter(myGroup, 'encounter')
    cardEditor();
    trashListener();
    deselectOnWindow();
}


launchEncounter() ;

