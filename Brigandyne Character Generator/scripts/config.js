/*********************************************************************************
 * 
 * Ce fichier contient toutes les constantes nécessaires au fonctionnement du jeu.
 * Toutes les informations tirées au hasard lors de la création de personnage
 * sont ici, organisées dans différentes variables array.
 * 
 *********************************************************************************/

let valeursCaracteristiques = [0,0,0,0,0,0,0,0,0,0];



let modifCaracteristiques = [   
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                                ["",""],
                            ]




let grimoireToursDeMagie = [""]
let grimoireSortilege = [""]
let valeurMagie = 0
let atouts = [""] ;

let attributsSecondaires = [
    ["Initiative : "],
    ["Vitalité : "],
    ["Seuil de blessure : "],
    ["Sang-Froid : "],
    ["Instabilité : "],
    ["Branche : "],
    ["Metiers : "],
    ["Atouts : "]
]


const nomsCaracteristiques = [
    "Combat",
    "Connaissances",
    "Discrétion",
    "Endurance",
    "Force",
    "Habileté",
    "Mouvement",
    "Perception",
    "Sociabilité",
    "Survie",
    "Tir",
    "Volonté"
]

const abrevCaracteristiques = [
    "COM",
    "CNS",
    "DIS",
    "END",
    "FOR",
    "HAB",
    "MOU",
    "PER",
    "SOC",
    "SUR",
    "TIR",
    "VOL",
    "MAG"
]

// Les catégories de magiciens

const magicienMono = [33, 82, 94, 96, 102]
const magicienDuo = [80, 81, 83, 84, 85, 86, 87, 98, 100]







// [origine, COM, CNS, DIS, END, FOR, HAB, MOU, PER, SOC, SUR, TIR, VOl, PV, SF, spé1, spé2, destin]
// complet et relu

const origine = [
                    //COM    CNS     DIS     END     FOR     HAB     MOU     PER     SOC     SUR     TIR     VOL     MAGIE    
    ["Humain",      25,      25,     25,     25,     25,     25,     25,     25,     25,     25,     25,     25,     0],
    ["Elfe",        25,      25,     25,     20,     20,     25,     25,     30,     25,     30,     30,     20,     0],
    ["Nain",        30,      25,     25,     30,     25,     30,     20,     20,     20,     20,     20,     30,     0],
    ["Halfelin",    20,      25,     35,     20,     15,     30,     30,     25,     35,     25,     25,     20,     0],

    ["Elvin",       25,      25,     25,     20,     25,     25,     25,     30,     30,     25,     25,     20,     0],
    ["Hudvàr",      25,      25,     25,     30,     25,     25,     20,     20,     25,     25,     25,     30,     0],
    ["Ogrin",       30,      15,     15,     35,     35,     20,     25,     25,     20,     25,     25,     25,     0],
    ["Orquin",      30,      20,     25,     25,     30,     20,     25,     25,     20,     25,     25,     25,     0],
    ["Morvelin",    25,      25,     30,     30,     20,     25,     30,     25,     20,     25,     25,     20,     0],

    ]


const repartitionMetiers = [
    // 0 : Humain
    [[1,9],     [10,14],[15,22],[23,30],[31,38],[39,45],[46,53],[54,63],[64,71],[72,79],[80,85],[86,93],[94,100]],

    // 1 : Elfe
    [[1,9],     [10,13],[14,22],[23,30],[31,41],[42,48],[49,56],[57,66],[67,74],[75,81],[82,91],[92,97],[98,100]],
    
    // 2 : Nain
    [[1,10],    [11,15],[16,29],[30,36],[37,40],[41,48],[49,54],[55,64],[65,75],[76,87],[88,91],[92,97],[98,100]],
    
    // 3 : Halfelin
    [[1,12],    [13,14],[15,26],[27,31],[32,36],[37,47],[48,58],[59,69],[70,75],[76,80],[81,90],[91,96],[97,100]],
    
    // 4 : Elvin
    [[1,10],    [11,14],[15,22],[23,31],[32,42],[43,48],[49,59],[60,69],[70,78],[79,85],[86,93],[94,98],[99,100]],
    
    // 5 : Hudvàr
    [[1,10],    [11,12],[13,26],[27,35],[36,42],[43,49],[50,55],[56,65],[66,76],[77,87],[88,91],[92,98],[99,100]],
    
    // 6 : Ogrin
    [[1,7],     [8,9],[10,13],[14,25],[26,30],[31,31],[32,34],[35,51],[52,67],[68,83],[84,84],[85,99],[100,100]],
    
    // 7 : Orquin
    [[1,8],     [9,10],[11,19],[20,32],[33,39],[40,42],[43,52],[53,64],[65,75],[76,88],[89,90],[91,99],[100,100]],

    // 8 : Morvelin
    [[1,11],    [12,13],[14,20],[21,30],[31,38],[39,43],[44,56],[57,64],[65,70],[71,75],[76,84],[85,99],[100,100]]
]



// [archétype, modifs de compétences, vices et vertus]


const archetype = [
/*0*/   ["Aigle",   ["CNS+5/PER+5", "VOL+5"],                               ["Orgueilleux", "Envieux/Travailleur/Sobre/Prudent/Loyal"]],
        ["Âne",     ["END+5", "HAB+5/SUR+5", "VOL+5", "CNS-5/MOU-5"],       ["Humble", "Travailleur/Chaste/Prudent/Clément/Loyal"]],    
        ["Cerf",    ["SOC+5", "VOL+5", "SUR+5/MOU+5", "DIS-5/TIR-5"],       ["Loyal", "Orgueilleux/Bienveillant/Clément/Généreux/Valeureux"]],

        ["Chat",    ["DIS+5", "PER+5", "MOU+5", "FOR-5/VOL-5"],             ["Cruel/Envieux/Lâche/Paresseux/Prudent/Trompeur"]],
        ["Chien",   ["END+5", "PER+5", "SOC+5", "DIS-5/HAB-5"],             ["Bienveillant/Généreux/Gourmand/Clément/Loyal/Valeureux"]],
/*5*/   ["Coq",     ["COM+5", "SOC+5", "DIS-5/HAB-5"],                      ["Orgueilleux/Colérique/Luxurieux/Envieux/Loyal/Valeureux"]],
        ["Corbeau", ["CNS+5", "DIS+5/SUR+5", "VOL+5", "SOC-5"],             ["Cruel/Humble/Chaste/Sobre/Prudent/Envieux"]], 

        ["Fourmi",  ["CNS+5/DIS+5", "HAB+5", "VOL+5", "PER-5/SOC-5"],       ["Travailleur", "Avare/Humble/Chaste/Sobre/Prudent"]], 
        ["Hibou",   ["CNS+10", "HAB+5/PER+5", "SOC+5/VOL+5", "COM-5"],      ["Travailleur", "Orgueilleux/Chaste/Prudent/Envieux/Loyal"]], 
        ["Hyène",   ["COM+5", "DIS+5/MOU+5", "FOR-5/VOL-5"],                ["Cruel", "Colérique/Envieux/Lâche/Humble/Trompeur"]], 

/*10*/  ["Lapin",   ["DIS+5", "MOU+5", "PER+5", "SOC+10", "COM-5", "FOR-5"],["Bienveillant/Lâche/Prudent/Luxurieux/Clément/Humble"]], 

        ["Lion",    ["COM+5", "FOR+5", "SOC+5", "CNS-5/HAB-5", "DIS-5"],    ["Orgueilleux", "Paresseux/Luxurieux/Colérique/Loyal/Valeureux"]], 
        ["Loup",    ["COM+5", "PER+5/SUR+5", "SOC-5"],                      ["Colérique", "Cruel/Sobre/Loyal/Envieux/Valeureux"]],
        ["Mouton",  ["HAB+5", "PER+5", "SOC+5", "VOL-5"],                   ["Humble", "Travailleur/Prudent/Lâche/Clément/Chaste"]], 

        ["Ours",    ["FOR+5", "END+5", "PER+5/SUR+5", "CNS-5/DIS-5"],       ["Gourmand/Colérique/Bienveillant/Clément/Loyal/Valeureux"]], 
/*15*/  ["Paon",    ["SOC+10", "CNS+5/PER+5", "FOR-5"],                     ["Envieux/Orgueilleux/Paresseux/Luxurieux/Lâche/Trompeur"]], 

        ["Porc",    ["FOR+5", "END+5", "SOC+5", "MOU-5/CNS-5"],             ["Gourmand", "Colérique/Généreux/Luxurieux/Bienveillant/Paresseux"]], 

        ["Rat",     ["DIS+5", "CNS+5/VOL+5", "END+5/SUR+5", "FOR-5"],       ["Avare/Cruel/Envieux/Prudent/Chaste/Trompeur"]], 

        ["Renard",  ["DIS+5/HAB+5", "MOU+5", "SOC+5", "END-5/FOR-5"],       ["Trompeur","Paresseux/Gourmand/Prudent/Envieux/Lâche"]], 

        ["Serpent", ["CNS+5", "SOC+5", "VOL+5", "MOU-5/PER-5"],             ["Trompeur/Cruel/Envieux/Prudent/Travailleur/Sobre"]], 
/*20*/  ["Singe",   ["MOU+10", "SOC+5", "VOL-5"],                           ["Généreux/Paresseux/Lâche/Bienveillant/Clément/Trompeur"]], 

        ["Souris",  ["DIS+10", "HAB+5", "MOU+5", "SOC+5", "COM-5", "FOR-5"],["Bienveillant", "Lâche/Généreux/Humble/Clément/Loyal"]], 

        ["Taureau", ["COM+5", "END+5", "FOR+5", "DIS-5", "CNS-5/HAB-5"],    ["Orgueilleux/Colérique/Luxurieux/Gourmand/Clément/Valeureux"]], 
        ["Vautour", ["CNS+5/END+5", "PER+5", "VOL+5", "MOU-5/SOC-5"],       ["Avare/Humble/Sobre/Prudent/Cruel/Trompeur"]],
];



            
        // les armes de tir
    let armesdetir = "arc (RU+*FOR*+0) et 10 flèches/arc court (RU+*FOR*-1) et 10 flèches/arc long (RU+*FOR*+0) et 10 flèches/arc elfique (RU+*FOR*+0) et 10 flèches/arbalète de poing (RU+3) et 10 carreaux/arbalète (RU+5) et 10 carreaux/arbalète naine (+5) et 10 carreaux/arbalète lourde (RU+6) et 10 carreaux"  

        // les armes à poudre
    let armesapoudre = "arquebuse (RU+7)/crachefeu (RU+6)/pistolet à poudre (RU+4)/tromblon (RU+3)"

        // armes de jet
    let armesdejet = "bolas (RU+*FOR*-2)/couteau de lancer (RU+*FOR*-1)/feuillacier (RU+*FOR*-1)/fronde (RU+*FOR*-1)/javelot (RU+*FOR*+0)/œuf de feu (RU+5)/sarbacane (poison)/vesse-de-loup (spécial)"    


    let armesadistance = `${armesdejet}/${armesdetir}/${armesapoudre}`

    let armesdetrait = `${armesdetir}/${armesapoudre}`


        // les batons
    let batons = "bâton noueux (RU+*FOR*-1)/bâton ferré (RU+*FOR*-1)"

       // les armes d'hast
    let armesdhast = "attrappe-hommes (RU+*FOR*-2)/bâton ferré (RU+*FOR*-1)/bâton noueux (RU+*FOR*-1)/faux (RU+*FOR*+0)/fauchard (RU+*FOR*+0)/fourche (RU+*FOR*-1)/hallebarde (RU+*FOR*+0)/bardiche (RU+*FOR*+0)/lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)/pertusiane(RU+*FOR*+0)"

        // les lances
    let lances = "lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)"

        // les haches
    let haches =  "hachette (RU+*FOR*-1)/hache (RU+*FOR*+0)/cognée (RU+*FOR*+0)/hache du clan (RU+*FOR*+1)/hache de guerre (RU+*FOR*+2)"

        // les haches à deux mains
    let hachesàdeuxmains = "une hache de guerre (RU+*FOR*+2)/hache (RU+*FOR*+0)"

        // les épées
    let epee = "brise-lames (RU+*FOR*-1)/dragonne (RU+*FOR*+0)/épée bâtarde (RU+*FOR*+0 ou (RU+*FOR*+1 à deux mains)/épée courte (RU+*FOR*-1)/épée large (RU+*FOR*+0)/sabre (RU+*FOR*+0)/épée longue (RU+*FOR*+0)/espadon (RU+*FOR*+2)/flamberge (RU+*FOR*+2)/main gauche (RU+*FOR*-1)/rapière (RU+*FOR*+0)"    

        // les épées de qualité supérieure
    let epeequalitesuperieure = "épée bâtarde de qualité supérieure (RU+*FOR*+0 ou (RU+*FOR*+1 à deux mains)/épée large de qualité supérieure (RU+*FOR*+0)/sabre de qualité supérieure (RU+*FOR*+0)/épée longue de qualité supérieure (RU+*FOR*+0)/espadon de qualité supérieure (RU+*FOR*+2)/flamberge de qualité supérieure (RU+*FOR*+2)/rapière de qualité supérieure (RU+*FOR*+0)"    
  





        // les armes de mêlée légère
    let armesdemeleelegere = "cestes (RU+*FOR*-2)/griffes (RU+*FOR*-2)/gourdin (RU+*FOR*-2)/stylet (RU+*FOR*-2)/fouet (RU+*FOR*-2)/racine-fouet (RU+*FOR*-2)/attrappe-homme (RU+*FOR*-2)/couteau (RU+*FOR*-1)/poignard (RU+*FOR*-1)/dague (RU+*FOR*-1)/miséricorde (RU+*FOR*-1)/brise-lames (RU+*FOR*-1)/épée courte (RU+*FOR*-1)/main gauche (RU+*FOR*-1)/hachette (RU+*FOR*-1)/bâton ferré (RU+*FOR*-1)/bâton noueux (RU+*FOR*-1)/fourche (RU+*FOR*-1)"

        // les armes de mêlée ordinaire
    let armesdemeleeordinaire = "dragonne (RU+*FOR*+0)/épée bâtarde (RU+*FOR*+0)/épée large (RU+*FOR*+0)/sabre (RU+*FOR*+0)/épée longue (RU+*FOR*+0)/rapière (RU+*FOR*+0)/hache (RU+*FOR*+0)/cognée (RU+*FOR*+0)/masse d'armes (RU+*FOR*+0)/masse épineuse (RU+*FOR*+0)/faux (RU+*FOR*+0)/fauchard (RU+*FOR*+0)/hallebarde (RU+*FOR*+0)/bardiche (RU+*FOR*+0)/lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)/pertusiane (RU+*FOR*+0)"

        // les armes de guerre
    let armesdeguerre = "hache du clan (RU+*FOR*+1)/fléau d'armes (RU+*FOR*+1)/marteau de guerre (RU+*FOR*+0)/"

    let armeslourdes = "espadon (RU+*FOR*+2)/flamberge (RU+*FOR*+2)/hache de guerre (RU+*FOR*+2)"

        // les armes de mêlée (toutes)
    let armesdemelee = `${armesdemeleelegere}/${armesdemeleeordinaire}/${armesdeguerre}/${armeslourdes}`       

        // les armes de mêlée simples
    let armesdemeleesimples = `${armesdemeleelegere}/${armesdemeleeordinaire}`   



        // les armures légères
    let armureslegeres = "gambison (protection+1)/fourrures (protection+1)"
    
        //les armures moyennes
    let armuresmoyennes = "broigne (protection+2)/brigandine (protection+2)/cotte de plaques (protection+2)/cuirasse (protection+3)" 
    
        //les armures lourdes
    let armureslourdes = "cottes de mailles (protection+3)/haubert (protection+3)/demi-plaques (protection+4)/armures de plates (protection+5)/harnois (protection+5)/armures de plates alourdie (protection+6)"

        //les boucliers 
    let boucliers = "petit bouclier (protection+1)/boche (protection+1)/rondache (protection+1)/bouclier (protection+2)/écu (protection+2)"    



// branche de métiers


const carrieres = [
    // 0
    ["Agents et domestiques", `${armesdemeleelegere}`, "vêtements de roturier en bon état","livrée/tablier","gourde d'eau/gourde de vin", "bourse contenant 1d10+*SOC* pièces d'argent"],
    
    // 1
    ["Aristocrates et nobles","dague (RU+*FOR*-1)/épée courte (RU+*FOR*-1)", "élégant costume de cour", "cheval avec sa selle et son harnais", "bourse contenant 2d10+*SOC* pièces d'or"],
    
    // 2
    ["Artisans et commerçants", `${armesdemeleelegere}`, "vêtements de roturier", "gourde d'eau/gourde de vin", "besace contenant une fine couverture, un bol en bois et 1d10 rations de voyage (pain, fromage, fruits)","bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent"], 

    // 3
    ["Bandits et brigands", "couteau (RU+*FOR*-1)", `${armureslegeres}`, "vêtements de vilains sales", "sac en toile contenant un bol en bois, et 1d10 rations (volées à sa dernière victime)","gourde d'eau/gourde de vin","bourse avec 1d10+*COM* pièces d'argent/bourse avec 1d10+*TIR* pièces d'argent"], 
    
    // 4
    ["Bateleurs et saltimbanques", "vêtements de vilain défraîchis", "sac en toile contenant un bol en bois, et 1d10 rations", "gourde d'eau/gourde de vin", "bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent"],
    
    // 5
    ["Érudits et lettrés", "costume de bourgeois", "nécessaire d'écriture, 1d10 parchemins", "trois plumes et deux encriers, main de papier (20 pages)", "£+*CNS* livres reliés", "bésicles", "gibecière avec couverture, bol en bois, et 1d10 rations supérieures", "gourde contenant du bon vin", "bourse contenant 1d10+*CNS* pièces d'or"],
    
    // 6
    ["Filous et roublards", `${armesdemeleelegere}`, "couteau (RU+*FOR*-1)", "vêtements de vilains usés/vêtements de vilains sales", "sac en toile contenant un bol en bois, et 1d10 ration(s)", "gourde d'eau/gourde de vin", "bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*DIS* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent" ],
    
    // 7
    ["Forestiers et paysans",  `${armesdemeleelegere}`, "couteau (RU+*FOR*-1)/Animal de compagnie", "vêtements de vilain", "bâton de marche", "gourde d'eau/gourde de vin", "gibecière contenant une fine couverture, un bol en bois et 1d10 ration(s) de voyage", "1d10+*HAB* pièces de cuivre/1d10+*END* pièces de cuivre"],

    // 8
    ["Guerriers et bretteurs", `${armesdemelee}`, "couteau (RU+*FOR*-1)", `${armesdetir}/bouclier en bois (protection+1)`, `${armureslegeres}/${armuresmoyennes}`,  "vêtements de voyage", "sac en toile contenant un bol en bois, et 1d10 rations", "gourde d'eau/gourde de vin", "bourse contenant 1d10+*COM* pièces d'argent/bourse contenant 1d10+*TIR* pièces d'argent"],
    
    // 9
    ["Hommes d'armes et soldats", `${armesdemelee}`, "couteau (RU+*FOR*-1)", `${armesdetir}/${boucliers}`, `${armureslegeres}/${armuresmoyennes}`, "casaque militaire", "vêtements de voyage", "sac en toile contenant un bol en bois, et 1d10 ration(s)", "gourde d'eau/gourde de vin", "bourse contenant 1d10+*COM* pièces d'argent/bourse contenant 1d10+*TIR* pièces d'argent"],

    // 10
    ["Magiciens et thaumaturges", "costume de bourgeois", "main de papier (20 pages), plume et encrier", "£+*CNS* livres occultes reliés", "1d10+*MAG* ingrédients utiles à leur savoir (patte d'animaux, poudres, herbes; sang d'animal, ...)", "gibecière contenant une couverture, un col en bois et 1d10 rations de bonne qualité", "gourde contenant du bon vin", "bourse avec 1d10+*MAG* pièces d'or"],
    
    // 11
    ["Parias et miséreux", "couteau (RU+*FOR*-1)/gourdin (RU+*FOR*-1)", "harde de gueux", "sac en toile contenant un bol en bois et 1d10 ration(s) de piètre qualité", "gourde d'eau/gourde de mauvais vin", "£+*END* pièce(s) de cuivres"],
    
    // 12
    ["Religieux et prêtres", "robe de la couleur autorisée par le culte/froc de la couleur autorisée par le culte", "vêtements de voyage", "symbole sacré", "chapelet", "sac en toile contenant un bol en bois et 1d10 ration(s)", "gourde d'eau/gourde de vin", "bourse avec 1d10+*CNS* pièces d'argent"]
]


// Les domaines magiques

const domaineMagique = "Domaine magique (air)/Domaine magique (animalisme)/Domaine magique (châtiment)/Domaine magique (divination)/Domaine magique (eau)/Domaine magique (enchantements)/Domaine magique (feu)/Domaine magique (guerre)/Domaine magique (illusions)/Domaine magique (mentalisme)/Domaine magique (nécromancie)/Domaine magique (ombre)/Domaine magique (protection)/Domaine magique (terre)/Domaine magique (voyage)/Domaine magique (alchimie)"

const domaineElementaire = "Domaine magique (eau)/Domaine magique (terre)/Domaine magique (feu)/Domaine magique (air)"

const domaineReligion = "Domaine magique (protection)/Domaine magique (châtiment)"

// métiers


const metiers = [

    // 1 : Agents et domestiques        (0-7)
    ["Cocher",
        "Arme à distance (tromblon)", "Arme de mêlée (au choix)", "Attelages", "Écoute", "Équitation", "Milieu naturel (au choix)", "Persuasion", "Renseignements", "Repérage", "Soins des animaux",
        "Calme", "Chance insolente", "Doué (MOU)", "Doué (SOC)", "Recharge rapide", "Réflexes éclairs", "Second souffle", "Sixième sens", "Solidité", "Tir ciblé",
        "un tromblon (RU+3) avec poudre et 10 munitions", `${armureslegeres}`, "une corne de cocher"],

    ["Maître-chien/Veneur",
        "Animaux", "Armes à distance (arc)", "Arme légère (au choix)", "Déplacement silencieux", "Dressage", "Milieu naturel (au choix)", "Pièges", "Pistage", "Repérage", "Soins des animaux",
        "Compagnon animal", "Coup du prédateur", "Doué (END)", "Doué (SUR)", "Guérison rapide", "Instinct de survie", "Second souffle", "Sixième sens", "Solidité", "Tir du chasseur",
        "coutelas (RU+*FOR*-1)",
        "vêtements de vilain", "un chien de chasse intelligent et bien dressé"],

    ["Garde-chasse/Garde-Faune",
        "Animaux", "Arme à distance (arc)/Arme à distance (arbalète)", "Arme de mêlée (au choix)", "Écoute", "Équitation", "Milieu naturel (au choix)", "Orientation", "Pièges", "Pistage", "Repérage",
        "Calme", "Compagnon animal", "Coups puissants", "Coup du prédateur", "Doué (MOU)", "Doué (PER)", "Doué (SUR)", "Second souffle", "Solidité", "Tir du chasseur",
        `${armesdetir}`, 
        "un cheval avec selle et harnais", "corde de 10 mètres", "lanterne"],

    ["Messager/Courrier",
        "Arme de mêlée (au choix)", "Attelages", "Course", "Diplomatie", "Équitation", "Milieu naturel (au choix)", "Noblesse et politique", "Persuasion", "Renseignements", "Repérage",
        "Calme", "Compagnon animal", "Coup acrobatique", "Doué (MOU)", "Doué (SOC)", "Doué (SUR)", "Polyglotte/Sauvegarde", "Réflexes éclairs", "Second souffle", "Vivacité",
        `${armesdemeleelegere}/${armesdemeleeordinaire}`,
        "un cheval avec selle et harnais", "une carte de la région"],

    ["Palefrenier",
        "Animaux", "Attelages", "Course", "Équitation", "Milieu naturel (au choix)", "Persuasion", "Premiers soins", "Renseignements", "Repérage", "Soins des animaux",
        "Compagnon animal", "Chance insolente", "Distraction", "Doué (MOU)", "Doué (SUR)", "Festoyeur", "Instinct de survie", "Mains blanches", "Second souffle", "Vivacité"],
        // pas d'équipement add.

    ["Prévôt/Collecteur d'impôts",
        "Commerce", "Discours", "Droits et usages", "Estimation", "Fouille", "Lettres", "Noblesse et politique", "Persuasion", "Renseignements", "Repérage",
        "Calme", "Dévoué serviteur", "Doué (CNS)/Doué (SOC)", "Doué (VOL)", "Mémoire sans faille", "Prudent", "Sain d'esprit/Second souffle", "Sixième sens", "Solidité", "Vivacité",
        "épée courte (RU+*FOR*-1)",
        "un cheval avec selle et harnais",  "un livre de comptes", "une main de papier (20 pages) avec plumes et encier"],

    ["Péager/Éclusier",
        "Arme de mêlée (au choix)", "Commerce", "Discours", "Droit et usages", "Estimation", "Fouille", "Intimidation", "Milieu nature (au choix)", "Natation", "Repérage",
        "Bagarre", "Doué (END)", "Doué (PER)", "Doué (SUR)", "Esquive", "Festoyeur", "Guérison rapide", "Nyctalopie", "Sixième sens", "Solidité",
        `${armesdemelee}`, `${armureslegeres}`],

    ["Valet/Domestique",
        "Charme", "Commerce", "Cuisine", "Dissimulation d'objets", "Écoute", "Intuition", "Persuasion", "Renseignements", "Repérage", "Se cacher",
        "Chance insolente", "Distraction", "Doué (HAB)", "Doué (PER)", "Doué (SOC)", "Festoyeur/Prudent", "Gardien", "Inoffensif", "Mensonge éhonté/Second souffle", "Vivacité",
        "costume de bourgeois", "une lanterne", "une batterie de cuisine", "une fiole de parfum"],


    // 2 : Artistocrates et nobles      (8-15)
    ["Bailli/Vidame",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Discours", "Droit et usages", "Équitation", "Gestion", "Intimidation", "Noblesse et politique", "Persuasion", "Renseignements",
        "Calme", "Coups puissants/Coup précis", "Dévoué serviteur", "Doué (CNS)/Doué (SOC)", "Prudent", "Riposte", "Second souffle", "Sixième sens", "Solidité", "Tireur d'élité/Tir précis",
        `${armesdemelee}` ,`${armesadistance}`, `${armureslegeres}/${armuresmoyennes}`],

    ["Chevalier du vol",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Courage", "Déplacement silencieux", "Équitation", "Intimidation", "Lettres", "Noblesse et politique", "Persuasion", "Repérage",
        "Coup précis", "Coups puissants", "Coup de maître", "Dévoué serviteur/Festoyeur", "Fascination/Panache", "Maître d'armes", "Maîtrise du bouclier/Port d'armure", "Resilience/Riposte", "Solidité", "Vivacité",
        `${lances}`, `${armuresmoyennes}`, `${boucliers}`,
        "un costume de voyage"],

    ["Chevalier",
        "Arme à distance (arc)/Arme à distance (arbalète)", "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Commandement", "Courage", "Équitation", "Intimidation", "Noblesse et politique", "Pugilat", "Stratégie",
        "Bagarre/Festoyeur", "Coups précis", "Coups puissants", "Coup de maître/Dévoué serviteur", "Maître d'armes", "Maîtrise du bouclier", "Panache/Port d'armure", "Résilience/Riposte", "Sauvegarde", "Solidité",
        "masse d'armes (RU+*FOR*+0)", `${lances}`, "épée longue (RU+*FOR*+0)", "armure de plates (protection+5)", "bouclier (protection+2)/écu (protection+2)",
        "destrier fidèle et bien dressé (remplace le cheval)"],

    ["Courtisan/Flagorneur",
        "Arts", "Danse/Lettres", "Charme", "Diplomatie", "Discours", "Écoute/Jeux", "Noblesse et politique", "Persuasion", "Renseignements", "Repérage",
        "Dévoué serviteur", "Distraction", "Doué (CNS)/Doué (PER)", "Doué (SOC)", "Fascination", "Inoffensif", "Mensonge éhonté", "Polyglotte", "Provocation/Prudent", "Relations",
        "deux autres costumes de cour très élégants aux couleurs et ornements différents", "épée d'apparat/nécessaire de maquillage", "deux fioles de parfum", "bijoux d'une valeur de 5d10 pièces d'or", "main de papier (20 feuilles)", "plume et encrier"],

    ["Dépravé",
        "Arme de mêlée (au choix)", "Charme", "Déguisement", "Discours", "Jeux", "Lettres/Persuasion", "Renseignements", "Résistance à l'alcool", "Se cacher", "Sexualité",
        "Bagarre/Dévoué serviteur", "Doué (END)", "Doué (SOC)", "Esquive", "Festoyeur", "Provocation", "Relations", "Mensonge éhonté/Riposte", "Second souffle", "Solidité",
        "dague (RU+*FOR*-1)", "un costume de vilain pour passer inaperçu", "un costume de cour usé", "une fiole de parfum à moitié vide", "trois dés en os", "une bouteille de bon vin"],

    ["Gentilhomme/Hobereau",
        "Arme de mêlée (épée)", "Arme à distance (au choix)", "Charme", "Courage", "Discours", "Équitation", "Intimidation", "Jeux", "Lettres", "Noblesse et politique",
        "Coups précis/Coups puissants", "Dévoué serviteur", "Doué (SOC)", "Esquive", "Festoyeur", "Panache", "Provocation", "Réflexes éclairs", "Riposte", "Solidité/Vivacité",
        "un costume de voyage", "dague de bonne qualité (RU+*FOR*-1)", "pourpoint de cuir (protection+1)", "une fiole de parfum", "trois dés en os"],

    ["Diplomate/Conseiller",
        "Charme", "Diplomatie", "Discours", "Droit et usages", "Histoire", "Langue étrangère", "Lettres", "Noblesse et politique", "Persuasion", "Renseignements",
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)/Doué (PER)", "Doué (VOL)/Doué (SOC)", "Inoffensif", "Mémoire sans faille", "Mensonge éhonté", "Polyglotte/Prudent", "Relations",
        "deux habits de cour de grande qualité", "une fiole de parfum", "des bijoux d'une valeur de 2d10 pièces d'or"],

    ["Noble",
        "Charme", "Commerce", "Discours", "Droit et usages", "Écoute", "Histoire", "Lettres", "Noblesse et politique", "Persuasion", "Religion", 
        "Calme", "Dévoué serviteur", "Doué (CNS)", "Doué (SOC)", "Doué (VOL)", "Esprit de compétition", "Fascination", "Inoffensif", "Mémoire sans faille", "Relations", 
        "un costume de magistrat", "deux livres de Droit", "une main de papier (20 pages)", "une plume et un encrier"],

    // 3 : Artisans et commerçants      (16-23)
    ["Aubergiste/Tavernier",
        "Commerce", "Cuisine", "Droit et usages", "Intuition", "Légendes", "Persuasion", "Pugilat", "Renseignements", "Repérage", "Résistance à l'alcool",
        "Bagarre", "Calme", "Distraction", "Doué (END)/Doué (SOC)", "Festoyeur", "Guérison rapide", "Inspiration"," Mensonge éhonté/Polyglotte", "Provocation", "Solidité",
        "costume de bourgeois", "livre de comptes", "bonne bouteille d'alcool"],

    ["Chirurgien-barbier",
        "Arme de mêlée (Couteaux)", "Cheveux et barbe", "Commerce", "Courage", "Intuition", "Persuasion", "Premiers soins", "Repérage", "Résistance aux maladies", "Résistance à l'alcool", 
        "Calme", "Coup adroit", "Doué (END)", "Doué (HAB)", "Doué (VOL)", "Mains blanches", "Sain d'esprit", "Sauvegarde", "Second souffle", "Solidité" ,
        "hachoir (RU+*FOR*+0)",
        "rasoir", "ciseaux", "bandages", "nécessaire antipoison", "bouteille d'alcool fort", "corde de 10 mètres", "torche et boîte d'amadou"],

    ["Charpentier",
        "Architecture", "Attelages", "Commerce", "Droit et usages", "Estimation", "Milieu naturel (au choix)", "Renseignements", "Repérage", "Travail du bois", "Travaux de force",
        "Calme", "Dévoué serviteur", "Doué (END)", "Doué (HAB)", "Esprit de compétition", "Guérison rapide", "Inoffensif", "Second souffle", "Solidité", "Travail d'équipe",
        "marteau (RU+*FOR*-2)", 
        "clous", "outils de charpentier", "lanterne"],

    ["Colporteur/Itinérant",
        "Arme de mêlée (au choix)", "Attelages", "Commerce", "Estimation", "Milieu naturel (au choix)", "Persuasion", "Orientation", "Renseignements", "Repérage", "Soins des animaux", 
        "Calme", "Chance insolente/Confiance en soi", "Distraction", "Doué (SOC)/Doué (SUR)", "Fascination", "Inoffensif", "Polyglotte", "Provocation/Prudent", "Relations", "Second souffle",
        "costume de bourgeois", "livre de comptes", "mule et carriole", "2d10 articles de peu de valeur"],

    ["Forgeron/Armurier",
        "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Commerce", "Droit et usages", "Persuasion", "Pugilat", "Repérage", "Résistance à la chaleur", "Travail du métal", "Travaux de force",
        "Calme", "Coup adroit", "Coups précis", "Doué (END)", "Doué (FOR)", "Doué (HAB)", "Maîtrise du bouclier", "Port d'armure", "Second souffle", "Solidité",
        "marteau (RU+*FOR*-2)", `${armesdemelee}`, `${armesdemelee}`, `${armureslegeres}/${armuresmoyennes}`],

    ["Manouvrier/Portefaix",
        "Escalade", "Jeux", "Pugilat", "Repérage", "Résistance à l'alcool", "Résistance aux maladies", "Souffle", "Travail d'un matériau (au choix)", "Travail d'un matériau (au choix)", "Travaux de force",
        "Calme", "Doué (END)", "Doué (FOR)", "Doué (VOL)", "Festoyeur", "Gardien", "Guérison rapide", "Sauvegarde", "Solidité", "Travail d'équipe",
        "bouteille de mauvais vin"],

    ["Marchand/Négociant",
        "Charme", "Commerce", "Discours", "Droits et usages", "Estimation", "Intuition", "Lettres", "Persuasion", "Renseignements", "Travail d'un matériau (au choix)",
        "Compagnon animal/Dévoué serviteur", "Distraction", "Doué (SOC)", "Doué (CNS)/Doué (HAB)", "Fascination", "Inoffensif", "Mensonge éhonté/Sain d'esprit", "Polyglotte" , "Prudent", "Relations",
        "deux costumes de bourgeois", "livre de comptes", "plume et encrier", "1d10 parchemins", "2d10 articles à vendre de peu de valeur"],

    ["Mineur",
        "Arme de mêlée (pioche)/Arme de mêlée (marteau)", "Courage", "Écoute", "Jeux", "Milieu naturel (montagne)/Milieu naturel (forêt)", "Pugilat", "Résistance à l'alcool", "Résistance aux maladies", "Travail de la pierre", "Travaux de force",
        "Calme", "Chance insolente", "Doué (END)", "Doué (FOR)", "Festoyeur", "Gardien", "Guérison rapide", "Nyctalopie", "Sauvegarde", "Solidité",
        "pioche (RU+*FOR*+0)", 
        "lanterne"],

    // 4 : Bandits                      (24-31)
    ["Assassin/Tueur à gages",
        "Acrobaties", "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Crochetage", "Course/Contorsion", "Déplacement silencieux", "Escalade", "Poisons", "Repérage", "Se cacher",
        "Calme", "Coup en traître", "Coups précis/Tir précis", "Doué (DIS)", "Doué (MOU)", "Esquive/Réflexes éclairs", "Insaisissable", "Mensonge éhonté/Nyctalopie", "Pattes de chat/Sauvegarde", "Vivacité",
        "trois petites fioles de poison", "un masque", "des bottes de cuir souple"],

    ["Détrousseur/Truand",
        "Arme à distance (au choix)", "Arme de mêlée (légère au choix)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Estimation", "Fouille", "Intimidation", "Pugilat", "Repérage", "Se cacher",
        "Bagarre", "Coups puissants", "Distraction", "Doué (END)/Doué (FOR)", "Guérison rapide", "Nyctalopie", "Riposte", "Second souffle", "Surnombre", "Vivacité",
        "un objet extorqué il y a quelques jours (de petite valeur, à décider avec le MJ)", "des osselets ou trois dés en os"],

    ["Bandit de grand chemin",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Équitation", "Fouille", "Intimidation", "Milieu naturel (au choix)", "Persuasion", "Repérage", "Se cacher",
        "Bagarre/Compagnon animal", "Coup du prédateur", "Coups puissants", "Panache", "Esquive/Guérison rapide", "Inspiration", "Solidité/Surnombre", "Tireur d'élite", "Tir du chasseur", "Vivacité",
        `${armesdetir}/pistolet à poudre (RU+4) avec 10 munitions`, 
        "un cheval avec sa selle et son harnais", "un masque"],

    ["Hors-la-loi/Rebelle",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Équitation", "Fouille", "Intimidation"," Milieu naturel (au choix)", "Persuasion", "Repérage", "Se cacher",
        "Bagarre/Calme", "Coups puissants", "Doué (MOU)/Doué (SUR)", "Dévoué serviteur/Inspiration", "Panache", "Réflexes éclairs", "Second souffle", "Surnombre", "Tir du chasseur", "Vivacité",
        `${armesdetir}`, 
        "un capuchon", "trois torches", "une boîte d'amadou"],

    ["Pirate",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Escalade", "Jeux", "Natation", "Navigation", "Noeuds", "Orientation", "Résistance à l'alcool", "Résistance aux maladies", 
        "Bagarre", "Coups précis", "Doué (END)", "Doué (SUR)", "Esquive", "Festoyeur", "Pattes de chat", "Instinct de survie", "Sauvagerie", "Solidité",
        "une corde de 10 mètres et un grappin", "une lanterne", "une bouteille d'alcool"],

    ["Ribaud",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Equitation", "Fouille", "Intimidation", "Milieu naturel (au choix)", "Pistage", "Pugilat", "Repérage", "Se cacher",
        "Calme", "Compagnon animal", "Coup en traître", "Doué (PER)", "Doué (SUR)", "Instinct de survie", "Second souffle", "Solidité", "Surnombre", "Vivacité",
        "une torche"],

    ["Racketteur",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Fouille", "Intimidation", "Persuasion", "Pugilat", "Renseignements", "Repérage", "Se cacher",
        "Bagarre", "Calme/Coups puissants", "Confiance en soi", "Coup en traître", "Dévoué serviteur/Mensonge éhonté", "Doué (FOR)", "Esquive", "Nyctalopie", "Solidité", "Surnombre",
        "1d10 pièces d'argent", "un long manteau"],

    ["Voleur de bétail",
        "Animaux", "Arme à distance (légère)", "Arme légère (au choix)", "Attelages", "Course", "Déplacement silencieux", "Équitation", "Milieu naturel (au choix)", "Repérage", "Se cacher",
        "Chance insolente", "Compagnon animal", "Coup en traître", "Doué (DIS)", "Doué (SUR)", "Instinct de survie/Réflexes éclairs", "Nyctalopie", "Solidité", "Tir du chasseur", "Vivacité",
        "une corde de 10 mètres", "une lanterne", "un sifflet en terre cuite"],

    // 5 : Bateleurs et saltimbanques   (32-39)

    ["Acrobate/Jongleur",
        "Acrobaties", "Charme", "Contorsion", "Déguisement", "Discours", "Escalade", "Équitation", "Jonglerie", "Noeuds", "Premiers soins", 
        "Calme", "Coup acrobatique", "Doué (MOU)", "Doué (END)", "Esprit de compétition", "Esquive", "Pattes de chat", "Réflexes éclairs", "Spectacle", "Vivacité",
        "1d10 balles de jonglage", "liquide de cracheur de feu", "cinq torches", "un briquet à amadou"],

    ["Diseur de bonne aventure",
        "Domaine magique (Divination)", "Charme", "Chiromancie", "Commerce", "Écoute", "Intuition", "Légendes", "Persuasion", "Repérage", "Taromancie", 
        "Calme", "Chance insolente/Confiance en soi", "Doué (PER)", "Doué (SOC)/Doué (VOL)", "Fascination", "Inoffensif", "Inspiration", "Magie invisible", "Mémoire sans faille/Nyctalopie", "Mensonge éhonté",
        "boule de cristal/jeu de Tarot ancien", "divers foulards donnant un air mystérieux", "un rat de compagnie rusé/un hibou de compagnie rusé/un chat noir de compagnie rusé"],

    ["Comédien/Ventriloque",
        "Arts", "Charme", "Comédie", "Déguisement", "Discours", "Intuition", "Légendes", "Lettres", "Résistance aux privations", "Ventriloquie",
        "Confiance en soi", "Chance insolente/Panache", "Distraction", "Doué (CNS)/Doué (SOC)", "Fascination", "Inspiration", "Inoffensif", "Mensonge éhonté/Mémoire sans faille", "Provocation/Relations", "Spectacle",
        "costume de bourgeois usé", "trois masques", "trois costumes de scènes colorés", "nécessaire de maquillage", "plume et encrier", "main de papier (20 pages)", "une épée de théâtre inoffensive"],

    ["Dresseur",
        "Animaux", "Arme de mêlée (arme contondante ou fouet)", "Courage", "Dressage", "Equitation", "Milieu naturel (au choix)", "Premiers soins", "Résistance aux maladies", "Résistance aux poisons", "Soins des animaux",
        "Bagarre", "Calme", "Compagnon animal", "Coup du prédateur", "Doué (SUR)", "Esquive", "Instinct de survie", "Solidité", "Spectacle", "Vivacité",
        "gambison (protection+1)/plastron de cuir(protection+1)",
        "un ou plusieurs animaux dressés (à décider avec le MJ)", "fouet (RU+*FOR*-2)", "nécessaire antipoison", "gants rembourrés"],

    ["Lanceur",
        "Arme à distance (couteaux de lancer)", "Arme légère (couteau)", "Charme", "Comédie", "Courage", "Déguisement", "Discours", "Intimidation", "Premiers soins", "Repérage",
        "Calme", "Chance insolente", "Doué (PER)", "Esprit de compétition", "Réflexes éclairs", "Tir ciblé", "Tir précis", "Tireur d'élite", "Spectacle", "Solidité",
        "1d10 couteaux de lancer (RU+*FOR*-1)", 
        "une corde de dix mètres", "un bandeau (pour se cacher les yeux)", "trois torches"],

    ["Ménestrel/Musicien",
        "Charme", "Comédie", "Discours", "Jeux", "Légendes", "Lettres", "Musique et chant", "Renseignements", "Résistance aux privations", "Se cacher", 
        "Chance insolente/Confiance en soi", "Distraction", "Doué (HAB)", "Doué (PER)", "Doué (SOC)", "Inoffensif", "Inspiration", "Mensonge éhonté", "Réflexes éclairs", "Spectacle",
        "un costume de cour usé", "un costume vert de spectacle", "deux instruments de musique au choix (flûte, mandoline, tambourin, luth…)"],

    ["Lutteur",
        "Acrobaties", "Arme légère (au choix)", "Arme de mêlée (au choix)", "Charme", "Escalade", "Intimidation", "Jeux", "Pugilat", "Résistance aux maladies", "Résistance aux privations/Travaux de force",
        "Bagarre", "Coups puissants", "Coups précis", "Doué (END)", "Doué (FOR)", "Esquive", "Guérison rapide", "Riposte", "Second souffle", "Solidité",
        `${batons}`, 
        "un costume de scène seyant", "des gants de cuir"],


    ["Prestidigitateur/Escamoteur",
        "Charme", "Discours", "Dissimulation d'objets", "Intuition", "Jeux", "Légendes", "Passe-passe", "Persuasion", "Renseignements", "Repérage",
        "Coup adroit/Coup en traître", "Distraction", "Doué (HAB)", "Doué (SOC)", "Fascination", "Inspiration", "Panache", "Prudent", "Spectacle", "Vivacité",
        "costume de bourgeois", "un jeu de cartes normal et un autre truqué", "trois dés en os"],

    // 6 : Érudits et lettrés           (40-47)
    ["Apothicaire/Herboriste",
        "Botanique", "Commerce", "Légendes", "Lettres", "Médecine", "Milieu naturel (au choix)", "Poisons", "Potions et remèdes", "Premiers soins", "Résistance aux poisons", 
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)", "Doué (HAB)/Doué (SUR)", "Inoffensif", "Mains blanches", "Prudent", "Relations", "Second souffle", 
        "livre de comptes", "besace contenant 2d10 herbes médicinales ou nocives (au choix)", "herbier", "mortier", "pilon et 1d10 grands bocaux"],

    ["Avocat/Procureur",
        "Charme", "Discours"," Droit et usages", "Histoire", "Intimidation", "Intuition", "Lettres", "Noblesse et politique", "Persuasion", "Renseignements", 
        "Dévoué serviteur", "Distraction", "Doué (CNS)", "Doué (SOC)", "Doué (VOL)", "Esprit de compétition", "Fascination", "Inoffensif", "Mémoire sans faille", "Relations",
        "deux livres de Droit", "costume d'avoué (selon la région)"],

    ["Architecte",
        "Architecture", "Commerce", "Droit et usages", "Histoire", "Noblesse et politique", "Persuasion", "Renseignements", "Repérage", "Travail de la pierre", "Travail du bois", 
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)/Doué (HAB)", "Doué (PER)/Doué (SOC)", "Esprit de compétition", "Mémoire sans faille", "Polyglotte", "Prudent/Sain d'esprit", "Relations",
        "costume de cour", "instruments de mesure"],

    ["Cartographe",
        "Cartographie", "Diplomatie", "Histoire", "Langue étrangère (au choix)", "Lettres", "Milieu naturel (au choix)", "Navigation", "Noblesse et politique", "Orientation", "Repérage",
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)/Doué (HAB)", "Doué (PER)", "Esprit de compétition", "Mémoire sans faille", "Polyglotte", "Prudent", "Relations",
        "deux costumes de cour", "outils de cartographe"],

    ["Estudiant",
        "Arts ou Droit et usages", "Histoire ou Lettres", "Médecine ou Religion", "Charme", "Jeux", "Persuasion", "Pugilat", "Renseignements", "Résistance à l'alcool", "Se cacher",
        "Bagarre", "Chance insolente", "Distraction", "Doué (CNS)/Doué (END)", "Doué (SOC)", "Festoyeur", "Guérison rapide/Mensonge éhonté", "Mémoire sans faille", "Provocation", "Second souffle",
        "couteau (RU+*FOR*-1)/gourdin (RU+*FOR*-2)", 
        "bouteille de vin", "trois dés en os ou un jeu de cartes"],

    ["Médecin/Docteur",
        "Botanique", "Commerce", "Intuition", "Lettres", "Médecine", "Persuasion", "Potions", "Premiers soins", "Repérage", "Résistance aux maladies",
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)", "Doué (HAB)/Doué (VOL)", "Mains blanches", "Mémoire sans faille", "Relations", "Sain d'esprit", "Second souffle",
        "un costume bourgeois de qualité", "une besace contenant des outils de médecin (lancettes, urinoir, aiguilles)", "un masque à bec"],

    ["Ingénieur/Inventeur",
        "Armes à distance (armes à feu)", "Armes de mêlée (au choix)", "Commerce", "Droit et usages", "Ingénierie", "Légendes", "Persuasion", "Repérage", "Travail d'un matériau (au choix)", "Travail d'un matériau (au choix)",
        "Calme", "Confiance en soi", "Dévoué serviteur", "Doué (CNS)/Doué (HAB)", "Esprit de compétition", "Inoffensif", "Mémoire sans faille", "Polyglotte", "Prudent", "Relations/Sauvegarde",
        "instruments de mesure"],

    ["Scribe/Écrivain public",
        "Commerce", "Droit et usages", "Écoute", "Histoire", "Langue étrangère (au choix)", "Légendes", "Lettres", "Persuasion", "Religion", "Renseignements", 
        "Calme", "Confiance en soi", "Distraction", "Doué (CNS)", "Doué (HAB)/Doué (PER)", "Doué (SOC)", "Inoffensif", "Mémoire sans faille", "Polyglotte", "Relations/Sain d'esprit",
        "une écritoire portative", "de la cire à cacheter", "2 plumes", "deux mains de papier et un encrier supplémentaire"],

    // 7 : Filous et roublards          (45-55)
    ["Agitateur/Anarchiste",
        "Arme de mêlée ou à distance légère (au choix)", "Charme", "Courage", "Discours", "Intuition", "Lettres/Noblesse et politique", "Persuasion", "Pugilat", "Renseignements", "Se cacher",
        "Bagarre", "Chance insolente/Panache", "Distraction", "Doué (SOC)/Doué (VOL)", "Esquive", "Fascination", "Insaisissable", "Maîtrise de la poudre", "Provocation", "Second souffle/Mensonge éhonté",
        "costume de bourgeois", "2d10 tracts incitant à la rébellion", "deux torches"],

    ["Charlatan/Escroc",
        "Charme", "Commerce", "Course", "Dissimulation d'objets", "Légendes", "Lettres", "Persuasion", "Renseignements", "Repérage", "Se cacher",
        "Chance insolente", "Distraction", "Confiance en soi/Doué (CNS)", "Doué (SOC)", "Esquive", "Fascination", "Inoffensif", "Mensonge éhonté", "Panache", "Polyglotte/Provocation",
        "costume de bourgeois usé", "1d10 articles d'escroqueries ou de contrefaçons tels que des remèdes", "des poudres miracles", "des fausses reliques", "des laissez-passer"],

    ["Cambrioleur/Monte-en-l'air",
        "Arme à distance (au choix)", "Arme légère (au choix)", "Crochetage", "Déplacement silencieux", "Dissimulation d'objets", "Écoute", "Escalade", "Fouille", "Repérage", "Se cacher",
        "Calme", "Chance insolente", "Coup acrobatique/Coup en traître", "Doué (DIS)", "Doué (HAB)", "Doué (MOU)", "Esquive", "Insaisissable", "Pattes de chat", "Réflexes éclairs/Vivacité",
        "jeu de crochets", "paire de gants noirs", "corde de 10 mètres et grappin"],

    ["Contrebandier/Receleur",
        "Arme de mêlée (au choix)", "Commerce", "Déplacement silencieux", "Dissimulation d'objets", "Droit et usages", "Estimation", "Persuasion", "Renseignements", "Repérage", "Se cacher",
        "Bagarre", "Calme", "Confiance en soi", "Coup en traître", "Doué (DIS)", "Doué (SOC)", "Esquive", "Nyctalopie", "Mensonge éhonté/Sixième sens", "Solidité/Vivacité",
        `${armesdemeleesimples}/${armesdetrait}`, 
        "barque contenant 2d10 marchandises non déclarées/illégales de peu de valeur/chariot contenant 2d10 marchandises non déclarées/illégales de peu de valeur"],

    ["Espion",
        "Charme", "Crochetage", "Déplacement silencieux", "Déguisement", "Écoute", "Fouille", "Noblesse et politique", "Renseignements", "Repérage", "Se cacher",
        "Calme", "Confiance en soi", "Coup en traître", "Doué (DIS)", "Doué (PER)", "Doué (SOC)", "Fascination", "Mensonge éhonté/Nyctalopie", "Réflexes éclairs/Vivacité", "Relations/Sixième sens",
        "costume au choix (bourgeois ou noble)", "nécessaire à maquillage", "plume et encrier", "1d10 parchemins"],

    ["Pilleur de tombes",
        "Arme de mêlée (au choix)", "Contorsion", "Courage", "Crochetage", "Déplacement silencieux", "Dissimulation d'objets", "Pièges", "Résistance aux maladies", "Se cacher", "Travaux de force",
        "Calme", "Chance insolente", "Doué (END)", "Doué (VOL)", "Esquive", "Guérison rapide", "Nyctalopie", "Pattes de chat", "Résilience", "Solidité", 
        `${armesdemeleesimples}`, `${armureslegeres}`,
        "une corde de 10 mètres et un grappin", "une lanterne et une pelle"],

    ["Joueur professionnel",
        "Charme", "Course", "Dissimulation d'objets", "Droit et usages", "Intuition", "Jeux", "Persuasion", "Pugilat", "Renseignements", "Repérage",
        "Chance insolente", "Coup adroit", "Distraction", "Doué (HAB)/Doué (SOC)", "Esquive", "Fascination", "Festoyeur", "Mensonge éhonté", "Panache", "Provocation",
        "un costume de bourgeois", "des bijoux d'une valeur de 2d10 pièces d'or", "trois dés en os", "un paquet de cartes", "des bottes en cuir"],

    ["Tire-laine/Vide-gousset",
        "Acrobaties", "Arme de mêlée ou à distance légère (au choix)", "Course", "Déplacement silencieux", "Dissimulation d'objets", "Escalade", "Passe-passe", "Repérage", "Se cacher", "Vol à la tire", 
        "Chance insolente", "Coup acrobatique/Coup en traître", "Doué (DIS)", "Doué (HAB)", "Doué (PER)", "Esquive", "Insaisissable", "Pattes de chat", "Réflexes éclairs", "Vivacité",
        "un objet volé il y a une semaine (de petite valeur, à décider avec le MJ)"],

    // 8 : Forestiers et paysans        (56-63)
    ["Batelier",
        "Canotage", "Commerce", "Langue étrangère (au choix)", "Milieu naturel (au choix)", "Natation", "Navigation", "Orientation", "Renseignements", "Repérage", "Résistance aux maladies",
        "Calme", "Confiance en soi", "Doué (PER)", "Doué (SUR)", "Esquive", "Gardien", "Instinct de survie", "Sauvegarde", "Sixième sens", "Solidité",
        "barque", "filet"],

    ["Bûcheron",
        "Arme de mêlée (haches & masses)", "Milieu naturel (au choix)", "Milieu naturel (forêt)", "Premiers soins", "Pugilat", "Orientation", "Résistance à l'alcool", "Résistance aux maladies", "Résistance aux poisons", "Travail du bois/Travaux de force",
        "Calme", "Compagnon animal", "Coup du prédateur", "Coups puissants", "Doué (END)", "Doué (FOR)", "Doué (SUR)", "Instinct de survie", "Sauvagerie", "Solidité", 
        "cognée (RU+*FOR*+0)", 
        "quelques plantes médicinales contre le poison"], 

    ["Berger/Pâtre",
        "Animaux", "Arme de tir (fronde)", "Écoute", "Élevage", "Milieu naturel (au choix)", "Orientation", "Pistage", "Repérage", "Résistance aux maladies", "Soins des animaux",
        "Calme", "Compagnon animal", "Doué (END)/Doué (MOU)", "Doué (PER)", "Doué (SUR)", "Esquive", "Instinct de survie", "Guérison rapide/Solidité", "Sauvegarde", "Tir du chasseur",
        "fronde (RU+*FOR*-1) et 10 munitions", 
        "gilet de laine", "bonne couverture", "flûte", "chien de garde aux poils longs"],

    ["Chasseur/Trappeur",
        "Animaux", "Botanique", "Arme à distance (arc)", "Arme de mêlée (couteaux)", "Déplacement silencieux", "Milieu naturel (au choix)", "Orientation", "Pièges", "Pistage", "Repérage",
        "Calme", "Compagnon animal", "Coup du prédateur", "Doué (DIS)", "Doué (SUR)", "Esquive/Festoyeur", "Instinct de survie", "Second souffle", "Tir du chasseur", "Tir précis",
        "arc long (RU+*FOR*+0) et 10 flèches", 
        "deux collets", "un nécessaire antipoison"],

    ["Guide-convoyeur",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Attelages", "Écoute", "Équitation", "Milieu naturel (au choix)", "Milieu naturel (au choix)/Courage", "Orientation", "Premiers soins", "Repérage",
        "Calme", "Coup du prédateur", "Doué (PER)", "Doué (SUR)", "Gardien", "Instinct de survie", "Riposte", "Solidité", "Sixième sens/Sauvegarde", "Tir du chasseur",
        "cheval avec selle et harnais", "corde", "lanterne", "sifflet en terre cuite"],

    ["Paysan/Journalier",
        "Agriculture", "Animaux", "Course", "Milieu naturel (au choix)", "Milieu naturel (au choix)/Orientation", "Pugilat", "Renseignements", "Repérage", "Résistance aux privations", "Résistance aux maladies",
        "Bagarre", "Esquive", "Calme", "Compagnon animal", "Doué (END)", "Doué (HAB)/Doué (SUR)", "Festoyeur", "Inoffensif", "Instinct de survie", "Solidité", 
        "fronde (RU+*FOR*-1)/fourche (RU+*FOR*-1)"],

    ["Marin",
        "Arme de mêlée (au choix)", "Canotage/Courage", "Escalade", "Jeux", "Navigation", "Natation", "Noeuds/Orientation", "Pugilat", "Résistance à l'alcool", "Résistance aux maladies",
        "Bagarre", "Chance insolente", "Doué (END)", "Doué (HAB)", "Festoyeur", "Instinct de survie", "Second souffle", "Sauvegarde", "Solidité", "Vivacité",
        `${armesdemeleesimples}`, 
        "corde de 10 mètres et grappin", "bouteille d'alcool"],

    ["Pêcheur",
        "Canotage", "Milieu naturel (au choix)", "Natation", "Navigation", "Orientation", "Pêche", "Renseignements", "Repérage", "Résistance aux maladies", "Travaux de force",
        "Calme", "Chance insolente", "Compagnon animal", "Doué (END)", "Doué (HAB)", "Doué (PER)", "Doué (SUR)", "Festoyeur/Inoffensif", "Instinct de survie", "Solidité",
        "barque", "canne à pêche", "fil et hameçons", "filet"],

    // 9 : Guerriers et bretteurs       (64-71)
    ["Archer/Arbalestrier",
        "Arme à distance (arc)", "Arme à distance (arbalète)", "Arme de mêlée (au choix)", "Course", "Déplacement silencieux", "Équitation", "Premiers soins", "Repérage", "Se cacher", "Stratégie/Vigilance",
        "Calme", "Doué (MOU)", "Doué (PER)", "Prudent/Recharge rapide", "Réflexes éclairs", "Solidité", "Tir ciblé", "Tireur d'élite", "Tir précis", "Vivacité",
        "trois torches", "un briquet à amadou"],

    ["Chasseur de primes",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Course", "Déplacement silencieux", "Équitation", "Milieu naturel (au choix)/Renseignements", "Pièges", "Pistage", "Repérage", "Se cacher", 
        "Calme", "Coups précis", "Doué (DIS)", "Doué (PER)", "Nyctalopie", "Résilience", "Riposte", "Second souffle/Sixième sens", "Tir précis", "Vivacité",
        "un cheval avec sa selle et son harnais", "une torche", "une corde de 10 mètres", "un filet"],

    ["Champion/Gladiateur",
        "Acrobaties", "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Arme de mêlée (au choix)", "Arme de mêlée (au choix)", "Courage", "Intimidation", "Premiers soins", "Pugilat", "Vigilance",
        "Bagarre", "Coup de maître", "Coups précis", "Coups puissants", "Doué (END)/Doué (FOR)", "Esquive/Maîtrise du bouclier", "Maître d'armes", "Sauvagerie", "Second souffle", "Port d'armure/Vivacité",
        `${armesdemelee}`, 
        "des bandages"],

    ["Combattant des tunnels",
        "Arme à distance (arbalète)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Écoute", "Milieu naturel (montagnes)", "Orientation", "Pugilat", "Repérage", "Résistance aux maladies", "Travaux de force",
        "Bagarre", "Coups précis", "Coups puissants", "Doué (END)", "Maîtrise du bouclier", "Nyctalopie", "Port d'armure", "Second souffle", "Recharge rapide/Sixième sens", "Solidité/Tir précis",
        "une lanterne", "des fourrures", "une corde de 10 mètres et un grappin"], 

    ["Garde de corps/Estafier",
        "Arme de mêlée lourde (au choix)", "Arme de mêlée (au choix)", "Courage", "Course", "Intimidation", "Jeux", "Pugilat", "Repérage", "Résistance à l'alcool", "Résistance aux poisons",
        "Bagarre", "Calme", "Coups puissants", "Coups précis", "Doué (END)/Doué (FOR)", "Gardien", "Riposte", "Second souffle", "Solidité/Sixième sens", "Sauvegarde",
        "un costume de bourgeois", "des bandages", "une lanterne"],

    ["Tueur de monstres",
        "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Courage", "Déplacement silencieux", "Milieu naturel (au choix)", "Pistage", "Repérage", "Résistance à la magie", "Résistance aux maladies", "Résistance aux poisons",
        "Bagarre", "Coups puissants", "Doué (END)", "Doué (PER)", "Maître d'armes", "Maîtrise du bouclier", "Sauvagerie", "Sixième sens", "Solidité", "Vivacité",
        "la tête d'un ennemi tué au combat (animal, humanoïde ou monstre)"],

    ["Mercenaire",
        "Arme à distance (au choix)", "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Commandement", "Équitation", "Intimidation", "Milieu naturel (au choix)", "Premiers soins", "Pugilat", "Stratégie",
        "Bagarre", "Coup de maître", "Coups puissants", "Coups précis", "Doué (FOR)", "Esquive/Maîtrise du bouclier", "Maître d'armes", "Riposte", "Solidité", "Sauvegarde/Tir précis",
        "une bouteille d'alcool"],

    ["Spadassin/Duelliste",
        "Acrobaties", "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Arme de mêlée (au choix)", "Charme", "Courage", "Deux armes", "Intimidation", "Jeux", "Premiers soins",
        "Bagarre", "Calme", "Coup de maître", "Coups puissants", "Maître d'armes", 'Réflexes éclairs', 'Riposte', 'Second souffle', 
        "un costume de cour", "des bandages", "trois dés en os", "une bonne bouteille de vin"],

    // 10 : Hommes d'armes et soldats   (72-79)
    ["Artilleur/Pétardier",
        "Arme de mêlée (au choix)", "Armes à distance (arme à poudre)", "Bombardes et explosifs", "Canons et balistes", "Courage", "Premiers soins", "Repérage", "Résistance à la chaleur", "Stratégie", "Travaux de force",
        "Calme", "Doué (END)", "Doué (VOL)", "Guérison rapide", "Maîtrise de la poudre", "Recharge rapide", "Second souffle", "Solidité", "Tireur d'élite", "Tir ciblé",
        `${armesapoudre}`],

    ["Cavalier",
        "Arme à distance (au choix)", "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Commandement", "Équitation", "Intimidation", "Orientation", "Premiers soins", "Soins des animaux", "Stratégie",
        "Compagnon animal", "Coup acrobatique", "Coups puissants", "Doué (MOU)", "Esprit de compétition", "Esquive/Maîtrise du bouclier", "Maître d'armes", "Réflexes éclairs", "Riposte", "Solidité",
        `${lances}`, `${armesdetir}`,
        "un cheval avec sa selle et son harnais"],

    ["Bourreau",
        "Arme de mêlée (au choix)", "Courage", "Intimidation", "Premiers soins", "Pugilat", "Renseignements", "Résistance à l'alcool", "Résistance aux maladies", "Torture", "Travaux de force",
        "Bagarre", "Brute/Calme", "Coups puissants", "Doué (END)/Doué (FOR)", "Doué (VOL)", "Guérison rapide", "Résilience", "Sain d'esprit", "Sauvegarde", "Solidité",
        `${hachesàdeuxmains}`,
        "vêtements de vilain", "une corde de 10 mètres", "une cagoule noire de bourreau"],

    ["Éclaireur",
        "Animaux", "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Déplacement silencieux", "Equitation", "Milieu naturel (au choix)", "Milieu naturel (au choix)", "Pièges", "Pistage", "Se cacher",
        "Calme", "Coup du prédateur", "Doué (MOU)", "Doué (PER)", "Doué (SUR)", "Esquive", "Instinct de survie", "Sixième sens", "Solidité", "Tir du chasseur",
        `${armesdetir}`],

    ["Garde",
        "Arme à distance (arc ou arbalète)", "Arme de mêlée (au choix)", "Commandement", "Course", "Fouille", "Intimidation", "Pugilat", "Repérage"," Résistance à l'alcool", "Stratégie",
        "Bagarre", "Calme", "Coups puissants", "Doué (END)/Doué (MOU)", "Doué (PER)", "Gardien", "Maîtrise du bouclier", "Second souffle", "Sixième sens/Sauvegarde", "Solidité",
        `${armesdhast}`, `${boucliers}`, "un casque à plume (protection+1)"],
    
    ["Patrouilleur/Garde-route",
        "Arme à distance (au choix)", "Arme de mêlée (au choix)", "Écoute", "Équitation", "Intimidation", "Milieu naturel (au choix)", "Orientation", "Pièges", "Pistage", "Repérage", 
        "Bagarre", "Calme", "Coup du prédateur", "Coups puissants", "Doué (MOU)", "Doué (PER)", "Instinct de survie", "Sixième sens", "Solidité", "Tir du chasseur", 
        `${armesadistance}`, "bouclier en bois (protection+1)",
        "un cheval avec sa selle et son harnais", "une corde de 10 mètres et un grappin", "une lanterne"],

    ["Limier",
        "Arme de mêlée (au choix)", "Crochetage/Droit et usages", "Déplacement silencieux", "Fouille", "Intimidation", "Repérage", "Intuition", "Renseignements", "Se cacher", "Torture/Vigilance",
        "Calme", "Confiance en soi", "Coups précis", "Doué (DIS)/Doué (PER)", "Mémoire sans faille", "Nyctalopie", "Prudent", "Sain d'esprit/Second souffle", "Sixième sens", "Vivacité",
        "Une cape sombre", "une lanterne"],

    ["Soldat",
        "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Commandement", "Course", "Escalade", "Intimidation", "Jeux", "Milieu naturel (au choix)", "Résistance à l'alcool", "Stratégie",
        "Bagarre", "Coups précis", "Coups puissants", "Cri de guerre", "Doué (END)/Doué (FOR)", "Doué (VOL)", "Maître d'armes", "Maîtrise du bouclier", "Second souffle", "Sauvegarde/Solidité",
        `${armesdhast}`, "casque (protection+1)"],

    // 11 : Magiciens et thaumaturges   (80-87)
    ["Alchimiste",
        "Domaine magique (alchimie)", `${domaineMagique}`,"Bombardes et explosifs", "Botanique", "Légendes", "Lettres", "Milieu naturel (au choix)", "Occultisme", "Poisons", "Potions et remèdes",
        "Calme", "Dévoué serviteur", "Doué (CNS)", "Doué (VOL)", "Magie destructrice", "Magie invisible", "Magie sanglante", "Maîtrise de la poudre", "Nyctalopie", "Souffle de vie", 
        "1d10 potions", "remèdes ou poisons déjà préparés (à décider avec le MJ)"], 
        
    ["Élémentaliste",
        `${domaineElementaire}`, `${domaineElementaire}`, "Courage", "Écoute", "Milieu naturel (au choix)", "Milieu naturel (au choix)", "Occultisme", "Orientation", "Repérage", "Résistance à la magie",
        "Calme", "Compagnon animal/Coup du prédateur", "Doué (SUR)/Doué (VOL)", "Instinct de survie", "Magie destructrice", "Magie innée", "Magie sanglante", "Nyctalopie", "Solidité", "Sort fétiche",
        "un bâton de marche gravé des quatre symboles élémentaires triangulaires"],

    ["Astrologue/Devin",
        "Domaine magique (divination)", "Astrologie", "Discours", "Légendes", "Lettres", "Milieu naturel (au choix)", "Occultisme", "Persuasion", "Potions et remèdes", "Résistance à la magie",
        "Calme", "Chance insolente", "Doué (CNS)/Doué (PER)", "Doué (VOL)", "Esprit gardien", "Fascination", "Magie invisible", "Magie sanglante", "Nyctalopie", "Sixième sens",
        "jeu de tarot divinatoire", "précis d'astrologie"],

    ["Illusionniste",
        "Domaine magique (illusions)", `${domaineMagique}`, "Charme", "Discours", "Intuition", "Légendes", "Lettres", "Occultisme", "Passe-passe", "Résistance à la magie", 
        "Chance insolente", "Coup surnaturel", "Distraction", "Doué (CNS)/Doué (SOC)", "Panache", "Magie contrôlée", "Magie innée", "Magie invisible", "Mensonge éhonté", "Nyctalopie/Spectacle",
        "jeu de cartes", "baguette d'illusionniste en bois"],

    ["Juge-mage",
        `${domaineMagique}`, `${domaineMagique}`, "Discours",  "Fouille", "Intuition", "Lettres/Occultisme", "Noblesse et politique", "Persuasion", "Renseignements", "Repérage",
        "Calme", "Dévoué serviteur", "Doué (CNS)/Doué (PER)", "Esprit gardien", "Magie contrôlée", "Magie innée", "Magie invisible", "Mémoire sans faille", "Nyctalopie/Sain d'esprit", "Sort fétiche",
        "livre de loi", "main de papier (20 pages)", "plume et encrier"],

    ["Nécromancien",
        "Domaine magique (nécromancie)", `${domaineMagique}`, "Histoire", "Légendes", "Médecine", "Occultisme", "Premiers soins", "Religion", "Résistance aux maladies", "Résistance à la magie",
        "Calme", "Compagnon animal", "Doué (END)/Doué (VOL)", "Esprit gardien", "Magie contrôlée", "Magie destructrice", "Magie innée", "Magie insidieuse", "Magie sanglante", "Résistance magique",
        "stylet (RU+*FOR*-2)"],

    ["Magelame",
        `${domaineMagique}`, `${domaineMagique}`, "Acrobaties", "Arme de mêlée (au choix)", "Arme de mêlée (épée)", "Légendes", "Lettres", "Occultisme", "Résistance à la magie", "Travail du métal",
        "Confiance en soi", "Coup surnaturel", "Coups précis", "Esquive", "Maître d'armes", "Magie destructrice", "Magie sanglante", "Réflexes éclairs", "Riposte", "Vivacité",
        `${epeequalitesuperieure}`, "plastron de cuir (protection+1)",
        "un habit de cour", "un habit de bourgeois", "un chapeau à plumes", "des gants"],

    ["Sorcier",
        `${domaineMagique}`, `${domaineMagique}`, "Botanique", "Courage", "Légendes", "Lettres", "Occultisme", "Potions et remèdes", "Résistance à la magie", "Se cacher",
        "Calme/Coup surnaturel", "Compagnon animal/Dévoué serviteur", "Doué (CNS)/Doué (VOL)", "Esprit gardien", "Magie contrôlée/Magie destructrice", "Magie sanglante", "Magie invisible", "Magie innée", "Nyctalopie", "Sort fétiche",
        "une amulette", "une bague ou une baguette de bois", "gravée de symboles occultes"],

    // 12 : Parias et miséreux          (88-95)
    ["Chiffonier",
        "Arme légère (au choix)", "Faire pitié", "Fouille", "Milieu naturel (au choix)", "Pugilat", "Renseignements", "Repérage", "Résistance aux privations", "Résistance aux maladies", "Se cacher",
        "Bagarre", "Compagnon animal", "Doué (END)", "Doué (PER)", "Doué (SUR)", "Inoffensif", "Instinct de survie", "Nyctalopie/Sauvegarde", "Second souffle", "Solidité",
        "une carriole", "trois besaces contenant divers objets trouvés dans les ordures"],

    ["Mendiant",
        "Arme de mêlée légère (au choix)", "Déplacement silencieux", "Faire pitié", "Fouille", "Persuasion", "Pugilat", "Renseignements", "Repérage", "Résistance aux maladies", "Résistance aux privations/Se cacher",
        "Compagnon animal", "Coup en traître", "Distraction", "Doué (DIS)", "Doué (END)", "Doué (PER)", "Inoffensif", "Insaisissable", "Instinct de survie/Réflexes éclairs", "Nyctalopie",
        "bâton (RU+*FOR*-2)",
        "une sébile",],

    ["Égoutier",
        "Arme légère (au choix)", "Contorsion", "Courage", "Déplacement silencieux", "Écoute", "Escalade", "Natation", "Orientation/Vigilance", "Repérage", "Résistance aux maladies",
        "Combat au sol/Sauvegarde", "Compagnon animal", "Doué (END)", "Doué (SUR)", "Doué (VOL)", "Esquive", "Instinct de survie", "Nyctalopie", "Solidité",
        `${batons}`, 
        "une lanterne", "une corde de 10 mètres", "une étoffe pour le nez", "des hautes bottes de cuir souple"],

    ["Prostitué",
        "Charme", "Contorsion", "Danse", "Écoute", "Renseignements", "Repérage", "Résistance aux maladies", "Résistance aux privations", "Se cacher", "Sexualité", 
        "Calme", "Distraction", "Doué (DIS)", "Doué (END)", "Doué (SOC)", "Fascination", "Mensonge éhonté", "Provocation", "Relations", "Résilience", 
        "des habits affriolants", "un nécessaire à maquillage", "une fiole de parfum à moitié vide"],

    ["Ratier",
        "Animaux", "Arme de mêlée (légère au choix)", "Contorsion", "Déplacement silencieux", "Écoute", "Pièges", "Pistage", "Repérage", "Résistance aux maladies", "Résistance aux poisons",
        "Calme", "Combat au sol", "Compagnon animal", "Coup du prédateur", "Doué (END)", "Doué (PER)", "Doué (SUR)", "Instinct de survie", "Nyctalopie", "Second souffle", 
        `${armesdemeleelegere}`, 
        "perche où sont cloués 1d10 rats", "lanterne", "corde de 10 mètres", "chien petit mais vicieux/deux chats dressés", "sifflet en terre cuite", "boulettes de pain empoisonnées"],

    ["Trafiquant de cadavres",
        "Arme de mêlée (au choix)", "Déplacement silencieux", "Légendes", "Premiers soins", "Repérage", "Résistance à la magie", "Résistance aux maladies", "Résistance aux poisons", "Se cacher", "Travaux de force",
        "Calme", "Combat au sol", "Coup en traître", "Doué (DIS)", "Doué (END)", "Doué (VOL)", "Nyctalopie", "Résilience", "Second souffle", "Solidité", 
        `${armesdemeleelegere}`, "pèlerine sombre", "gants", "étoffe cache-nez", "pelle", "carriole"],

    ["Rebouteux",
        `${domaineMagique}`, "Animaux", "Botanique", "Légendes", "Milieu naturel (au choix)", "Potions et remèdes", "Poisons", "Premiers soins", "Résistance aux maladies", "Se cacher",
        "Calme", "Doué (END)", "Doué (SUR)", "Esprit gardien/Instinct de survie", "Guérison rapide", "Mains blanches", "Magie contrôlée", "Magie invisible", "Magie sanglante", "Nyctalopie",
        "bâton de marche", "besace contenant poudres", "onguents et ingrédients étranges"],

    ["Vagabond",
        "Arme de mêlée (au choix)", "Arme de tir (au choix)", "Course", "Escalade", "Milieu naturel (au choix)", "Natation", "Orientation", "Repérage", "Résistance aux privations", "Résistance aux maladies",
        "Calme", "Chance insolente", "Compagnon animal", "Distraction/Esquive", "Doué (END)/Doué (SUR)", "Festoyeur", "Guérison rapide", "Instinct de survie", "Nyctalopie", "Solidité",
        `${armesdemeleelegere}`, 
        "un bâton de marche"],

    // 13 : Religieux et prêtres        (96-103)
    ["Chasseur de mages/Purgiste",
        `${domaineReligion}`, "Arme de mêlée ou Arme à distance (au choix)", "Équitation", "Occultisme", "Persuasion", "Religion", "Renseignements", "Repérage", "Résistance à la magie", "Torture",
        "Calme", "Coup surnaturel", "Résistance magique", "Doué (PER)", "Doué (VOL)", "Esprit gardien", "Magie contrôlée", "Mémoire sans faille/Sain d'esprit", "Solidité", "Souffle de vie",
        `${armesdemelee}`, `${armesadistance}`, `${armureslegeres}`,
        "livre saint", "cheval avec selle et harnais", "torche", "corde de dix mètres"],

    ["Fanatique",
        "Arme de mêlée (au choix)", "Courage", "Discours", "Occultisme", "Persuasion", "Premiers soins", "Pugilat", "Religion", "Résistance aux privations", "Résistance à la magie",
        "Bagarre/Calme", "Coups puissants", "Cri de guerre", "Doué (END)", "Doué (VOL)", "Gardien", "Inspiration", "Résilience", "Sauvegarde", "Solidité",
        `${armesdemeleelegere}`,
        "un livre saint", "une torche ou un tambourin"],

    ["Druide",
        "Domaine magique (animalisme)", `${domaineElementaire}`, "Animaux", "Botanique", "Légendes", "Milieu naturel (au choix)", "Orientation/Pistage", "Potions et remèdes", "Résistance aux maladies", "Résistance aux poisons",
        "Calme", "Compagnon animal", "Coup du prédateur/Coup surnaturel", "Doué (SUR)/Doué (VOL)", "Fascination", "Instinct de survie", "Magie innée", "Magie sanglante", "Solidité", "Sort fétiche",
        "serpe bien aiguisée (RU+*FOR*-1)/couteau bien aiguisé (RU+*FOR*-1)", 
        "bâton orné d'une tête d'animal sculptée", "fourrure", "nécessaire anti-poison"],

    ["Moine/Nonne",
        "Arts", "Astrologie", "Botanique", "Histoire", "Lettres", "Potions et remèdes", "Premiers soins", "Religion", "Résistance aux maladies", "Travail d'un matériau (au choix)",
        "Calme", "Doué (CNS)", "Doué (HAB)", "Doué (VOL)", "Mains blanches", "Mémoire sans faille", "Polyglotte/Sain d'esprit", "Sommeil léger", "Résistance magique", "Second souffle",
        "livre saint", "livre sur un domaine précis (Histoire, Religion, Botanique…)", "deux mains de papier (20 pages)", "deux plumes et encrier", "1d10 bougies", "plantes médicinales/mule"],

    ["Initié",
        `${domaineReligion}`, `${domaineReligion}`, "Courage", "Diplomatie", "Histoire/Légendes", "Lettres/Persuasion", "Premiers soins", "Religion", "Résistance à la magie", "Résistance aux maladies",
        "Calme", "Doué (CNS)/Doué (VOL)", "Esprit gardien", "Mains blanches", "Magie innée", "Polyglotte", "Résilience", "Résistance magique", "Sain d'esprit", "Sort fétiche/Souffle de vie",
        "livre saint", "une main de papier (20 pages)", "une plume et un encrier", "1d10 bougies"],

    ["Prêcheur/Missionnaire",
        "Charme", "Discours", "Écoute", "Intuition", "Lettres", "Noblesse et politique", "Persuasion", "Renseignements", "Religion", "Se cacher",
        "Calme", "Chance insolente/Mensonge éhonté", "Dévoué serviteur", "Doué (CNS)", "Doué (SOC)", "Doué (VOL)", "Fascination", "Inoffensif", "Inspiration", "Polyglotte",
        "trois livres saints", "une main de papier (20 pages)", "une plume et un encrier"],

    ["Inquisiteur",
        `${domaineReligion}`, "Arme de mêlée (au choix)", "Courage", "Intimidation", "Intuition", "Occultisme/Persuasion", "Religion", "Repérage", "Renseignements", "Torture",
        "Calme", "Coups puissants", "Doué (CNS)/Doué (VOL)", "Esprit gardien", "Magie innée", "Résilience", "Résistance magique", "Sain d'esprit", "Solidité", "Souffle de vie",
        `${armesdemeleesimples}`, 
        "livre saint", "main de papier (20 pages)", "plume et encrier", "1d10 bougies"],

    ["Templier/Chevalier d'Abel",
        "Arme lourde (au choix)", "Arme de mêlée (au choix)", "Courage", "Diplomatie", "Équitation", "Lettres/Repérage", "Premiers soins", "Religion", "Résistance à la magie", "Stratégie", 
        "Calme", "Coups puissants/Tireur d'élite", "Coup surnaturel", "Doué (END)", "Doué (VOL)", "Gardien", "Maîtrise du bouclier", "Maître d'armes/Port d'armure", "Résilience", "Solidité/Souffle de vie",
        `${armesdemelee}`, `${armesdemelee}`, `${armuresmoyennes}/${armureslourdes}`, `${boucliers}/arc (RU+*FOR*+0) et 10 flèches`, 
        "livre saint", "un cheval avec sa selle et son harnais", "une lanterne"]
]


const toursDeMagie = [
    [["Agacement"],                          ["(animalisme)","(guerre)"]],
    [["Aide-mémoire"],                       ["(châtiment)"]],
    [["Apaisement"],                         ["(eau)","(mentalisme)"]],
    [["Baie nourrissante"],                  ["(protection)","(terre)","(voyage)"]],
    [["Balai enchanté"],                     ["(enchantements)"]],
    [["Belle figure" ],                      ["(illusions)"]],
    [["Brise légère" ],                      ["(air)"]],
    [["Bruine"],                             ["(eau)"]],
    [["Catalepsie"],                         ["(guerre)","(nécromancie)"]],
    [["Connaissance des objets magiques"],   ["(enchantements)","(alchimie)"]],
    [["Connaissance des potions"],           ["(enchantements)","(alchimie)"]],
    [["Connaissance du temps écoulé"],       ["(châtiment)","(divination)","(mentalisme)"]],
    [["Cri animal"],                         ["(animalisme)"]],
    [["Désagrément"],                        ["(mentalisme)"]],
    [["Diable de poussière"],                ["(air)","(terre)"]],
    [["Dissipation d'ivresse"],              ["(châtiment)","(eau)","(mentalisme)"]],
    [["Doigts de fée"],                      ["(enchantements)","(ombre)"]],
    [["Eau bénite"],                         ["(châtiment)","(protection)"]],
    [["Eau de feu"],                         ["(châtiment)","(feu)","(alchimie)"]],
    [["Escamotage"],                         ["(illusions)","(ombre)"]],
    [["Etincelle"],                          ["(feu)","(guerre)","(alchimie)"]],
    [["Feux follets"],                       ["(feu)","(nécromancie)"]],
    [["Fumée sans feu"],                     ["(feu)"]],
    [["Graisse"],                            ["(animalisme)","(alchimie)"]],
    [["Guérison cutanée"],                   ["(protection)"]],
    [["Instinct naturel"],                   ["(animalisme)","(terre)","(voyage)"]],
    [["Les goûts et les couleurs"],          ["(illusions)"]],
    [["Lien cadavérique"],                   ["(guerre)","(nécromancie)"]],
    [["Lumière"],                            ["(feu)","(illusions)","(protection)"]],
    [["Manipulation lointaine"],             ["(air)","(mentalisme)","(ombre)"]],
    [["Ombre furtive"],                      ["(illusions)","(nécromancie)"]],
    [["Pare-pluie"],                         ["(eau)","(voyage)"]],
    [["Pied-léger"],                         ["(air)","(animalisme)","(voyage)"]],
    [["Plume magique"],                      ["(enchantements)","(protection)"]],
    [["Présage"],                            ["(divination)"]],
    [["Purification de l'eau"],              ["(feu)","(protection)","(voyage)","(alchimie)"]],
    [["Réparation"],                         ["(enchantements)","(terre)"]],
    [["Sculpture du bois"],                  ["(terre)"]],
    [["Solide comme un roc"],                ["(guerre)","(terre)"]],
    [["Trouver de l'eau"],                   ["(divination)","(eau)"]],
    [["Vent de murmures"],                   ["(air)","(guerre)","(ombre)"]],
    [["Ventriloquie"],                       ["(air)","(illusions)","(mentalisme)"]],
    [["Vision de nuit"],                     ["(divination)","(nécromancie)","(ombre)","(voyage)"]],
    [["Voir les animaux"],                   ["(animalisme)","(divination)"]],
    [["Voir les esprits"],                   ["(châtiment)","(divination)", "(nécromancie)"]],
]

const sortileges = [
    [["Abondance providentielle de Tegmine (+10)"],      ["(terre)"]],
    [["Acuité animale de Nünki (+10)"],                  ["(animalisme)","(divination)","(voyage)"]],
    [["☠ Aigle-ouragan (-30)"],                         ["(air)"]],
    [["Ailes de l'Archange (-10)"],                      ["(protection)"]],
    [["☠ Âmes infidèles (-10)"],                        ["(mentalisme)"]],
    [["☠ Amour passionnel (-10)"],                      ["(mentalisme)","(alchimie)"]],
    [["Ange gardien (+10)"],                             ["(protection)"]],
    [["Antidote miraculeux"],                            ["(eau)","(protection)","(voyage)","(alchimie)"]],
    [["Aperçu du futur"],                                ["(divination)"]],
    [["Arme de lumière"],                                ["(châtiment)","(protection)"]],
    [["Arme invincible d'Althor (+10)"],                 ["(enchantements)"]],
    [["Armée triomphatrice (-10)"],                      ["(guerre)","(illusions)"]],
    [["Armure des rois"],                                ["(enchantements)","(guerre)"]],
    [["Bannissement du mal"],                            ["(châtiment)","(protection)"]],
    [["☠ Beauté subtilisée (+10)"],                     ["(alchimie)"]],
    [["Breuvage des nymphes"],                           ["(alchimie)"]],
    [["Brumes argentées (+10)"],                         ["(eau)","(ombre)"]],
    [["Cautérisation"],                                  ["(feu)"]],
    [["Chemin sûr d'Auva (+20)"],                        ["(divination)","(voyage)"]],
    [["Clairvoyance"],                                   ["divination"]],
    [["Clef absolue (+10)"],                             ["(châtiment)","(ombre)"]],
    [["Colère de l'Orage (-20)"],                        ["(air)"]],
    [["Communion (+20)"],                                ["(mentalisme)"]],
    [["Connaissances profondes (+10)"],                  ["(divination)"]],
    [["Convocation d'Ignés (+10)"],                      ["(feu)"]],
    [["Convocation d'Ondines (+10)"],                    ["(eau)"]],
    [["Convocation de gnomes (+10)"],                    ["(terre)"]],
    [["Convocation de Sylphes (+10)"],                   ["(air)"]],
    [["Corde enchantée (+20)"],                          ["(air)","(enchantements)","(ombre)"]],
    [["☠ Corps monstrueux (-10)"],                      ["(animalisme)","(alchimie)"]],
    [["Course du vent"],                                 ["(air)","(voyage)"]],
    [["Course sylvestre de Nünki"],                      ["(terre)"]],
    [["☠ Crânes enchantés"],                            ["(nécromancie)"]],
    [["Croisade (-20)"],                                 ["(châtiment)","(guerre)"]],
    [["☠ Danse macabre (-10)"],                         ["(mentalisme)","(nécromancie)"]],
    [["Décalage illusoire de Nuhataïa"],                 ["(illusions)"]],
    [["☠ Déluge de la Noyée (-20)"],                    ["(eau)"]],
    [["☠ Démence (-10)"],                               ["(mentalisme)"]],
    [["Derniers sacrements (+10)"],                      ["(nécromancie)","(protection)"]],
    [["Discernement (+10)"],                             ["(châtiment)","(divination)"]],
    [["Disparition (-10)"],                              ["(illusions)"]],
    [["Dissimulation (+10)"],                            ["(ombre)","(voyage)"]],
    [["Domination"],                                     ["(mentalisme)","(ombre)"]],
    [["Don divin (+20)"],                                ["(protection)"]],
    [["☠ Dragon des abysses (-30)"],                    ["(eau)"]],
    [["☠ Duplication (-10)"],                           ["(illusions)","(ombre)"]],
    [["Eau de roche (+20)"],                             ["(eau)"]],
    [["Effondrement"],                                   ["(guerre)","(terre)"]],
    [["Égide"],                                          ["(guerre)"]],
    [["☠ Elixir de Jouvence (-30)"],                    ["(alchimie)"]],
    [["Elixirs sexuels"],                                ["(alchimie)"]],
    [["Enfant du Verseau (-10)"],                        ["(eau)"]],
    [["Envol (-20)"],                                    ["(air)","(voyage)"]],
    [["Étendard des héros"],                             ["(enchantements)","(guerre)"]],
    [["Exorcisme"],                                      ["(châtiment)","(protection)"]],
    [["Fardeau du condamné"],                            ["(air)","(châtiment)"]],
    [["Feuille d'automne (+20)"],                        ["(air)"]],
    [["Flèche ardente"],                                 ["(feu)","(guerre)"]],
    [["Flèche du Sagittaire"],                           ["(enchantements)"]],
    [["Fleur de feu (-20)"],                             ["(feu)","(guerre)"]],
    [["Fontaine de vie"],                                ["(eau)","(enchantements)"]],
    [["Fragilité du cristal (+20)"],                     ["(enchantements)","(alchimie)"]],
    [["Fraternité de la meute (+10)"],                   ["(animalisme)","(guerre)"]],
    [["Frère d'armes"],                                  ["(enchantements)","(guerre)"]],
    [["☠ Fumée sombre (+10)"],                          ["(feu)","(nécromancie)","(ombre)","(alchimie)"]],
    [["☠ Gangrène"],                                    ["(nécromancie)","(alchimie)"]],
    [["Gigantisme (-10)"],                               ["(guerre)","(terre)","(alchimie)"]],
    [["Gigantisme animal (-20)"],                        ["(animalisme)"]],
    [["☠ Golem (-10)"],                                 ["(nécromancie)","(alchimie)"]],
    [["Guérison de la folie"],                           ["(mentalisme)","(protection)"]],
    [["Guérison des blessures"],                         ["(protection)","(voyage)"]],
    [["☠ Griffes de la Mort"],                          ["(nécromancie)"]],
    [["☠ Guerrier fantasmatique (-10)"],                ["(illusions)"]],
    [["Histoire de l'inconnu"],                          ["(divination)"]],
    [["Hurlement terrifiant de Shyr (+10)"],             ["(animalisme)"]],
    [["Incandescence"],                                  ["(châtiment)","(feu)"]],
    [["Influence insidieuse (+10)"],                     ["(mentalisme)","(ombre)"]],
    [["Instinct infaillible de Marrak"],                 ["(châtiment)","(protection)"]],
    [["Invisibilité aux animaux"],                       ["(animalisme)","(illusions)"]],
    [["☠ Invisibilité aux Hommes"],                     ["(illusions)","(ombre)"]],
    [["Invisibilité au Mal"],                            ["(illusions)","(protection)"]],
    [["Invocation de l'homme-lige"],                     ["(enchantements)","(guerre)"]],
    [["Jugement Dernier (-30)"],                         ["(châtiment)","(protection)"]],
    [["Lame vampire de Shaula"],                         ["(enchantements)","(nécromancie)"]],
    [["Langage véritable"],                              ["(divination)","(voyage)"]],
    [["Langue des bêtes (+10)"],                         ["(animalisme)"]],
    [["Lecture des pensées de Lanks (-10)"],             ["(châtiment)","(mentalisme)"]],
    [["☠ Linceul noir"],                                ["(illusions)","(nécromancie)"]],
    [["☠ Lion de Braise (-30)"],                        ["(feu)"]],
    [["Main de la Justice"],                             ["(châtiment)","(guerre)","(protection)"]],
    [["Maître de la douleur"],                           ["(mentalisme)"]],
    [["Maître des animaux (+10)"],                       ["(animalisme)","(voyage)"]],
    [["Maître des flammes (+10)"],                       ["(feu)"]],
    [["Maître du vent (-10)"],                           ["(air)","(voyage)"]],
    [["Mal de mer de Sadaltajir (+10)"],                 ["(eau)","(mentalisme)"]],
    [["☠ Malédiction du Bouc Noir (-10)"],              ["(animalisme)"]],
    [["Manteau des voyageurs (+10)"],                    ["(enchantements)","(voyage)"]],
    [["Marche sur l'eau"],                               ["(eau)","(voyage)"]],
    [["Martyr"],                                         ["(protection)"]],
    [["Mélodie de la Dame Grise"],                       ["(enchantements)","(protection)","(voyage)"]],
    [["Métamorphose"],                                   ["(animalisme)"]],
    [["Miasmes putrides de Marrak (+10)"],               ["(nécromancie)"]],
    [["Mille pointes (+10)"],                            ["(air)","(enchantements)","(terre)"]],
    [["☠ Monstre d'ombre (-20)"],                       ["(illusions)","(ombre)"]],
    [["Monture du preux"],                               ["(guerre)"]],
    [["Mur de feu"],                                     ["(feu)"]],
    [["Mur de pierre (+10)"],                            ["(terre)"]],
    [["Muraille de vent"],                               ["(air)"]],
    [["☠ Nuage de cendres (-20)"],                      ["(feu)"]],
    [["☠ Œil du Basilic (-10)"],                        ["(terre)"]],
    [["Œil-horizon (+10)"],                              ["(châtiment)","(divination)"]],
    [["Ombres et lumières (+20)"],                       ["(illusions)","(ombre)"]],
    [["☠ Or des fous (+10)"],                           ["(enchantements)","(alchimie)"]],
    [["Ours de pierre (-30)"],                           ["(terre)"]],
    [["Palimpste (-20)"],                                ["(divination)","(illusions)"]],
    [["Parfums et pestilences (+20)"],                   ["(illusions)"]],
    [["Passe-muraille"],                                 ["(air)","(ombre)","(voyage)"]],
    [["Peau d'écorce"],                                  ["(terre)"]],
    [["Piège de feu de Mesarthim"],                      ["(châtiment)","(feu)"]],
    [["Pluie acide"],                                    ["(eau)","(guerre)"]],
    [["Prescience"],                                     ["(divination)"]],
    [["Prison de givre"],                                ["(eau)"]],
    [["Puissance du Roi-Fauve"],                         ["(animalisme)"]],
    [["Reflets Multiples des Jumeaux"],                  ["(illusions)"]],
    [["Remède prodigieux"],                              ["(protection)"]],
    [["Renaissance du printemps"],                       ["(protection)","(terre)"]],
    [["Repos du guerrier"],                              ["(guerre)","(voyage)"]],
    [["Respiration aquatique de Vernalys (+20)"],        ["(animalisme)","(eau)"]],
    [["☠ Réveil des morts"],                            ["(nécromancie)"]],
    [["Révélations morbides"],                           ["(divination)","(nécromancie)"]],
    [["Rêves et chimères"],                              ["(mentalisme)",]],
    [["Roi des bêtes (-10)"],                            ["(animalisme)"]],
    [["Ronces gardiennes"],                              ["(terre)"]],
    [["Salamandre"],                                     ["(feu)"]],
    [["Sanctuaire sacré"],                               ["(protection)"]],
    [["Sécheresse de l'Été"],                            ["(eau)","(feu)"]],
    [["Soif de sang"],                                   ["(animalisme)","(guerre)"]],
    [["Sommeil du juste"],                               ["(mentalisme)","(ombre)"]],
    [["Sons et silences (+20)"],                         ["(air)","(illusions)","(ombre)"]],
    [["Souffle de pureté (+20)"],                        ["(air)"]],
    [["Souvenirs et oublis (-10)"],                      ["(mentalisme)"]],
    [["☠ Spectre nocturne (-20"],                       ["(nécromancie)"]],
    [["☠ Spiritisme"],                                  ["(nécromancie)"]],
    [["Suffocation"],                                    ["(air)","(châtiment)","(ombre)"]],
    [["Territoire de l'Hiver"],                          ["(eau)"]],
    [["Torche de vérité (-10)"],                         ["(châtiment)","(enchantements)", "(feu)"]],
    [["Torche magique de Tegmine (+20)"],                ["(feu)","(voyage)"]],
    [["Tour chancelante d'Althor (-10)"],                ["(terre)"]],
    [["Transmutation (+10)"],                            ["(terre)","(alchimie)"]],
    [["Traque du malfaisant (-10)"],                     ["(châtiment)","(divination)"]],
    [["Trompe l'œil (+10)"],                             ["(illusions)"]],
    [["Vapeur colorée de Vernalys"],                     ["(eau)","(illusions)","(alchimie)"]],
    [["☠ Venin noir"],                                  ["(animalisme)","(ombre)","(alchimie)"]],
    [["Ventre de la Terre (-10)"],                       ["(terre)","(voyage)"]],
    [["☠ Visions cauchemardesques de Shaula (+10)"],    ["(mentalisme)","(nécromancie)"]],
    [["Vision de l'aura (+10)"],                         ["(divination)","(mentalisme)"]],
    [["Vol des corbeaux (-10)"],                         ["(animalisme)","(nécromancie)"]],
    [["Voyage bienheureux (+10)"],                       ["(voyage)"]],
]






const prenomsMedievaux = [
    "Aélis",
    "Aliénor",
    "Blanche",
    "Catherine",
    "Ermengarde",
    "Isabeau",
    "Jeanne",
    "Marguerite",
    "Oriane",
    "Philippa",
    "Sibylle",
    "Ysabel",
    "Adelise",
    "Aveline",
    "Cécile",
    "Élisabeth",
    "Guillemette",
    "Héloïse",
    "Mathilde",
    "Rosalie",
    "Sybille",
    "Ursule",
    "Violaine",
    "Yolande",
    "Agnès",
    "Béatrice",
    "Clarisse",
    "Éléonore",
    "Gisèle",
    "Hermine",
    "Isabelle",
    "Léonore",
    "Mahaut",
    "Ombeline",
    "Pernelle",
    "Suzanne",
    "Alix",
    "Béatrix",
    "Clotilde",
    "Élodie",
    "Guenièvre",
    "Héloïse",
    "Isolde",
    "Lysiane",
    "Morgane",
    "Ombeline",
    "Prudence",
    "Sélène",
    "Béatrice",
    "Clémentine",
    "Émilie",
    "Giselle",
    "Hortense",
    "Isabeau",
    "Louise",
    "Marceline",
    "Ophélie",
    "Pétronille",
    "Suzanne",

//masculins
    "Adalard",
    "Bertrand",
    "Conrad",
    "Étienne",
    "Godefroy",
    "Hugues",
    "Jehan",
    "Louis",
    "Olivier",
    "Raoul",
    "Thibault",
    "Yvon",
    "Alaric",
    "Baudouin",
    "Claude",
    "Émeric",
    "Gauvain",
    "Henri",
    "Jocelyn",
    "Lancelot",
    "Olivier",
    "Rainier",
    "Thierry",
    "Yves",
    "Arnould",
    "Balthazar",
    "Corneille",
    "Enguerrand",
    "Gaston",
    "Hubert",
    "Jehan",
    "Lothaire",
    "Melchior",
    "Perceval",
    "Roland",
    "Tristan",
    "Alaric",
    "Bastien",
    "Cédric",
    "Edgar",
    "Gawain",
    "Hector",
    "Igor",
    "Léandre",
    "Merlin",
    "Octave",
    "Percival",
    "Robin",
    "Ambroise",
    "Bruno",
    "Clovis",
    "Édouard",
    "Gérard",
    "Hugolin",
    "Isidore",
    "Lucien",
    "Marcel",
    "Olivier",
    "Pierre",
    "Sébastien"
]

