let myGroup = {
        name: "Mon groupe",
        editing : null,
    }

function launchEncounter() {


    displayCard(character);
    displayCard(character);
    displayCard(character);
    displayCard(character);
    displayCard(character);
    displayCard(character);
    displayCard(character);
    displayCard(character);
    
    renamingGroup();
    displayNotes();
    
    savingCharacter(myGroup, 'encounter')
    cardEditor();
    trashListener();
    deselectOnWindow();

    toggleNav();
    
    toggleConfig();
    customCard();
}


launchEncounter() ;

