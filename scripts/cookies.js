function setCookie(name, value, days, sameSite = 'Lax') {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    let secure = location.protocol === 'https:' ? "; Secure" : "";
    document.cookie = name + "=" + (value || "") + expires + "; path=/" + secure + "; SameSite=" + sameSite;
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getObjectFromCookie(name) {
    var cookie = getCookie(name);
    if (cookie) {
        return JSON.parse(cookie);
    }
    return null;
}


function setObjectAsCookie(name, obj, days) {
    var value = JSON.stringify(obj);
    setCookie(name, value, days);
}


function loadObjectAsCookie(id) {
    // Récupérer l'objet character depuis le cookie
    var savedCharacter = getObjectFromCookie(id);
    if (savedCharacter) {
        //console.log("Character loaded from cookie:", savedCharacter);
        // Vous pouvez maintenant utiliser l'objet character récupéré
    } else {
        //console.log("No character found in cookie.");
    }
}

function cookieExists(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return true;
    }
    return false;
}