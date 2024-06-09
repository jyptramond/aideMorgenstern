function launchSpellbook() {

    generateMySpellbook();
    let config;

    //console.log(cookieExists("character-cookie"));
    if (cookieExists("spellbook-cookie")) {

        myCustomSpellbook = getObjectFromCookie("spellbook-cookie") ;

        //console.log(myCustomSpellbook)
        if (myCustomSpellbook[0]) {
            displayCustomSpellbookFromCookie(myCustomSpellbook)
        }
    }

    if (cookieExists("spellbook-name-cookie")) {
        let custom = document.getElementById('customSpellbook');
        let title = document.getElementById('mySpellbookTitle');

        myCustomSpellbookName = getObjectFromCookie("spellbook-name-cookie") ;
        //console.log(myCustomSpellbook)
        if (myCustomSpellbookName) {
            title.textContent = myCustomSpellbookName;
            custom.value = myCustomSpellbookName;
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

launchSpellbook();