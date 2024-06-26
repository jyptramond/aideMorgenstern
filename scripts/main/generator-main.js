
function launchGenerator() {

    loadObjectAsCookie("character-cookie");
  
    displayJobsOnClick();
    resetDisplay();

    let character ;

    //console.log(cookieExists("character-cookie"));
    if (cookieExists("character-cookie")) {
        character = getObjectFromCookie("character-cookie") ;
        setUserInputs(character.name.input, 'champTexte') ;
        setUserInputs(character.age.input, 'champAge')
    }
    else {
        character = createCharacter(initConfig());
    }

    inputListenersLaunch(character, champTexte, "champTexte", 30);
    inputListenersLaunch(character, champAge, "champAge", 5);
    displayCharacter(character);
    toggleNav();
    changeScreenRatio();
    toggleConfig();
    displayDetailedView();
    displayNotes();

    screenshot("generator");


    generateButtonListener();
    rotateButton("generer", null);

    //console.log(character) ;

    setObjectAsCookie("character-cookie", character, 360);
}




launchGenerator();