import { toggleNav, changeScreenRatio, toggleConfig } from './export.js';


function generator() {


    let job = parseInt(document.getElementById('selectCarriere').value);
    console.log(job);


  
    displayJobsOnClick();

    toggleNav();
    changeScreenRatio();
    toggleConfig();
    generateButtonListener();
    displayDetailedView();
    displayNotes();

    rotateButton("generer");
    
    resetDisplay();
    let character = createCharacter();
    userInput(character, champTexte, "champTexte",30);
    userInput(character, champAge, "champAge",5);
    displayCharacter(character);
    


    takeScreenshotWeb(character);
}




generator();