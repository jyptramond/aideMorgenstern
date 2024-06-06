import { toggleNav, changeScreenRatio, toggleConfig } from './export.js';


function generator() {
    toggleNav();
    changeScreenRatio();
    toggleConfig();
    generateButtonListener();
    displayJobSelection();
    displayDetailedView();
    displayNotes();
    userInput(champTexte, "champTexte",30);
    userInput(champAge, "champAge",5);
    takeScreenshotWeb();
    rotateButton("generer");
    
    resetDisplay();
    let character = createCharacter();
    displayCharacter(character);
}




generator();