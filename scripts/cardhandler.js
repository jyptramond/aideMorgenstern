function cardEditor() {
    let cards = document.getElementsByClassName("characterCard")
    console.log(cards)

    for (let i=0 ; i < cards.length ; i++) {
        cards[i].addEventListener("click", function(event) {
            console.log(cards[i])
            
            if (this.classList.contains("editing")) {
                this.classList.remove("editing") ;
            } else {
            
                deselectAllCards();
                this.classList.add("editing") ;
                myGroup.editing = this ;
            }
        })
    }

        
}


function deleter() {

    const currentEdit = document.getElementsByClassName("editing") ;
    const groupSheet = document.getElementById("groupSheet") ;

    console.log("super ok")

    if (!currentEdit[0]) {
        groupSheet.innerHTML = "";
    } else {
        currentEdit[0].remove(); ;
    }
}

function trashListener() {

    const trashButton = document.getElementById("delete-group") ;

    trashButton.addEventListener("click", function(event) {
        console.log("ok")
        deleter();

    });

}




function deselectAllCards() {
    let cards = document.getElementsByClassName("characterCard")
        for (let i = 0 ; i < cards.length ; i++) {
            if (cards[i].classList.contains("editing")) {
                cards[i].classList.remove("editing");
            }
        }
    myGroup.editing = null ;
}

function deselectOnWindow() {
    window.addEventListener("click", function(event) {
        
        let cards = document.getElementsByClassName("characterCard") ;
        let fullWindow = document.getElementById("fullWindow") ;
        let clickedInsideCard = false;

                Array.from(cards).forEach((card) => {
                    if (card.contains(event.target)) {
                        clickedInsideCard = true;
                    }
                });

                if (fullWindow.contains(event.target) && (!clickedInsideCard)) {
                        console.log("Clicked outside the cards");
                        deselectAllCards();
                }
    });
}




let character = {
    name: "",
    archetype: "",
    job: "",
    origin: "",

    input: "",

    description: "hello world !",

    com: "",
    init: 0,
    pv: 10,
    armor : "",
    dg: "",
    stats: ""
}
