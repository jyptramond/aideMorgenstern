export function toggleNav() {
    let toggleButton = document.getElementById('toggle-button');
    let navLinks = document.getElementById('nav-links');
    toggleButton.addEventListener("click", function(event) {
        navLinks.classList.toggle('active');
    });
}


export function changeScreenRatio() {
    document.getElementById('screen').addEventListener('click', function(event) {

        let fullWindow = document.getElementById('fullWindow');

        if (fullWindow.classList.contains("phoneRatio")) {
            fullWindow.classList.remove("phoneRatio");
            this.innerHTML = `<i class="fa-solid fa-mobile-screen is-bigger">`
        }
        else {
            fullWindow.classList.add("phoneRatio") ;
            this.innerHTML = `<i class="fa-solid fa-display is-bigger">`
        }
    });
}

export function toggleConfig() {
    let toggleButton = document.getElementById('toggle-button-config');
    let allConfigs = document.getElementsByClassName('toggle');
    
    toggleButton.addEventListener("click", function(event) {
        
        for (let element of allConfigs) {
            console.log(element)
            element.classList.toggle('active');
        }
        
    });
}