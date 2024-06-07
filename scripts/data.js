

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////// LES ARMES & DOMAINES MAGIQUES /////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */



            
    // les armes de tir
let armesdetir = "arc (RU+*FOR*+0) et 10 flèches/arc court (RU+*FOR*-1) et 10 flèches/arc long (RU+*FOR*+0) et 10 flèches/arc elfique (RU+*FOR*+0) et 10 flèches/arbalète de poing (RU+3) et 10 carreaux/arbalète (RU+5) et 10 carreaux/arbalète naine (+5) et 10 carreaux/arbalète lourde (RU+6) et 10 carreaux"  

    // les armes à poudre
let armesapoudre = "arquebuse (RU+7)/crachefeu (RU+6)/pistolet à poudre (RU+4)/tromblon (RU+3)"

    // armes de jet
let armesdejet = "bolas (RU+*FOR*-2)/couteau de lancer (RU+*FOR*-1)/feuillacier (RU+*FOR*-1)/fronde (RU+*FOR*-1)/javelot (RU+*FOR*+0)/œuf de feu (RU+5)/sarbacane (poison)/vesse-de-loup (spécial)"    


let armesadistance = `${armesdejet}/${armesdetir}/${armesapoudre}`

let armesdetrait = `${armesdetir}/${armesapoudre}`


    // les batons
const batons = "bâton noueux (RU+*FOR*-1)/bâton ferré (RU+*FOR*-1)"

    // les armes d'hast
const armesdhast = "attrappe-hommes (RU+*FOR*-2)/bâton ferré (RU+*FOR*-1)/bâton noueux (RU+*FOR*-1)/faux (RU+*FOR*+0)/fauchard (RU+*FOR*+0)/fourche (RU+*FOR*-1)/hallebarde (RU+*FOR*+0)/bardiche (RU+*FOR*+0)/lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)/pertusiane(RU+*FOR*+0)"

    // les lances
const lances = "lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)"

    // les haches
const haches =  "hachette (RU+*FOR*-1)/hache (RU+*FOR*+0)/cognée (RU+*FOR*+0)/hache du clan (RU+*FOR*+1)/hache de guerre (RU+*FOR*+2)"

    // les haches à deux mains
const hachesàdeuxmains = "une hache de guerre (RU+*FOR*+2)/hache (RU+*FOR*+0)"

    // les épées
const epee = "brise-lames (RU+*FOR*-1)/dragonne (RU+*FOR*+0)/épée bâtarde (RU+*FOR*+0 ou (RU+*FOR*+1 à deux mains)/épée courte (RU+*FOR*-1)/épée large (RU+*FOR*+0)/sabre (RU+*FOR*+0)/épée longue (RU+*FOR*+0)/espadon (RU+*FOR*+2)/flamberge (RU+*FOR*+2)/main gauche (RU+*FOR*-1)/rapière (RU+*FOR*+0)"    

    // les épées de qualité supérieure
const epeequalitesuperieure = "épée bâtarde de qualité supérieure (RU+*FOR*+0, +1 à 2 mains)/épée large de qualité supérieure (RU+*FOR*+0)/sabre de qualité supérieure (RU+*FOR*+0)/épée longue de qualité supérieure (RU+*FOR*+0)/espadon de qualité supérieure (RU+*FOR*+2)/flamberge de qualité supérieure (RU+*FOR*+2)/rapière de qualité supérieure (RU+*FOR*+0)"    






    // les armes de mêlée légère
const armesdemeleelegere = "cestes (RU+*FOR*-2)/griffes (RU+*FOR*-2)/gourdin (RU+*FOR*-2)/stylet (RU+*FOR*-2)/fouet (RU+*FOR*-2)/racine-fouet (RU+*FOR*-2)/attrappe-homme (RU+*FOR*-2)/couteau (RU+*FOR*-1)/poignard (RU+*FOR*-1)/dague (RU+*FOR*-1)/miséricorde (RU+*FOR*-1)/brise-lames (RU+*FOR*-1)/épée courte (RU+*FOR*-1)/main gauche (RU+*FOR*-1)/hachette (RU+*FOR*-1)/bâton ferré (RU+*FOR*-1)/bâton noueux (RU+*FOR*-1)/fourche (RU+*FOR*-1)"

    // les armes de mêlée ordinaire
const armesdemeleeordinaire = "dragonne (RU+*FOR*+0)/épée bâtarde (RU+*FOR*+0)/épée large (RU+*FOR*+0)/sabre (RU+*FOR*+0)/épée longue (RU+*FOR*+0)/rapière (RU+*FOR*+0)/hache (RU+*FOR*+0)/cognée (RU+*FOR*+0)/masse d'armes (RU+*FOR*+0)/masse épineuse (RU+*FOR*+0)/faux (RU+*FOR*+0)/fauchard (RU+*FOR*+0)/hallebarde (RU+*FOR*+0)/bardiche (RU+*FOR*+0)/lance courte (RU+*FOR*+0)/lance longue (RU+*FOR*+0)/pertusiane (RU+*FOR*+0)"

    // les armes de guerre
const armesdeguerre = "hache du clan (RU+*FOR*+1)/fléau d'armes (RU+*FOR*+1)/marteau de guerre (RU+*FOR*+0)/"

const armeslourdes = "espadon (RU+*FOR*+2)/flamberge (RU+*FOR*+2)/hache de guerre (RU+*FOR*+2)"

    // les armes de mêlée (toutes)
const armesdemelee = `${armesdemeleelegere}/${armesdemeleeordinaire}/${armesdeguerre}/${armeslourdes}`       

    // les armes de mêlée simples
const armesdemeleesimples = `${armesdemeleelegere}/${armesdemeleeordinaire}`   



    // les armures légères
const armureslegeres = "gambison (protection+1)/fourrures (protection+1)/plastron de cuir (protection+1)"

    //les armures moyennes
const armuresmoyennes = "broigne (protection+2)/brigandine (protection+2)/cotte de plaques (protection+2)/cuirasse (protection+3)" 

    //les armures lourdes
const armureslourdes = "cottes de mailles (protection+3)/haubert (protection+3)/demi-plaques (protection+4)/armures de plates (protection+5)/harnois (protection+5)/armures de plates alourdie (protection+6)"

    //les boucliers 
const boucliers = "petit bouclier (protection+1)/boche (protection+1)/rondache (protection+1)/bouclier (protection+2)/écu (protection+2)"    



    // Les domaines magiques
const domaineMagique = "Domaine magique (air)/Domaine magique (animalisme)/Domaine magique (châtiment)/Domaine magique (divination)/Domaine magique (eau)/Domaine magique (enchantements)/Domaine magique (feu)/Domaine magique (guerre)/Domaine magique (illusions)/Domaine magique (mentalisme)/Domaine magique (nécromancie)/Domaine magique (ombre)/Domaine magique (protection)/Domaine magique (terre)/Domaine magique (voyage)/Domaine magique (alchimie)"
const domaineElementaire = "Domaine magique (eau)/Domaine magique (terre)/Domaine magique (feu)/Domaine magique (air)"
const domaineReligion = "Domaine magique (protection)/Domaine magique (châtiment)"




const keys = ["com", "cns", "dis", "end", "for", "hab", "mou", "per", "soc", "sur", "tir", "vol"];

const allkeys = [
    "com", 
    "cns", 
    "dis", 
    "end", 
    "for", 
    "hab", 
    "mou", 
    "per", 
    "soc", 
    "sur", 
    "tir", 
    "vol", 
    "mag"];

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



// Les catégories de magiciens

const knowsOneDomain = [33, 82, 94, 96, 102]
const knowsTwoDomains = [80, 81, 83, 84, 85, 86, 87, 98, 100]

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////////// LES PEUPLES ////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


const repartitionPeuples = 
    [[1,70],[71,75],[76,78],[79,81],[82,84],[85,87],[88,90],[91,98],[99,100]]



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









const newArchetype = [
    {
        name: "Aigle",
        bonus: ["CNS+5/PER+5", "VOL+5"],
        traits: ["Orgueilleux", "Envieux/Travailleur/Sobre/Prudent/Loyal"]
    },
    {
        name: "Âne",
        bonus: ["END+5", "HAB+5/SUR+5", "VOL+5", "CNS-5/MOU-5"],
        traits: ["Humble", "Travailleur/Chaste/Prudent/Clément/Loyal"]
    },
    {
        name: "Cerf",
        bonus: ["SOC+5", "VOL+5", "SUR+5/MOU+5", "DIS-5/TIR-5"],
        traits: ["Loyal", "Orgueilleux/Bienveillant/Clément/Généreux/Valeureux"]
    },
    {
        name: "Chat",
        bonus: ["DIS+5", "PER+5", "MOU+5", "FOR-5/VOL-5"],
        traits: ["Cruel/Envieux/Lâche/Paresseux/Prudent/Trompeur"]
    },
    {
        name: "Chien",
        bonus: ["END+5", "PER+5", "SOC+5", "DIS-5/HAB-5"],
        traits: ["Bienveillant/Généreux/Gourmand/Clément/Loyal/Valeureux"]
    },
    {
        name: "Coq",
        bonus: ["COM+5", "SOC+5", "DIS-5/HAB-5"],
        traits: ["Orgueilleux/Colérique/Luxurieux/Envieux/Loyal/Valeureux"]
    },
    {
        name: "Corbeau",
        bonus: ["CNS+5", "DIS+5/SUR+5", "VOL+5", "SOC-5"],
        traits: ["Cruel/Humble/Chaste/Sobre/Prudent/Envieux"]
    },
    {
        name: "Fourmi",
        bonus: ["CNS+5/DIS+5", "HAB+5", "VOL+5", "PER-5/SOC-5"],
        traits: ["Travailleur", "Avare/Humble/Chaste/Sobre/Prudent"]
    },
    {
        name: "Hibou",
        bonus: ["CNS+10", "HAB+5/PER+5", "SOC+5/VOL+5", "COM-5"],
        traits: ["Travailleur", "Orgueilleux/Chaste/Prudent/Envieux/Loyal"]
    },
    {
        name: "Hyène",
        bonus: ["COM+5", "DIS+5/MOU+5", "FOR-5/VOL-5"],
        traits: ["Cruel", "Colérique/Envieux/Lâche/Humble/Trompeur"]
    },
    {
        name: "Lapin",
        bonus: ["DIS+5", "MOU+5", "PER+5", "SOC+10", "COM-5", "FOR-5"],
        traits: ["Bienveillant/Lâche/Prudent/Luxurieux/Clément/Humble"]
    },
    {
        name: "Lion",
        bonus: ["COM+5", "FOR+5", "SOC+5", "CNS-5/HAB-5", "DIS-5"],
        traits: ["Orgueilleux", "Paresseux/Luxurieux/Colérique/Loyal/Valeureux"]
    },
    {
        name: "Loup",
        bonus: ["COM+5", "PER+5/SUR+5", "SOC-5"],
        traits: ["Colérique", "Cruel/Sobre/Loyal/Envieux/Valeureux"]
    },
    {
        name: "Mouton",
        bonus: ["HAB+5", "PER+5", "SOC+5", "VOL-5"],
        traits: ["Humble", "Travailleur/Prudent/Lâche/Clément/Chaste"]
    },
    {
        name: "Ours",
        bonus: ["FOR+5", "END+5", "PER+5/SUR+5", "CNS-5/DIS-5"],
        traits: ["Gourmand/Colérique/Bienveillant/Clément/Loyal/Valeureux"]
    },
    {
        name: "Paon",
        bonus: ["SOC+10", "CNS+5/PER+5", "FOR-5"],
        traits: ["Envieux/Orgueilleux/Paresseux/Luxurieux/Lâche/Trompeur"]
    },
    {
        name: "Porc",
        bonus: ["FOR+5", "END+5", "SOC+5", "MOU-5/CNS-5"],
        traits: ["Gourmand", "Colérique/Généreux/Luxurieux/Bienveillant/Paresseux"]
    },
    {
        name: "Rat",
        bonus: ["DIS+5", "CNS+5/VOL+5", "END+5/SUR+5", "FOR-5"],
        traits: ["Avare/Cruel/Envieux/Prudent/Chaste/Trompeur"]
    },
    {
        name: "Renard",
        bonus: ["DIS+5/HAB+5", "MOU+5", "SOC+5", "END-5/FOR-5"],
        traits: ["Trompeur","Paresseux/Gourmand/Prudent/Envieux/Lâche"]
    },
    {
        name: "Serpent",
        bonus: ["CNS+5", "SOC+5", "VOL+5", "MOU-5/PER-5"],
        traits: ["Trompeur/Cruel/Envieux/Prudent/Travailleur/Sobre"]
    },
    {
        name: "Singe",
        bonus: ["MOU+10", "SOC+5", "VOL-5"],
        traits: ["Généreux/Paresseux/Lâche/Bienveillant/Clément/Trompeur"]
    },
    {
        name: "Souris",
        bonus: ["DIS+10", "HAB+5", "MOU+5", "SOC+5", "COM-5", "FOR-5"],
        traits: ["Bienveillant", "Lâche/Généreux/Humble/Clément/Loyal"]
    },
    {
        name: "Taureau",
        bonus: ["COM+5", "END+5", "FOR+5", "DIS-5", "CNS-5/HAB-5"],
        traits: ["Orgueilleux/Colérique/Luxurieux/Gourmand/Clément/Valeureux"]
    },
    {
        name: "Vautour",
        bonus: ["CNS+5/END+5", "PER+5", "VOL+5", "MOU-5/SOC-5"],
        traits: ["Avare/Humble/Sobre/Prudent/Cruel/Trompeur"]
    }
];


const tricks = [
    {
        name: "Agacement",
        alt:"",
        type: ["Animalisme", "Guerre"],
        description: "Vous aiguillez des insectes vers *MAG* cibles. Des mouches peuvent tournoyer autour de la tête d’un cheval, une guêpe effrayer un enfant, un hanneton bourdonner quand un archer décoche sa flèche, etc. Si une cible rate un test de VOL, elle subit 1 Désavantage pour ce tour."
    },
    {
        name: "Aide-mémoire",
        alt: ["aide mémoire", "aide memoire"],
        type: ["Châtiment"],
        description: "La cible gagne 1 Avantage aux tests de CNS pendant *MAG* tours."
    },
    {
        name: "Apaisement",
        alt:"",
        type: ["Eau", "Mentalisme"],
        description: "Vous apaisez la colère d’une personne. Cela ne la rendra pas aimable pour autant, mais diminuera sa colère d’un « cran ». Ce tour dure une heure. Il peut aussi apaiser la tristesse de quelqu’un (ce qui a pour effet de le réconforter sans avoir à réussir un test de SOC – cf Regain du Sang-froid)."
    },
    {
        name: "Baie nourrissante",
        alt:"",
        type: ["Protection", "Terre", "Voyage"],
        description: "Ce sort enchante une baie (ou un fruit fraîchement cueilli), qui fait regagner immédiatement 1 PV. En manger plusieurs n’a aucun effet supplémentaire."
    },
    {
        name: "Balai enchanté",
        alt:"",
        type: ["Enchantements"],
        description: "Ce tour de magie anime un balais ou un plumeau, qui nettoiera une habitation pendant une heure."
    },
    {
        name: "Belle figure",
        alt:"",
        type: ["Illusions"],
        description: "La cible gagne 1 Avantage aux tests de SOC pendant *MAG* tours."
    },
    {
        name: "Brise légère",
        alt:"brise legere",
        type: ["Air"],
        description: "Un vent frais procure une sensation de bien-être durant une heure à toute l’équipe (+1 point de SF pour tous, sauf s’il fait froid ; limité à une augmentation par jour). La brise n’est pas assez forte pour éteindre une torche, mais peut souffler plusieurs bougies."
    },
    {
        name: "Bruine",
        alt:"",
        type: ["Eau"],
        description: "Vous transformez l’humidité de l’air en une pluie fine sur une zone de *MAG* m de rayon. Utile dans les journées de canicule ou pour détruire les pages d’un livre… Ce tour dure une heure maximum."
    },
    {
        name: "Catalepsie",
        alt:"",
        type: ["Guerre", "Nécromancie"],
        description: "Vous plongez dans un état de catalepsie pendant *MAG* heures, qui vous fait passer pour mort. Conscient, vous ne pouvez cependant ni voir, ni agir. Seul un test de MAG réussi peut détecter la supercherie."
    },
    {
        name: "Connaissance<br>des objets magiques",
        alt:"connaissance des objets magiques",
        type: ["Enchantements", "Alchimie"],
        description: "Ce sort permet de détecter tous les objets magiques autour de vous pendant *MAG* minutes. De plus, il vous permet de connaître exactement le pouvoir d’un tel objet, mais il vous faudra le porter (casque sur la tête, amulette autour du cou, bottes aux pieds, etc.)."
    },
    {
        name: "Connaissance des potions",
        alt:"",
        type: ["Enchantements", "Alchimie"],
        description: "Vous reconnaissez les potions et préparations alchimiques lorsque vous en voyez une, leurs effets et comment vous en prémunir (si ce moyen est possible et connu des alchimistes)."
    },
    {
        name: "Connaissance du temps écoulé",
        alt:"connaissance du temps ecoule",
        type: ["Châtiment", "Divination", "Mentalisme"],
        description: "Ce tour a une double utilité : connaître l’âge d’une chose ou d’une personne, et connaître le temps exact qui s’est écoulé à partir d’un moment précis."
    },
    {
        name: "Cri animal",
        alt:"",
        type: ["Animalisme"],
        description: "Ce sort permet d’imiter le bruit ou le cri d’un animal précis (un chat, un oiseau, un rat, un loup…) pendant *MAG* minutes. Vous pouvez choisir si ce bruit est plutôt celui d’un mâle ou d’une femelle et son but : chasse, reproduction, avertissement..."
    },
    {
        name: "Désagrément",
        alt:"desagrement",
        type: ["Mentalisme"],
        description: "Vous donnez une envie irrésistible à une cible (figurant ou second rôle) de bâiller, tousser, éternuer ou se gratter. Ce désagrément ne dure qu’une seconde, mais peut s’avérer précieux au bon moment. La cible agacée subit 1 Désavantage pour ce tour."
    },
    {
        name: "Diable de poussière",
        alt:"diable de poussiere",
        type: ["Air", "Terre"],
        description: "Vous créez un petit tourbillon (1 mètre maximum) qui rassemble la poussière, la cendre et le sable environnants. Le sort dure *MAG* tours. Une créature prise dans le tourbillon sera incommodée par la poussière dans les yeux, et devra tester son END à chaque tour pour ne pas être Affaiblie."
    },
    {
        name: "Dissipation d'ivresse",
        alt:"",
        type: ["Châtiment", "Eau", "Mentalisme"],
        description: "Ce sort dissipe les effets mentaux de l’alcool sur une cible. Très utile face à un individu ivre mort, qui retrouvera son aspect normal et tous ses esprits, ou pour se débarrasser d’une « gueule de bois ». La cible gagne 1 Avantage aux tests d’HAB pendant *MAG* tours."
    },
    {
        name: "Doigts de fée",
        alt:"doigts de fee",
        type: ["Enchantements", "Ombre"],
        description: "La cible gagne 1 Avantage aux tests d’HAB pendant *MAG* tours."
    },
    {
        name: "Eau bénite",
        alt:"eau benite",
        type: ["Châtiment", "Protection"],
        description: "Vous bénissez de l’eau (environ un bol). Indispensable contre certains démons et morts-vivants.",
    },
    {
        name: "Eau de feu",
        alt:"",
        type: ["Châtiment", "Feu", "Alchimie"],
        description: "Ce tour change environ un litre d’eau en une substance inflammable pendant *MAG* heures. Passé ce délai, ce liquide ne sera plus que de l’eau souillée.",
    },
    {
        name: "Escamotage",
        alt:"",
        type: ["Illusions", "Ombre"],
        description: "Ce charme bien utile rend invisible un objet (pas un être vivant) ne dépassant pas *MAG*x 20 cm pendant une heure. Une bourse d’or, des dés pipés, une épée courte, une fiole de poison ou un grimoire maudit pourront ainsi être introduits partout."
    },
    {
        name: "Étincelle",
        alt:"etincelle",
        type: ["Feu", "Guerre", "Alchimie"],
        description: "Vous déclenchez une étincelle, à vue. Pour qu’elle donne lieu à une flammèche, il faut qu’elle se produise sur une matière combustible (paille, papier, bois sec…). Elle peut rallumer un feu à peine éteint."
    },
    {
        name: "Feux follets",
        alt:"",
        type: ["Feu", "Nécromancie"],
        description: "Vous créez *MAG* lumières dansantes que vous dirigez à distance pendant une heure. Ces lumières ne brûlent pas, mais elles attirent l’attention."
    },
    {
        name: "Fumée sans feu",
        alt:"fumee sans feu",
        type: ["Feu"],
        description: "Une fumée (blanche, grise ou noire) s’échappe du sol et envahit peu à peu une zone de *MAG* mètres de rayon pendant une heure. Cela peut faire croire à un incendie ou l’œuvre d’un démon."
    },
    {
        name: "Graisse",
        alt:"",
        type: ["Animalisme", "Alchimie"],
        description: "Vous appliquez sur le sol ou un objet une graisse particulièrement glissante (1m² maximum), qui nécessitera un test de MOU ou d’HAB (selon les cas) pour continuer son action. La graisse se solidifie au bout d’une heure."
    },
    {
        name: "Guérison cutanée",
        alt:"guerison cutanee",
        type: ["Protection"],
        description: "Ce tour guérit instantanément les petits désagréments cutanés (boutons, verrues, rougeurs…) et permet de recouvrer une peau sans défaut. Ce sort ne fonctionne pas sur les furoncles issus de maladies graves comme la peste. La cible gagne 1 Avantage aux tests de SUR pendant *MAG* tours."
    },
    {
        name: "Instinct naturel",
        alt:"",
        type: ["Animalisme", "Terre", "Voyage"],
        description: "La cible gagne 1 Avantage aux tests de SUR pendant *MAG* tours.",
    },
    {
        name: "Les goûts et les couleurs",
        alt:"les gouts et les couleurs",
        type: ["Illusions"],
        description: "Pendant *MAG* heures, vous modifiez la couleur d’un objet ou le goût et l’odeur d’un aliment (plus doux, plus épicé, plus aigre ou même infect)."
    },
    {
        name: "Lien cadavérique",
        alt:"lien cadaverique",
        type: ["Guerre", "Nécromancie"],
        description: "Ce sort permet de voir, entendre, ou sentir à la place d’un cadavre, pendant *MAG* minutes. Vous devez être à moins de 100 m du corps (mais vous n’êtes pas obligé de le voir). Si le cadavre a les yeux fermés, vous ne pourrez rien voir, car vous ne projetez que vos sens sur ce corps, sans pouvoir agir sur lui."
    },
    {
        name: "Lumière",
        alt:"lumiere",
        type: ["Feu", "Illusions", "Protection"],
        description: "Vous enchantez un objet qui se met à briller pendant *MAG* minutes. La lumière est celle d’une torche."
    },
    {
        name: "Manipulation lointaine",
        alt:"",
        type: ["Air", "Mentalisme", "Ombre"],
        description: "Vous déplacez par la pensée un objet ne dépassant pas 1 kilo sur *MAG* mètres. L’objet ne peut être projeté avec violence."
    },
    {
        name: "Ombre furtive",
        alt:"",
        type: ["Illusions", "Nécromancie", "Ombre"],
        description: "La cible gagne 1 Avantage aux tests de DIS pendant *MAG* tours."
    },
    {
        name: "Pare-pluie",
        alt:["pare pluie", "para pluie", "para-pluie", "parapluie"],
        type: ["Eau", "Voyage"],
        description: "Les gouttes de pluie ne touchent pas la cible, qui reste bien au sec pendant *MAG* heures. La cible gagne 1 Avantage en MOU pendant *MAG* tours."
    },
    {
        name: "Pied-léger",
        alt:["pied leger", "pied-leger", "pied léger"],
        type: ["Air", "Animalisme", "Voyage"],
        description: "La cible gagne 1 Avantage en MOU pendant *MAG* tours.",
    },
    {
        name: "Plume magique",
        alt:"",
        type: ["Enchantements", "Protection"],
        description: "Ce charme enchante une plume, qui peut écrire seule sous la dictée. De plus l’encre dans laquelle elle est trempée peut devenir luminescente, et ainsi être lue dans l’obscurité. Ce tour dure *MAG* heures."
    },
    {
        name: "Présage",
        alt:"presage",
        type: ["Divination"],
        description: "Ce tour vous permet de lancer un d100 et de garder le résultat « en réserve » pendant une heure. Vous pourrez utiliser ce résultat (ou non) à un prochain test demandé par le MJ. Attention : si vous obtenez un double un revers de fortune vous fera perdre 1PV. Vous ne pouvez lancer ce tour qu’une fois par jour."
    },
    {
        name: "Purification de l'eau",
        alt:"purification de l eau",
        type: ["Feu", "Protection", "Voyage", "Alchimie", "Eau"],
        description: "Vous pouvez rendre claire et potable environ un litre d’eau de mer, d’eau souillée ou contaminée."
    },
    {
        name: "Réparation",
        alt:"reparation",
        type: ["Enchantements", "Terre"],
        description: "Ce charme répare un objet simple (ne dépassant pas un mètre) pendant *MAG* heures. Après quoi, l’objet retrouve son état initial."
    },
    {
        name: "Sculpture du bois",
        alt:"",
        type: ["Terre"],
        description: "Ce tour permet de tailler et sculpter une pièce de bois ne dépassant pas un mètre. Vous pourrez ainsi graver rapidement une image grossière ou construire un gourdin en modelant une branche de chêne."
    },
    {
        name: "Solide comme un roc",
        alt:"",
        type: ["Guerre", "Terre"],
        description: "La cible gagne 1 point de protection pendant *MAG* minutes. Ce point est à usage unique et disparaît dès qu’il a été utilisé."
    },
    {
        name: "Trouver de l'eau",
        alt:"trouver de l eau",
        type: ["Divination", "Eau"],
        description: "Vous localisez la source la plus proche (jusqu’à *MAG* kilomètres) s’il y en a une : un point d’eau, une rivière, un puits, une source souterraine…"
    },
    {
        name: "Vent de murmures",
        alt:"",
        type: ["Air", "Guerre", "Ombre"],
        description: "Vous invoquez un vent léger, qui délivrera un message sous la forme de légers murmures. Il peut parcourir jusqu’à *MAG* kilomètres, mais tous ceux qui se trouvent sur sa route entendront le message s’ils tendent suffisamment l’oreille (test de PER)."
    },
    {
        name: "Ventriloquie",
        alt:"ventriloque",
        type: ["Air", "Illusions", "Mentalisme"],
        description: "Vous « projetez » votre voix à une dizaine de pas, et vous pouvez donc vous exprimer même si vous êtes bâillonné. Ce tour dure *MAG* minutes."
    },
    {
        name: "Vision de nuit",
        alt:["vision nocturne", "nyctalopie"],
        type: ["Divination", "Nécromancie", "Ombre", "Voyage"],
        description: "Ce tour vous confère pendant *MAG* minutes une vision nocturne qui vous prémunit des malus dus à l’obscurité. Ce sort est inutile dans le noir total."
    },
    {
        name: "Voir les animaux",
        alt:"",
        type: ["Animalisme", "Divination"],
        description: "Pendant *MAG* heures, vous pouvez localiser tous les animaux tels que les oiseaux, les insectes, les mammifères et les poissons (hormis les animaux fabuleux) autour de vous sur une portée moyenne."
    },
    {
        name: "Voir les esprits",
        alt:"",
        type: ["Châtiment", "Divination", "Nécromancie"],
        description: "Vous pouvez voir tous les esprits présents autour de vous à une portée moyenne pendant *MAG* minutes (sauf les esprits particulièrement puissants qui souhaitent rester invisibles)."
    },
];


const spells = [
    {
      name: "Abondance <br>providentielle de Tegmine",
      alt: "Abondance providentielle de Tegmine",
      difficulty: 20,
      formula: "Généreuse est la terre, pour celui qui a faim,<br>Qui connaît ses mystères, et veille à ses jardins",
      type: ["Terre"],
      duration: "instantanée",
      range: "contact",
      resistance: "-",
      success: "Soins",
      description: "Vous plongez vos mains dans la terre et en sortez de gros fruits ou légumes, prêts à être dégustés. Ce sort permet de fournir un repas frugal à (RU) personnes."
    },
    {
      name: "Acuité animale de Nünki",
      alt: "acuite animale de nunki",
      difficulty: 10,
      formula: "Les Hommes ont-ils vendu tous leurs premiers instincts ?<br>L’ouïe, le flair et la vue, pour ne plus avoir faim ?",
      type: ["Animalisme", "Divination", "Voyage"],
      duration: "RU minutes",
      range: "courte",
      resistance: "-",
      success: "1 Avantage (PER)",
      description: "Vous développez un des sens de votre cible de façon extraordinaire. Elle gagne +20 en PER avec un sens précis. Elle peut ainsi disposer d’une vue d’aigle, de l’odorat ou l’ouïe du chien, de la vision nocturne du chat…"
    },
    {
      name: "Aigle-ouragan",
      alt: "aigle ouragan",
      difficulty: -30,
      formula: "Ses grandes ailes déployées, sont comme de noirs nuages,<br>Ses serres sont des épées, son cri est un orage",
      type: ["Air"],
      isRitual: true,
      isForbidden: true,
      duration: "RU heures",
      range: "extrême",
      resistance: "-",
      success: "Dégâts +1",
      description: "Vous invoquez l’Aigle-Ouragan, un rapace de 18 mètres d’envergure dont les cris sont terrifiants. Vous pouvez le monter avec vos compagnons et lui ordonner de combattre. Vous ne pouvez l’invoquer plus d’une fois par semaine. <div><h4>AIGLE-OURAGAN</h4> <p><strong>COM</strong> 70/-20 <strong>Init</strong> : 21 <strong>Prot</strong> : 2 <strong>PV</strong> : 31 <br><strong>DG</strong> : Serres, bec RU+7 <br><strong>Comp</strong> : END 70, FOR 70, MOU 50, PER&nbsp;80,&nbsp;VOL&nbsp;50 <br><strong>Spécial</strong> : Vol, PEUR (1)</p></div"
    },
    {
      name: "Ailes de l’archange",
      alt: "ailes de l'archange",
      difficulty: -10,
      formula: "Pour rejoindre les cieux, j’ai déployé mes ailes,<br>Et que mon vol gracieux, glorifie l’Éternel",
      type: ["Protection"],
      duration: "RU heures",
      range: "contact",
      resistance: "-",
      success: "Flux d’énergie",
      description: "De grandes ailes immaculées surgissent de votre dos, grâce auxquelles vous pouvez voler à une vitesse maximale de MOU x2 km/h. Attention, si vous encaissez des dégâts ciblés sur une aile (au moins la moitié de vos PV), vous devrez tester votre MOU chaque minute pour ne pas chuter."
    },
    {
      name: "Âmes infidèles",
      alt: "ames infideles",
      difficulty: -10,
      formula: "Par malheur ma famille n’a le rang qui me sied,<br>J’ai troqué mes guenilles, pour vos habits princiers",
      type: ["Mentalisme"],
      isForbidden: true,
      duration: "RU heures",
      range: "courte",
      resistance: "VOL-10",
      success: "Flux d’énergie",
      description: "Vous échangez de corps avec une cible (humanoïde pensant). Vous devez regarder votre cible dans les yeux pour que le sort fasse effet. Vous échangez vos valeurs, sauf la compétence MAGIE que vous conservez à votre niveau. Si votre cible meurt dans votre corps d’origine, vous conservez votre nouveau corps."
    },
    {
      name: "Amour passionnel",
      alt: "",
      difficulty: -10,
      formula: "Deux mortels désignés, s’aimeront désormais,<br>D’un désir exalté, à défaut d’être vrai",
      type: ["Mentalisme", "Alchimie"],
      isRitual: true,
      isForbidden: true,
      duration: "RU jours",
      range: "longue",
      resistance: "VOL",
      success: "Cible +1 (trio amoureux)",
      description: "Les deux cibles désignées tombent éperdument amoureuses l’une de l’autre. Rien ne pourra les dissuader de cet amour passionnel jusqu’à la fin du sort (sauf la mort du magicien bien entendu)."
    },
    {
      name: "Ange gardien",
      alt: "",
      difficulty: 10,
      formula: "Garde-moi du danger, des démons et leur horde,<br>Tu sais me protéger, ange de miséricorde",
      type: ["Protection"],
      duration: "RU minutes",
      range: "moyenne",
      resistance: "-",
      success: "Flux d'énergie ou Soins",
      description: "Sous la protection d’une lumière qu’elle seule peut ressentir, votre cible peut ignorer une (et une seule) blessure pendant la durée du sort, même s’il s’agit d’un coup critique. Ce n’est pas obligatoirement la première blessure, et elle peut « laisser passer » certains coups pour annuler seulement le plus puissant."
    },
    {
      name: "Antidote miraculeux",
      alt: "",
      difficulty: 0,
      formula: "Bois cette eau que je donne, bois d’un trait ce calice,<br>Que ton corps abandonne, poisons et vénéfices",
      type: ["Protection", "Eau", "Voyage", "Alchimie"],
      duration: "instantanée",
      range: "contact",
      resistance: "-",
      success: "Soins ou Cible +1",
      description: "Vous enchantez un liquide (l’équivalent d’un bol) qui devient poisseux et malodorant mais surtout un puissant antipoison. Le buveur de l’antidote se mettra alors à exsuder le poison qui l’affecte, qu’il soit d’origine naturelle ou magique (comme le sort Venin Noir), mais ne regagnera ses PV qu’avec du repos. Ce sort est toutefois inefficace contre certains empoisonnements alchimiques (à la discrétion du MJ)."
    },
    {
      name: "Aperçu du futur",
      alt: "apercu du futur",
      difficulty: 0,
      formula: "J’ai lu entre les lignes des volontés célestes,<br>L’avenir et ses signes, bienveillants ou funestes",
      type: ["Divination"],
      duration: "RU secondes",
      range: "contact",
      resistance: "-",
      success: "Flux d’énergie",
      description: "Un flash, une vision de quelques secondes vous permet d’avoir un aperçu probable du futur. Cela peut être une métaphore comme une vision précise, à la discrétion du MJ."
    },
    {
      name: "Arme de lumière",
      alt: "arme de lumiere",
      difficulty: 0,
      formula: "Ce présent dont on doit se servir dignement,<br>Est une arme de foi, de lumière et d’argent",
      type: ["Protection", "Châtiment"],
      duration: "RU minutes",
      range: "moyenne",
      resistance: "-",
      success: "Dégâts +1",
      description: "Une arme de lumière (épée ou lance) apparaît dans les mains de votre cible. Elle n’est utilisable que contre les démons, les dragons et les morts-vivants et confère à son porteur un +10 au COM et +*MAG* aux dégâts (qui s’ajoutent aux dégâts de base). Le porteur de l’arme peut être désarmé."
    },
    {
      name: "Arme invincible d’Althor",
      alt: "arme invincible d'Althor",
      difficulty: 10,
      formula: "Il se joue des armures, invincible est ce fer,<br>Qu’il abatte les murs, qui se brisent comme du verre",
      type: ["Enchantements"],
      duration: "RU minutes",
      range: "moyenne",
      resistance: "-",
      success: "Dégâts +1",
      description: "L’arme ciblée ignore toutes les armures. De plus, elle peut briser un mur (sur 1 m²), une porte ou une armure mais le sort prendra fin immédiatement."
    },
    {
      name: "Armée triomphatrice",
      alt: ["armee triomphante", "armée triomphante"],
      difficulty: -10,
      formula: "Une légion derrière moi, aux armes étincelantes,<br>Hurle, chante et festoie sa victoire écrasante",
      type: ["Guerre", "Illusions"],
      isRitual: true,
      isForbidden: true,
      duration: "RU heures",
      range: "extrême",
      resistance: "-",
      success: "+100 hommes",
      description: "Une armée illusoire vous suit : il y a *MAG*x100 hommes en armes, bruyants, hargneux et très impressionnants. Ils forment un seul bloc et vous ne pouvez les div"
    },
    {
        name: "Armure des Rois",
        alt: "",
        difficulty: 0,
        formula: "Pour affronter le Mal, j’ai endossé l’armure<br>Forgée dans le métal qui arme les coeurs purs",
        type:["Guerre", "Enchantements"],
        duration: "RU minutes",
        range: "moyenne",
        resistance: "-",
        success: "Protection +1",
        description: "Vous enchantez une armure qui gagne +*MAG* points de protection, et devient indestructible durant toute la durée du sort. Viser une partie non protégée permet toujours d’ignorer la protection fournie car le sort n’enchante que l’armure."
      },
      {
        name: "Bannissement du mal",
        alt: "",
        difficulty: 0,
        formula: "Que la douce lumière, aussi pure qu’un cristal<br>Renvoie à la poussière les serviteurs du mal",
        type: ["Protection", "Châtiment"],
        duration: "instantanée",
        range: "courte",
        resistance: "VOL",
        success: "Cible +1 ou Dégâts +1",
        description: "Votre foi vous permet de repousser, voire détruire les morts-vivants et démons face à vous. Vous ciblez jusqu’à *MAG* créatures qui subissent (RU+3) points de dégâts, en ne tenant pas compte de l’armure."
      },
      {
        name: "Beauté subtillisée",
        alt: "beaute subtilisee",
        difficulty: 10,
        formula: "Que justice soit rendue, il fallait te l’ôter<br>Je recouvre mon dû, et reprends ta beauté",
        type: ["Alchimie"],
        isRitual: true,
        isForbidden: true,
        duration: "RU jours",
        range: "moyenne",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Désignez deux cibles. L’une vole la beauté et la prestance de l’autre, et si vous le souhaitez, elles échangent leur score de SOC. Ce vol peut être subtil (les beautés changent un peu chaque jour) ou brutal (les visages changent en une minute) à votre guise."
      },
      {
        name: "Breuvage des nymphes",
        alt: "",
        difficulty: 0,
        formula: "Bois le secret des nymphes pour guérir tes humeurs<br>Le sang, la bile, la lymphe, s’uniront en douceur",
        type: ["Alchimie"],
        isRitual: true,
        duration: "RU jours",
        range: "contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Vous fabriquez une potion à base d’eau, de sang d’animal, de plantes et de poudres étranges. Appliquée sur un blessé ou bue par un malade, elle lui restitue *MAG* PV. La potion contient *MAG* doses par rituel, et une cible ne peut en profiter qu’une fois par jour. Elle est inefficace contre le poison."
      },
      {
        name: "Brumes argentées",
        alt: "brumes argentees",
        difficulty: 10,
        formula: "Perdus dans le brouillard, on n’y voit à deux pas,<br>Ni sourire, ni poignard, seules les ombres sont là",
        type: ["Eau", "Ombre"],
        duration: "*MAG* heures",
        range: "longue",
        resistance: "-",
        success: "Durée x2",
        description: "Un brouillard épais et laiteux envahit une zone de RU x 10 m de rayon au maximum, qui vous permet de passer inaperçu. En effet, toute personne (hormis vous) qui essaie de voir à travers la brume subit un malus de -20 aux tests de PER et de TIR."
      },
      {
        name: "Cautérisation",
        alt: "",
        difficulty: 0,
        formula: "Sur les braises qu’on rallume, de l’ultime ordalie<br>Que mes plaies se consument, en des sillons brunis",
        type: ["Feu"],
        duration: "instantanée",
        range: "contact",
        resistance: "-",
        success: "Cible +1",
        description: "Vous enchantez une flamme, qui une fois passée sur une blessure, la guérira. Elle laissera cependant une vilaine cicatrice noirâtre. Ce sort permet de guérir (RU) Points de Vitalité et d’arrêter les hémorragies."
      },
      {
        name: "Chemin sûr d’Auva",
        alt: ["chemin sur d'auva", "chemin sûr d'Auva"],
        difficulty: 20,
        formula: "Ce halo dans la nuit, il m’appelle et m’attire,<br>Tel un phare qui luit, pour guider les navires",
        type: ["Voyage", "Divination"],
        duration: "RU heures",
        range: "courte",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Ce sort indique à la cible la bonne route à suivre pour atteindre sa destination, qui doit être un lieu et non une personne. Sur terre comme en mer, ce sort fait gagner un temps précieux et procure un +30 à tous les tests d’orientation."
      },
      {
        name: "Clairvoyance",
        alt: "",
        difficulty: 0,
        formula: "J’ai pris de la hauteur, dans le ciel, sous sa voûte,<br>Je suis le spectateur qui t’observe et t’écoute",
        type: ["Divination"],
        duration: "RU minutes",
        range: "spécial",
        resistance: "-",
        success: "le sort est si discret que la cible n’a aucune chance de se sentir observée.",
        description: "Vous espionnez à distance une cible que vous avez déjà vue ou dont vous possédez un objet personnel, où qu’elle soit. De deux choses l’une :<ul><li> votre esprit peut rejoindre directement une cible pour l’espionner. Vous pouvez vous déplacer autour d’elle et inspecter son environnement, mais un premier rôle peut ressentir qu’il est observé s’il réussit un test de VOL ou MAG (au choix du MJ)</li><li> vous pouvez projeter une image « aérienne » de votre cible sur un bassin ou un cristal, pour l’observer en toute sécurité et en faire profiter vos comparses.</li></ul>"
      },
      {
        name: "Clef absolue",
        alt: "",
        difficulty: 10,
        formula: "Prends une clef de la sorte, il y en a à foison,<br>lle ouvrira les portes, des palais, des prisons",
        type: ["Châtiment", "Enchantements", "Ombre"],
        duration: "RU minutes",
        range: "contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Vous enchantez une clef qui peut ouvrir toutes les serrures, quelle que soit leur taille : les portes verrouillées, les coffres, les cassettes des avares…"
      },
      {
        name: "Colère de l’orage",
        alt: ["colere de l'orage", "colère de l'orage"],
        difficulty: -20,
        formula: "Les nuages qui occultent les cieux vocifèrent<br>Que le tonnerre exulte, en un terrible éclair !",
        type: ["Air"],
        duration: "instantanée",
        range: "extrême",
        resistance: "MOU",
        success: "Cible +1",
        description: "Un éclair tombe du ciel et foudroie votre cible, qui subit RU+10 dégâts électriques. Ses vêtements ont aussi 50% de chances de s’enflammer. Ce sort ne peut être utilisé qu’en extérieur."
      },
      {
        name: "Communion",
        alt: "",
        difficulty: 20,
        formula: "Conversons à présent : nos esprits sont liés<br>Par le fil scintillant de nos lointaines pensées",
        type: ["Mentalisme"],
        duration: "RU minutes",
        range: "spécial",
        resistance: "VOL",
        success: "Cible +1 ou Flux d’énergie",
        description: "Vous pouvez communiquer par la pensée avec votre cible dans un rayon de *MAG* x2 km. Aucun mouvement des lèvres n’est nécessaire et elle vous répondra de la même façon."
      },
      {
        name: "Connaissances profondes",
        alt: "",
        difficulty: 10,
        formula: "Les grands esprits se murent, dans les hautes tours d’ivoire<br>Mais parfois des murmures, divulguent leurs savoirs",
        type: ["Divination"],
        duration: "RU minutes",
        range: "courte",
        resistance: "-",
        success: "1 Avantage (CNS ou HAB)",
        description: "La cible bénéficie d’un bonus de +20 à tous ses tests de CNS ou d’HAB pendant toute la durée du sort. Elle peut aussi avoir accès à des savoirs spécialisés qui lui étaient inconnus (religion mystérieuse, médecine, astrologie, musique, peinture…)."
      },
      {
        name: "Convocation d’Ignés",
        alt: ["convocation d'ignes", "convocation d'Ignès"],
        difficulty: 10,
        formula: "Dans les chardons ardents, ils sont nés ;<br>Qu’on acclame ! Les derniers descendants du Feu et de la Flamme",
        type: ["Feu"],
        duration: "une heure",
        range: "Courte",
        resistance: "-",
        success: "Durée x2",
        description: "Vous invoquez à vos côtés (RU) petits élémentaires de feu : les Ignés. Composés de braises et de flammèches crépitantes, les Ignés peuvent espionner pour vous ou vous rendre service, mais rien qui ne mette leur vie en péril comme attaquer un ennemi par exemple. Un Igné disparaît dès qu’il se sent en danger, mais transmet l’information aux autres en communiquant d’une voix rauque. Leur simple toucher peut enflammer des matières comme le tissu, le bois sec ou la paille, et l’eau leur est mortelle."
      },
      {
        name: "Convocation d’Ondines",
        alt: "convocation d'ondines",
        difficulty: 10,
        formula: "Elles laissent sur leur sillage, les embruns qui parfument<br>L’air, et les coquillages, de leurs cheveux d’écume",
        type: ["Eau"],
        duration: "une heure",
        range: "Courte",
        resistance: "-",
        success: "Durée x2",
        description: "Vous invoquez (RU) petits élémentaires aquatiques : les Ondines. Elles ne peuvent vivre hors de l’eau plus d’une minute, et chantent quand elles parlent. Elles peuvent vous aider à nager, vous procurer de l’oxygène, dérober un petit objet, espionner… mais rien qui ne mette leur vie en péril (comme combattre). Une Ondine disparaît dès qu’elle est en danger, mais transmet l’information aux autres d’une voix douce."
      },
      {
        name: "Convocation de Gnomes",
        alt: "",
        difficulty: 10,
        formula: "J’ai trouvé sous les roches, le Petit Peuple Gris<br>Le voilà qui approche, si loin de son abri",
        type: ["Terre"],
        duration: "une heure",
        range: "Courte",
        resistance: "-",
        success: "Durée x2",
        description: "Vous invoquez (RU) petits élémentaires de terre : les Gnomes. Composés de terre, de racines et de pierre, ils peuvent porter de petits objets, espionner pour vous, colmater une brèche, mais rien qui ne mette leur vie en péril (comme combattre). Un Gnome disparaît dès qu’il est en danger mais transmet l’information aux autres d’une voix de basse."
      },
      {
        name: "Convocation de Sylphes",
        alt: "",
        difficulty: 10,
        formula: "A trop semer le vent, j’ai des sylphes pour récolte<br>Ils viennent, je les entends, qui dansent et virevoltent",
        type: ["Air"],
        duration: "une heure",
        range: "Courte",
        resistance: "-",
        success: "Durée x2",
        description: "Vous invoquez (RU) petits élémentaires aériens : les Sylphes. Graciles et translucides, ils se déplacent en volant et parlent en chuchotant. Ils peuvent porter de petits objets, espionner pour vous, mais rien qui ne mette leur vie en péril (comme combattre). Un Sylphe disparaît dès qu’il est en danger, mais transmet l’information aux autres d’une voix mélodieuse."
      },
      {
        name: "Corde enchantée",
        alt: "corde enchantee",
        difficulty: 20,
        formula: "Entends ces quelques vers qu’avec joie je t’adresse,<br>Et déjà comme un ver, tu ondules et te dresses",
        type: ["Air", "Enchantements", "Ombre"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "-",
        success: "Cible +1",
        description: "Vous animez une corde ou une chaîne qui obéit à vos ordres. Elle peut se dresser et s’accrocher à un point précis, défaire son propre nœud, réaliser un nœud coulant ou étrangler une cible si celle-ci n’a pas conscience de cette attaque (endormie par exemple)."
      },
      {
        name: "Corps monstrueux",
        alt: "",
        difficulty: -10,
        formula: "Âme damnée qu’on ne sauve, je suis le monstre abject<br>L’enfant bâtard des fauves, des rapaces, des insectes",
        type: ["Animalisme", "Alchimie"],
        isRitual: true,
        isForbidden: true,
        duration: "RU jours",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous transformez le corps de la cible consentante en un hybride monstrueux qui lui procure des capacités uniques. Vous pouvez choisir MAG options parmi celles-ci (les ailes comptent double) : <ul><li> Ecailles, fourrures: protection de 2.</li><li> Griffes, mandibules, crocs: dégâts FOR-1.</li><li> Venin: VIR de +10, dégâts de 2/tour.</li><li> Ailes d’oiseau ou d’insecte: possibilité de voler.</li><li> Branchies: possibilité de respirer sous l’eau.</li><li> Yeux de chat: vision nocturne.</li><li> Aspect terrifiant: la cible gagne PEUR (1).</li></ul>"
      },
      {
        name: "Course du vent",
        alt: "",
        difficulty: 0,
        formula: "Courrons à vive allure : que nos jambes soient légères !<br>Sur le sol, sur les murs, comme portés par les airs !",
        type: ["Air", "Voyage"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "La cible du sort peut courir à une vitesse incroyable (jusqu’à MOUx2 km/h) et se déplacer sur les murs."
      },
      {
        name: "Course sylvestre de Nünki",
        alt: "course sylvestre de nunki",
        difficulty: 0,
        formula: "Le sentier que j’emprunte, vénérable secret,<br>Ne laisse aucune empreinte, dans les bois et forêts",
        type: ["Terre"],
        duration: "une heure",
        range: "Contact",
        resistance: "-",
        success: "Bulle",
        description: "La cible peut, au choix du mage :<ul><li> doubler sa vitesse de déplacement en forêt, sans laisser la moindre trace sur le sol.</li><li> entrer dans un arbre pour ressortir par un autre de la même forêt situé à MAG kilomètres au maximum.</li></ul>"
      },
      {
        name: "Crânes enchantés",
        alt: "cranes enchantés",
        difficulty: 0,
        formula: "Vous êtes à mes côtés, mes amis les plus chers,<br>Pauvres décapités, qui étiez-vous naguère ?",
        type: ["Nécromancie"],
        isForbidden: true,
        duration: "une heure",
        range: "Courte",
        resistance: "MOU",
        success: "Durée x2 ou Dégâts +1",
        description: "Vous enchantez (RU) crânes humanoïdes autour de vous. Chaque crâne peut être soit : <ul><li>un crâne <strong>enflammé</strong>, qui file sur une cible et explose causant MAG+1 dégâts de feu. Vous ne pouvez projeter qu’un crâne par tour. </li><li>un crâne <strong>bavard</strong> qui délivre un court message à celui qui le touche.</li><li> un crâne <strong>guetteur</strong>, qui crie et claque des dents si un intrus entre dans son « champ de vision&nbsp;». </li></ul>Si aucun crâne n’est à proximité, vous pouvez en invoquer un seul doté d’une des propriétés ci-dessus."
      },
      {
        name: "Croisade",
        alt: "",
        difficulty: -20,
        formula: "Oyez frères et amis, les cris et les prières<br>Haro sur l’ennemi qui rampe à nos frontières !",
        type: ["Châtiment", "Guerre"],
        duration: "MAG jours",
        range: "Moyenne",
        resistance: "VOL",
        success: "Durée x2",
        description: "Ce sort permet de convaincre complètement (RUx5) personnes des bienfaits et de la nécessité d’une guerre. Ils suivront vos recommandations et participeront activement, mais ne seront pas dominés mentalement. Ce sort permet de lever rapidement des troupes pour un conflit."
      },
      {
        name: "Danse macabre",
        alt: "",
        difficulty: -10,
        formula: "Comme une dernière offrande aux âmes des trépassés<br>Dansez la sarabande, jusqu’à vous effondrer",
        type: ["Mentalisme", "Nécromancie"],
        isForbidden: true,
        duration: "MAG tours",
        range: "Moyenne",
        resistance: "VOL",
        success: "Cible +1 ou Flux d’énergie",
        description: "Une musique funèbre résonne autour de vous. Désignez jusqu’à (RU) cibles, qui se mettent à danser une gigue démentielle de pantins désarticulés, et ne peuvent rien faire d’autre. Les attaquer est toujours considéré comme une attaque surprise mais mettra fin à l’envoûtement et elles reprendront leurs esprits au prochain tour. Si vous attendez la fin du sort, les danseurs tomberont à terre et seront Épuisés."
      },
      {
        name: "Décalage illusoire de Nuhataïa",
        alt: ["decalage illusoire de Nuhataia", "décalage illusoire de nuhataia"],
        difficulty: 0,
        formula: "Évitons cet endroit, où le moindre faux-pas<br>Mène les maladroits, de la vie au trépas",
        type: ["Illusions"],
        duration: "MAG tours",
        range: "Contact",
        resistance: "-",
        success: "Cible +1",
        description: "L’image de la cible est décalée d’un pas sur le côté par rapport à son corps, qui devient transparent (mais pas invisible). Ainsi, les ennemis attaqueront en priorité le double, ce qui laisse la possibilité de riposter par des attaques d’opportunité. L’ennemi peut saisir la supercherie en réussissant un test de PER."
      },
      {
        name: "Déluge de la Noyée",
        alt: "",
        difficulty: -20,
        formula: "Crains le courroux du ciel, et cours trouver refuge<br>Tombez pluies torrentielles, déchaînez le Déluge !",
        type: ["Eau"],
        isRitual: true,
        isForbidden: true,
        duration: "RU jours",
        range: "Extrême",
        resistance: "-",
        success: "Zone x2",
        description: "Des pluies diluviennes s’abattent sur MAGx10 km de rayon, faisant déborder les fleuves, inondant les villes et les villages. Les dégâts seront considérables sur les habitations et les cultures et causeront de nombreuses noyades."
      },
      {
        name: "Démence",
        alt: "",
        difficulty: -10,
        formula: "Dans la ruine, la débâcle, ils se mettent à genoux<br>Comme un triste spectacle, dans le Pays des Fous",
        type: ["Mentalisme"],
        isForbidden: true,
        duration: "MAG tours",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "Votre cible intelligente est atteinte de débilité mentale et ne peut que baver et marcher à quatre pattes pendant toute la durée du sort. Attaquer une telle cible est toujours considéré comme une attaque surprise. Les êtres vivants dotés d’une intelligence animale ou inférieure sont insensibles à ce sort."
      },
      {
        name: "Derniers sacrements",
        alt: "",
        difficulty: 10,
        formula: "Ce dernier chant funèbre, demeure un chant d’amour<br>Et garde des ténèbres, ton voyage sans-retour",
        type: ["Nécromancie", "Protection", "Enchantements"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1 ou Flux d’énergie",
        description: "Ce sort préserve un corps et sa tombe contre toute manipulation ou intrusion (pilleurs de tombe, trafiquants de cadavres ou nécromanciens par exemple). Une puissante déflagration frappera tous les intrus qui subiront (RU + MAG) dégâts de feu, ce qui mettra fin au sort."
      },
      {
        name: "Discernement",
        alt: "",
        difficulty: 10,
        formula: "Les charmes et maléfices ne font plus illusion<br>J’ai saisi l’artifice d’où vient la confusion",
        type: ["Châtiment", "Divination"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Flux d’énergie",
        description: "La cible détecte toutes les sources de magie et prend connaissance des sorts précis qui ont été utilisés (ainsi que leurs effets). De plus, les illusions n’ont plus d’effet sur elle pendant toute la durée du sort."
      },
      {
        name: "Disparition",
        alt: "",
        difficulty: -10,
        formula: "Nuages et fumées blanches se présentent, quelle aubaine !<br>Pour descendre des planches, disparaître de scène",
        type: ["Illusions"],
        duration: "instantanée",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle",
        description: "Par une explosion de fumée, la cible consentante disparaît pour réapparaître (RUx5) mètres plus loin, dans un endroit de votre choix."
      },
      {
        name: "Dissimulation",
        alt: "",
        difficulty: 10,
        formula: "Mille couleurs, mille reflets, ont recouvert mon corps<br>Pour un portrait parfait de la toile du décor",
        type: ["Ombre", "Voyage"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "La cible et son équipement prennent les couleurs de son environnement. Elle bénéficie d’un +20 à tous ses tests de DIS."
      },
      {
        name: "Domination",
        alt: "",
        difficulty: 0,
        formula: "Obéis à ton maître : tout ira pour le mieux,<br>Ne laisse rien paraître, dans tes gestes ou tes yeux",
        type: ["Mentalisme", "Ombre"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "Vous contrôlez une cible qui obéira au doigt et à l’œil. Ce n’est pas un pantin et elle continue à agir de façon naturelle quand elle vous obéit. Elle ne commettra pas d’acte suicidaire ou d’automutilation, mais pourra attaquer un de ses alliés. Si elle est blessée, ce choc met immédiatement fin au sort."
      },
      {
        name: "Don divin",
        alt: "",
        difficulty: 20,
        formula: "J’ai chanté tes louanges à la lumière du ciel,<br>Pour que là-haut les anges, t’offrent l’or et le miel",
        type: ["Protection"],
        duration: "RU heures",
        range: "Longue",
        resistance: "-",
        success: "Flux d’énergie",
        description: "La cible pourra relancer son prochain échec gratuitement. Vous pouvez également bénir une arme afin qu’elle puisse blesser les créatures maléfiques insensibles aux armes normales comme les fantômes."
      },
      {
        name: "Dragon des Abysses",
        alt: "",
        difficulty: -30,
        formula: "Il surgit du néant, et sillonne le monde<br>Le Dragon-Océan est en chasse et il gronde",
        type: ["Eau"],
        isRitual: true,
        isForbidden: true,
        duration: "RU heures",
        range: "Extrême",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous invoquez le Dragon des Abysses, un gigantesque monstre d’eau. Il ne peut apparaître que dans une grande étendue d’eau (lac, fleuve, mer, océan…). Il peut combattre à vos côtés, et vous avaler pour vous faire voyager sous l’eau, ainsi que (MAG) alliés. Il vous recrachera ensuite à la surface. Vous ne pouvez l’invoquer plus d’une fois par semaine. <div><h4>DRAGON DES ABYSSES</h4> <p><strong>COM</strong> 70/-20 <strong>Init</strong> : 15 <strong>Prot</strong> : 5 <strong>PV</strong> : 37 <br><strong>DG</strong> : Crocs, griffes RU+8 <br><strong>Comp</strong> : END 90, FOR 90, MOU&nbsp;50,&nbsp;VOL&nbsp;50 <br><strong>Spécial</strong> : PEUR (1)</p></div>"
      },
      {
        name: "Duplication",
        alt: "",
        difficulty: -10,
        formula: "Quand d’une main de maître, on façonne, on duplique,<br>Nul ne peut reconnaître, le faux de l’authentique",
        type: ["Illusions", "Ombre"],
        isForbidden: true,
        duration: "RU heures",
        range: "Courte",
        resistance: "-",
        success: "Cible +1 ou Flux d’énergie",
        description: "La cible consentante prend l’apparence d’une personne de même taille (+/- 20 cm). Sa voix et sa tenue sont aussi altérées pour s’accorder parfaitement à celles qu’elles copient. Seuls son discours et son attitude pourront trahir le travestissement magique. Ce sort peut aussi être utilisé sur un objet, pour en créer un faux, qui durera quelques heures."
      },
      {
        name: "Eau de roche",
        alt: "",
        difficulty: 20,
        formula: "Comme le disaient les sages à la gorge trop sèche<br>-Point de meilleur breuvage, que cette eau pure et fraîche !",
        type: ["Eau"],
        duration: "instantanée",
        range: "Courte",
        resistance: "-",
        success: "Soins",
        description: "Vous pouvez au choix : purifier MAG litres d’eau souillée ou d’eau de mer et la rendre potable, ou créer de l’eau pure ex nihilo, de quoi remplir deux mains jointes."
      },
      {
        name: "Effondrement",
        alt: "",
        difficulty: 0,
        formula: "Tel le pas d’un géant creuse le sol et la pierre,<br>Laisse un gouffre béant dans un bruit de tonnerre !",
        type: ["Guerre", "Terre"],
        duration: "instantanée",
        range: "Courte",
        resistance: "MOU",
        success: "Zone x2",
        description: "Dans un tremblement de terre, un gouffre s’ouvre sous les pieds de vos ennemis. Large et profond de MAG mètres, il provoque (RU) dégâts de chute. Les survivants devront passer un tour à l’escalader. Vous pouvez aussi provoquer une avalanche ou une chute de pierres si vous êtes en milieu montagneux, qui fera tomber RU rochers, causant chacun D10 dégâts."
      },
      {
        name: "Égide",
        alt: "",
        alt: "egide",
        difficulty: 0,
        formula: "Nul ne l’a vaincu, le chevalier sans peur<br>Il portait cet écu et servait mes couleurs",
        type: ["Guerre"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "-",
        success: "Soins",
        description: "Vous invoquez un bouclier magique qui offre une protection supplémentaire de MAG points à votre cible (qui doit le porter). Ce bouclier prend l’apparence qui vous plaît (couleur, motifs ou transparence). À chaque fois que la cible encaisse des dégâts, la protection de l’Égide baisse d’un point."
      },
      {
        name: "Élixir de jouvence",
        alt: "elixir de jouvence",
        difficulty: -30,
        formula: "L’élixir de cette flasque renversera le temps<br>J’ai modelé vos masques dans le sang des enfants",
        type: ["Alchimie"],
        isRitual: true,
        isForbidden: true,
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Deux élixirs sont créés",
        description: "Ce rituel est le plus convoité des mortels. L’élixir fait rajeunir de (RU) années et efface d’autant les effets du vieillissement. Un mage qui maîtrise ce maléfice est assuré de vivre confortablement pour le restant de ses jours. Mais ce sort nécessite le sang d’un enfant sacrifié."
      },
      {
        name: "Elixirs sexuels",
        alt: "",
        difficulty: 0,
        formula: "Buvez donc ces liqueurs, pour la fertilité,<br>Retrouver sa vigueur, ou sa virginité",
        type: ["Alchimie"],
        isRitual: true,
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Deux élixirs sont créés",
        description: "Un liquide quelconque devient un élixir aux propriétés à choisir parmi ces trois effets :<ul><li> vaincre la stérilité ou devenir plus fécond,</li><li> vigueur et plaisir pendant l’acte sexuel,</li><li> retrouver sa virginité.</li></ul>"
      },
      {
        name: "Enfant du Verseau",
        alt: "",
        difficulty: -10,
        formula: "Né de chair et de sang, je ne suis plus que l’eau,<br>Libre et fort : le torrent de l’amphore du Verseau",
        type: ["Eau"],
        duration: "RU+1 tours",
        range: "Contact",
        resistance: "-",
        success: "Vous utilisez votre équipement",
        description: "Votre corps (mais pas votre équipement, qui tombe au sol) devient liquide et transparent, mais vous gardez forme humaine et continuez à agir. Aucune arme non magique ne peut vous atteindre mais vous ne pouvez pas non plus utiliser d’arme ou d'objet (vous attaquerez à mains nues). Un grand feu, comme un incendie ou un souffle de dragon, peut vous évaporer et vous tuer sur le coup."
      },
      {
        name: "Envol",
        alt: "",
        difficulty: -20,
        formula: "Je prendrai mon élan à la fin de ces vers<br>Pour chevaucher le vent et ne plus toucher terre",
        type: ["Air", "Voyage"],
        duration: "RU heures",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle ou Flux d’énergie",
        description: "Après avoir couru quelques mètres, la cible peut voler dans les airs pendant toute la durée du sort. Sa vitesse de vol maximale est de MOU x 2 km/h."
      },
      {
        name: "Étendard des héros",
        alt: "etendard des héros",
        difficulty: 0,
        formula: "Quand le combat fait rage dans les cris et les flammes,<br>Ne perds jamais courage et cherche l’oriflamme",
        type: ["Enchantements", "Guerre"],
        duration: "RU minutes",
        range: "Extrême",
        resistance: "-",
        success: "Vous bénéficiez des bonus",
        description: "Les alliés qui voient l’étendard, le drapeau ou le gonfanon ciblé sont insensibles à la peur et au découragement. Ils gagnent +10% au COM et au TIR, causent 1 point de dégât supplémentaire et gagnent également une protection magique d’1 point. Vous n’êtes pas concerné par ces bonus."
      },
      {
        name: "Exorcisme",
        alt: "",
        difficulty: 0,
        formula: "Ô puissante cantique, tu triomphes des démons<br>Des paroles hérétiques et des sombres visions",
        type: ["Châtiment", "Protection"],
        duration: "instantanée",
        range: "Courte",
        resistance: "MAG",
        success: "Cible +1 ou Flux d’énergie",
        description: "Ce pouvoir permet de désenvoûter une personne et de contrer une possession démoniaque. La cible transpire abondamment, convulse, puis hurle pour expulser le démon qui retournera en Enfer ou qui se matérialisera pour affronter les personnes présentes, avec la moitié de ses PV."
      },
      {
        name: "Fardeau du condamné",
        alt: "",
        difficulty: 0,
        formula: "Sous le poids d’un fardeau, sur la voie du calvaire<br>Tu courberas le dos, mettras genou à terre",
        type: ["Air", "Châtiment"],
        duration: "MAG tours",
        range: "Moyenne",
        resistance: "FOR",
        success: "Cible +1",
        description: "L’air devient soudain pesant autour de la cible : elle doit ployer, comme écrasée par un fardeau. Elle est affaiblie et ne peut agir qu’un tour sur deux : si elle est attaquée pendant un de ses tours perdus, elle ne pourra que se défendre comme dans le cas d’une attaque d’opportunité."
      },
      {
        name: "Feuille d’Automne",
        alt: "feuille d'automne",
        difficulty: 20,
        formula: "Le vent m’a chuchoté : « Si l’infortuné tombe<br>Il sera plus léger que la plume d’une colombe »",
        type: ["Air"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle ou Flux d’énergie",
        description: "La cible peut tomber de n’importe quelle hauteur sans subir le moindre dommage : elle chute comme une feuille morte en automne. Lorsque le sort prend fin, elle reprend sa vitesse normale de chute."
      },
      {
        name: "Flèche ardente",
        alt: "fleche ardente",
        difficulty: 0,
        formula: "Je t’invoque flèche ardente, trait de feu sanguinaire,<br>Que tes flammes dévorantes se nourrissent de la chair !",
        type: ["Feu", "Guerre"],
        duration: "instantanée",
        range: "Extrême",
        resistance: "MOU",
        success: "Cible +1",
        description: "Vous projetez de votre main une flèche de feu sur votre ennemi qui inflige (RU +6) dégâts de feu."
      },
      {
        name: "Flèche du Sagittaire",
        alt: "fleche du sagittaire",
        difficulty: 0,
        formula: "La flèche ensorcelée vole droit vers le coeur<br>Du gibier désigné du terrible chasseur",
        type:  ["Enchantements"],
        duration: "instantanée",
        range: "Moyenne",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous enchantez un projectile (flèche, carreau, pierre, javelot…) qui procure au tireur +20 au TIR et qui contourne les obstacles. Sa portée est augmentée de (RUx10) mètres."
      },
      {
        name: "Fleur de feu",
        alt: "",
        difficulty: -20,
        formula: "Graine de feu, fleur carmin ne demande qu’à éclore<br>Comme elle brille dans mes mains, brûle de plus en plus fort !",
        type: ["Feu", "Guerre"],
        duration: "instantanée",
        range: "Longue",
        resistance: "MOU",
        success: "Dégâts +1",
        description: "Vous concentrez une telle énergie dans vos mains qu’une boule de flammes tournoyante s’y matérialise. Projetée sur une cible, cette fleur de feu explose sur une zone de (RU + *MAG*) mètres de rayon et inflige (RU +7) dégâts de feu à toute personne dans la zone."
      },
      {
        name: "Fontaine de vie",
        alt: "",
        difficulty: 0,
        formula: "Sur ma peau, ma figure, doucement immergées,<br>Se ferment les blessures qu’ils m’ont tous infligés",
        type: ["Eau", "Enchantements"],
        duration: "1 heure",
        range: "Contact",
        resistance: "-",
        success: "Durée x2",
        description: "Vous enchantez une source, une fontaine ou un bassin. Toute personne s’y baignant récupère (RU + *MAG*) PV. On ne peut profiter des bienfaits de la fontaine de vie qu’une fois par jour."
      },
      {
        name: "Fragilité du cristal",
        alt: "",
        difficulty: 20,
        formula: "Ephémère est la chose, qu’une pincée de poudre<br>Qu’on étale, qu’on dépose, suffira à dissoudre",
        type: ["Enchantements", "Alchimie"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "tout l’objet se disloque",
        description: "Vous enchantez une pincée de poussière, qui prend une couleur vive. Une fois étalée sur un objet non-magique, elle lui donne la fragilité du cristal sans changer l’aspect initial de l’objet. Au prochain choc, toute la partie recouverte de poudre se brisera en mille morceaux."
      },
      {
        name: "Fraternité de la meute",
        alt: "",
        difficulty: 10,
        formula: "Nous parcourons la lande, dans la nuit, dans le froid<br>Et partageons la viande encore chaude de nos proies",
        type: ["Animalisme", "Guerre"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Soins",
        description: "Vous soudez l’esprit d’équipe qui vous lie à vos compagnons. Pendant toute la durée du sort, vous et *MAG* alliés gagnez 1 point de protection et infligez toujours 1 point de dégât supplémentaire (mêlée, tir ou magie)."
      },
      {
        name: "Frère d’armes",
        alt: ["frere d'armes", "frères d'armes"],
        difficulty: 0,
        formula: "Le frère d’armes que j’invoque, virevolte à mes côtés,<br>Frappe de taille et d’estoc sans jamais reculer",
        type: ["Enchantements", "Guerre"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous animez une arme de mêlée à proximité qui viendra combattre en volant jusqu’à une distance Moyenne. Elle a un COM de 50, inflige des dégâts de +3 (arme légère), +4 (arme moyenne) ou +5 (arme lourde), et possède *MAG*x2 PV."
      },
      {
        name: "Fumée sombre",
        alt: "fumee sombre",
        difficulty: 10,
        formula: "Subterfuge démoniaque jaillissant des crevasses<br>Fumées noires et opaques, nous entourent, nous enlacent",
        type: ["Feu", "Nécromancie", "Ombre", "Alchimie"],
        duration: "RU+1 tours",
        range: "Contact",
        resistance: "-",
        success: "Zone x2",
        description: "Une épaisse fumée noire s’échappe du sol et envahit une zone de *MAG* mètres de rayon. Cela permet de se désengager des combats sans subir d’attaque d’opportunité, et tous les tests de PER et TIR dans cette zone subissent un -20."
      },
      {
        name: "Gangrène",
        alt: "gangrene",
        difficulty: 0,
        formula: "Quand la gangrène torture, comme sur la plaie le sel<br>La plus petite morsure, peut s’avérer mortelle",
        type: ["Nécromancie", "Alchimie"],
        isForbidden: true,
        duration: "instantanée",
        range: "Extrême",
        resistance: "-",
        success: "Dégâts +1",
        description: "Ce maléfice infecte une plaie récente (moins de 3 jours). Le membre pourrit et la victime perd 1 PV par jour pendant (RU) jours. Elle devra l’amputer si elle ne reçoit pas une guérison d’exception fournie par un médecin compétent ou une guérison magique."
      },
      {
        name: "Gigantisme",
        alt: "",
        difficulty: -10,
        formula: "Nous redoutions leur force, leur folie destructrice<br>Ils avaient sur le torse, mille-et-une cicatrices",
        type: ["Alchimie", "Terre"],
        duration: "RU+1 tours",
        range: "Courte",
        resistance: "-",
        success: "Soins",
        description: "La cible consentante double en taille (mais pas ses vêtements ou son équipement). Elle gagne +30 en FOR et +10 PV (qui disparaîtront à la fin du sort). Sa voix est beaucoup plus grave et elle peut manier d’une seule main les armes à deux mains."
      },
      {
        name: "Gigantisme Animal",
        alt: "",
        difficulty: -20,
        formula: "Retrouvez à présent la taille de vos ancêtres<br>Pour qu’en vous lentement, ils puissent enfin renaître",
        type: ["Animalisme"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "Vous enchantez jusqu’à *MAG* animaux qui vous obéissent et qui grossissent jusqu’à atteindre la taille d’un homme (si l’animal est déjà aussi grand qu’un homme, ce sort n’a aucun effet). Ils gagnent +10 en COM, ont 50 en FOR, et ajoutent 5 à leurs PV. Les scores exacts des animaux sont laissés à l’appréciation du MJ (un lapin ou une mouche de 2 mètres reste peu efficace en combat, tandis qu’un blaireau déjà féroce sera un adversaire d’une dangerosité extrême s’il bénéficie de ce sort). Vous pouvez monter ces animaux et ils peuvent se battre pour vous."
      },
      {
        name: "Golem",
        alt: "",
        difficulty: -10,
        formula: "Nuit et jour j’ai créé, façonné de mes mains,<br>Ce serviteur dévoué, qui s’éveille, presqu’humain",
        type: ["Nécromancie", "Alchimie"],
        isRitual: true,
        isForbidden: true,
        duration: "permanente",
        range: "Contact",
        resistance: "-",
        success: "Protection +1",
        description: "Qu’il s’agisse d’un corps sculpté ou d’un amalgame de cadavres, vous avez créé un humanoïde massif à votre service. Il ne peut communiquer et vous devez inscrire sur un petit parchemin les ordres qu’il exécutera et lui glisser dans la bouche. Vous pouvez également voir par ses yeux en lui enfonçant deux pierres précieuses dans les orbites. Ses valeurs sont les suivantes : COM 45/+5 Init : 9 Prot : 2 PV : 15+RU DG : Mains nues RU+5 Comp : FOR 60, MOU 20, PER 30, VOL 50"
      },
      {
        name: "Guérison de la folie",
        alt: "",
        difficulty: 0,
        formula: "En fouillant le dédale du fond de ton esprit,<br>Je trouverai le mal qui t’a tant affaibli",
        type: ["Mentalisme", "Protection"],
        isRitual: true,
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Ce sort vous permet de guérir les maladies mentales ou de calmer un frénétique. La cible regagne (RU/2) points de SF définitifs, avec un minimum de 1 (Voir règles de folie). On ne peut bénéficier de ce sort plus d’une fois par semaine. On ne peut jamais dépasser son score de Sang-froid initial."
      },
      {
        name: "Guérison des blessures",
        alt: "",
        difficulty: 10,
        formula: "Toi qui souffres et qui cries, je guérirai tes maux<br>Et les jours assombris brilleront à nouveau",
        type: ["Protection"," Voyage"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Cible +1",
        description: "Vous soignez les blessures physiques de votre cible. Elle récupère (RU + *MAG*) points de Vitalité. On ne peut jamais dépasser son score de Vitalité initial."
      },
      {
        name: "Griffes de la Mort",
        alt: "",
        difficulty: -10,
        formula: "La vieille dame des charniers m’a confié son trésor,<br>De mes doigts décharnés pendent les griffes de la Mort",
        type: ["Nécromancie"],
        isForbidden: true,
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Votre bras s’allonge, prend une teinte grisâtre et vos ongles poussent en de grandes griffes. Vous disposez d’une allonge de C, et si vous touchez un adversaire, il subira une perte de *MAG*+6 PV, qu’aucune armure n’absorbe. Comme un simple toucher suffit, vous gagnez un +10 en COM."
      },
      {
        name: "Guerrier fantasmatique",
        alt: "guerrier fantasmagorique",
        difficulty: -10,
        formula: "J’en appelle au champion de Fantasmagorie<br>Ce fidèle compagnon ne m’a jamais trahi",
        type: ["Illusions"],
        isForbidden: true,
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Dégâts +1",
        description: "Un guerrier illusoire - dont vous décidez de l’apparence - apparaît et affronte vos ennemis. Ceux-ci doivent réussir un test de VOL à chaque tour pour ne pas subir ses coups, sans quoi les attaques qu’il porte sont bien réelles. Ses valeurs sont les suivantes : <div><h4>GUERRIER FANTASMATIQUE</h4> <p><strong>COM</strong> 60/-10 <strong>Init</strong> : 15 <strong>Prot</strong> : 5 <strong>PV</strong> : 20 <br><strong>DG</strong> : Épée ou hache RU +6 <br><strong>Comp</strong> : FOR 60, MOU 70</p></div>"
      },
      {
        name: "Histoire de l’inconnu",
        alt: "histoire de l'inconnu",
        difficulty: 0,
        formula: "Tout sujet garde en lui mille-et-un souvenirs<br>Les beaux jours et les pluies, les sanglots et les rires",
        type: ["Divination"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "En touchant un objet ou un être vivant, vous apprenez des détails de son histoire (à la discrétion du MJ). Pour un objet, il peut s’agir du sexe de son dernier propriétaire et de son état d’esprit, du prix pour lequel il a été échangé, de l’identité de son fabricant, etc. Concernant un être vivant, le sort permet de revivre des moments de son passé. Vous pouvez orienter vos visions et chercher des détails précis."
      },
      {
        name: "Hurlement terrifiant de Shyr",
        alt: "",
        difficulty: 10,
        formula: "Laisse entrer la furie, c’est une folle délivrance<br>C’est un souffle, c’est un cri qui déchire le silence",
        type: ["Animalisme"],
        duration: "instantanée",
        range: "Courte",
        resistance: "VOL",
        success: "Flux d’énergie",
        description: "Vous poussez un hurlement d’une telle intensité qu’il peut figer d’effroi vos adversaires. Tous vos ennemis à portée sont Apeurés jusqu’à votre prochain tour."
      },
      {
        name: "Incandescence",
        alt: "",
        difficulty: 0,
        formula: "Nous ferons rendre gorge à l’ennemi arrogant,<br>Notre colère nous forge des armes chauffées à blanc",
        type: ["Feu", "Châtiment"],
        duration: "*MAG* tours",
        range: "Moyenne",
        resistance: "-",
        success: "Dégâts +1",
        description: "Ce sortilège chauffe une pièce de métal jusqu’à la rendre incandescente. Vous pouvez au choix :<ul><li> chauffer une lame qui infligera des dégâts de feu, et ajoutera 2 à ses dégâts</li><li> chauffer une pièce métallique (bijou, pièce d’amure…) qui fera se tordre de douleur son porteur qui subira 2 points de dégâts par tour tant qu’il ne l’aura pas retirée.</li></ul>"
      },
      {
        name: "Influence insidieuse",
        alt: "",
        difficulty: 10,
        formula: "Laissez ces doux murmures approcher vos oreilles<br>Il est toujours plus sûr d’écouter leurs conseils",
        type: ["Mentalisme", "Ombre"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "VOL",
        success: "+1 Avantage (SOC)",
        description: "Vous insufflez vos idées dans l’esprit de votre cible. Elle ira dans votre sens et vous gagnez un bonus de +20 en SOC avec cette personne pendant toute la durée du sort. Ce sort ne fonctionne que sur une cible prête à dialoguer et non un ennemi assoiffé de sang en plein combat."
      },
      {
        name: "Instinct infaillible de Marrak",
        alt: "",
        difficulty: 0,
        formula: "A la croisée des routes, j’ai suivi mon instinct,<br>Ni la peur ni les doutes, n’entravaient mon destin",
        type: ["Protection", "Châtiment", "Divination"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Ce sort vous alerte de tout piège : trappe, vin empoisonné, assassin dissimulé derrière une porte… Ce sort indique précisément la nature du piège en une fraction de seconde dans votre esprit. Vous ne subissez pas d’attaque surprise et vous agissez avant tout le monde si un combat éclate."
      },
      {
        name: "Invisibilité aux animaux",
        alt: "",
        difficulty: 0,
        formula: "Ne commets point la faute - elle peut être fatale,<br>De marcher tête haute dans l’assemblée bestiale",
        type: ["Illusions", "Animalisme"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle",
        description: "La cible consentante devient totalement invisible pour les animaux, les animaux fabuleux et les Dragons. L’invisibilité couvre aussi ses vêtements et son équipement. Cependant, si elle attaque un animal pendant ce sort, elle redeviendra visible immédiatement (mais elle a tout de même droit à une attaque surprise)."
      },
      {
        name: "Invisibilité aux Hommes",
        alt: "",
        difficulty: 0,
        formula: "D’un geste, d’une parole, enfilons ce costume,<br>Pour danser la farandole des voyageurs de brume",
        type: ["Illusions", "Ombre"],
        isForbidden: true,
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle",
        description: "La cible consentante devient totalement invisible pour les humanoïdes (mais pas les êtres magiques comme les morts-vivants, les golems ou les démons). L’invisibilité couvre aussi ses vêtements et son équipement. Si elle attaque un autre humanoïde, elle redeviendra visible immédiatement (mais elle a tout de même droit à une attaque surprise)."
      },
      {
        name: "Invisibilité au Mal",
        alt: "",
        difficulty: 0,
        formula: "Elles vivent autour de nous, ces créatures terribles<br>Rejoins à pas-de-loup, le Royaume Invisible",
        type: ["Illusions", "Protection"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Bulle ou Flux d’énergie",
        description: "La cible consentante devient totalement invisible pour les morts-vivants, les démons et tous les monstres dotés d’une vision magique comme les golems ou les gargouilles. Cependant, si elle attaque un de ces monstres pendant ce sort, elle redeviendra visible immédiatement (mais elle a tout de même droit à une attaque surprise)."
      },
      {
        name: "Invocation de l’homme-lige",
        alt: ["invocation de l'homme-lige", "invocation de l'homme lige"],
        difficulty: 0,
        formula: "Tu ne cherches ni la gloire, ni l’or, ni le prestige,<br>Bats-toi pour ma victoire, ô valeureux homme-lige",
        type: ["Guerre", "Enchantements"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous invoquez un guerrier en armure antique et aux yeux brillants qui agit immédiatement selon vos ordres. Il n’est pas obligé d’attaquer et peut très bien se tenir près de vous, comme un garde du corps. <div><h4>HOMME-LIGE</h4><p><strong>COM</strong> 50/0 <strong>PV</strong> : 20 <strong>Init</strong> : 12 <br><strong>Prot</strong> : 4 (armure antique) <br><strong>DG</strong> : Épée ou Lance RU+5 <br><strong>Comp</strong> : FOR 50, MOU 40, PER 50</p></div>"
      },
      {
        name: "Jugement Dernier",
        alt: "",
        difficulty: -30,
        formula: "La fournaise étouffante des mille forges de l’Enfer<br>Offre une mort terrifiante aux âmes noires prisonnières",
        type: ["Protection", "Châtiment"],
        isRitual: true,
        duration: "instantanée",
        range: "Extrême",
        resistance: "MAG",
        success: "le sort affecte aussi les innocents.",
        description: "<i>« Tuez-les tous, Dieu reconnaîtra les siens »</i><br>Le ciel se déchire, et les astres semblent se disperser le temps d’une seconde. Tous vos ennemis voient leur peau se flétrir, comme calcinée par le châtiment divin. Ils subissent tous immédiatement (RU +8) dégâts de feu (l’armure ne compte pas). Les survivants perdent ensuite 1 PV par tour jusqu’à ce qu’ils subissent des soins. Ce sort n’a aucun effet contre une âme sainte ou innocente."
      },
    {
        name: "Lame vampire de Shaula",
        alt: "",
        difficulty: 0,
        formula: "Elle veut d’autres victimes, sombre lame assoiffée<br>Le sang de tous ses crimes ne l’a pas rassasiée",
        type: ["Enchantements", "Nécromancie"],
        isRitual: true,
        isForbidden: true,
        duration: "RU minutes",
        range: "contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous enchantez une lame qui devient « vampire » : elle boira l’énergie vitale de ses victimes et la restituera à son porteur. Tous les PV ôtés avec cette arme sont retransmis à celui qui l’a en main (sans toutefois dépasser son score initial de PV)."
    },
    {
        name: "Langage Véritable",
        alt: "langage veritable",
        difficulty: 0,
        formula: "Unis aux premiers âges, les hommes de tous pays,<br>Parlaient le même langage, oublié aujourd’hui",
        type: ["Divination", "Voyage"],
        isRitual: true,
        duration: "RU heures",
        range: "Courte",
        resistance: "-",
        success: "la cible connaît également l’argot et les expressions idiomatiques locales",
        description: "La cible comprend et parle toutes les langues connues. Elle peut aussi les lire et les écrire si elles possèdent une forme écrite."
    },
    {
        name: "Langue des Bêtes",
        alt: "langue des betes",
        difficulty: 10,
        formula: "Ô mes beaux frères sauvages, je comprends vos paroles,<br>De vos cris sous l’orage, au chant du rossignol",
        type: ["Animalisme"],
        duration: "RU heures",
        range: "Courte",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Vous pouvez communiquer avec les animaux, leur demander des services qu’ils accompliront si cela ne les met pas en danger et que vous leur êtes amical."
    },
    {
        name: "Lecture des Pensées de Lanks",
        alt: "lecture des pensées de lanks",
        difficulty: -10,
        formula: "Toute âme est comme un livre au mystérieux langage,<br>Les secrets qu’il délivre, sont enfouis dans ses pages",
        type: ["Châtiment", "Mentalisme"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "VOL",
        success: "Flux d’énergie",
        description: "Vous lisez les pensées de votre cible et découvrez immédiatement ce qu’elle pense au moment où vous posez votre question."
    },
    {
        name: "Linceul noir",
        alt: "",
        difficulty: 0,
        formula: "C’est un monde silencieux, sans lumière ni vacarme,<br>C’est un voile sur tes yeux, de ténèbres et de larmes",
        type: ["Illusions", "Nécromancie"],
        isForbidden: true,
        duration: "*MAG* tours",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "Ce sort enferme les sens de votre cible. Sa vision se trouble, son ouïe est soudain déficiente, même les odeurs lui sont difficiles à percevoir. Il subit un -20 en HAB, PER et TIR, et un -10 à toutes ses actions physiques."
    },
    {
        name: "Lion de braise",
        alt: "",
        difficulty: -30,
        formula: "Trop longtemps enfermé, je l’ai laissé s’enfuir,<br>Le fauve est affamé, écoutez-le rugir !",
        type: ["Feu"],
        isRitual: true,
        isForbidden: true,
        duration: "RU heures",
        range: "Courte",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous invoquez le Lion de Braise, monstre rougeoyant à la crinière enflammée, qui pourra combattre à vos côtés. Vous ne pouvez l’invoquer plus d’une fois par semaine. <div><h4>LION DE BRAISE</h4> <p><strong>COM</strong> 75/-25 <strong>Init</strong> : 21 <strong>Prot</strong> : 2 <strong>PV</strong> : 29 <br><strong>DG</strong> : Griffes, crocs RU +7 dégâts de feu <br><strong>Comp</strong> : FOR 70, MOU 70, PER 50, VOL 50 <br><strong>Spécial</strong> : PEUR, Corps de feu (son corps incandescent cause 1 dégât de feu par tour à tous ses adversaires en mêlée).</p></div>"
    },
    {
        name: "Main de la Justice",
        alt: "",
        difficulty: 0,
        formula: "Que l’homme qui a meurtri, subisse le châtiment<br>En payant vie pour vie, oeil pour oeil, dent pour dent",
        type: ["Guerre", "Protection", "Châtiment"],
        duration: "instantanée",
        range: "Longue",
        resistance: "VOL",
        success: "Dégâts +1",
        description: "Ce sort fait subir à une cible l’exact coup qu’elle a infligé à un adversaire : elle subit donc le même montant de dégâts, et son armure ne protège pas contre ce sort."
    },
    {
        name: "Maître de la douleur",
        alt: "maitre de la douleur",
        difficulty: 0,
        formula: "Tu deviendras l’esclave de cette longue pénitence<br>Prisonnier des entraves de ta propre souffrance",
        type: ["Mentalisme"],
        duration: "RU tours",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "Votre cible ressent une douleur atroce : elle est Affaiblie et subit *MAG* dégâts psychiques par tour. Ce sort permet aussi de résister à la torture ou ignorer un éventuel malus dû à une blessure."
    },
    {
        name: "Maître des animaux",
        alt: "maitre des animaux",
        difficulty: 10,
        formula: "Noble bête, mon vassal, je suis ton nouveau Roi !<br>Ne te montre loyal à nul autre que moi",
        type: ["Voyage", "Animalisme"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "VOL",
        success: "Flux d’énergie",
        description: "Vous commandez un maximum de *MAG* animaux qui pourront se battre pour vous et qui vous obéiront au doigt et à l’œil pendant toute la durée du sort."
    },
    {
        name: "Maître des flammes",
        alt: "maitre des flammes",
        difficulty: 10,
        formula: "Jouons avec le feu, sa fumée ou sa forme,<br>Qu’il éblouisse nos yeux ou bien qu’il se rendorme !",
        type: ["Feu"],
        duration: "1 heure",
        range: "Longue",
        resistance: "MOU",
        success: "Dégâts +1",
        description: "Vous pouvez au choix :<ul><li> créer des effets pyrotechniques spectaculaires à partir d’un feu existant (formes dans la fumée ou le feu, agrandissement d’une flamme, étincelles, petites explosions…). Si le feu touche une cible, elle subira *MAG* dégâts de feu.</li><li> Éteindre un feu existant : un feu de camp s’éteint en un tour, un brasier en une minute, un grand incendie en une heure.</li></ul>"
    },
    {
        name: "Maître du vent",
        alt: "maitre du vent",
        difficulty: 10,
        formula: "Le vent du sud m’écoute, le vent du nord se plie,<br>Le vent d’ouest me redoute, le vent d’est obéit",
        type: ["Air", "Voyage"],
        duration: "*MAG* heures",
        range: "Courte",
        resistance: "FOR",
        success: "Durée x2",
        description: "Vous pouvez réduire ou augmenter la puissance du vent et rendre ainsi un vent faible en un vent fort pour avancer plus vite sur une embarcation, ou pour éteindre une torche. En combat vous pouvez concentrer la puissance du vent en une puissante rafale qui dure 1 tour et met fin au sort immédiatement. Cette rafale fait tomber RU objets et/ou adversaires présents."
    },
    {
        name: "Mal de mer de Sadaltajir",
        alt: "",
        difficulty: 10,
        formula: "De la poupe à la proue, le navire penche et tangue<br>Les vagues et les remous, laissent les malades exsangues",
        type: ["Eau", "Mentalisme"],
        duration: "*MAG* tours",
        range: "Moyenne",
        resistance: "END",
        success: "Cible +1",
        description: "La cible ressent des nausées et des vertiges, comme provoqués par le balancement d’un bateau sur l’océan. Elle est Affaiblie."
    },
    {
        name: "Malédiction du Bouc Noir",
        alt: "malediction du bouc noir",
        difficulty: -10,
        formula: "Ton âme seule est intacte, vois comme tu as changé,<br>Sois puni pour tes actes dans ce corps étranger",
        type: ["Animalisme"],
        isForbidden: true,
        duration: "RU tours",
        range: "Moyenne",
        resistance: "VOL",
        success: "Cible +1",
        description: "Votre cible est transformée en un bouc noir pour toute la durée du sort. Tous ses scores changent, y compris les PV. S’il est tué dans cette forme, son cadavre reprendra forme humaine."
    },
    {
        name: "Manteau des voyageurs",
        alt: "",
        difficulty: 10,
        formula: "J’ai porté ce manteau, qu’il ait ma gratitude !<br>Des étés les plus chauds aux hivers les plus rudes",
        type: ["Enchantements", "Voyage"],
        duration: "RU jours",
        range: "Courte",
        resistance: "-",
        success: "Protection +1",
        description: "Vous enchantez un vêtement (bliaud, manteau, robe, tunique…) qui vous protégera du froid comme de la chaleur (pas du feu) pendant toute la durée du sort. De plus, il confère une protection de 1, cumulable avec une éventuelle armure."
    },
    {
        name: "Marche sur l’Eau",
        alt: "marche sur l'eau",
        difficulty: 0,
        formula: "Pieds nus, je suis parti, j’ai longtemps avancé,<br>Même les mers en furie, je les ai traversées",
        type: ["Eau", "Voyage"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "-",
        success: "Bulle",
        description: "La cible peut marcher et courir sur l’eau et toutes les surfaces liquides (boue, vase…)."
    },
    {
        name: "Martyr",
        alt: "",
        difficulty: 0,
        formula: "Trop de sang a coulé, pardonnez leurs erreurs<br>Que mon corps soit brûlé, pour que cesse leur douleur",
        type: ["Protection"],
        duration: "instantanée",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "Pour chaque allié blessé, vous perdez 1 PV. En contrepartie, ils regagnent tous immédiatement (RU) PV. Le maximum d’alliés bénéficiant du sort est de (*MAG*) alliés."
    },
    {
        name: "Mélodie de la Dame Grise",
        alt: "melodie de la dame grise",
        difficulty: 0,
        formula: "Même le froid, la misère, n’ont brisé l’harmonie<br>Car nous restons des frères, courageux et unis",
        type: ["Enchantements", "Protection", "Voyage"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "VOL",
        success: "Flux d’énergie",
        description: "Vous enchantez un instrument de musique. Chaque fois que vous jouez une mélodie avec lui, le calme et l’harmonie règnent. Vos adversaires ne voudront plus se battre, sauf s’ils sont attaqués, ce qui met fin au sort automatiquement."
    },
    {
        name: "Métamorphose",
        alt: "",
        difficulty: 0,
        formula: "Pour charmer Dame Nature, mets tes plus beaux atours<br>Écailles, plumes, et fourrures sont de mise à sa cour",
        type: ["Animalisme"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Cible +1",
        description: "Vous prenez la forme et les aptitudes physiques (scores, capacités) d’un animal commun. Vous pouvez choisir cet animal selon votre *MAG*.<ul><li> 1-2 : rat, poule, fourmi, mouton</li><li> 3-4 : chat, chien, renard, moineau, mouche, mule</li><li> 5-6 : loup, corbeau, serpent, araignée, cheval, cerf</li><li> 7+ : ours, faucon, aigle, lion, taureau</li></ul>"
    },
    {
        name: "Miasmes Putrides de Marrak",
        alt: "",
        difficulty: 10,
        formula: "Dans un souffle puissant, que jaillissent les vapeurs<br>Et relents pestilents venus des profondeurs",
        type: ["Nécromancie"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "END",
        success: "Zone x2",
        description: "Vous crachez un nuage pestilentiel qui envahit une zone de *MAG* mètres de rayon. Tous ceux qui entrent dans cette zone (vous excepté) doivent tester leur END. En cas d’échec, ils subiront 1 Désavantage à toutes leurs actions. En cas d’échec critique à ce test, ils s’arrêteront pour vomir pendant un tour."
    },
    {
        name: "Mille pointes",
        alt: "",
        difficulty: 10,
        formula: "Vois ces quelques cailloux embrocher l’adversaire<br>Aux jambes, au ventre, au cou, comme mille pointes de fer",
        type: ["Air", "Enchantements", "Terre"],
        duration: "instantanée",
        range: "Courte",
        resistance: "MOU",
        success: "Cible +1 ou Dégâts +1",
        description: "Vous ramassez une poignée de poussière et de cailloux que vous dotez d’une énergie destructrice et perforante, et vous la projetez immédiatement sur *MAG* ennemis, qui subissent (RU +1) dégâts."
    },
    {
        name: "Monstre d’ombre",
        alt: "monstre d'ombre",
        difficulty: -20,
        formula: "Elles se cachent derrière nous, elles évitent le soleil,<br>Ces silhouettes au-dessous, seule la faim les éveille",
        type: ["Illusions", "Ombre"],
        isForbidden: true,
        duration: "*MAG* tours",
        range: "Courte",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous prenez le contrôle d’une ombre qui attaque son propriétaire à chaque tour. Elle traverse les armures et inflige (RU) dégâts asphyxiants par passe d’armes gagnée. On ne peut la combattre que magiquement (par un sortilège ou une arme magique). Le meilleur moyen de s’en défaire est de rejoindre un endroit où le soleil n’entre pas, afin qu’elle se dissolve dans l’obscurité. L’ombre a exactement les mêmes compétences que son propriétaire et dispose de *MAG* PV."
    },
    {
        name: "Monture du preux",
        alt: "",
        difficulty: 0,
        formula: "Au sortir de l’étable jusqu’au soleil couchant,<br>Tu es infatigable et plus vif que le vent",
        type: ["Guerre"],
        duration: "une journée",
        range: "Courte",
        resistance: "-",
        success: "Durée x2",
        description: "La monture ciblée devient infatigable, insensible à la peur, plus vigoureuse (+RU PV) et surtout deux fois plus rapide. Elle gagne une protection de *MAG* points (qui peut prendre la forme d’un caparaçon rutilant). On ne peut lancer ce sort deux fois de suite sur la même monture, qui mourrait sur le coup."
    },
    {
        name: "Mur de feu",
        alt: "",
        difficulty: 0,
        formula: "Invincible rempart, gigantesque brasier<br>Par le feu nous sépare du fer et de l’acier",
        type: ["Feu"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous invoquez une barrière de feu de *MAG* mètres de long et de haut au maximum. Ceux qui le traversent encaissent automatiquement *MAG*+5 dégâts de feu. La chaleur qu’il dégage est insoutenable et cause *MAG* dégâts de feu par tour à tout individu à moins de 3 mètres."
    },
    {
        name: "Mur de Pierre",
        alt: "",
        difficulty: 10,
        formula: "Pour préserver les nôtres, nous bâtirons ce mur<br>Une pierre après l’autre, qui jamais ne fissure",
        type: ["Terre"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Zone x2",
        description: "Vous faites jaillir du sol un mur de pierre de *MAG* mètres de long et de haut au maximum. Ce mur est indestructible mais il est tout à fait possible de l’escalader s’il ne touche pas un plafond."
    },
    {
        name: "Muraille de Vent",
        alt: "",
        difficulty: 0,
        formula: "Il n’a ni lance, ni casque, ce soldat aérien,<br>Il est la grande bourrasque qui me sert de gardien",
        type: ["Air"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Zone x2",
        description: "Une muraille de vent se dresse devant vous, de *MAG* mètres de long et de haut au maximum. Aucun projectile ne peut passer au travers et les personnages pris dans ce mur de vent sont repoussés de plusieurs mètres. La traverser nécessite un test de FOR à -30."
    },
    {
        name: "Nuage de cendres",
        alt: "",
        difficulty: -20,
        formula: "Vents de cendre et de soufre s’élèvent en tourbillon,<br>Où peu à peu s’engouffre le souffle des Dragons",
        type: ["Feu"],
        isForbidden: true,
        duration: "*MAG* tours",
        range: "Courte",
        resistance: "END",
        success: "Zone x2",
        description: "Vous crachez un nuage de cendres et de fumée noire étouffante qui peut recouvrir une zone de *MAG* mètres de rayon. Tous les personnages présents dans la zone subissent (RU) dégâts de feu par tour, et doivent fuir au plus vite dans une direction au hasard (car ils ne distinguent rien). Le nuage de cendres ne vous affecte pas."
    },
    {
        name: "Œil du Basilic",
        alt: "oeil du basilic",
        difficulty: -10,
        formula: "Comme l’antique vestige des cités de naguère,<br>C’est le temps qui se fige sur une statue de pierre",
        type: ["Terre"],
        isForbidden: true,
        duration: "RU minutes",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "Votre magie est si puissante que vous transformez en statue votre cible. Elle est changée en pierre et ne peut subir aucun dégât tant qu’elle est sous cette forme (à moins d’avoir les outils appropriés comme un marteau et un burin). La transformation annihile les sens de la cible, mais pas sa pensée. À la fin du sort, elle reprendra sa forme à l’endroit où vous l’avez laissée."
    },
    {
        name: "Œil-Horizon",
        alt: ["oeil horizon", "oeil-horizon"],
        difficulty: 10,
        formula: "Par-delà les frontières, à travers les cloisons<br>Quelles que soient les barrières, nous verrons l’horizon",
        type: ["Châtiment", "Divination"],
        duration: "RU tours",
        range: "Extrême",
        resistance: "-",
        success: "1 Avantage PER ou TIR",
        description: "Aucun obstacle, vivant ou non, ne peut gêner la vision de la cible. Elle peut bien sûr s’arrêter sur un être ou une chose pour mieux l’étudier."
    },
    {
        name: "Ombres et Lumières",
        alt: "",
        difficulty: 20,
        formula: "Quand les Rois nous promirent d’apporter la lumière<br>Ils n’ont fait que trahir, leurs ombres étaient derrière",
        type: ["Illusions", "Ombre"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "-",
        success: "Zone x2",
        description: "Vous pouvez diffuser une lumière intense ou étendre une ombre aussi noire que la nuit sur une zone de *MAG* mètres de rayon. De plus, vous maîtrisez les jeux d’ombre et de lumière, en créant des feux follets, des lumières dansantes, ou donner vie à votre ombre, qui peut se déplacer et communiquer par signes."
    },
    {
        name: "Or des fous",
        alt: "",
        difficulty: 10,
        formula: "Poussière de mensonge, or des fous, poudre aux yeux,<br>Font sortir de mes songes le métal si précieux",
        type: ["Enchantements", "Alchimie"],
        isForbidden: true,
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Vous enchantez une pincée de poussière qui peut recouvrir jusqu’à *MAG* piécettes ou cailloux. Elle leur donnera l’apparence de véritables pièces d’or ou pierres précieuses pendant toute la durée du sort. Vous pouvez changer l’aspect des pièces pour qu’elles semblent frappées du lieu que vous souhaitez avec l’emblème voulu."
    },
    {
        name: "Ours de Pierre",
        alt: "",
        difficulty: -30,
        formula: "Souviens-toi du gardien des monts et des forêts,<br>Géant des temps anciens, le voilà qui renaît",
        type: ["Terre"],
        isRitual: true,
        duration: "RU heures",
        range: "Courte",
        resistance: "-",
        success: "PV de l’Ours +*MAG*",
        description: "Vous invoquez l’Ours de pierre, colossal monstre minéral aux yeux d’obsidienne, qui peut combattre à vos côtés ou vous transporter vous et vos compagnons. Vous ne pouvez l’invoquer plus d’une fois par semaine. <div><h4>OURS DE PIERRE</h4> <p><strong>COM</strong> 70/-20 <strong>Init</strong> : 11 <strong>Prot</strong> : 7 <strong>PV</strong> : 31 <br><strong>DG</strong> : Griffes RU+8 <br><strong>Comp</strong> : FOR 80, MOU 20, PER 20, VOL 50 <br><strong>Spécial</strong> : Corps minéral. Sur une R+, l’ennemi brise son arme contre le corps du monstre. Les masses et les marteaux ne sont pas concernés par cet effet.</p></div>"
    },
    {
        name: "Palimpseste",
        alt: "",
        difficulty: -20,
        formula: "Les mots doivent disparaître, de ce vieux parchemin<br>Pour que de nouvelles lettres, montrent un autre chemin",
        type: ["Divination", "Illusions"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "1 Avantage (au choix)",
        description: "Ce puissant sortilège permet de rejouer entièrement une scène. Toute la scène qui vient d’être jouée n’était qu’une vision d’une des possibilités du futur, une illusion. Quand le joueur décide de lancer le sort, c’est que son personnage a déjà pris cette décision bien avant, en amont. Ainsi, la scène qui vient d’être jouée (un combat, une course-poursuite, une discussion…) n’a jamais existé et il faut la refaire depuis le départ. On ne peut jeter ce sort plus d’une fois par mois sans subir le courroux du Destin (et perdre 1 point de Destin définitif)."
    },
    {
        name: "Parfums et pestilences",
        alt: "",
        difficulty: 20,
        formula: "Comme l’odeur de la mort ou le parfum des fleurs<br>Quelques vers et un sort troubleront bien des coeurs",
        type: ["Illusions"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "-",
        success: "Zone x2 ou Cible +1",
        description: "Vous créez une odeur qui peut être aussi bien un parfum subtil et fleuri qu’une puanteur insoutenable. Vous pouvez viser une zone de *MAG* mètres de rayon ou l’odorat d’une seule cible, à votre guise."
    },
    {
        name: "Passe-Muraille",
        alt: "passe muraille",
        difficulty: 0,
        formula: "Les portes et murailles des grands châteaux de pierre<br>Ont chacune une faille pour passer au travers",
        type: ["Air", "Ombre", "Voyage"],
        duration: "instantanée",
        range: "Courte",
        resistance: "-",
        success: "Bulle",
        description: "La cible consentante prend la consistance de l’air et traverse une paroi si celle-ci présente une infime faille pour s’y infiltrer. Elle devient aussi intangible jusqu’au prochain tour."
    },
    {
        name: "Peau d’Écorce",
        alt: ["peau d'ecorce", "peau d'écorce"],
        difficulty: 0,
        formula: "Nous avons hérité de l’écorce des vieux chênes,<br>Et au solstice d’été, leur sève coule dans nos veines",
        type: ["Terre"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Cible +1",
        description: "La peau de la cible consentante prend l’aspect du bois, et elle bénéficie d’une protection de *MAG*-1 points supplémentaires partout sur le corps. Elle gagne également +20 en DIS dans les bois et forêts."
    },
    {
        name: "Piège de feu de Mesarthim",
        alt: "",
        difficulty: 0,
        formula: "J’ai tracé ce symbole pour défendre les miens<br>Et qu’un jour il immole, les curieux, les vauriens",
        type: ["Châtiment", "Feu"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Le sort fonctionne une 2e fois",
        description: "Vous placez ce piège sur une porte, sur le sol ou tout autre endroit. Lorsqu’il est touché il se déclenche et crache une flamme qui enveloppe une cible lui causant (RU+8) dégâts de feu. Vous pouvez préciser le type de cible (homme, femme, elfe, orque…)."
    },
    {
        name: "Pluie acide",
        alt: "",
        difficulty: 0,
        formula: "Que le ciel s’assombrisse, et que tombent les gouttes<br>D’une pluie destructrice sur une armée dissoute",
        type: ["Eau", "Guerre"],
        duration: "*MAG* tours",
        range: "Longue",
        resistance: "END",
        success: "Zone x2",
        description: "Une pluie verdâtre et acide tombe du ciel sur une zone de 10 m de rayon et inflige (RU) dégâts acides par tour sur chaque être vivant présent dans la zone."
    },
    {
        name: "Prescience",
        alt: "",
        difficulty: 0,
        formula: "C’est une voix qui m’entraîne, m’inspire et me protège<br>Guide mes pas dans l’arène comme les plus grands stratèges",
        type: ["Divination"],
        duration: "RU +1 tours",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Plus consciente de la réalité du combat et guidée par son instinct de survie, la cible gagne un bonus de +10% en COM, MOU et TIR, et inflige toujours 1 point de dégât supplémentaire."
    },
    {
        name: "Prison de givre",
        alt: "",
        difficulty: 0,
        formula: "Les montagnes du Nord ont des neiges éternelles<br>J’y ai plongé ton corps dans une prison de gel",
        type: ["Eau"],
        duration: "*MAG* tours",
        range: "Moyenne",
        resistance: "FOR",
        success: "Durée x2",
        description: "Un cercueil de glace vient recouvrir le corps de votre ennemi. Cette prison l’empêche de bouger et lui cause (RU/2) dégâts de froid à chaque tour. Il est néanmoins protégé des autres attaques. Il pourra détruire cette prison avec un test de FOR à -20."
    },
    {
        name: "Puissance du Roi-Fauve",
        alt: "puissance du roi fauve",
        difficulty: 0,
        formula: "Ne plus suivre les ordres, courir sans s’arrêter<br>Hurler, bondir et mordre : goûter la liberté",
        type: ["Animalisme"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "Un flot d’énergie bestiale électrise le corps de la cible et lui procure un grand sentiment de puissance. Elle gagne 10% en COM, FOR, END, et MOU. Son score de Vitalité n’est pas modifié par cette augmentation."
    },
    {
        name: "Reflets multiples des Jumeaux",
        alt: "",
        difficulty: 0,
        formula: "Les reflets des miroirs attendent ce stratagème,<br>Et brûlent d’enfin pouvoir exister par eux-mêmes",
        type: ["Illusions"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "+1 double",
        description: "Vous faites apparaître jusqu’à *MAG* doubles de vous-même. Ce sont des illusions, mais qui peuvent agir de leur propre chef, sans dépasser la portée du sort, ni bien sûr disposer du toucher. Un test de PER à chaque tour est nécessaire pour distinguer le vrai du faux."
    },
    {
        name: "Remède prodigieux",
        alt: "",
        difficulty: 0,
        formula: "Il ne faudra qu’un geste, une main sur une peau<br>Pour que fièvres et pestes s’évaporent aussitôt",
        type: ["Protection"],
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "Soins",
        description: "En touchant la peau de votre cible, vous dissipez la maladie qui l’affecte. Ce sortilège est malheureusement inefficace contre certains maux d’origine magique (à la discrétion du MJ)."
    },
    {
        name: "Renaissance du Printemps",
        alt: "",
        difficulty: 0,
        formula: "Le temps sait te guérir, que repoussent tes branches<br>Je les vois refleurir, ô glorieuse revanche",
        type: ["Protection", "Terre"],
        duration: "RU jours",
        range: "Contact",
        resistance: "-",
        success: "Cible +1",
        description: "La cible récupère *MAG* PV par jour pendant (RU) jours. C’est le seul sortilège à même de faire repousser des membres tranchés : il faut pour cela que le sort fasse effet au moins 5 jours."
    },
    {
        name: "Repos du guerrier",
        alt: "",
        difficulty: 10,
        formula: "Les guerriers silencieux, autour du feu éteint<br>Ont rendu grâce à Dieu et se reposent enfin",
        type: ["Guerre", "Voyage"],
        duration: "instantanée",
        range: "Moyenne",
        resistance: "-",
        success: "Cible +1 ou Flux d’énergie",
        description: "Ce sortilège ne peut être lancé qu’après un affrontement car il se nourrit de l’apaisement de la situation. Il permet de soigner jusqu’à (RU) alliés, qui récupèrent chacun *MAG* points de Vitalité."
    },
    {
        name: "Respiration aquatique de Vernalys",
        alt: "",
        difficulty: 20,
        formula: "J’ai reçu ce cadeau de la main des tritons<br>Pour les suivre sous l’eau dans les Pays Profonds",
        type: ["Animalisme", "Eau"],
        duration: "RU heures",
        range: "Longue",
        resistance: "-",
        success: "Bulle",
        description: "La cible respire aussi bien sous l’eau qu’à l’air libre."
    },
    {
        name: "Réveil des morts",
        alt: "reveil des morts",
        difficulty: 0,
        formula: "Autour de moi les corps, un à un se réveillent<br>Prêts à se battre encore, jusqu’au dernier sommeil",
        type: ["Nécromancie"],
        isForbidden: true,
        duration: "*MAG* heures",
        range: "Moyenne",
        resistance: "-",
        success: "Durée x2",
        description: "(RU) cadavres autour de vous s’animent et vous obéissent. Consultez les valeurs des Zombies ou des Squelettes (cf Livre II)."
    },
    {
        name: "Révélations morbides",
        alt: "",
        difficulty: 0,
        formula: "J’ai lu dans ses yeux vides, la paix ou le tourment,<br>Courte vision limpide de ses derniers instants",
        type: ["Nécromancie", "Divination"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Ce sort vous dévoile les derniers instants de la vie d’un mort. Vous devez regarder les yeux du mort pour que le sort fasse effet : ce sort ne peut être lancé si les yeux ont été crevés, brûlés ou arrachés. Cette vision remonte jusqu’à (RU) minutes avant le décès."
    },
    {
        name: "Rêves et chimères",
        alt: "reves et chimeres",
        difficulty: 0,
        formula: "Dans les contrées lointaines des rêves évanouis<br>Vivent les diables, les sirènes, du sommeil de minuit",
        type: ["Mentalisme"],
        duration: "RU heures",
        range: "spécial",
        resistance: "VOL",
        success: "Cible +1",
        description: "Vous entrez dans les rêves de votre cible (qui doit se situer à moins de *MAG* kilomètres) et vous pouvez y créer toutes sortes de choses, de lieux, de personnages réels ou imaginaires, et lui faire subir les pires cauchemars."
    },
    {
        name: "Roi des bêtes",
        alt: "roi des betes",
        difficulty: "-10",
        formula: "Que tous les animaux qui ont prêté serment,<br>Rejoignent aussitôt mon cri de ralliement",
        type: ["Animalisme"],
        duration: "une heure",
        range: "Contact",
        resistance: "-",
        success: "Durée x2",
        description: "Cette invocation fait venir à vos côtés (RU) animaux qui vous aideront en attaquant vos adversaires."
    },
    {
        name: "Ronces Gardiennes",
        alt: "",
        difficulty: 0,
        formula: "Reculez face aux ronces, qui s’érigent en barrière<br>Elles s’enroulent et s’enfoncent au plus profond des chairs",
        type: ["Terre"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "MOU",
        success: "Cible +1",
        description: "Des ronces sortent du sol et peuvent au choix :<ul><li> entraver un adversaire qui est Paralysé tant qu’il n’a pas supprimé la ronce gardienne,</li><li> créer une barrière d’épines haute d’1m50 qui vous protégera, et que vos ennemis devront enjamber.</li></ul> Dans tous les cas, elles ont une valeur de COM de 40, 10 PV et infligent des dégâts de *MAG*."
    },
    {
        name: "Salamandre",
        alt: "",
        difficulty: 0,
        formula: "Mes haillons sont noircis, mais mon corps reste entier,<br>Au coeur de l’incendie ou sur le grand bûcher",
        type: ["Feu"],
        duration: "RU heures",
        range: "Longue",
        resistance: "-",
        success: "Cible + *MAG*",
        description: "La cible est totalement immunisée au feu et à sa fumée asphyxiante."
    },
    {
        name: "Sanctuaire Sacré",
        alt: "",
        difficulty: 0,
        formula: "Béni soit ce sanctuaire : que ceux qui le franchissent<br>Subissent la colère des flammes de la justice",
        type: ["Protection"],
        duration: "RU minutes",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Un cercle magique de *MAG* mètres de rayon vous entoure. Toute créature qui franchit ce cercle subit *MAG* dégâts de feu par tour passé à l’intérieur du cercle."
    },
    {
        name: "Sécheresse de l’Été",
        alt: ["secheresse de l'ete", "sécheresse de l'été"],
        difficulty: 0,
        formula: "Elle s’acharne, vengeresse, fait plier les empires,<br>La cruelle sécheresse vous regarde dépérir",
        type: ["Feu", "Eau"],
        duration: "instantanée",
        range: "Moyenne",
        resistance: "END",
        success: "Cible +1",
        description: "Vous pouvez au choix :<ul><li> assécher un lieu sur une zone de (RU) mètres de rayon,</li><li> affaiblir une cible dont la peau se flétrit, et subit (RU+2) dégâts que l’armure n’absorbe pas. Elle est Affaiblie jusqu’à ce qu’elle se réhydrate.</li></ul>"
    },
    {
        name: "Soif de Sang",
        alt: "",
        difficulty: 0,
        formula: "Donne le goût du sang et l’écume à mes lèvres<br>La rage du survivant, dans une dernière fièvre",
        type: ["Animalisme", "Guerre"],
        duration: "RU+1 tours",
        range: "Contact",
        resistance: "VOL",
        success: "Dégâts +1",
        description: "La cible devient folle de rage et ne peut qu’attaquer au contact. Elle gagne +10 en COM et +2 ses dégâts. De plus, elle peut blesser plusieurs ennemis par tour si elle est entourée. Mais elle devra réussir un test de VOL (difficulté 0) pour ne pas attaquer ses alliés s’ils sont à portée. À la fin du sort, la cible est Affaiblie."
    },
    {
        name: "Sommeil du Juste",
        alt: "",
        difficulty: 0,
        formula: "Quand s’éteint le soleil derrière tes yeux si lourds<br>Entre dans un sommeil aux doux draps de velours",
        type: ["Mentalisme", "Ombre"],
        duration: "RU heures",
        range: "Longue",
        resistance: "VOL",
        success: "Cible +1",
        description: "La cible ressent une grande fatigue et tombe de sommeil. Si on la frappe ou si un grand bruit survient, elle se réveillera instantanément. Mais on peut la transporter sans gêner son sommeil profond."
    },
    {
        name: "Sons et silences",
        alt: "",
        difficulty: 20,
        formula: "Coquins et nobles gens le savent tous au dehors :<br>La parole est d’argent mais le silence est d’or",
        type: ["Ombre", "Air", "Illusions"],
        duration: "RU minutes",
        range: "longue",
        resistance: "-",
        success: "Cible +1 ou Zone x2",
        description: "Vous pouvez créer au choix :<ul><li> des bruits, mélodies, voix ou paroles audibles par (MAG) cibles maximum. Les voix peuvent en imiter une autre à la perfection et prononcer un discours que vous aurez choisi.</li><li> Une zone de silence de (MAG) mètres de rayon est également possible, dans laquelle tout bruit est étouffé.</li></ul>"
    },
    {
        name: "Souffle de pureté",
        alt: "",
        difficulty: 20,
        formula: "J’ai parcouru le ciel, qu’on m’accueille, triomphal<br>Que l’air pestilentiel disparaisse d’une rafale !",
        type: ["Air"],
        duration: "instantanée",
        range: "courte",
        resistance: "-",
        success: "Soins ou Flux d’énergie",
        description: "Un courant d’air pur dissipe les fumées et les mauvaises odeurs sur un rayon de (RUx2) mètres."
    },
    {
        name: "Souvenirs et oublis",
        alt: "",
        difficulty: -10,
        formula: "Il est dit que l’Histoire appartient aux vainqueurs<br>Ils balayent les mémoires, qui dans l’oubli se meurent",
        type: ["Mentalisme"],
        duration: "RU heures",
        range: "courte",
        resistance: "VOL-10",
        success: "Flux d’énergie",
        description: "Vous manipulez la mémoire d’une cible. Vous pouvez au choix, créer un faux souvenir, ou en effacer un vrai, pour la durée du sort."
    },
    {
        name: "Spectre nocturne",
        alt: "",
        difficulty: -20,
        formula: "Mon esprit s’arrache de ce corps bien trop lourd<br>Qu’il vole sans attaches jusqu’au lever du jour",
        type: ["Nécromancie"],
        isRitual: true,
        isForbidden: true,
        duration: "RU heures",
        range: "contact",
        resistance: "-",
        success: "vous gagnez la capacité (PEUR)",
        description: "Votre âme fuit votre corps durant la nuit. Elle est intangible, peut voler où elle le souhaite à une vitesse de MAG x2 km/h, et n’est perceptible que par une très faible partie de la population. Vous ne pouvez pas interagir avec les gens physiquement, mais vous pouvez communiquer avec eux ou leur jeter des sorts. Une arme bénie ou magique vous blessera comme si vous étiez présent physiquement."
    },
    {
        name: "Spiritisme",
        alt: "",
        difficulty: 0,
        formula: "Pour qu’on me prête mainforte dans les heures les plus sombres<br>J’ai frappé à la porte du royaume des ombres",
        type: ["Nécromancie"],
        isRitual: true,
        isForbidden: true,
        duration: "RU minutes",
        range: "contact",
        resistance: "-",
        success: "l’esprit n’est pas limité dans ses paroles et peut communiquer normalement",
        description: "Vous entrez en contact avec l’esprit d’un mort. Vous pouvez lui poser des questions, et savoir ce qu’il ressent. Sauf si le MJ en décide autrement, il répondra à vos questions de façon très simple : par oui, par non, par un mot ou un nom."
    },
    {
        name: "Suffocation",
        alt: "",
        difficulty: 0,
        formula: "Comme le chien qu’on punit en tirant sur sa sangle<br>C’est ton air qui s’enfuit, c’est ta gorge qu’on étrangle",
        type: ["Air", "Châtiment", "Ombre"],
        duration: "RU tours",
        range: "courte",
        resistance: "END",
        success: "Dégâts +1",
        description: "Un ennemi est pris à la gorge et a de plus en plus de mal à respirer. Il est Affaibli et subit MAG dégâts asphyxiants par tour."
    },
    {
        name: "Territoire de l’Hiver",
        alt: "territoire de l'hiver",
        difficulty: 0,
        formula: "L’imprudent qui veut suivre, ces chemins recouverts<br>Par la neige et le givre, devra vaincre l’Hiver",
        type: ["Eau"],
        duration: "*MAG* minutes",
        range: "extrême",
        resistance: "MOU",
        success: "Durée x2",
        description: "Vous gelez le sol sur une zone de (RU) mètres de rayon, qui se couvre d’une pellicule de neige et de verglas. Doublez le RU si la zone est humide ou si la scène a lieu en hiver. Toutes les créatures sur cette zone doivent réussir un test de MOU à chaque tour pour ne pas se retrouver à terre."
    },
    {
        name: "Torche de vérité",
        alt: "torche de verite",
        difficulty: -10,
        formula: "A l’heure de comparaître à l’épreuve du bûcher<br>Les félons et les traîtres seront tous démasqués",
        type: ["Enchantements", "Feu", "Châtiment"],
        duration: "RU heures",
        range: "courte",
        resistance: "VOL",
        success: "Flux d’énergie",
        description: "Lorsque la torche ciblée est allumée, tous ceux qui se trouvent à moins de (MAG) mètres doivent dire la vérité aux questions qu’on leur pose. En cas de mensonge, ils subissent une brûlure magique (1 dégât de feu). Ils peuvent néanmoins garder le silence."
    },
    {
        name: "Torche magique de Tegmine",
        alt: "",
        difficulty: 20,
        formula: "En un claquement de doigts, qu’une flamme apparaisse !<br>Qu’elle crépite et flamboie comme dans les nuits d’ivresse",
        type: ["Feu", "Voyage"],
        duration: "RU heures",
        range: "courte",
        resistance: "-",
        success: "Cible +1",
        description: "Une flamme apparaît et vole à un endroit de votre choix : elle peut vous suivre ou rester statique. Elle peut enflammer des objets et est très résistante au vent et à la pluie. Elle peut néanmoins être éteinte si on y passe un tour."
    },
    {
        name: "Tour Chancelante d’Althor",
        alt: "tour chancelante d'althor",
        difficulty: -10,
        formula: "Mes légions souterraines abattront à l’instant<br>Pour les Rois et les Reines un travail de titan",
        type: ["Terre"],
        isRitual: true,
        duration: "RU jours",
        range: "longue",
        resistance: "-",
        success: "Flux d’énergie",
        description: "Vous modelez la terre et la roche pour construire un édifice : une tour, un pont, une muraille… mais pas plus grand que (MAG) x3 mètres. Ce sort peut prendre plusieurs aspects : un bâtiment sorti de terre, des créatures de pierre au visage impassible construisant pour vous, etc. La construction en elle-même ne prend qu’une heure, mais s’effondrera à la fin du sort. Vous pouvez déclencher son affaissement et sa destruction quand vous le souhaitez."
    },
    {
        name: "Transmutation",
        alt: "",
        difficulty: 10,
        formula: "Roche, métal ou bien bois, sont issus du même sang<br>On les confond parfois, tant la terre a d’enfants",
        type: ["Terre", "Alchimie"],
        duration: "RU minutes",
        range: "Moyenne",
        resistance: "-",
        success: "Zone x2",
        description: "Vous changez la matière d’un objet ou d’une construction autour de vous, n’excédant pas *MAG* mètres cubes : le bois en métal, la roche en bois ou inversement. Vous pouvez décider de la qualité du nouveau matériau et transformer une lourde porte en métal en porte de bois vermoulu par exemple."
    },
    {
        name: "Traque du malfaisant",
        alt: "",
        difficulty: -10,
        formula: "Les condamnés marqués du symbole de la honte<br>Ne pourront échapper à la loi des Archontes",
        type: ["Châtiment", "Divination"],
        duration: "RU jours",
        range: "Extrême",
        resistance: "-",
        success: "Cible +1",
        description: "Vous marquez votre cible d’une empreinte magique, qui vous indique précisément l’endroit où se trouve votre cible pendant toute la durée du sort. Vous devez voir votre cible pour la marquer et lancer le sort (même si cette vision est issue d’un sort comme Clairvoyance par exemple)."
    },
    {
        name: "Trompe-l’œil",
        alt: ["trompe l'oeil", "trompe-l'oeil"],
        difficulty: 10,
        formula: "Dépourvus de sagesse, les pécheurs veulent encore<br>Les plus somptueuses richesses qui pourtant s’évaporent",
        type: ["Illusions"],
        duration: "RU minutes",
        range: "Longue",
        resistance: "PER",
        success: "Zone x2",
        description: "Vous faites apparaître une illusion visuelle, auditive et olfactive, un véritable mirage issu de votre imagination. Cette illusion est immobile, et ne dépasse pas *MAG* mètres cubes."
    },
    {
        name: "Vapeur colorée de Vernalys",
        alt: "",
        difficulty: 0,
        formula: "Que le souffle d’azur, émeraude, écarlate,<br>Se répande en brûlures et douloureux stigmates",
        type: ["Eau", "Illusions", "Alchimie"],
        duration: "instantanée",
        range: "Courte",
        resistance: "-",
        success: "Cible+1",
        description: "Vous projetez un puissant jet de vapeur aux reflets colorés et terriblement corrosif sur *MAG* cibles, qui leur inflige (RU +3) dégâts acides."
    },
    {
        name: "Venin noir",
        alt: "",
        difficulty: 0,
        formula: "Que les crocs du serpent, et le dard du scorpion,<br>Soient les deux artisans de ce sombre poison",
        type: ["Animalisme", "Ombre", "Alchimie"],
        isForbidden: true,
        duration: "instantanée",
        range: "Contact",
        resistance: "-",
        success: "le poison a un effet paralysant",
        description: "Vous enchantez un liquide (l’équivalent d’une gorgée – et qui peut être votre propre salive) qui noircit immédiatement et devient empoisonné. Pour être efficace, il doit être inoculé d’une façon ou d’une autre : il peut être ingéré ou vous pouvez l’enduire sur une lame. Ce poison de virulence (-10) ôtera (RU) PV par minute à la victime, qui a droit à un test d’END à chaque minute pour mettre fin à l’empoisonnement. Certains antidotes naturels (vomitifs) et le sortilège « Remède miraculeux » peuvent mettre fin aux effets du Venin noir."
    },
    {
        name: "Ventre de la Terre",
        alt: "",
        difficulty: -10,
        formula: "Voyez la pierre se fendre et les arbres s’ouvrir<br>Cachons-nous sans attendre pour échapper au pire",
        type: ["Terre", "Voyage"],
        duration: "RU jours",
        range: "Moyenne",
        resistance: "-",
        success: "un ruisselet coule dans cet abri, ce qui permet de ne pas mourir de soif",
        description: "La terre, un arbre ou un rocher s’ouvre pour vous accueillir et vous protéger. L’abri peut contenir *MAG*x2 personnes. Vous pouvez l’ouvrir et le refermer à volonté."
    },
    {
        name: "Visions <br>cauchemardesques de Shaula",
        alt: "Visions cauchemardesques de Shaula",
        difficulty: 10,
        formula: "J’ai exhumé la peur, dans tes rêves, tes nuits noires<br>Pour qu’au fond de ton cœur se creuse le désespoir",
        type: ["Mentalisme", "Nécromancie"],
        isForbidden: true,
        duration: "*MAG* tours",
        range: "Courte",
        resistance: "VOL",
        success: "Cible +1",
        description: "La victime de ce maléfice hurle d’effroi : elle est Apeurée pour toute la durée du sort. Tous les personnages qui l’attaquent bénéficient de l’attaque d’opportunité. Elle pourra néanmoins riposter au prochain tour, car le choc lui aura fait reprendre ses esprits."
    },
    {
        name: "Vision de l’aura",
        alt: ["vision de l'aura", "vision de l aura"],
        difficulty: 10,
        formula: "On discerne les âmes, qui est lion, qui est rat,<br>A l’ardeur de leur flamme, à la teinte et l’éclat",
        type: ["Divination", "Mentalisme"],
        duration: "RU minutes",
        range: "Courte",
        resistance: "-",
        success: "Cible +1",
        description: "Vous percevez les auras de *MAG* personnes, révélant ainsi leur vraie nature. Les auras prennent la forme de flammes autour des corps, plus ou moins brillantes selon leur bonté. Vous lisez aussi leur état d’esprit actuel : gai, triste, en colère, mélancolique, affamé, envieux, apeuré, etc."
    },
    {
        name: "Vol des corbeaux",
        alt: "",
        difficulty: -10,
        formula: "Un millier de plumes noires ornaient mes oripeaux<br>J’ai puisé mon pouvoir dans le vol des corbeaux",
        type: ["Nécromancie", "Animalisme"],
        duration: "RU tours",
        range: "Contact",
        resistance: "-",
        success: "Dégâts +1",
        description: "Vous vous métamorphosez en une nuée de corbeaux, qui peut attaquer jusqu’à 10 ennemis. Les corbeaux causent automatiquement *MAG*+1 dégâts par tour à chaque cible ne disposant pas d’une armure complète. Vous pouvez également vous envoler pour rejoindre un point précis avant de reprendre forme humaine."
    },
    {
        name: "Voyage bienheureux",
        alt: "",
        difficulty: 10,
        formula: "Chaussez vos meilleures bottes, aiguisez votre épée<br>Car partout on chuchote, que l’heure est arrivée",
        type: ["Voyage"],
        duration: "RU jours",
        range: "Contact",
        resistance: "-",
        success: "Soins",
        description: "Vous lancez ce sort sur *MAG* cibles qui marcheront d’un bon pas et regagneront tous 1 point de Vitalité et 1 point de Sang-froid supplémentaire par jour."
    }
]



const groups = [
    {
        name: "Agents et domestiques",
        armor: "",
        weapons : [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "vêtements de roturier en bon état",
            "livrée/tablier",
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse contenant 1d10+*SOC* pièces d'argent"
    },
    {
        name: "Aristocrates et nobles",
        armor: "",
        weapons: [
            "dague (RU+*FOR*-1)/épée courte (RU+*FOR*-1)"
        ],
        inventory: [
            "élégant costume de cour", 
            "cheval avec sa selle et son harnais"
        ],
        money: "bourse contenant 2d10+*SOC* pièces d'or" 
    },
    {
        name: "Artisans et commerçants",
        armor: "",
        weapons: [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "vêtements de roturier", 
            "gourde d'eau/gourde de vin", 
            "besace contenant une fine couverture, un bol en bois et 1d10 rations de voyage (pain, fromage, fruits)"
        ],
        money: "bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent"
    },
    {
        name: "Bandits et brigands",
        armor : `${armureslegeres}`,
        weapons : [
            "couteau (RU+*FOR*-1)"
        ],
        inventory: [
            "vêtements de vilains sales", 
            "sac en toile contenant un bol en bois, et 1d10 rations (volées à sa dernière victime)",
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse avec 1d10+*COM* pièces d'argent/bourse avec 1d10+*TIR* pièces d'argent"
    },
    {
        name: "Bateleurs et saltimbanques",
        armor: "",
        weapons: [],
        inventory: [
            "vêtements de vilain défraîchis", 
            "sac en toile contenant un bol en bois, et 1d10 rations", 
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent"
    },
    {
        name: "Érudits et lettrés",
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois", 
            "nécessaire d'écriture, 1d10 parchemins", 
            "trois plumes et deux encriers, main de papier (20 pages)", 
            "£+*CNS* livres reliés", "bésicles", 
            "gibecière avec couverture, bol en bois, et 1d10 rations supérieures", 
            "gourde contenant du bon vin"
        ],
        money: "bourse contenant 1d10+*CNS* pièces d'or"
    },
    {
        name: "Filous et roublards",
        armor: "",
        weapons: [
            `${armesdemeleelegere}`, 
            "couteau (RU+*FOR*-1)"
        ],
        inventory: [
            "vêtements de vilains usés/vêtements de vilains sales", 
            "sac en toile contenant un bol en bois, et 1d10 ration(s)", 
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse avec 1d10+*HAB* pièces d'argent/bourse avec 1d10+*DIS* pièces d'argent/bourse avec 1d10+*SOC* pièces d'argent"
    },
    {
        name: "Forestiers et paysans",
        armor: "",
        weapons: [
            `${armesdemeleelegere}`, 
            "couteau (RU+*FOR*-1)/Animal de compagnie"
        ],
        inventory: [
            "vêtements de vilain", 
            "bâton de marche", 
            "gourde d'eau/gourde de vin", 
            "gibecière contenant une fine couverture, un bol en bois et 1d10 ration(s) de voyage", 
        ],
        money: "1d10+*HAB* pièces de cuivre/1d10+*END* pièces de cuivre"
    },
    {
        name: "Guerriers et bretteurs",
        armor: `${armureslegeres}/${armuresmoyennes}`,
        weapons: [
            `${armesdemelee}`, 
            "couteau (RU+*FOR*-1)", 
            `${armesdetir}/bouclier en bois (protection+1)`
        ],
        inventory: [
            "vêtements de voyage", 
            "sac en toile contenant un bol en bois, et 1d10 rations", 
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse contenant 1d10+*COM* pièces d'argent/bourse contenant 1d10+*TIR* pièces d'argent"
    },
    {
        name: "Hommes d'armes et soldats",
        armor: `${armureslegeres}/${armuresmoyennes}`,
        weapons: [
            `${armesdemelee}`, 
            "couteau (RU+*FOR*-1)", 
            `${armesdetir}/${boucliers}`
        ],
        inventory: [
            "casaque militaire", 
            "vêtements de voyage", 
            "sac en toile contenant un bol en bois, et 1d10 ration(s)", 
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse contenant 1d10+*COM* pièces d'argent/bourse contenant 1d10+*TIR* pièces d'argent"
    },
    {
        name: "Magiciens et thaumaturges",
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois", 
            "main de papier (20 pages), plume et encrier", 
            "£+*CNS* livres occultes reliés", 
            "1d10+*MAG* ingrédients utiles à leur savoir (patte d'animaux, poudres, herbes, sang d'animal...)", 
            "gibecière contenant une couverture, un col en bois et 1d10 rations de bonne qualité", 
            "gourde contenant du bon vin"
        ],
        money: "bourse avec 1d10+*MAG* pièces d'or"
    },
    {
        name: "Parias et miséreux",
        armor: "",
        weapons: [
            "couteau (RU+*FOR*-1)/gourdin (RU+*FOR*-1)"
        ],
        inventory: [
            "harde de gueux", 
            "sac en toile contenant un bol en bois et 1d10 ration(s) de piètre qualité", 
            "gourde d'eau/gourde de mauvais vin"
        ],
        money: "£+*END* pièce(s) de cuivres"
    },
    {
        name: "Religieux et prêtres",
        armor: "",
        weapons: [],
        inventory: [
            "robe de la couleur autorisée par le culte/froc de la couleur autorisée par le culte", 
            "vêtements de voyage", 
            "symbole sacré", 
            "chapelet", 
            "sac en toile contenant un bol en bois et 1d10 ration(s)", 
            "gourde d'eau/gourde de vin"
        ],
        money: "bourse avec 1d10+*CNS* pièces d'argent"
    }
]



const jobs = [
   
    // 1 : Agents et domestiques        (0-7)
    {
        name: "Cocher",
        skills: [
            "Arme à distance (tromblon)", 
            "Arme de mêlée (au choix)", 
            "Attelages", 
            "Écoute", 
            "Équitation", 
            "Milieu naturel (au choix)", 
            "Persuasion", 
            "Renseignements", 
            "Repérage", 
            "Soins des animaux"
        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Doué (MOU)", 
            "Doué (SOC)", 
            "Recharge rapide", 
            "Réflexes éclairs", 
            "Second souffle", 
            "Sixième sens", 
            "Solidité", 
            "Tir ciblé"
        ],
        armor: `${armureslegeres}`,
        weapons: [
            "un tromblon (RU+3) avec poudre et 10 munitions"
        ],
        inventory: [
            "une corne de cocher"
        ],
    },
    {
        name: "Maître-chien/Veneur",
        skills: [
            "Animaux", 
            "Armes à distance (arc)", 
            "Arme légère (au choix)", 
            "Déplacement silencieux", 
            "Dressage", 
            "Milieu naturel (au choix)", 
            "Pièges", 
            "Pistage", 
            "Repérage", 
            "Soins des animaux"
        ],
        talents: [
            "Compagnon animal", 
            "Coup du prédateur", 
            "Doué (END)", 
            "Doué (SUR)", 
            "Guérison rapide", 
            "Instinct de survie", 
            "Second souffle", 
            "Sixième sens", 
            "Solidité", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [
            "coutelas (RU+*FOR*-1)"
        ],
        inventory: [
            "vêtements de vilain", 
            "un chien de chasse intelligent et bien dressé"
        ]
    },
    {
        name: "Garde-chasse/Garde-Faune",
        skills: [
            "Animaux", 
            "Arme à distance (arc)/Arme à distance (arbalète)", 
            "Arme de mêlée (au choix)", 
            "Écoute", 
            "Équitation", 
            "Milieu naturel (au choix)", 
            "Orientation", 
            "Pièges", 
            "Pistage", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Compagnon animal", 
            "Coups puissants", 
            "Coup du prédateur", 
            "Doué (MOU)", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Second souffle", 
            "Solidité", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [
            `${armesdetir}`
        ],
        inventory: [
            "un cheval avec selle et harnais", 
            "corde de 10 mètres", 
            "lanterne"
        ]
    },
    {
        name: "Messager/Courrier",
        skills: [
            "Arme de mêlée (au choix)", 
            "Attelages", 
            "Course", 
            "Diplomatie", 
            "Équitation", 
            "Milieu naturel (au choix)", 
            "Noblesse et politique", 
            "Persuasion", 
            "Renseignements", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Compagnon animal", 
            "Coup acrobatique", 
            "Doué (MOU)", 
            "Doué (SOC)", 
            "Doué (SUR)", 
            "Polyglotte/Sauvegarde", 
            "Réflexes éclairs", 
            "Second souffle", 
            "Vivacité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleelegere}/${armesdemeleeordinaire}`
        ],
        inventory: [
            "un cheval avec selle et harnais", 
            "une carte de la région"
        ]
    },
    {
        name: "Palefrenier",
        skills: [
            "Animaux", 
            "Attelages", 
            "Course", 
            "Équitation", 
            "Milieu naturel (au choix)", 
            "Persuasion", 
            "Premiers soins", 
            "Renseignements", 
            "Repérage", 
            "Soins des animaux"
        ],
        talents: [
            "Compagnon animal", 
            "Chance insolente", 
            "Distraction", 
            "Doué (MOU)", 
            "Doué (SUR)", 
            "Festoyeur", 
            "Instinct de survie", 
            "Mains blanches", 
            "Second souffle", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: []
    },
    {
        name: "Prévôt/Collecteur d'impôts",
        skills: [
            "Commerce", 
            "Discours", 
            "Droits et usages", 
            "Estimation", 
            "Fouille", 
            "Lettres", 
            "Noblesse et politique", 
            "Persuasion", 
            "Renseignements", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Dévoué serviteur", 
            "Doué (CNS)/Doué (SOC)", 
            "Doué (VOL)", 
            "Mémoire sans faille", 
            "Prudent", 
            "Sain d'esprit/Second souffle", 
            "Sixième sens", 
            "Solidité", 
            "Vivacité"
        ],
        armor: "",
        weapons: [
            `${epee}`
        ],
        inventory: [
            "un cheval avec selle et harnais", 
            "un livre de comptes", 
            "une main de papier (20 pages) avec plumes et encre"
        ]
    },
    {
        name: "Péager/Éclusier",
        skills: [
            "Arme de mêlée (au choix)", 
            "Commerce", 
            "Discours", 
            "Droit et usages", 
            "Estimation", 
            "Fouille", 
            "Intimidation", 
            "Milieu nature (au choix)", 
            "Natation", 
            "Repérage"
        ],
        talents: [
            "Bagarre", 
            "Doué (END)", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Esquive", 
            "Festoyeur", 
            "Guérison rapide", 
            "Nyctalopie", 
            "Sixième sens", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdemelee}`, `${armureslegeres}`
        ],
        inventory: []
    },
    
    {
        name: "Prévôt/Collecteur d'impôts",
        skills: [
            "Commerce", 
            "Discours", 
            "Droits et usages", 
            "Estimation", 
            "Fouille", 
            "Lettres", 
            "Noblesse et politique", 
            "Persuasion", 
            "Renseignements", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Dévoué serviteur", 
            "Doué (CNS)/Doué (SOC)", 
            "Doué (VOL)", 
            "Mémoire sans faille", 
            "Prudent", 
            "Sain d'esprit/Second souffle", 
            "Sixième sens", 
            "Solidité", 
            "Vivacité"
        ],
        armor: "",
        weapons: [
            "épée courte (RU+*FOR*-1)"
        ],
        inventory: [
            "un cheval avec selle et harnais", 
            "un livre de comptes", 
            "une main de papier (20 pages) avec plumes et encre"
        ]
    },
    // 2 : Artistocrates et nobles      (8-15)

    {
        name: "Bailli/Vidame",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Discours",
            "Droit et usages",
            "Équitation",
            "Gestion",
            "Intimidation",
            "Noblesse et politique",
            "Persuasion",
            "Renseignements"
        ],
        talents: [
            "Calme",
            "Coups puissants/Coup précis",
            "Dévoué serviteur",
            "Doué (CNS)/Doué (SOC)",
            "Prudent",
            "Riposte",
            "Second souffle",
            "Sixième sens",
            "Solidité",
            "Tireur d'élite/Tir précis"
        ],
        armor: `${armureslegeres}/${armuresmoyennes}`,
        weapons: [
            `${armesdemelee}`,
            `${armesadistance}`,
        ],
        inventory: []
    },
    {
        name: "Chevalier du vol",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Courage",
            "Déplacement silencieux",
            "Équitation",
            "Intimidation",
            "Lettres",
            "Noblesse et politique",
            "Persuasion",
            "Repérage"
        ],
        talents: [
            "Coup précis",
            "Coups puissants",
            "Coup de maître",
            "Dévoué serviteur/Festoyeur",
            "Fascination/Panache",
            "Maître d'armes",
            "Maîtrise du bouclier/Port d'armure",
            "Résilience/Riposte",
            "Solidité",
            "Vivacité"
        ],
        armor: `${armuresmoyennes}`,
        weapons: [
            `${lances}`,
            `${boucliers}`
        ],
        inventory: [
            "un costume de voyage"
        ]
    },
    {
        name: "Chevalier",
        skills: [
            "Arme à distance (arc)/Arme à distance (arbalète)",
            "Arme lourde (au choix)",
            "Arme de mêlée (au choix)",
            "Commandement",
            "Courage",
            "Équitation",
            "Intimidation",
            "Noblesse et politique",
            "Pugilat",
            "Stratégie"
        ],
        talents: [
            "Bagarre/Festoyeur",
            "Coups précis",
            "Coups puissants",
            "Coup de maître/Dévoué serviteur",
            "Maître d'armes",
            "Maîtrise du bouclier",
            "Panache/Port d'armure",
            "Résilience/Riposte",
            "Sauvegarde",
            "Solidité"
        ],
        armor: "armure de plates (protection+5)",
        weapons: [
            "masse d'armes (RU+*FOR*+0)",
            `${lances}`,
            "épée longue (RU+*FOR*+0)",
            "bouclier (protection+2)/écu (protection+2)"
        ],
        inventory: [
            "destrier fidèle et bien dressé (remplace le cheval)"
        ]
    },
    {
        name: "Courtisan/Flagorneur",
        skills: [
            "Arts",
            "Danse/Lettres",
            "Charme",
            "Diplomatie",
            "Discours",
            "Écoute/Jeux",
            "Noblesse et politique",
            "Persuasion",
            "Renseignements",
            "Repérage"
        ],
        talents: [
            "Dévoué serviteur",
            "Distraction",
            "Doué (CNS)/Doué (PER)",
            "Doué (SOC)",
            "Fascination",
            "Inoffensif",
            "Mensonge éhonté",
            "Polyglotte",
            "Provocation/Prudent",
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "épée d'apparat/nécessaire de maquillage",
            "deux autres costumes de cour très élégants aux couleurs et ornements différents",
            "deux fioles de parfum",
            "bijoux d'une valeur de 5d10 pièces d'or",
            "main de papier (20 feuilles)",
            "plume et encrier"
        ]
    },
    {
        name: "Dépravé",
        skills: [
            "Arme de mêlée (au choix)",
            "Charme",
            "Déguisement",
            "Discours",
            "Jeux",
            "Lettres/Persuasion",
            "Renseignements",
            "Résistance à l'alcool",
            "Se cacher",
            "Sexualité"
        ],
        talents: [
            "Bagarre/Dévoué serviteur",
            "Doué (END)",
            "Doué (SOC)",
            "Esquive",
            "Festoyeur",
            "Provocation",
            "Relations",
            "Mensonge éhonté/Riposte",
            "Second souffle",
            "Solidité"
        ],
        armor: "",
        weapons: [
            "dague (RU+*FOR*-1)"
        ],
        inventory: [
            "un costume de vilain pour passer inaperçu",
            "un costume de cour usé",
            "une fiole de parfum à moitié vide",
            "trois dés en os",
            "une bouteille de bon vin"
        ]
    },
    {
        name: "Gentilhomme/Hobereau",
        skills: [
            "Arme de mêlée (épée)",
            "Arme à distance (au choix)",
            "Charme",
            "Courage",
            "Discours",
            "Équitation",
            "Intimidation",
            "Jeux",
            "Lettres",
            "Noblesse et politique"
        ],
        talents: [
            "Coups précis/Coups puissants",
            "Dévoué serviteur",
            "Doué (SOC)",
            "Esquive",
            "Festoyeur",
            "Panache",
            "Provocation",
            "Réflexes éclairs",
            "Riposte",
            "Solidité/Vivacité"
        ],
        armor:
            "pourpoint de cuir (protection+1)",
        weapons: [
            "dague de bonne qualité (RU+*FOR*-1)"
        ],
        inventory: [
            "un costume de voyage",
            "une fiole de parfum",
            "trois dés en os"
        ]
    },
    {
        name: "Diplomate/Conseiller",
        skills: [
            "Charme",
            "Diplomatie",
            "Discours",
            "Droit et usages",
            "Histoire",
            "Langue étrangère",
            "Lettres",
            "Noblesse et politique",
            "Persuasion",
            "Renseignements"
        ],
        talents: [
            "Calme",
            "Confiance en soi",
            "Dévoué serviteur",
            "Doué (CNS)/Doué (PER)",
            "Doué (VOL)/Doué (SOC)",
            "Inoffensif",
            "Mémoire sans faille",
            "Mensonge éhonté",
            "Polyglotte/Prudent",
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "deux habits de cour de grande qualité",
            "une fiole de parfum",
            "des bijoux d'une valeur de 2d10 pièces d'or"
        ]
    },
    {
        name: "Noble de robe",
        skills: [
            "Charme",
            "Commerce",
            "Discours",
            "Droit et usages",
            "Écoute",
            "Histoire",
            "Lettres",
            "Noblesse et politique",
            "Persuasion",
            "Religion"
        ],
        talents: [
            "Calme",
            "Dévoué serviteur",
            "Doué (CNS)",
            "Doué (SOC)",
            "Doué (VOL)",
            "Esprit de compétition",
            "Fascination",
            "Inoffensif",
            "Mémoire sans faille",
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume de magistrat",
            "deux livres de droit",
            "une main de papier (20 pages)",
            "une plume et un encrier"
        ]
    },

    // 3 : Artisans et commerçants      (16-23)
    {
        name: "Aubergiste/Tavernier",
        skills: [
            "Commerce",
            "Cuisine",
            "Droit et usages",
            "Intuition",
            "Légendes",
            "Persuasion",
            "Pugilat",
            "Renseignements",
            "Repérage",
            "Résistance à l'alcool"
        ],
        talents: [
            "Bagarre",
            "Calme",
            "Distraction",
            "Doué (END)/Doué (SOC)",
            "Festoyeur",
            "Guérison rapide",
            "Inspiration",
            "Mensonge éhonté/Polyglotte",
            "Provocation",
            "Solidité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois",
            "livre de comptes",
            "bonne bouteille d'alcool"
        ]
    },
    {
        name: "Chirurgien-barbier",
        skills: [
            "Arme de mêlée (Couteaux)",
            "Cheveux et barbe",
            "Commerce",
            "Courage",
            "Intuition",
            "Persuasion",
            "Premiers soins",
            "Repérage",
            "Résistance aux maladies",
            "Résistance à l'alcool"
        ],
        talents: [
            "Calme",
            "Coup adroit",
            "Doué (END)",
            "Doué (HAB)",
            "Doué (VOL)",
            "Mains blanches",
            "Sain d'esprit",
            "Sauvegarde",
            "Second souffle",
            "Solidité"
        ],
        armor: "",
        weapons: [
            "hachoir (RU+*FOR*+0)"
        ],
        inventory: [
            "rasoir",
            "ciseaux",
            "bandages",
            "nécessaire antipoison",
            "bouteille d'alcool fort",
            "corde de 10 mètres",
            "torche et boîte d'amadou"
        ]
    },
      {
        name: "Charpentier",
        skills: [
            "Architecture", 
            "Attelages", 
            "Commerce", 
            "Droit et usages", 
            "Estimation", 
            "Milieu naturel (au choix)", 
            "Renseignements", 
            "Repérage", 
            "Travail du bois", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Dévoué serviteur", 
            "Doué (END)", 
            "Doué (HAB)", 
            "Esprit de compétition", 
            "Guérison rapide", 
            "Inoffensif", 
            "Second souffle", 
            "Solidité", 
            "Travail d'équipe"
        ],
        armor: "",
        weapons: [
            "marteau (RU+*FOR*-2)"
        ],
        inventory: [
            "clous", 
            "outils de charpentier", 
            "lanterne"
        ],
      },
      {
        name: "Colporteur/Itinérant",
        skills: [
            "Arme de mêlée (au choix)", 
            "Attelages", 
            "Commerce", 
            "Estimation", 
            "Milieu naturel (au choix)", 
            "Persuasion", 
            "Orientation", 
            "Renseignements", 
            "Repérage", 
            "Soins des animaux"
        ],
        talents: [
            "Calme", 
            "Chance insolente/Confiance en soi", 
            "Distraction", 
            "Doué (SOC)/Doué (SUR)", 
            "Fascination", 
            "Inoffensif", 
            "Polyglotte", 
            "Provocation/Prudent", 
            "Relations", 
            "Second souffle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois", 
            "livres de comptes", 
            "mule et carriole", 
            "2d10 articles de peu de valeur"],
      },
      {
        name: "Forgeron/Armurier",
        skills: [
            "Arme lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Commerce", 
            "Droit et usages", 
            "Persuasion", 
            "Pugilat", 
            "Repérage", 
            "Résistance à la chaleur", 
            "Travail du métal", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Coup adroit", 
            "Coups précis", 
            "Doué (END)", 
            "Doué (FOR)", 
            "Doué (HAB)", 
            "Maîtrise du bouclier", 
            "Port d'armure", 
            "Second souffle", 
            "Solidité"
        ],
        armor: `${armureslegeres}/${armuresmoyennes}`,
        weapons: [
            "marteau (RU+*FOR*-2)", 
            `${armesdemelee}`, 
            `${armesdemelee}`
        ],
        inventory: [],
      },
      {
        name: "Manouvrier/Portefaix",
        skills: [
            "Escalade", 
            "Jeux", 
            "Pugilat", 
            "Repérage", 
            "Résistance à l'alcool", 
            "Résistance aux maladies", 
            "Souffle", 
            "Travail d'un matériau (au choix)", 
            "Travail d'un matériau (au choix)", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Doué (END)", 
            "Doué (FOR)", 
            "Doué (VOL)", 
            "Festoyeur", 
            "Gardien", 
            "Guérison rapide", 
            "Sauvegarde", 
            "Solidité", 
            "Travail d'équipe"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "bouteille de mauvais vin"
        ],
      },
      {
        name: "Marchand/Négociant",
        skills: [
            "Charme", 
            "Commerce", 
            "Discours", 
            "Droits et usages", 
            "Estimation", 
            "Intuition", 
            "Lettres", 
            "Persuasion", 
            "Renseignements", 
            "Travail d'un matériau (au choix)"
        ],
        talents: [
            "Compagnon animal/Dévoué serviteur", 
            "Distraction", 
            "Doué (SOC)", 
            "Doué (CNS)/Doué (HAB)", 
            "Fascination", 
            "Inoffensif", 
            "Mensonge éhonté/Sain d'esprit", 
            "Polyglotte", 
            "Prudent", 
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "deux costumes de bourgeois", 
            "livre de comptes", 
            "plume et encrier", 
            "1d10 parchemins", 
            "2d10 articles à vendre de peu de valeur"
        ],
      },
      {
        name: "Mineur",
        skills: [
            "Arme de mêlée (pioche)/Arme de mêlée (marteau)", 
            "Courage", "Écoute", 
            "Jeux", 
            "Milieu naturel (montagne)/Milieu naturel (forêt)", 
            "Pugilat", 
            "Résistance à l'alcool",
            "Résistance aux maladies", 
            "Travail de la pierre", 
            "Travaux de force"

        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Doué (END)", 
            "Doué (FOR)", 
            "Festoyeur", 
            "Gardien", 
            "Guérison rapide", 
            "Nyctalopie", 
            "Sauvegarde", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            "pioche (RU+*FOR*+0)"
        ],
        inventory: [
            "lanterne"
        ],
      },

    // 4 : Bandits                      (24-31)
    {
        name: "Assassin/Tueur à gages",
        skills: [
            "Acrobaties", 
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Crochetage", 
            "Course/Contorsion", 
            "Déplacement silencieux", 
            "Escalade", 
            "Poisons", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Calme", 
            "Coup en traître", 
            "Coups précis/Tir précis", 
            "Doué (DIS)", 
            "Doué (MOU)", 
            "Esquive/Réflexes éclairs", 
            "Insaisissable", 
            "Mensonge éhonté/Nyctalopie", 
            "Pattes de chat/Sauvegarde", 
            "Vivacité"
        ],
        armor: "",
        weapons: [
            "arme de mêlée (au choix)", 
            "un pistolet à poudre (RU+4) avec 10 munitions"
        ],
        inventory: [
            "trois petites fioles de poison", 
            "un masque", 
            "des bottes de cuir souple"
        ],
    },
    {
        name: "Détrousseur/Truand",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (légère au choix)",
            "Arme de mêlée (au choix)",
            "Déplacement silencieux",
            "Estimation",
            "Fouille",
            "Intimidation",
            "Pugilat",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Bagarre",
            "Coups puissants",
            "Distraction",
            "Doué (END)/Doué (FOR)",
            "Guérison rapide",
            "Nyctalopie",
            "Riposte",
            "Second souffle",
            "Surnombre",
            "Vivacité"
        ],
        armor: "",
        weapons: [
            "un objet extorqué il y a quelques jours (de petite valeur, à décider avec le MJ)",
            "des osselets ou trois dés en os"
        ],
        inventory: []
    },
    {
        name: "Bandit de grand chemin",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Déplacement silencieux",
            "Équitation",
            "Fouille",
            "Intimidation",
            "Milieu naturel (au choix)",
            "Persuasion",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Bagarre/Compagnon animal",
            "Coup du prédateur",
            "Coups puissants",
            "Panache",
            "Esquive/Guérison rapide",
            "Inspiration",
            "Solidité/Surnombre",
            "Tireur d'élite",
            "Tir du chasseur",
            "Vivacité"
        ],
        armor: "",
        weapons: [
            "pistolet à poudre (RU+4) avec 10 munitions"
        ],
        inventory: [
            "un cheval avec sa selle et son harnais",
            "un masque"
        ]
    },
    {
        name: "Hors-la-loi/Rebelle",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Déplacement silencieux",
            "Équitation",
            "Fouille",
            "Intimidation",
            "Milieu naturel (au choix)",
            "Persuasion",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Bagarre/Calme",
            "Coups puissants",
            "Doué (MOU)/Doué (SUR)",
            "Dévoué serviteur/Inspiration",
            "Panache",
            "Réflexes éclairs",
            "Second souffle",
            "Surnombre",
            "Tir du chasseur",
            "Vivacité"
        ],
        armor: "",
        weapons: [
            "un capuchon",
            "trois torches",
            "une boîte d'amadou"
        ],
        inventory: []
    },
    {
        name: "Pirate",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Escalade",
            "Jeux",
            "Natation",
            "Navigation",
            "Noeuds",
            "Orientation",
            "Résistance à l'alcool",
            "Résistance aux maladies"
        ],
        talents: [
            "Bagarre",
            "Coups précis",
            "Doué (END)",
            "Doué (SUR)",
            "Esquive",
            "Festoyeur",
            "Pattes de chat",
            "Instinct de survie",
            "Sauvagerie",
            "Solidité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une corde de 10 mètres et un grappin",
            "une lanterne",
            "une bouteille d'alcool"
        ]
    },
    {
        name: "Ribaud",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Equitation",
            "Fouille",
            "Intimidation",
            "Milieu naturel (au choix)",
            "Pistage",
            "Pugilat",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Calme",
            "Compagnon animal",
            "Coup en traître",
            "Doué (PER)",
            "Doué (SUR)",
            "Instinct de survie",
            "Second souffle",
            "Solidité",
            "Surnombre",
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une torche"
        ]
    },



        {
        name: "Racketteur",
        skills: [
            "Arme à distance (au choix)",
            "Arme de mêlée (au choix)",
            "Déplacement silencieux",
            "Fouille",
            "Intimidation",
            "Persuasion",
            "Pugilat",
            "Renseignements",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Bagarre",
            "Calme/Coups puissants",
            "Confiance en soi",
            "Coup en traître",
            "Dévoué serviteur/Mensonge éhonté",
            "Doué (FOR)",
            "Esquive",
            "Nyctalopie",
            "Solidité",
            "Surnombre"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "1d10 pièces d'argent",
            "un long manteau"
        ]
    },
    {
        name: "Voleur de bétail",
        skills: [
            "Animaux",
            "Arme à distance (légère)",
            "Arme légère (au choix)",
            "Attelages",
            "Course",
            "Déplacement silencieux",
            "Équitation",
            "Milieu naturel (au choix)",
            "Repérage",
            "Se cacher"
        ],
        talents: [
            "Chance insolente",
            "Compagnon animal",
            "Coup en traître",
            "Doué (DIS)",
            "Doué (SUR)",
            "Instinct de survie/Réflexes éclairs",
            "Nyctalopie",
            "Solidité",
            "Tir du chasseur",
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une corde de 10 mètres",
            "une lanterne",
            "un sifflet en terre cuite"
        ]
    },


    // 5 : Bateleurs et saltimbanques   (32-39)

    {
        name: "Acrobate/Jongleur",
        skills: [
            "Acrobaties",
            "Charme",
            "Contorsion",
            "Déguisement",
            "Discours",
            "Escalade",
            "Équitation",
            "Jonglerie",
            "Noeuds",
            "Premiers soins"
        ],
        talents: [
            "Calme",
            "Coup acrobatique",
            "Doué (MOU)",
            "Doué (END)",
            "Esprit de compétition",
            "Esquive",
            "Pattes de chat",
            "Réflexes éclairs",
            "Spectacle",
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "1d10 balles de jonglage",
            "liquide de cracheur de feu",
            "cinq torches",
            "un briquet à amadou"
        ]
    },
    {
        name: "Diseur de bonne aventure",
        skills: [
            "Domaine magique (divination)",
            "Charme",
            "Chiromancie",
            "Commerce",
            "Écoute",
            "Intuition",
            "Légendes",
            "Persuasion",
            "Repérage",
            "Taromancie"
        ],
        talents: [
            "Calme",
            "Chance insolente/Confiance en soi",
            "Doué (PER)",
            "Doué (SOC)/Doué (VOL)",
            "Fascination",
            "Inoffensif",
            "Inspiration",
            "Magie invisible",
            "Mémoire sans faille/Nyctalopie",
            "Mensonge éhonté"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "boule de cristal/jeu de Tarot ancien",
            "divers foulards donnant un air mystérieux",
            "un rat de compagnie rusé/un hibou de compagnie rusé/un chat noir de compagnie rusé"
        ]
    },
    {
        name: "Comédien/Ventriloque",
        skills: [
            "Arts",
            "Charme",
            "Comédie",
            "Déguisement",
            "Discours",
            "Intuition",
            "Légendes",
            "Lettres",
            "Résistance aux privations",
            "Ventriloquie"
        ],
        talents: [
            "Confiance en soi",
            "Chance insolente/Panache",
            "Distraction",
            "Doué (CNS)/Doué (SOC)",
            "Fascination",
            "Inspiration",
            "Inoffensif",
            "Mensonge éhonté/Mémoire sans faille",
            "Provocation/Relations",
            "Spectacle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois usé",
            "trois masques",
            "trois costumes de scènes colorés",
            "nécessaire de maquillage",
            "plume et encrier",
            "main de papier (20 pages)",
            "une épée de théâtre inoffensive"
        ]
    },
    {
        name: "Dresseur",
        skills: [
            "Animaux",
            "Arme de mêlée (arme contondante ou fouet)",
            "Courage",
            "Dressage",
            "Equitation",
            "Milieu naturel (au choix)",
            "Premiers soins",
            "Résistance aux maladies",
            "Résistance aux poisons",
            "Soins des animaux"
        ],
        talents: [
            "Bagarre",
            "Calme",
            "Compagnon animal",
            "Coup du prédateur",
            "Doué (SUR)",
            "Esquive",
            "Instinct de survie",
            "Solidité",
            "Spectacle",
            "Vivacité"
        ],
        armor: "gambison (protection+1)/plastron de cuir (protection+1)",
        weapons: [
            "fouet (RU+*FOR*-2)"
        ],
        inventory: [
            "un ou plusieurs animaux dressés (à décider avec le MJ)",
            "nécessaire antipoison",
            "gants rembourrés"
        ]
    },

    {
        name: "Lanceur",
        skills: [
            "Arme à distance (couteaux de lancer)", 
            "Arme légère (couteau)", 
            "Charme", 
            "Comédie", 
            "Courage", 
            "Déguisement", 
            "Discours", 
            "Intimidation", 
            "Premiers soins", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Doué (PER)", 
            "Esprit de compétition", 
            "Réflexes éclairs", 
            "Tir ciblé", 
            "Tir précis", 
            "Tireur d'élite", 
            "Spectacle", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            "1d10 couteaux de lancer (RU+*FOR*-1)"
        ],
        inventory: [
            "une corde de dix mètres", 
            "un bandeau (pour se cacher les yeux)", 
            "trois torches"
        ]
    },
    {
        name: "Ménestrel/Musicien",
        skills: [
            "Charme", 
            "Comédie", 
            "Discours", 
            "Jeux", 
            "Légendes", 
            "Lettres", 
            "Musique et chant", 
            "Renseignements", 
            "Résistance aux privations", 
            "Se cacher"
        ],
        talents: [
            "Chance insolente/Confiance en soi", 
            "Distraction", 
            "Doué (HAB)", 
            "Doué (PER)", 
            "Doué (SOC)", 
            "Inoffensif", 
            "Inspiration", 
            "Mensonge éhonté", 
            "Réflexes éclairs", 
            "Spectacle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume de cour usé", 
            "un costume vert de spectacle", 
            "deux instruments de musique au choix (flûte, mandoline, tambourin, luth…)"
        ]
    },
    {
        name: "Lutteur",
        skills: [
            "Acrobaties", 
            "Arme légère (au choix)", 
            "Arme de mêlée (au choix)", 
            "Charme", 
            "Escalade", 
            "Intimidation", 
            "Jeux", 
            "Pugilat", 
            "Résistance aux maladies", 
            "Résistance aux privations/Travaux de force"
        ],
        talents: [
            "Bagarre", 
            "Coups puissants", 
            "Coups précis", 
            "Doué (END)", 
            "Doué (FOR)", 
            "Esquive", 
            "Guérison rapide", 
            "Riposte", 
            "Second souffle", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${batons}`
        ],
        inventory: [
            "un costume de scène seyant", 
            "des gants de cuir"
        ]
    },
    {
        name: "Prestidigitateur/Escamoteur",
        skills: [
            "Charme", 
            "Discours", 
            "Dissimulation d'objets", 
            "Intuition", 
            "Jeux", 
            "Légendes", 
            "Passe-passe", 
            "Persuasion", 
            "Renseignements", 
            "Repérage"
        ],
        talents: [
            "Coup adroit/Coup en traître", 
            "Distraction", 
            "Doué (HAB)", 
            "Doué (SOC)", 
            "Fascination", 
            "Inspiration", 
            "Panache", 
            "Prudent", 
            "Spectacle", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois", 
            "un jeu de cartes normal et un autre truqué", 
            "trois dés en os"
        ]
    },


    // 6 : Érudits et lettrés           (40-47)

    {
        name: "Apothicaire/Herboriste",
        skills: [
            "Botanique", 
            "Commerce", 
            "Légendes", 
            "Lettres", 
            "Médecine", 
            "Milieu naturel (au choix)", 
            "Poisons", 
            "Potions et remèdes", 
            "Premiers soins", 
            "Résistance aux poisons"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Dévoué serviteur", 
            "Doué (CNS)", 
            "Doué (HAB)/Doué (SUR)", 
            "Inoffensif", 
            "Mains blanches", 
            "Prudent", 
            "Relations", 
            "Second souffle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "livre de comptes", 
            "besace contenant 2d10 herbes médicinales ou nocives (au choix)", 
            "herbier", 
            "mortier", 
            "pilon et 1d10 grands bocaux"
        ]
    },
    {
        name: "Avocat/Procureur",
        skills: [
            "Charme", 
            "Discours", 
            "Droit et usages", 
            "Histoire", 
            "Intimidation", 
            "Intuition", 
            "Lettres", 
            "Noblesse et politique", 
            "Persuasion", 
            "Renseignements"
        ],
        talents: [
            "Dévoué serviteur", 
            "Distraction", 
            "Doué (CNS)", 
            "Doué (SOC)", 
            "Doué (VOL)", 
            "Esprit de compétition", 
            "Fascination", 
            "Inoffensif", 
            "Mémoire sans faille", 
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "deux livres de droit", 
            "costume d'avoué (selon la région)"
        ]
    },
    {
        name: "Architecte",
        skills: [
            "Architecture", 
            "Commerce", 
            "Droit et usages", 
            "Histoire", 
            "Noblesse et politique", 
            "Persuasion", 
            "Renseignements", 
            "Repérage", 
            "Travail de la pierre", 
            "Travail du bois"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Dévoué serviteur", 
            "Doué (CNS)/Doué (HAB)", 
            "Doué (PER)/Doué (SOC)", 
            "Esprit de compétition", 
            "Mémoire sans faille", 
            "Polyglotte", 
            "Prudent/Sain d'esprit", 
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de cour", 
            "instruments de mesure"
        ]
    },
    {
        name: "Cartographe",
        skills: [
            "Cartographie", 
            "Diplomatie", 
            "Histoire", 
            "Langue étrangère (au choix)", 
            "Lettres", 
            "Milieu naturel (au choix)", 
            "Navigation", 
            "Noblesse et politique", 
            "Orientation", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Dévoué serviteur", 
            "Doué (CNS)/Doué (HAB)", 
            "Doué (PER)", 
            "Esprit de compétition", 
            "Mémoire sans faille", 
            "Polyglotte", 
            "Prudent", 
            "Relations"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "deux costumes de cour", 
            "outils de cartographe"
        ]
    },

    {
        name: "Estudiant",
        skills: [
            "Arts ou Droit et usages", 
            "Histoire ou Lettres", 
            "Médecine ou Religion", 
            "Charme", 
            "Jeux", 
            "Persuasion", 
            "Pugilat", 
            "Renseignements", 
            "Résistance à l'alcool", 
            "Se cacher"
        ],
        talents: [
            "Bagarre", 
            "Chance insolente", 
            "Distraction", 
            "Doué (CNS)/Doué (END)", 
            "Doué (SOC)", 
            "Festoyeur", 
            "Guérison rapide/Mensonge éhonté", 
            "Mémoire sans faille", 
            "Provocation", 
            "Second souffle"
        ],
        armor: "",
        weapons: [
            "couteau (RU+*FOR*-1)/gourdin (RU+*FOR*-2)"
        ],
        inventory: [
            "bouteille de vin", 
            "trois dés en os/un jeu de cartes"
        ]
    },
    {
        name: "Médecin/Docteur",
        skills: [
            "Botanique", 
            "Commerce", 
            "Intuition", 
            "Lettres", 
            "Médecine", 
            "Persuasion", 
            "Potions", 
            "Premiers soins", 
            "Repérage", 
            "Résistance aux maladies"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Dévoué serviteur", 
            "Doué (CNS)", 
            "Doué (HAB)/Doué (VOL)", 
            "Mains blanches", 
            "Mémoire sans faille", 
            "Relations", 
            "Sain d'esprit", 
            "Second souffle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume bourgeois de qualité", 
            "une besace contenant des outils de médecin (lancettes, urinoir, aiguilles)", 
            "un masque à bec"
        ]
    },
    {
        name: "Ingénieur/Inventeur",
        skills: [
            "Armes à distance (armes à feu)", 
            "Armes de mêlée (au choix)", 
            "Commerce", 
            "Droit et usages", 
            "Ingénierie", 
            "Légendes", 
            "Persuasion", 
            "Repérage", 
            "Travail d'un matériau (au choix)", 
            "Travail d'un matériau (au choix)"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Dévoué serviteur", 
            "Doué (CNS)/Doué (HAB)", 
            "Esprit de compétition", 
            "Inoffensif", 
            "Mémoire sans faille", 
            "Polyglotte", 
            "Prudent", 
            "Relations/Sauvegarde"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "instruments de mesure"
        ]
    },
    {
        name: "Scribe/Écrivain public",
        skills: [
            "Commerce", 
            "Droit et usages", 
            "Écoute", 
            "Histoire", 
            "Langue étrangère (au choix)", 
            "Légendes", 
            "Lettres", 
            "Persuasion", 
            "Religion", 
            "Renseignements"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Distraction", 
            "Doué (CNS)", 
            "Doué (HAB)/Doué (PER)", 
            "Doué (SOC)", 
            "Inoffensif", 
            "Mémoire sans faille", 
            "Polyglotte", 
            "Relations/Sain d'esprit"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une écritoire portative", 
            "de la cire à cacheter", 
            "2 plumes", 
            "deux mains de papier et un encrier supplémentaire"
        ]
    },


    // 7 : Filous et roublards          (45-55)

    {
        name: "Agitateur/Anarchiste",
        skills: [
            "Arme de mêlée ou à distance légère (au choix)", 
            "Charme", 
            "Courage", 
            "Discours", 
            "Intuition", 
            "Lettres/Noblesse et politique", 
            "Persuasion", 
            "Pugilat", 
            "Renseignements", 
            "Se cacher"
        ],
        talents: [
            "Bagarre", 
            "Chance insolente/Panache", 
            "Distraction", 
            "Doué (SOC)/Doué (VOL)", 
            "Esquive", 
            "Fascination", 
            "Insaisissable", 
            "Maîtrise de la poudre", 
            "Provocation", 
            "Second souffle/Mensonge éhonté"
        ],
        armor: "",
        weapons: [
            "costume de bourgeois", 
            "2d10 tracts incitant à la rébellion", 
            "deux torches"
        ],
        inventory: []
    },
    {
        name: "Charlatan/Escroc",
        skills: [
            "Charme", 
            "Commerce", 
            "Course", 
            "Dissimulation d'objets", 
            "Légendes", 
            "Lettres", 
            "Persuasion", 
            "Renseignements", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Chance insolente", 
            "Distraction", 
            "Confiance en soi/Doué (CNS)", 
            "Doué (SOC)", 
            "Esquive", 
            "Fascination", 
            "Inoffensif", 
            "Mensonge éhonté", 
            "Panache", 
            "Polyglotte/Provocation"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume de bourgeois usé", 
            "1d10 articles d'escroqueries ou de contrefaçons tels que des remèdes, des poudres miracles, des fausses reliques, des laissez-passer"
        ]
    },
    {
        name: "Cambrioleur/Monte-en-l'air",
        skills: [
            "Arme à distance (au choix)", 
            "Arme légère (au choix)", 
            "Crochetage", 
            "Déplacement silencieux", 
            "Dissimulation d'objets", 
            "Écoute", 
            "Escalade", 
            "Fouille", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Coup acrobatique/Coup en traître", 
            "Doué (DIS)", 
            "Doué (HAB)", 
            "Doué (MOU)", 
            "Esquive", 
            "Insaisissable", 
            "Pattes de chat", 
            "Réflexes éclairs/Vivacité"
        ],
        armor: "",
        weapons: [
            "jeu de crochets", 
            "paire de gants noirs", 
            "corde de 10 mètres et grappin"
        ],
        inventory: []
    },
    {
        name: "Contrebandier/Receleur",
        skills: [
            "Arme de mêlée (au choix)", 
            "Commerce", 
            "Déplacement silencieux", 
            "Dissimulation d'objets", 
            "Droit et usages", 
            "Estimation", 
            "Persuasion", 
            "Renseignements", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Bagarre", 
            "Calme", 
            "Confiance en soi", 
            "Coup en traître", 
            "Doué (DIS)", 
            "Doué (SOC)", 
            "Esquive", 
            "Nyctalopie", 
            "Mensonge éhonté/Sixième sens", 
            "Solidité/Vivacité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleesimples}/${armesdetrait}`, 
            "barque contenant 2d10 marchandises non déclarées/barque contenant 2d10 marchandises illégales de peu de valeur/chariot contenant 2d10 marchandises non déclarées/chariot contenant 2d10 marchandises illégales de peu de valeur"
        ],
        inventory: []
    },

    {
        name: "Espion",
        skills: [
            "Charme", 
            "Crochetage", 
            "Déplacement silencieux", 
            "Déguisement", 
            "Écoute", 
            "Fouille", 
            "Noblesse et politique", 
            "Renseignements", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Coup en traître", 
            "Doué (DIS)", 
            "Doué (PER)", 
            "Doué (SOC)", 
            "Fascination", 
            "Mensonge éhonté/Nyctalopie", 
            "Réflexes éclairs/Vivacité", 
            "Relations/Sixième sens"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "costume au choix (bourgeois ou noble)", 
            "nécessaire à maquillage", 
            "plume et encrier", 
            "1d10 parchemins"
        ]
    },
    {
        name: "Pilleur de tombes",
        skills: [
            "Arme de mêlée (au choix)", 
            "Contorsion", 
            "Courage", 
            "Crochetage", 
            "Déplacement silencieux", 
            "Dissimulation d'objets", 
            "Pièges", 
            "Résistance aux maladies", 
            "Se cacher", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Doué (END)", 
            "Doué (VOL)", 
            "Esquive", 
            "Guérison rapide", 
            "Nyctalopie", 
            "Pattes de chat", 
            "Résilience", 
            "Solidité"
        ],
        armor: `${armureslegeres}`,
        weapons: [
            `${armesdemeleesimples}`
        ],
        inventory: [
            "une corde de 10 mètres et un grappin", 
            "une lanterne et une pelle"
        ]
    },
    {
        name: "Joueur professionnel",
        skills: [
            "Charme", 
            "Course", 
            "Dissimulation d'objets", 
            "Droit et usages", 
            "Intuition", 
            "Jeux", 
            "Persuasion", 
            "Pugilat", 
            "Renseignements", 
            "Repérage"
        ],
        talents: [
            "Chance insolente", 
            "Coup adroit", 
            "Distraction", 
            "Doué (HAB)/Doué (SOC)", 
            "Esquive", 
            "Fascination", 
            "Festoyeur", 
            "Mensonge éhonté", 
            "Panache", 
            "Provocation"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume de bourgeois", 
            "des bijoux d'une valeur de 2d10 pièces d'or", 
            "trois dés en os", 
            "un paquet de cartes", 
            "des bottes en cuir"
        ]
    },
    {
        name: "Tire-laine/Vide-gousset",
        skills: [
            "Acrobaties", 
            "Arme de mêlée ou à distance légère (au choix)", 
            "Course", 
            "Déplacement silencieux", 
            "Dissimulation d'objets", 
            "Escalade", 
            "Passe-passe", 
            "Repérage", 
            "Se cacher", 
            "Vol à la tire"
        ],
        talents: [
            "Chance insolente", 
            "Coup acrobatique/Coup en traître", 
            "Doué (DIS)", 
            "Doué (HAB)", 
            "Doué (PER)", 
            "Esquive", 
            "Insaisissable", 
            "Pattes de chat", 
            "Réflexes éclairs", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un objet volé il y a une semaine (de petite valeur, à décider avec le MJ)"
        ]
    },


    // 8 : Forestiers et paysans        (56-63)

    {
        name: "Batelier",
        skills: [
            "Canotage", 
            "Commerce", 
            "Langue étrangère (au choix)", 
            "Milieu naturel (au choix)", 
            "Natation", 
            "Navigation", 
            "Orientation", 
            "Renseignements", 
            "Repérage", 
            "Résistance aux maladies"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Esquive", 
            "Gardien", 
            "Instinct de survie", 
            "Sauvegarde", 
            "Sixième sens", 
            "Solidité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "barque", 
            "filet"
        ]
    },
    {
        name: "Bûcheron",
        skills: [
            "Arme de mêlée (haches & masses)", 
            "Milieu naturel (au choix)", 
            "Milieu naturel (forêt)", 
            "Premiers soins", 
            "Pugilat", 
            "Orientation", 
            "Résistance à l'alcool", 
            "Résistance aux maladies", 
            "Résistance aux poisons", 
            "Travail du bois/Travaux de force"
        ],
        talents: [
            "Calme", 
            "Compagnon animal", 
            "Coup du prédateur", 
            "Coups puissants", 
            "Doué (END)", 
            "Doué (FOR)", 
            "Doué (SUR)", 
            "Instinct de survie", 
            "Sauvagerie", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            "cognée (RU+*FOR*+0)"
        ],
        inventory: [
            "quelques plantes médicinales contre le poison"
        ]
    },
    {
        name: "Berger/Pâtre",
        skills: [
            "Animaux", 
            "Arme de tir (fronde)", 
            "Écoute", 
            "Élevage", 
            "Milieu naturel (au choix)", 
            "Orientation", 
            "Pistage", 
            "Repérage", 
            "Résistance aux maladies", 
            "Soins des animaux"
        ],
        talents: [
            "Calme", 
            "Compagnon animal", 
            "Doué (END)/Doué (MOU)", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Esquive", 
            "Instinct de survie", 
            "Guérison rapide/Solidité", 
            "Sauvegarde", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [
            "fronde (RU+*FOR*-1) et 10 munitions"
        ],
        inventory: [
            "gilet de laine",
            "bonne couverture", 
            "flûte", 
            "chien de garde aux poils longs"
        ]
    },
    {
        name: "Chasseur/Trappeur",
        skills: [
            "Animaux", 
            "Botanique", 
            "Arme à distance (arc)", 
            "Arme de mêlée (couteaux)", 
            "Déplacement silencieux", 
            "Milieu naturel (au choix)", 
            "Orientation", 
            "Pièges", 
            "Pistage", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Compagnon animal", 
            "Coup du prédateur", 
            "Doué (DIS)", 
            "Doué (SUR)", 
            "Esquive/Festoyeur", 
            "Instinct de survie", 
            "Second souffle", 
            "Tir du chasseur", 
            "Tir précis"
        ],
        armor: "",
        weapons: [
            "arc long (RU+*FOR*+0) et 10 flèches"
        ],
        inventory: [
            "deux collets", 
            "un nécessaire antipoison"
        ]
    },
    {
        name: "Guide-convoyeur",
        skills: [
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Attelages", 
            "Écoute", 
            "Équitation", 
            "Milieu naturel (au choix)", 
            "Milieu naturel (au choix)/Courage", 
            "Orientation", 
            "Premiers soins", 
            "Repérage"
        ],
        talents: [
            "Calme", 
            "Coup du prédateur", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Gardien", 
            "Instinct de survie", 
            "Riposte", 
            "Solidité", 
            "Sixième sens/Sauvegarde", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "cheval avec selle et harnais", 
            "corde", 
            "lanterne", 
            "sifflet en terre cuite"
        ]
    },
    {
        name: "Paysan/Journalier",
        skills: [
            "Agriculture", 
            "Animaux", 
            "Course", 
            "Milieu naturel (au choix)", 
            "Milieu naturel (au choix)/Orientation", 
            "Pugilat", 
            "Renseignements", 
            "Repérage", 
            "Résistance aux privations", 
            "Résistance aux maladies"
        ],
        talents: [
            "Bagarre", 
            "Esquive", 
            "Calme", 
            "Compagnon animal", 
            "Doué (END)", 
            "Doué (HAB)/Doué (SUR)", 
            "Festoyeur", 
            "Inoffensif", 
            "Instinct de survie", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            "fronde (RU+*FOR*-1)/fourche (RU+*FOR*-1)"
        ],
        inventory: []
    },
    {
        name: "Marin",
        skills: [
            "Arme de mêlée (au choix)", 
            "Canotage/Courage", 
            "Escalade", 
            "Jeux", 
            "Navigation", 
            "Natation", 
            "Noeuds/Orientation", 
            "Pugilat", 
            "Résistance à l'alcool", 
            "Résistance aux maladies"
        ],
        talents: [
            "Bagarre", 
            "Chance insolente", 
            "Doué (END)", 
            "Doué (HAB)", 
            "Festoyeur", 
            "Instinct de survie", 
            "Second souffle", 
            "Sauvegarde", 
            "Solidité", 
            "Vivacité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleesimples}`
        ],
        inventory: [
            "corde de 10 mètres et grappin", 
            "bouteille d'alcool"
        ]
    },
    {
        name: "Pêcheur",
        skills: [
            "Canotage", 
            "Milieu naturel (au choix)", 
            "Natation", 
            "Navigation", 
            "Orientation", 
            "Pêche", 
            "Renseignements", 
            "Repérage", 
            "Résistance aux maladies", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Chance insolente", 
            "Compagnon animal", 
            "Doué (END)", 
            "Doué (HAB)", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Festoyeur/Inoffensif", 
            "Instinct de survie", 
            "Solidité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "barque", 
            "canne à pêche", 
            "fil et hameçons", 
            "filet"
        ]
    },


    // 9 : Guerriers et bretteurs       (64-71)
    {
        name: "Archer/Arbalestrier",
        skills: [
            "Arme à distance (arc)", 
            "Arme à distance (arbalète)", 
            "Arme de mêlée (au choix)", 
            "Course", 
            "Déplacement silencieux", 
            "Équitation", 
            "Premiers soins", 
            "Repérage", 
            "Se cacher", 
            "Stratégie/Vigilance"
        ],
        talents: [
            "Calme", 
            "Doué (MOU)", 
            "Doué (PER)", 
            "Prudent/Recharge rapide", 
            "Réflexes éclairs", 
            "Solidité", 
            "Tir ciblé", 
            "Tireur d'élite", 
            "Tir précis", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "trois torches", 
            "un briquet à amadou"
        ]
    },
    {
        name: "Chasseur de primes",
        skills: [
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Course", 
            "Déplacement silencieux", 
            "Équitation", 
            "Milieu naturel (au choix)/Renseignements", 
            "Pièges", 
            "Pistage", 
            "Repérage", 
            "Se cacher"
        ],
        talents: [
            "Calme", 
            "Coups précis", 
            "Doué (DIS)", 
            "Doué (PER)", 
            "Nyctalopie", 
            "Résilience", 
            "Riposte", 
            "Second souffle/Sixième sens", 
            "Tir précis", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un cheval avec sa selle et son harnais", 
            "une torche", 
            "une corde de 10 mètres", 
            "un filet"
        ]
    },
    {
        name: "Champion/Gladiateur",
        skills: [
            "Acrobaties", 
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Arme de mêlée (au choix)", 
            "Arme de mêlée (au choix)", 
            "Courage", 
            "Intimidation", 
            "Premiers soins", 
            "Pugilat", 
            "Vigilance"
        ],
        talents: [
            "Bagarre", 
            "Coup de maître", 
            "Coups précis", 
            "Coups puissants", 
            "Doué (END)/Doué (FOR)", 
            "Esquive/Maîtrise du bouclier", 
            "Maître d'armes", 
            "Sauvagerie", 
            "Second souffle", 
            "Port d'armure/Vivacité"
        ],
        armor: "",
        weapons: [
            `${armesdemelee}`
        ],
        inventory: [
            "des bandages"
        ]
    },
    {
        name: "Combattant des tunnels",
        skills: [
            "Arme à distance (arbalète)", 
            "Arme de mêlée (au choix)", 
            "Déplacement silencieux", 
            "Écoute", 
            "Milieu naturel (montagnes)", 
            "Orientation", 
            "Pugilat", 
            "Repérage", 
            "Résistance aux maladies", 
            "Travaux de force"
        ],
        talents: [
            "Bagarre", 
            "Coups précis", 
            "Coups puissants", 
            "Doué (END)", 
            "Maîtrise du bouclier", 
            "Nyctalopie", 
            "Port d'armure", 
            "Second souffle", 
            "Recharge rapide/Sixième sens", 
            "Solidité/Tir précis"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une lanterne", 
            "des fourrures", 
            "une corde de 10 mètres et un grappin"
        ]
    },

    {
        name: "Garde de corps/Estafier",
        skills: [
            "Arme de mêlée lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Courage", 
            "Course", 
            "Intimidation", 
            "Jeux", 
            "Pugilat", 
            "Repérage", 
            "Résistance à l'alcool", 
            "Résistance aux poisons"
        ],
        talents: [
            "Bagarre", 
            "Calme", 
            "Coups puissants", 
            "Coups précis", 
            "Doué (END)/Doué (FOR)", 
            "Gardien", 
            "Riposte", 
            "Second souffle", 
            "Solidité/Sixième sens", 
            "Sauvegarde"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume de bourgeois", 
            "des bandages", 
            "une lanterne"
        ]
    },
    {
        name: "Tueur de monstres",
        skills: [
            "Arme lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Courage", 
            "Déplacement silencieux", 
            "Milieu naturel (au choix)", 
            "Pistage", 
            "Repérage", 
            "Résistance à la magie", 
            "Résistance aux maladies", 
            "Résistance aux poisons"
        ],
        talents: [
            "Bagarre", 
            "Coups puissants", 
            "Doué (END)", 
            "Doué (PER)", 
            "Maître d'armes", 
            "Maîtrise du bouclier", 
            "Sauvagerie", 
            "Sixième sens", 
            "Solidité", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "la tête d'un ennemi animal au combat/la tête d'un humanoïde tué au combat/la tête d'un monstre tué au combat"
        ]
    },
    {
        name: "Mercenaire",
        skills: [
            "Arme à distance (au choix)", 
            "Arme lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Commandement", 
            "Équitation", 
            "Intimidation", 
            "Milieu naturel (au choix)", 
            "Premiers soins", 
            "Pugilat", 
            "Stratégie"
        ],
        talents: [
            "Bagarre", 
            "Coup de maître", 
            "Coups puissants", 
            "Coups précis", 
            "Doué (FOR)", 
            "Esquive/Maîtrise du bouclier", 
            "Maître d'armes", 
            "Riposte", 
            "Solidité", 
            "Sauvegarde/Tir précis"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une bouteille d'alcool"
        ]
    },
    {
        name: "Spadassin/Duelliste",
        skills: [
            "Acrobaties", 
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Arme de mêlée (au choix)", 
            "Charme", 
            "Courage", 
            "Deux armes", 
            "Intimidation", 
            "Jeux", 
            "Premiers soins"
        ],
        talents: [
            "Bagarre", 
            "Calme", 
            "Coup de maître", 
            "Coups puissants", 
            "Maître d'armes", 
            "Coups précis",
            "Esquive/Maîtrise du bouclier",
            "Réflexes éclairs", 
            "Riposte", 
            "Second souffle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un costume de cour", 
            "des bandages", 
            "trois dés en os", 
            "une bonne bouteille de vin"
        ]
    },

    // 10 : Hommes d'armes et soldats   (72-79)

    {
        name: "Artilleur/Pétardier",
        skills: [
            "Arme de mêlée (au choix)", 
            "Armes à distance (arme à poudre)", 
            "Bombardes et explosifs", 
            "Canons et balistes", 
            "Courage", 
            "Premiers soins", 
            "Repérage", 
            "Résistance à la chaleur", 
            "Stratégie", 
            "Travaux de force"
        ],
        talents: [
            "Calme", 
            "Doué (END)", 
            "Doué (VOL)", 
            "Guérison rapide", 
            "Maîtrise de la poudre", 
            "Recharge rapide", 
            "Second souffle", 
            "Solidité", 
            "Tireur d'élite", 
            "Tir ciblé"
        ],
        armor: "",
        weapons: [
            `${armesapoudre}`
        ],
        inventory: []
    },
    {
        name: "Cavalier",
        skills: [
            "Arme à distance (au choix)", 
            "Arme lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Commandement", 
            "Équitation", 
            "Intimidation", 
            "Orientation", 
            "Premiers soins", 
            "Soins des animaux", 
            "Stratégie"
        ],
        talents: [
            "Compagnon animal", 
            "Coup acrobatique", 
            "Coups puissants", 
            "Doué (MOU)", 
            "Esprit de compétition", 
            "Esquive/Maîtrise du bouclier", 
            "Maître d'armes", 
            "Réflexes éclairs", 
            "Riposte", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${lances}`, 
            `${armesdetir}`
        ],
        inventory: [
            "un cheval avec sa selle et son harnais"
        ]
    },
    {
        name: "Bourreau",
        skills: [
            "Arme de mêlée (au choix)", 
            "Courage", 
            "Intimidation", 
            "Premiers soins", 
            "Pugilat", 
            "Renseignements", 
            "Résistance à l'alcool", 
            "Résistance aux maladies", 
            "Torture", 
            "Travaux de force"
        ],
        talents: [
            "Bagarre", 
            "Brute/Calme", 
            "Coups puissants", 
            "Doué (END)/Doué (FOR)", 
            "Doué (VOL)", 
            "Guérison rapide", 
            "Résilience", 
            "Sain d'esprit", 
            "Sauvegarde", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${hachesàdeuxmains}`
        ],
        inventory: [
            "vêtements de vilain", 
            "une corde de 10 mètres", 
            "une cagoule noire de bourreau"
        ]
    },
    {
        name: "Éclaireur",
        skills: [
            "Animaux", 
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Déplacement silencieux", 
            "Equitation", 
            "Milieu naturel (au choix)", 
            "Milieu naturel (au choix)", 
            "Pièges", 
            "Pistage", 
            "Se cacher"
        ],
        talents: [
            "Calme", 
            "Coup du prédateur", 
            "Doué (MOU)", 
            "Doué (PER)", 
            "Doué (SUR)", 
            "Esquive", 
            "Instinct de survie", 
            "Sixième sens", 
            "Solidité", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [
            `${armesdetir}`
        ],
        inventory: []
    },

    {
        name: "Garde",
        skills: [
            "Arme à distance (arc ou arbalète)", 
            "Arme de mêlée (au choix)", 
            "Commandement", 
            "Course", 
            "Fouille", 
            "Intimidation", 
            "Pugilat", 
            "Repérage", 
            "Résistance à l'alcool", 
            "Stratégie"
        ],
        talents: [
            "Bagarre", 
            "Calme", 
            "Coups puissants", 
            "Doué (END)/Doué (MOU)", 
            "Doué (PER)", 
            "Gardien", 
            "Maîtrise du bouclier", 
            "Second souffle", 
            "Sixième sens/Sauvegarde", 
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdhast}`, 
            `${boucliers}`, 
            "un casque à plume (protection+1)"
        ],
        inventory: []
    },
    {
        name: "Patrouilleur/Garde-route",
        skills: [
            "Arme à distance (au choix)", 
            "Arme de mêlée (au choix)", 
            "Écoute", 
            "Équitation", 
            "Intimidation", 
            "Milieu naturel (au choix)", 
            "Orientation", 
            "Pièges", 
            "Pistage", 
            "Repérage"
        ],
        talents: [
            "Bagarre", 
            "Calme", 
            "Coup du prédateur", 
            "Coups puissants", 
            "Doué (MOU)", 
            "Doué (PER)", 
            "Instinct de survie", 
            "Sixième sens", 
            "Solidité", 
            "Tir du chasseur"
        ],
        armor: "",
        weapons: [
            `${armesadistance}`,
            "bouclier en bois (protection+1)"
        ],
        inventory: [
            "un cheval avec sa selle et son harnais", 
            "une corde de 10 mètres et un grappin", 
            "une lanterne"
        ]
    },
    {
        name: "Limier",
        skills: [
            "Arme de mêlée (au choix)", 
            "Crochetage/Droit et usages", 
            "Déplacement silencieux", 
            "Fouille", 
            "Intimidation", 
            "Repérage", 
            "Intuition", 
            "Renseignements", 
            "Se cacher", 
            "Torture/Vigilance"
        ],
        talents: [
            "Calme", 
            "Confiance en soi", 
            "Coups précis", 
            "Doué (DIS)/Doué (PER)", 
            "Mémoire sans faille", 
            "Nyctalopie", 
            "Prudent", 
            "Sain d'esprit/Second souffle", 
            "Sixième sens", 
            "Vivacité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "Une cape sombre", 
            "une lanterne"
        ]
    },
    {
        name: "Soldat",
        skills: [
            "Arme lourde (au choix)", 
            "Arme de mêlée (au choix)", 
            "Commandement", 
            "Course", 
            "Escalade", 
            "Intimidation", 
            "Jeux", 
            "Milieu naturel (au choix)", 
            "Résistance à l'alcool", 
            "Stratégie"
        ],
        talents: [
            "Bagarre", 
            "Coups précis", 
            "Coups puissants", 
            "Cri de guerre", 
            "Doué (END)/Doué (FOR)", 
            "Doué (VOL)", 
            "Maître d'armes", 
            "Maîtrise du bouclier", 
            "Second souffle", 
            "Sauvegarde/Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdhast}`, 
            "casque (protection+1)"
        ],
        inventory: []
    },

    // 11 : Magiciens et thaumaturges   (80-87)

    {
        name: "Alchimiste",
        skills: [
            "Domaine magique (alchimie)",
            `${domaineMagique}`,
            "Bombardes et explosifs",
            "Botanique",
            "Légendes",
            "Lettres",
            "Milieu naturel (au choix)",
            "Occultisme",
            "Poisons",
            "Potions et remèdes"
        ],
        talents: [
            "Calme",
            "Dévoué serviteur",
            "Doué (CNS)",
            "Doué (VOL)",
            "Magie destructrice",
            "Magie invisible",
            "Magie sanglante",
            "Maîtrise de la poudre",
            "Nyctalopie",
            "Souffle de vie"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "1d10 potions",
            "remèdes ou poisons déjà préparés (à décider avec le MJ)"
        ]
    },
    {
        name: "Élémentaliste",
        skills: [
            `${domaineElementaire}`,
            `${domaineElementaire}`,
            "Courage",
            "Écoute",
            "Milieu naturel (au choix)",
            "Milieu naturel (au choix)",
            "Occultisme",
            "Orientation",
            "Repérage",
            "Résistance à la magie"
        ],
        talents: [
            "Calme",
            "Compagnon animal/Coup du prédateur",
            "Doué (SUR)/Doué (VOL)",
            "Instinct de survie",
            "Magie destructrice",
            "Magie innée",
            "Magie sanglante",
            "Nyctalopie",
            "Solidité",
            "Sort fétiche"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "un bâton de marche gravé des quatre symboles élémentaires triangulaires"
        ]
    },
    {
        name: "Astrologue/Devin",
        skills: [
            "Domaine magique (divination)",
            "Astrologie",
            "Discours",
            "Légendes",
            "Lettres",
            "Milieu naturel (au choix)",
            "Occultisme",
            "Persuasion",
            "Potions et remèdes",
            "Résistance à la magie"
        ],
        talents: [
            "Calme",
            "Chance insolente",
            "Doué (CNS)/Doué (PER)",
            "Doué (VOL)",
            "Esprit gardien",
            "Fascination",
            "Magie invisible",
            "Magie sanglante",
            "Nyctalopie",
            "Sixième sens"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "jeu de tarot divinatoire",
            "précis d'astrologie"
        ]
    },
    {
        name: "Illusionniste",
        skills: [
            "Domaine magique (illusions)",
            `${domaineMagique}`,
            "Charme",
            "Discours",
            "Intuition",
            "Légendes",
            "Lettres",
            "Occultisme",
            "Passe-passe",
            "Résistance à la magie"
        ],
        talents: [
            "Chance insolente",
            "Coup surnaturel",
            "Distraction",
            "Doué (CNS)/Doué (SOC)",
            "Panache",
            "Magie contrôlée",
            "Magie innée",
            "Magie invisible",
            "Mensonge éhonté",
            "Nyctalopie/Spectacle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "jeu de cartes",
            "baguette d'illusionniste en bois"
        ]
    },

    {
        name: "Juge-mage",
        skills: [
            `${domaineMagique}`,
            `${domaineMagique}`,
            "Discours",
            "Fouille",
            "Intuition",
            "Lettres/Occultisme",
            "Noblesse et politique",
            "Persuasion",
            "Renseignements",
            "Repérage"
        ],
        talents: [
            "Calme",
            "Dévoué serviteur",
            "Doué (CNS)/Doué (PER)",
            "Esprit gardien",
            "Magie contrôlée",
            "Magie innée",
            "Magie invisible",
            "Mémoire sans faille",
            "Nyctalopie/Sain d'esprit",
            "Sort fétiche"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "livre de loi",
            "main de papier (20 pages)",
            "plume et encrier"
        ]
    },
    {
        name: "Nécromancien",
        skills: [
            "Domaine magique (nécromancie)",
            `${domaineMagique}`,
            "Histoire",
            "Légendes",
            "Médecine",
            "Occultisme",
            "Premiers soins",
            "Religion",
            "Résistance aux maladies",
            "Résistance à la magie"
        ],
        talents: [
            "Calme",
            "Compagnon animal",
            "Doué (END)/Doué (VOL)",
            "Esprit gardien",
            "Magie contrôlée",
            "Magie destructrice",
            "Magie innée",
            "Magie insidieuse",
            "Magie sanglante",
            "Résistance magique"
        ],
        armor: "",
        weapons: [
            "stylet (RU+*FOR*-2)"
        ],
        inventory: []
    },
    {
        name: "Magelame",
        skills: [
            `${domaineMagique}`,
            `${domaineMagique}`,
            "Acrobaties",
            "Arme de mêlée (au choix)",
            "Arme de mêlée (épée)",
            "Légendes",
            "Lettres",
            "Occultisme",
            "Résistance à la magie",
            "Travail du métal"
        ],
        talents: [
            "Confiance en soi",
            "Coup surnaturel",
            "Coups précis",
            "Esquive",
            "Maître d'armes",
            "Magie destructrice",
            "Magie sanglante",
            "Réflexes éclairs",
            "Riposte",
            "Vivacité"
        ],
        armor: "plastron de cuir (protection+1)",
        weapons: [
            `${epeequalitesuperieure}`,
        ],
        inventory: [
            "un habit de cour",
            "un habit de bourgeois",
            "un chapeau à plumes",
            "des gants"
        ]
    },
    {
        name: "Sorcier",
        skills: [
            `${domaineMagique}`,
            `${domaineMagique}`,
            "Botanique",
            "Courage",
            "Légendes",
            "Lettres",
            "Occultisme",
            "Potions et remèdes",
            "Résistance à la magie",
            "Se cacher"
        ],
        talents: [
            "Calme/Coup surnaturel",
            "Compagnon animal/Dévoué serviteur",
            "Doué (CNS)/Doué (VOL)",
            "Esprit gardien",
            "Magie contrôlée/Magie destructrice",
            "Magie sanglante",
            "Magie invisible",
            "Magie innée",
            "Nyctalopie",
            "Sort fétiche"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une amulette",
            "une bague gravée de symboles occultes/une baguette de bois gravée de symboles occultes"
        ]
    },

    // 12 : Parias et miséreux          (88-95)

    {
        name: "Chiffonier",
        skills: [
            "Arme légère (au choix)",
            "Faire pitié",
            "Fouille",
            "Milieu naturel (au choix)",
            "Pugilat",
            "Renseignements",
            "Repérage",
            "Résistance aux privations",
            "Résistance aux maladies",
            "Se cacher"
        ],
        talents: [
            "Bagarre",
            "Compagnon animal",
            "Doué (END)",
            "Doué (PER)",
            "Doué (SUR)",
            "Inoffensif",
            "Instinct de survie",
            "Nyctalopie/Sauvegarde",
            "Second souffle",
            "Solidité"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "une carriole",
            "trois besaces contenant divers objets trouvés dans les ordures"
        ]
    },
    {
        name: "Mendiant",
        skills: [
            "Arme de mêlée légère (au choix)",
            "Déplacement silencieux",
            "Faire pitié",
            "Fouille",
            "Persuasion",
            "Pugilat",
            "Renseignements",
            "Repérage",
            "Résistance aux maladies",
            "Résistance aux privations/Se cacher"
        ],
        talents: [
            "Compagnon animal",
            "Coup en traître",
            "Distraction",
            "Doué (DIS)",
            "Doué (END)",
            "Doué (PER)",
            "Inoffensif",
            "Insaisissable",
            "Instinct de survie/Réflexes éclairs",
            "Nyctalopie"
        ],
        armor: "",
        weapons: [
            "bâton (RU+*FOR*-2)"
        ],
        inventory: [
            "une sébile"
        ]
    },
    {
        name: "Égoutier",
        skills: [
            "Arme légère (au choix)",
            "Contorsion",
            "Courage",
            "Déplacement silencieux",
            "Écoute",
            "Escalade",
            "Natation",
            "Orientation/Vigilance",
            "Repérage",
            "Résistance aux maladies"
        ],
        talents: [
            "Calme",
            "Combat au sol/Sauvegarde",
            "Compagnon animal",
            "Doué (END)",
            "Doué (SUR)",
            "Doué (VOL)",
            "Esquive",
            "Instinct de survie",
            "Nyctalopie",
            "Solidité"
        ],
        armor: `${batons}`,
        weapons: [],
        inventory: [
            "une lanterne",
            "une corde de 10 mètres",
            "une étoffe pour le nez",
            "des hautes bottes de cuir souple"
        ]
    },
    {
        name: "Prostitué",
        skills: [
            "Charme",
            "Contorsion",
            "Danse",
            "Écoute",
            "Renseignements",
            "Repérage",
            "Résistance aux maladies",
            "Résistance aux privations",
            "Se cacher",
            "Sexualité"
        ],
        talents: [
            "Calme",
            "Distraction",
            "Doué (DIS)",
            "Doué (END)",
            "Doué (SOC)",
            "Fascination",
            "Mensonge éhonté",
            "Provocation",
            "Relations",
            "Résilience"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "des habits affriolants",
            "un nécessaire à maquillage",
            "une fiole de parfum à moitié vide"
        ]
    },
    {
        name: "Ratier",
        skills: [
            "Animaux",
            "Arme de mêlée (légère au choix)",
            "Contorsion",
            "Déplacement silencieux",
            "Écoute",
            "Pièges",
            "Pistage",
            "Repérage",
            "Résistance aux maladies",
            "Résistance aux poisons"
        ],
        talents: [
            "Calme",
            "Combat au sol",
            "Compagnon animal",
            "Coup du prédateur",
            "Doué (END)",
            "Doué (PER)",
            "Doué (SUR)",
            "Instinct de survie",
            "Nyctalopie",
            "Second souffle"
        ],
        armor: "",
        weapons: [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "perche où sont cloués 1d10 rats",
            "lanterne",
            "corde de 10 mètres",
            "chien petit mais vicieux/deux chats dressés",
            "sifflet en terre cuite",
            "boulettes de pain empoisonnées"
        ]
    },
    {
        name: "Trafiquant de cadavres",
        skills: [
            "Arme de mêlée (au choix)",
            "Déplacement silencieux",
            "Légendes",
            "Premiers soins",
            "Repérage",
            "Résistance à la magie",
            "Résistance aux maladies",
            "Résistance aux poisons",
            "Se cacher",
            "Travaux de force"
        ],
        talents: [
            "Calme",
            "Combat au sol",
            "Coup en traître",
            "Doué (DIS)",
            "Doué (END)",
            "Doué (VOL)",
            "Nyctalopie",
            "Résilience",
            "Second souffle",
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "pèlerine sombre",
            "gants",
            "étoffe cache-nez",
            "pelle",
            "carriole"
        ]
    },
    {
        name: "Rebouteux",
        skills: [
            `${domaineMagique}`,
            "Animaux",
            "Botanique",
            "Légendes",
            "Milieu naturel (au choix)",
            "Potions et remèdes",
            "Poisons",
            "Premiers soins",
            "Résistance aux maladies",
            "Se cacher"
        ],
        talents: [
            "Calme",
            "Doué (END)",
            "Doué (SUR)",
            "Esprit gardien/Instinct de survie",
            "Guérison rapide",
            "Mains blanches",
            "Magie contrôlée",
            "Magie invisible",
            "Magie sanglante",
            "Nyctalopie"
        ],
        armor: "",
        weapons: [
            "bâton de marche"
        ],
        inventory: [
            "besace contenant poudres, onguents et ingrédients étranges"
        ]
    },
    {
        name: "Vagabond",
        skills: [
            "Arme de mêlée (au choix)",
            "Arme de tir (au choix)",
            "Course",
            "Escalade",
            "Milieu naturel (au choix)",
            "Natation",
            "Orientation",
            "Repérage",
            "Résistance aux privations",
            "Résistance aux maladies"
        ],
        talents: [
            "Calme",
            "Chance insolente",
            "Compagnon animal",
            "Distraction/Esquive",
            "Doué (END)/Doué (SUR)",
            "Festoyeur",
            "Guérison rapide",
            "Instinct de survie",
            "Nyctalopie",
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "un bâton de marche"
        ]
    },

    // 13 : Religieux et prêtres        (96-103)

    {
        name: "Chasseur de mages/Purgiste",
        skills: [
            `${domaineReligion}`,
            "Arme de mêlée ou Arme à distance (au choix)",
            "Équitation",
            "Occultisme",
            "Persuasion",
            "Religion",
            "Renseignements",
            "Repérage",
            "Résistance à la magie",
            "Torture"
        ],
        talents: [
            "Calme",
            "Coup surnaturel",
            "Résistance magique",
            "Doué (PER)",
            "Doué (VOL)",
            "Esprit gardien",
            "Magie contrôlée",
            "Mémoire sans faille/Sain d'esprit",
            "Solidité",
            "Souffle de vie"
        ],
        armor: `${armureslegeres}`,
        weapons: [
            `${armesdemelee}`,
            `${armesadistance}`,
        ],
        inventory: [
            "livre saint",
            "cheval avec selle et harnais",
            "torche",
            "corde de dix mètres"
        ]
    },
    {
        name: "Fanatique",
        skills: [
            "Arme de mêlée (au choix)",
            "Courage",
            "Discours",
            "Occultisme",
            "Persuasion",
            "Premiers soins",
            "Pugilat",
            "Religion",
            "Résistance aux privations",
            "Résistance à la magie"
        ],
        talents: [
            "Bagarre/Calme",
            "Coups puissants",
            "Cri de guerre",
            "Doué (END)",
            "Doué (VOL)",
            "Gardien",
            "Inspiration",
            "Résilience",
            "Sauvegarde",
            "Solidité"
        ],
        armor: "",
        weapons: [
            `${armesdemeleelegere}`
        ],
        inventory: [
            "un livre saint",
            "une torche ou un tambourin"
        ]
    },
    {
        name: "Druide",
        skills: [
            "Domaine magique (animalisme)",
            `${domaineElementaire}`,
            "Animaux",
            "Botanique",
            "Légendes",
            "Milieu naturel (au choix)",
            "Orientation/Pistage",
            "Potions et remèdes",
            "Résistance aux maladies",
            "Résistance aux poisons"
        ],
        talents: [
            "Calme",
            "Compagnon animal",
            "Coup du prédateur/Coup surnaturel",
            "Doué (SUR)/Doué (VOL)",
            "Fascination",
            "Instinct de survie",
            "Magie innée",
            "Magie sanglante",
            "Solidité",
            "Sort fétiche"
        ],
        armor: "",
        weapons: [
            "serpe bien aiguisée (RU+*FOR*-1)/couteau bien aiguisé (RU+*FOR*-1)"
        ],
        inventory: [
            "bâton orné d'une tête d'animal sculptée",
            "fourrure",
            "nécessaire anti-poison"
        ]
    },
    {
        name: "Moine/Nonne",
        skills: [
            "Arts",
            "Astrologie",
            "Botanique",
            "Histoire",
            "Lettres",
            "Potions et remèdes",
            "Premiers soins",
            "Religion",
            "Résistance aux maladies",
            "Travail d'un matériau (au choix)"
        ],
        talents: [
            "Calme",
            "Doué (CNS)",
            "Doué (HAB)",
            "Doué (VOL)",
            "Mains blanches",
            "Mémoire sans faille",
            "Polyglotte/Sain d'esprit",
            "Sommeil léger",
            "Résistance magique",
            "Second souffle"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "livre saint",
            "livre sur un domaine précis (Histoire, Religion, Botanique…)",
            "deux mains de papier (20 pages)",
            "deux plumes et encrier",
            "1d10 bougies",
            "plantes médicinales/mule"
        ]
    },
    {
        name: "Initié",
        skills: [
            `${domaineReligion}`,
            `${domaineReligion}`,
            "Courage",
            "Diplomatie",
            "Histoire/Légendes",
            "Lettres/Persuasion",
            "Premiers soins",
            "Religion",
            "Résistance à la magie",
            "Résistance aux maladies"
        ],
        talents: [
            "Calme",
            "Doué (CNS)/Doué (VOL)",
            "Esprit gardien",
            "Mains blanches",
            "Magie innée",
            "Polyglotte",
            "Résilience",
            "Résistance magique",
            "Sain d'esprit",
            "Sort fétiche/Souffle de vie"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "livre saint",
            "une main de papier (20 pages)",
            "une plume et un encrier",
            "1d10 bougies"
        ]
    },
    {
        name: "Prêcheur/Missionnaire",
        skills: [
            "Charme",
            "Discours",
            "Écoute",
            "Intuition",
            "Lettres",
            "Noblesse et politique",
            "Persuasion",
            "Renseignements",
            "Religion",
            "Se cacher"
        ],
        talents: [
            "Calme",
            "Chance insolente/Mensonge éhonté",
            "Dévoué serviteur",
            "Doué (CNS)",
            "Doué (SOC)",
            "Doué (VOL)",
            "Fascination",
            "Inoffensif",
            "Inspiration",
            "Polyglotte"
        ],
        armor: "",
        weapons: [],
        inventory: [
            "trois livres saints",
            "une main de papier (20 pages)",
            "une plume et un encrier"
        ]
    },
    {
        name: "Inquisiteur",
        skills: [
            `${domaineReligion}`,
            "Arme de mêlée (au choix)",
            "Courage",
            "Intimidation",
            "Intuition",
            "Occultisme/Persuasion",
            "Religion",
            "Repérage",
            "Renseignements",
            "Torture"
        ],
        talents: [
            "Calme",
            "Coups puissants",
            "Doué (CNS)/Doué (VOL)",
            "Esprit gardien",
            "Magie innée",
            "Résilience",
            "Résistance magique",
            "Sain d'esprit",
            "Solidité",
            "Souffle de vie"
        ],
        armor: "",
        weapons: [
            `${armesdemeleesimples}`
        ],
        inventory: [
            "livre saint",
            "main de papier (20 pages)",
            "plume et encrier",
            "1d10 bougies"
        ]
    },
    {
        name: "Templier/Chevalier d'Abel",
        skills: [
            "Arme lourde (au choix)",
            "Arme de mêlée (au choix)",
            "Courage",
            "Diplomatie",
            "Équitation",
            "Lettres/Repérage",
            "Premiers soins",
            "Religion",
            "Résistance à la magie",
            "Stratégie"
        ],
        talents: [
            "Calme",
            "Coups puissants/Tireur d'élite",
            "Coup surnaturel",
            "Doué (END)",
            "Doué (VOL)",
            "Gardien",
            "Maîtrise du bouclier",
            "Maître d'armes/Port d'armure",
            "Résilience",
            "Solidité/Souffle de vie"
        ],
        armor: `${armuresmoyennes}/${armureslourdes}`,
        weapons: [
            `${armesdemelee}`,
            `${armesdemelee}`,
            `${boucliers}/arc (RU+*FOR*+0) et 10 flèches`
        ],
        inventory: [
            "livre saint",
            "un cheval avec sa selle et son harnais",
            "une lanterne"
        ]
    }



]





/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////// LISTE DE PRÉNOMS MÉDIÉVAUX ////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// -2 aléatoire (sauf spé. peuple)

// -2 Logique
// -1 Aléatoire
// 0 Français
// 1 Hispanique
// 2 Anglais
// 3 Italien 
// 4 Scandinaves
// 5 Grecs
// 6 Celtiques
// 7 Orientaux
// 8 Slaves
// 9 Gobelinoïdes
// 10 Elfiques
// 11 Nains
// 12 Halfelins
 

const prenoms = [

    //////////
    // Français / Falcogne
        [["Albertin", "Albin", "Alphonse", "Andri", "Anton",
        "Arnould", "Arthuryn", "Audouin", "Auffroy", "Augé",
        "Auguste", "Balthazar", "Barthélémy", "Bellus", "Béranger",
        "Célestin", "Côme", "Crespin", "Domin", "Edman", "Emery",
        "Estienne", "Evrardus", "Florimond", "Gamelet", "Gaspard",
        "Gervesot", "Gobin", "Gracien", "Guerinet", "Guillot", "Gustave",
        "Hebertus", "Hector", "Heliot", "Hemeritus", "Horace",
        "Hubert", "Huchon", "Innocent", "Isembart", "Isidore", "Jacobus",
        "Jacotin", "Jacques", "Lambert", "Landricus", "Léon",
        "Léopold", "Ligier", "Louys", "Loyset", "Luquin", "Lyebault",
        "Octave", "Odo", "Ogier", "Poncelet", "Radulfus", "Raymondin",
        "Rogerin", "Rolin", "Romuald", "Scipion", "Senestre", "Simonet",
        "Tassin", "Thevot", "Valère", "Valérian", "Zéphirin", "Aubin",
        "Toussaint",
        "Guillaume",
        "Matthieu",
        "Baptiste",
        "Joël",
        "Lionel",
        "Adalard",
        "Etienne",
        "Barthélemy",
        "Clotaire",
        "Dagobert",
        "Eudes",
        "Faramond",
        "Godefroy",
        "Hervé",
        "Isembert",
        "Jacques",
        "Louis",
        "Népotien",
        "Odo",
        "Pepin",
        "Raoul",
        "Simon",
        "Thibault",
        "Urbain",
        "Vivien",
        "Xavier",
        "Yves",
        "Zénon",
        "Amaury",
        "Benoit",
        "Conan",
        "Didier",
        "Étienne",
        "Florian",
        "Gaston",
        "Henri",
        "Jérôme",
        "Lancelot",
        "Maurice",
        "Nathanaël",
        "Olivier",
        "Pascal",
        "Quentin",
        "Renaud",
        "Sébastien",
        "Thierry",
        "Ulric",
        "Victor",
        "Xénophon",
        "Yves",
        "Zacharie"],


        ["Abéline", "Adélina", "Anastasie", "Bélinda",
        "Bérénisse", "Berthilde", "Blanche", "Blandine", "Blondine",
        "Constance", "Corantine", "Cybelle", "Dahlia", "Dulcina",
        "Emeline", "Emerise", "Ernestine", "Eugénie", "Florette",
        "Georgelle", "Gloria", "Hermine", "Irma", "Isolde", "Jéméline",
        "Joalie", "Laureline", "Leonor", "Linette", "Loïse", "Lorette",
        "Lorine", "Ludmilla", "Madeleine", "Marguerite", "Mélusine",
        "Nellie", "Perrine", "Prudence", "Rosalie", "Rose", "Rosie", "Sélène",
        "Valériane", "Violette", "Yacinthe", "Yvoline", "Zéphirine", "Aélis",
        "Hiledegarde",
        "Brumehilde",
        "Brigitte",
        "Morgane",
        "Adélaïde",
        "Blanche",
        "Céleste",
        "Diane",
        "Eléonore",
        "Fleur",
        "Gisèle",
        "Hortense",
        "Isabeau",
        "Julienne",
        "Lucille",
        "Margot",
        "Nicolette",
        "Ophélie",
        "Pénélope",
        "Quiterie",
        "Roxane",
        "Suzanne",
        "Thérèse",
        "Ursule",
        "Victoire",
        "Xavière",
        "Yolande",
        "Zélie",
        "Aimée",
        "Béatrice",
        "Clarisse",
        "Daphné",
        "Élisabeth",
        "Félicie",
        "Gabrielle",
        "Hélène",
        "Isolde",
        "Jeanne",
        "Laure",
        "Marguerite",
        "Nathalie",
        "Oliviane",
        "Perrine",
        "Rosalie",
        "Sophie",
        "Thérèse",
        "Ursule",
        "Violette",
        "Yseult"]],

    ////////////////
    // 1 hispaniques / Doragne
        [["Ambrosio", "Anselmo", "Anton", "Antonio",
        "Arias", "Beltrane", "Bernaldino", "Blasco", "Carlos", "Cornieles",
        "Cosme", "Diego", "Felipe", "Ferrer", "Fulgencio", "Garaçia",
        "Guillen", "Gutirre", "Henrrique", "Hernando",
        "Jayme", "Juanes", "Larnaz", "Lope", "Lucon", "Luys", "Mendo",
        "Pablo", "Ramon", "Salazar", "Savastian", "Suero", "Tristàn",
        "Vernaldo", "Ximon", "Ynigo", "Alfonso",
        "José",
        "Estéban",
        "Bernardo",
        "Carlos",
        "Diego",
        "Esteban",
        "Fernando",
        "Gonzalo",
        "Hernán",
        "Íñigo",
        "Javier",
        "Luis",
        "Manuel",
        "Nicolás",
        "Óscar",
        "Pedro",
        "Quirino",
        "Rodrigo",
        "Salvador",
        "Tomás",
        "Ulises",
        "Vicente",
        "Wilfredo",
        "Xavier",
        "Yago",
        "Zacarías",
        "Abelardo",
        "Bartolomé",
        "César",
        "Domingo",
        "Emilio",
        "Felipe",
        "Gabriel",
        "Hugo",
        "Ignacio",
        "Joaquín",
        "Leandro",
        "Mateo",
        "Néstor",
        "Oswaldo",
        "Pablo",
        "Quique",
        "Ramiro",
        "Santiago",
        "Teodoro",
        "Urbano",
        "Valentín",
        "Wenceslao",
        "Ximeno",
        "Ysidro",
        "Zorro"],


        ["Alatara", "Aldonsa", "Aldorisa", "Ana", "Andrea",
        "Argeda", "Aularia", "Barbera", "Barbola", "Beatriz",
        "Brigida", "Catalyna", "Caterina", "Costança", "Eguala", "Florinda",
        "Gracia", "Guiomar", "Ines", "Joana", "Juliana", "Leonor",
        "Lopisa", "Loreta", "Luysa", "Mancia", "Mariana", "Marina",
        "Orastriosa", "Quiteria", "Sancha", "Teresa", "Viana", "Vicenta",
        "Ypola", "Ysabel", "Adelaida",
        "Beatriz",
        "Carolina",
        "Dolores",
        "Esmeralda",
        "Fabiola",
        "Gabriela",
        "Hilda",
        "Isabel",
        "Juliana",
        "Leticia",
        "Margarita",
        "Natalia",
        "Ofelia",
        "Paloma",
        "Querida",
        "Regina",
        "Sofía",
        "Teresa",
        "Úrsula",
        "Verónica",
        "Wanda",
        "Ximena",
        "Ysabel",
        "Zarina",
        "Alicia",
        "Blanca",
        "Clara",
        "Diana",
        "Elena",
        "Francisca",
        "Guadalupe",
        "Inés",
        "Josefa",
        "Leonor",
        "María",
        "Nuria",
        "Oriana",
        "Pilar",
        "Rafaela",
        "Soledad",
        "Tatiana",
        "Valentina",
        "Xiomara",
        "Zaida"]],

    //////////
    // anglais
        [["Innes",
        "Oscar",
        "Gilmore",
        "David",
        "Benedict",
        "Cedric",
        "Alfred",
        "Duncan",
        "Edmund",
        "Felix",
        "Geoffrey",
        "Harold",
        "Isaac",
        "John",
        "Lancelot",
        "Miles",
        "Nigel",
        "Oscar",
        "Percival",
        "Quentin",
        "Reginald",
        "Stephen",
        "Theodore",
        "Uther",
        "Vincent",
        "Walter",
        "Xavier",
        "Yves",
        "Zachary",
        "Aldred",
        "Bartholomew",
        "Cuthbert",
        "Darcy",
        "Eadric",
        "Faramond",
        "Gareth",
        "Hector",
        "Ingmar",
        "Jasper",
        "Lysander",
        "Malcolm",
        "Nathaniel",
        "Osbert",
        "Peregrine",
        "Quirinus",
        "Roderick",
        "Sebastian",
        "Tristan",
        "Uriah",
        "Valentine",
        "William",
        "Xander",
        "Yorick",
        "Zephyrus"],


        ["Agatha",
        "Beatrice",
        "Cecily",
        "Dorothea",
        "Eleanor",
        "Fiona",
        "Gwendolyn",
        "Henrietta",
        "Isolde",
        "Jane",
        "Lillian",
        "Margery",
        "Nora",
        "Ophelia",
        "Penelope",
        "Quinn",
        "Rosamund",
        "Sybil",
        "Theodora",
        "Ursula",
        "Victoria",
        "Winifred",
        "Xanthe",
        "Yvonne",
        "Zara",
        "Adelaide",
        "Brienne",
        "Clementine",
        "Daisy",
        "Eloise",
        "Felicity",
        "Giselle",
        "Hazel",
        "Imogen",
        "Juliet",
        "Lavinia",
        "Matilda",
        "Natalia",
        "Octavia",
        "Priscilla",
        "Rowena",
        "Seraphina",
        "Theodosia",
        "Una",
        "Violet",
        "Winona",
        "Xenia",
        "Yolanda",
        "Zelda"]],
    
    /////////
    // italien / Sélénie / Sainte-Papauté
        [["Agnolino", "Albizzo", "Ambrogio", "Amerigo",
        "Amilcare", "Armando", "Arturo", "Bartolomeo",
        "Bernardo", "Bertino", "Bonaguida", "Cambino", "Camillo",
        "Chimenti", "Cione", "Corrado", "Corso", "Domenico",
        "Edmondo", "Ennio", "Ernesto", "Eugenio", "Ferdinando",
        "Geri", "Iacopo", "Ippolito", "Gino", "Gioacchino", "Gregorio",
        "Guglielmo", "Ignazio", "Lapo", "Leandro", "Leonardo", "Leonello",
        "Lorenzo", "Manno", "Mario", "Marsilio", "Ottavio",
        "Romeo", "Salvestro", "Saverio", "Sinibaldo", "Strozza",
        "Teodoro", "Vittorio", "Benvenuto",
        "Adalberto",
        "Lucas",
        "Mario",
        "Leonardo",
        "Baldassare",
        "Cesare",
        "Dante",
        "Ermanno",
        "Federico",
        "Giovanni",
        "Lorenzo",
        "Marcello",
        "Nicolò",
        "Orlando",
        "Pietro",
        "Raffaele",
        "Salvatore",
        "Taddeo",
        "Ugo",
        "Valentino",
        "Walter",
        "Xavier",
        "Yago",
        "Zaccaria",
        "Alessandro",
        "Bartolomeo",
        "Cristoforo",
        "Domenico",
        "Enrico",
        "Ferruccio",
        "Giacomo",
        "Luigi",
        "Matteo",
        "Nerio",
        "Ottavio",
        "Paolo",
        "Rinaldo",
        "Simone",
        "Tiziano",
        "Uberto",
        "Vincenzo",
        "Zanobi",
        "Alberto",
        "Bernardo",
        "Carlo",
        "Davide",
        "Eduardo",
        "Fabio",
        "Gastone",
        "Hugo",
        "Ippolito",
        "Jacopo",
        "Leandro",
        "Mario",
        "Nino",
        "Orazio",
        "Piero",
        "Renzo",
        "Sandro",
        "Teodoro",
        "Ulderico",
        "Valerio",
        "Walter",
        "Xeno",
        "Zioa"],


        ["Adrianna", "Agnella", "Agnese", "Alessandra",
        "Bartola", "Beatrice", "Bella", "Bianca", "Cassandra", "Caterina",
        "Ciosa", "Cosima", "Druda", "Elena", "Faustia", "Fiametta",
        "Florenza", "Foscarinna", "Gaspara", "Gemma", "Ginevra",
        "Ipolitta", "Isabella", "Isadora", "Isotta", "Lucrezia", "Maddalena",
        "Mela", "Moresina", "Nencia", "Nezetta", "Paola", "Pellegrina",
        "Olimpia", "Renata", "Stella", "Tessa", "Tita", "Tullia",
        "Violante", "Vittoria", "Adelaide",
        "Maria",
        "Beatrice",
        "Caterina",
        "Diana",
        "Eleonora",
        "Federica",
        "Giulia",
        "Livia",
        "Margherita",
        "Natalia",
        "Olivia",
        "Palmira",
        "Rosa",
        "Serafina",
        "Teresa",
        "Uberta",
        "Valentina",
        "Wanda",
        "Ximena",
        "Zita",
        "Agnese",
        "Bianca",
        "Costanza",
        "Donatella",
        "Elena",
        "Fiammetta",
        "Ginevra",
        "Ludovica",
        "Matilde",
        "Nicoletta",
        "Ornella",
        "Piera",
        "Renata",
        "Silvia",
        "Tosca",
        "Ursula",
        "Vittoria",
        "Zara",
        "Alessia",
        "Bettina",
        "Camilla",
        "Dorotea",
        "Emilia",
        "Fiorella",
        "Giovanna",
        "Liliana",
        "Marcella",
        "Nunzia",
        "Olimpia",
        "Paolina",
        "Rachele",
        "Selena",
        "Tiziana",
        "Ulrica",
        "Vanda",
        "Zoia"]],

    ///////////////
    // 4 Scandinaves / Borennie
        [["Adalgis", "Adalrik", "Ademar", "Aimeric",
        "Aimersende", "Alarik", "Albérik", "Alrik", "Amaury", "Anfray",
        "Archibald", "Arduin", "Arnald", "Arnoul", "Arnvald", "Asselin",
        "Aubert", "Aubourg", "Aymar", "Baudry", "Beowulf", "Berthold",
        "Conrad", "Didrik", "Evrard", "Ewald", "Frobert",
        "Fulrad", "Godrik", "Gunther", "Hamelin", "Harald", "Harold",
        "Heinrich", "Hildéric", "Hubert", "Humbert", "Hunéric", "Jurgen",
        "Knut", "Karl", "Ludwig", "Manfred", "Oswald", "Othon",
        "Philbert", "Ragnar", "Richer", "Rolf", "Sarus", "Siegfried",
        "Tancred", "Toriak", "Wandrille", "Werner", "Wilfried", "Wisimar",
        "Wolfgang", "Wolfram", "Willhelm", "Wulf", "Wulfran", "Wulfar", "Frederich",
        "Alaric",
        "Björn",
        "Cedric",
        "Dag",
        "Erik",
        "Finn",
        "Gunnar",
        "Haldor",
        "Ingmar",
        "Jarl",
        "Knut",
        "Leif",
        "Magnus",
        "Njord",
        "Olaf",
        "Peder",
        "Ragnar",
        "Sigurd",
        "Thorsten",
        "Ulf",
        "Vidar",
        "Wilhelm",
        "Xander",
        "Yngvar",
        "Zigurd",
        "Anders",
        "Bengt",
        "Carl",
        "David",
        "Einar",
        "Folke",
        "Gustav",
        "Hans",
        "Ivar",
        "Johan",
        "Karl",
        "Lars",
        "Mikael",
        "Nils",
        "Olof",
        "Per",
        "Rolf",
        "Stefan",
        "Torgny",
        "Ulrik",
        "Valdemar",
        "Willem",
        "Xerxes",
        "Yannick",
        "Zacharias"],

        ["Adélaïde", "Adèle", "Aldegonde", "Alix", "Aloïs",
        "Astrid", "Aubrée", "Auda", "Bathilde", "Berthe", "Berthild",
        "Brünhild", "Brunimonde", "Brunissende", "Dagmar", "Elvir",
        "Elfried", "Ermelinde", "Ermengarde", "Germonda",
        "Gersende", "Gertrud", "Gudrun", "Gunda", "Helesinde", "Hildebrand",
        "Hildebold", "Hildegarde", "Imgarde", "Ingelbald",
        "Ingrid", "Isembard", "Isolde", "Kunigonda", "Lydwine",
        "Mauger", "Sigrid", "Siegrun", "Sighild", "Walburga", "Waltraud",
        "Wivine", "Astrid",
        "Birgit",
        "Cecilia",
        "Dagny",
        "Eira",
        "Freja",
        "Greta",
        "Hilda",
        "Ingrid",
        "Jorunn",
        "Karin",
        "Lena",
        "Maja",
        "Nora",
        "Oda",
        "Petra",
        "Runa",
        "Sigrid",
        "Thora",
        "Ulla",
        "Viveka",
        "Wilhelmina",
        "Xena",
        "Ylva",
        "Agnes",
        "Bodil",
        "Carina",
        "Doris",
        "Elin",
        "Frida",
        "Gudrun",
        "Helga",
        "Inge",
        "Johanna",
        "Klara",
        "Lisbet",
        "Märta",
        "Nanna",
        "Olof",
        "Petronella",
        "Ragnhild",
        "Sofia",
        "Tora",
        "Ursula",
        "Vilhelmina",
        "Wendla",
        "Xaviera",
        "Yrsa",
        "Zäta"]],

 
    //////////
    // 6 Grecs / Antiques
        [["Abelann", "Alden", "Auris", "Balian", "Balion",
        "Bardik", "Beleris", "Boren", "Bran", "Braxus", "Brianon", "Cael",
        "Calios", "Coréus", "Darian", "Dario", "Delvas", "Dinas", "Djern",
        "Errain", "Filvan", "Galid", "Galien", "Hazellias", "Holrik", "Issel",
        "Jalko", "Jir", "Joran", "Kandjar", "Laurin", "Lizyo", "Lorn", "Lothar",
        "Mandias", "Obel", "Occlinn", "Orlainn", "Pereym", "Rodrick",
        "Rovhal", "Sagreval", "Silas", "Thelinos", "Thorgern",
        "Valedan", "Valkyr", "Varko", "Vornan", "Yvin", "Vassili",
        "Achille",
        "Basil",
        "Charalampos",
        "Dimitrios",
        "Evangelos",
        "Fotios",
        "Heracles",
        "Ioannis",
        "Konstantinos",
        "Leonidas",
        "Nikolaos",
        "Orestes",
        "Panagiotis",
        "Socrates",
        "Theodore",
        "Vasilios",
        "Yannis",
        "Zephyros",
        "Alexandros",
        "Barnabas",
        "Christos",
        "Damianos",
        "Eleftherios",
        "Fotis",
        "Gregorios",
        "Iason",
        "Kyriakos",
        "Lazaros",
        "Menelaos",
        "Nestor",
        "Orestis",
        "Petros",
        "Sotiris",
        "Themistoklis",
        "Vassilis",
        "Yannis",
        "Zacharias",
        "Agapitos",
        "Benediktos",
        "Christophoros",
        "Dionysios",
        "Efthymios",
        "Georgios",
        "Haralambos",
        "Ioannis",
        "Kostas",
        "Lambros",
        "Makarios",
        "Nikiforos",
        "Orpheus",
        "Panteleimon",
        "Spyridon",
        "Theodosios",
        "Vassilios",
        "Ypatios",
        "Zacharias"],


        ["Adaïre", "Aïlis", "Améline", "Anwen", "Aryline",
        "Ashaël", "Azilia", "Bélora", "Beonysse", "Cadilia", "Calise",
        "Caythlinn", "Cécinia", "Damaé", "Deïna", "Délianne", "Dorianne",
        "Drivelys", "Dryla", "Ellin", "Eoline", "Esterel", "Evanna",
        "Hazel", "Iris", "Isleen", "Jaïda", "Jémina", "Jyna", "Kaeli",
        "Kailyn", "Karilda", "Kerylin", "Laïna", "Leocina", "Liwen", "Lona",
        "Lynaïs", "Lynelle", "Meliana", "Nalys", "Nolyn", "Shanael",
        "Shauna", "Shynnae", "Thalia", "Tianna", "Tya", "Vama", "Zyna", "Alexandra",
        "Berenice",
        "Callista",
        "Dimitra",
        "Eleni",
        "Fotini",
        "Georgia",
        "Helena",
        "Irene",
        "Kalliope",
        "Leda",
        "Maria",
        "Nikoleta",
        "Olympia",
        "Penelope",
        "Sophia",
        "Theodora",
        "Vasiliki",
        "Yianna",
        "Zoe",
        "Aikaterini",
        "Barbara",
        "Christina",
        "Despina",
        "Efterpi",
        "Georgia",
        "Ioanna",
        "Katerina",
        "Lambrini",
        "Melina",
        "Nafsika",
        "Ophelia",
        "Paraskevi",
        "Sofia",
        "Theano",
        "Varvara",
        "Yianna",
        "Zaharoula",
        "Agapi",
        "Bianca",
        "Chrysanthe",
        "Danae",
        "Eleni",
        "Filia",
        "Georgia",
        "Iliana",
        "Kiriaki",
        "Larissa",
        "Magdalini",
        "Nerissa",
        "Olympia",
        "Pandora",
        "Sapphira",
        "Thekla",
        "Vasiliki",
        "Yolanda",
        "Zephyra"]],

    //////////////
    // 7 Celtiques
        [["Aidan",
        "Bran",
        "Conall",
        "Dylan",
        "Evan",
        "Finn",
        "Gareth",
        "Huw",
        "Ivor",
        "Llewellyn",
        "Madoc",
        "Niall",
        "Owen",
        "Padraig",
        "Rhys",
        "Seamus",
        "Tadhg",
        "Uaine",
        "Vaughan",
        "Wyn",
        "Xavier",
        "Yannick",
        "Zane",
        "Alaric",
        "Brennan",
        "Cormac",
        "Dermot",
        "Eoin",
        "Fearghal",
        "Gawain",
        "Hector",
        "Iain",
        "Lorcan",
        "Morgan",
        "Naoise",
        "Oisin",
        "Peredur",
        "Riordan",
        "Sorley",
        "Taran",
        "Urien",
        "Vernon",
        "Wynfor",
        "Xander",
        "Ywain",
        "Zephyrus"],


        ["Aine",
        "Brigid",
        "Carys",
        "Deryn",
        "Eira",
        "Fiona",
        "Gwendolen",
        "Hazel",
        "Isolde",
        "Juno",
        "Kiera",
        "Lilith",
        "Maeve",
        "Niamh",
        "Orla",
        "Pryderi",
        "Rhiannon",
        "Saoirse",
        "Tegan",
        "Una",
        "Vivienne",
        "Winifred",
        "Xanthe",
        "Yseult",
        "Zara",
        "Aisling",
        "Bronwen",
        "Ceridwen",
        "Dwynwen",
        "Eithne",
        "Fflur",
        "Guinevere",
        "Imogen",
        "Lorelei",
        "Morgana",
        "Nerys",
        "Olwen",
        "Pandora",
        "Rowena",
        "Siobhan",
        "Tanwen",
        "Ursula",
        "Violet",
        "Wynne",
        "Xena",
        "Ygraine",
        "Zephyra"]],

    //////////////
    // 7 Orientaux / Orientalie
        [["Abdul",
        "Bahir",
        "Cemal",
        "Dawood",
        "Emir",
        "Farid",
        "Ghazi",
        "Hakim",
        "Ibrahim",
        "Jamil",
        "Kamal",
        "Lutfi",
        "Musa",
        "Nizar",
        "Osman",
        "Qasim",
        "Rashad",
        "Sami",
        "Tariq",
        "Usama",
        "Youssef",
        "Zakir",
        "Amir",
        "Basim",
        "Daud",
        "Fahad",
        "Ghassan",
        "Hassan",
        "Ilyas",
        "Jafar",
        "Khalil",
        "Luqman",
        "Mujahid",
        "Nasir",
        "Omar",
        "Qadir",
        "Riyad",
        "Saad",
        "Talib",
        "Umar",
        "Yahya",
        "Ziad"],

        ["Aisha",
        "Basma",
        "Ceylan",
        "Dina",
        "Esma",
        "Fadila",
        "Ghada",
        "Hana",
        "Iman",
        "Jamila",
        "Kenza",
        "Layla",
        "Maha",
        "Nadia",
        "Ola",
        "Qamar",
        "Ranya",
        "Samira",
        "Tahira",
        "Usra",
        "Yasmin",
        "Zahra",
        "Amani",
        "Bariya",
        "Dalal",
        "Fawzia",
        "Gulzar",
        "Hanan",
        "Ihsan",
        "Jumana",
        "Kalila",
        "Lamya",
        "Maysa",
        "Nadira",
        "Ola",
        "Qadira",
        "Rabia",
        "Salma",
        "Thana",
        "Umniya",
        "Yasmina",
        "Zainab"]],


    /////////
    // Slaves / Empire
        [["Aleksandr", "Aleksei", "Anatoli", "Andrei",
        "Borislav", "Borya", "Daniil", "Demyan", "Dima", "Dimitri",
        "Faddey", "Feodor", "Foka", "Gavriil", "Grigory", "Grisha", "Igor",
        "Ilari", "Iosif", "Irinei", "Ivan", "Kirill", "Kolya", "Konstantin",
        "Kuzma", "Lazar", "Leonid", "Lyov", "Makar", "Matvey", "Melor",
        "Mikhail", "Miroslav", "Mitya", "Naum", "Nikita", "Nikolai",
        "Oleg", "Piotr", "Rhodya", "Rurik", "Sergei", "Vadim", "Vassily",
        "Varlam", "Yuri", "Viktor", "Vladislav", "Vladimir", "Zhakar", "Piotyr",
        "Alexei",
        "Boris",
        "Constantin",
        "Dmitri",
        "Evgeni",
        "Fedor",
        "Gavril",
        "Ivan",
        "Konstantin",
        "Lev",
        "Mikhail",
        "Nikolai",
        "Oleg",
        "Pavel",
        "Roman",
        "Sergei",
        "Taras",
        "Vadim",
        "Viktor",
        "Yakov",
        "Zakhar",
        "Anatoly",
        "Bogdan",
        "Davyd",
        "Egor",
        "Filipp",
        "Grigori",
        "Igor",
        "Kirill",
        "Luka",
        "Maxim",
        "Nestor",
        "Ostap",
        "Pyotr",
        "Ruslan",
        "Semyon",
        "Timofei",
        "Vasily",
        "Yaroslav",
        "Zinovi",
        "Andrei",
        "Bogdan",
        "Dmitrii",
        "Evgenii",
        "Foma",
        "Gleb",
        "Ilya",
        "Kuzma",
        "Leonid",
        "Maksim",
        "Nikita",
        "Oleg",
        "Pavel",
        "Rodion",
        "Sergei",
        "Taras",
        "Valentin",
        "Vladimir",
        "Yevgenii",
        "Zakhar",
        "Boleslav",
        "Czeslaw",
        "Dobromir",
        "Emil",
        "Fedor",
        "Gavril",
        "Ivan",
        "Jiri",
        "Karel",
        "Lubomir",
        "Miroslav",
        "Nikolai",
        "Oleg",
        "Pavel",
        "Radovan",
        "Sergei",
        "Taras",
        "Vadim",
        "Viktor",
        "Yaroslav",
        "Zoran",
        "Anatoly",
        "Bogdan",
        "Danko",
        "Emilian",
        "Grigori",
        "Ilya",
        "Kirill",
        "Lazar",
        "Mikhail",
        "Nestor",
        "Ostap",
        "Piotr",
        "Ruslan",
        "Simeon",
        "Tomasz",
        "Vasily",
        "Yuri"],


        ["Agata", "Aleksandrina", "Alisa", "Anastasiya",
        "Angelina", "Ania", "Dunya", "Elena", "Esfir", "Eva", "Faina", "Fedora",
        "Galya", "Gavriila", "Inna", "Irina", "Ivanna", "Katerina",
        "Katinka", "Kira", "Klava", "Lana", "Kseniya", "Larisa", "Lidiya",
        "Masha", "Natalya", "Natasha", "Nina", "Oksana", "Polina",
        "Raya", "Sofya", "Sonya", "Sveta", "Talya", "Tamara", "Tanya",
        "Tasha", "Tatyana", "Uliana", "Ustinya", "Valentina", "Valeriya",
        "Varya", "Vera", "Yelena", "Zanna", "Zoya", "Anastasia",
        "Darya",
        "Ekaterina",
        "Feodora",
        "Galina",
        "Irina",
        "Jelena",
        "Ksenia",
        "Larisa",
        "Margarita",
        "Nadezhda",
        "Olga",
        "Polina",
        "Sofiya",
        "Tatiana",
        "Uliana",
        "Vasilisa",
        "Veronika",
        "Yelizaveta",
        "Yevgeniya",
        "Zarina",
        "Aleksandra",
        "Bogdana",
        "Daria",
        "Evgeniya",
        "Faina",
        "Galina",
        "Inessa",
        "Karina",
        "Liliya",
        "Marina",
        "Nina",
        "Oksana",
        "Polina",
        "Raisa",
        "Svetlana",
        "Taisiya",
        "Varvara",
        "Yaroslava",
        "Zoya",
        "Anfisa",
        "Bozhena",
        "Dina",
        "Ekaterina",
        "Fevroniya",
        "Galina",
        "Izolda",
        "Karolina",
        "Lidiya",
        "Miroslava",
        "Nadezhda",
        "Oksana",
        "Paraskeva",
        "Raisa",
        "Sofiya",
        "Tatyana",
        "Ulyana",
        "Varvara",
        "Yaroslava",
        "Zlata",
        "Bozena",
        "Czeslawa",
        "Daria",
        "Emilia",
        "Feodora",
        "Gordana",
        "Ivana",
        "Jana",
        "Katerina",
        "Lada",
        "Milena",
        "Nadezhda",
        "Olga",
        "Petra",
        "Radmila",
        "Svetlana",
        "Tamara",
        "Varvara",
        "Vera",
        "Yelena",
        "Zara",
        "Bogdana",
        "Danica",
        "Ekaterina",
        "Galina",
        "Izolda",
        "Karolina",
        "Lidia",
        "Milica",
        "Nina",
        "Oksana",
        "Polina",
        "Rada",
        "Sofia",
        "Tatiana",
        "Viktoriya"]],

    /////////////////
    // 8 Gobelinoïdes

        [["Arvak", "Azabrog", "Bashag", "Boghak",
        "Corgak", "Dagzog", "Dorgash", "Drommok", "Durzhum",
        "Durzol", "Ermug", "Fandhag", "Fargad", "Gorkad", "Graghed",
        "Grakhlag", "Kalog", "Kirzol", "Kogzol", "Kouzog", "Kurz",
        "Magduk", "Marhzug", "Markub", "Morghed", "Mourkhad",
        "Nargad", "Ooldahg", "Oorkhub", "Oorzol", "Parurk", "Rigahk",
        "Roshrag", "Shagrol", "Sharkub", "Sharurk", "Shaznog",
        "Shorgad", "Urzol", "Valduk", "Vardol", "Varzhum", "Vazog",
        "Vorghak", "Vorkag", "Vrarag", "Zalkhed", "Zamog", "Zuhgan",
        "Zulkad", 
        "Yoel",
        "Huck",
        "Dashrän",
        "Grok",
        "Mog",
        "Thrag",
        "Zog",
        "Narg",
        "Gruk",
        "Snag",
        "Drog",
        "Grish",
        "Throk",
        "Gnash",
        "Vrak",
        "Zarg",
        "Morg",
        "Snik",
        "Thruk",
        "Grunk",
        "Snark",
        "Druk",
        "Krul",
        "Znak",
        "Molag",
        "Gnarl",
        "Grag",
        "Thul",
        "Krag",
        "Nok",
        "Vruk",
        "Zilg",
        "Morc",
        "Thag",
        "Grol",
        "Mruk",
        "Zog",
        "Drenk",
        "Krog",
        "Brag",
        "Gnak",
        "Nurk",
        "Drak",
        "Vrag",
        "Throm",
        "Snur",
        "Zogar",
        "Grishnag",
        "Throkk",
        "Kraz",
        "Zurg",
        "Murg",
        "Gorl",
        "Grimnok"],

        ["Arvakia", "Azabrogi", "Bashagia", "Boghakia",
        "Corga", "Dagzogi", "Dorgashia", "Drommoka", "Durza",
        "Durzhumi", "Ermuga", "Fandha", "Fargadi", "Gorka", "Graghedi",
        "Grakhlaga", "Kaloga", "Kirzol", "Kogzola", "Kouzogi",
        "Kurza", "Magdukia", "Marhzuga", "Markub", "Morghedia",
        "Mourkhedia", "Narga", "Ooldahgi", "Oorkhub", "Oorzola",
        "Parurka", "Rigahkia", "Roshragi", "Shagrolia", "Sharkub",
        "Sharurkia", "Shaznogi", "Shorga", "Urzola", "Valduki", "Vardoli",
        "Varzhuma", "Vazogi", "Vorgha", "Vorkagi", "Vrara",
        "Zalkhedia", "Zamogia", "Zuhga", "Zulka", "Grona",
        "Mogga",
        "Thraga",
        "Zogga",
        "Narga",
        "Gruka",
        "Snaga",
        "Droga",
        "Grisha",
        "Throka",
        "Gnasha",
        "Vraka",
        "Zarga",
        "Morga",
        "Snika",
        "Thruka",
        "Grunka",
        "Snarka",
        "Druka",
        "Krula",
        "Znaka",
        "Molaga",
        "Gnarla",
        "Graga",
        "Thula",
        "Kraga",
        "Noka",
        "Vruka",
        "Zilga",
        "Morca",
        "Thaga",
        "Grola",
        "Mruka",
        "Zogga",
        "Drenka",
        "Kroga",
        "Braga",
        "Gnaka",
        "Nurka",
        "Draka",
        "Vraga",
        "Throma",
        "Snura",
        "Zogara",
        "Grishnaga",
        "Throkka",
        "Kraza",
        "Zurga",
        "Murga",
        "Gorla",
        "Grimnoka"]],


    // Elfiques
        [["Aleris", "Almidor", "Alrénis", "Anandil", "Aolis",
        "Arthenir", "Avendiel", "Calemdor", "Caméris", "Cerimond",
        "Corymnor", "Daloril", "Dorenim", "Eldorin", "Elrindel",
        "Erghel", "Ethalin", "Faethyn", "Fanélyn", "Filindel", "Hovelin",
        "Iril", "Jadriel", "Jovandor", "Kheldril", "Kyllin", "Kyriondil",
        "Laeris", "Ladriel", "Linaën", "Lörienar", "Lysandir", "Lyvandor",
        "Mélandor", "Méloril", "Météril", "Nethelvin", "Nevelluin",
        "Ryvellin", "Selandir", "Talmaris", "Tanaelin", "Tanelyr",
        "Terianis", "Thaniel", "Thauvael", "Valakel", "Vaneriel",
        "Vaneril", "Vareldin",
        "Aranion",
        "Baelon",
        "Caladon",
        "Draelen",
        "Eldarion",
        "Faelon",
        "Galion",
        "Haelen",
        "Ilmarin",
        "Jorath",
        "Kaelan",
        "Lorand",
        "Myrion",
        "Neldor",
        "Orcalion",
        "Pheron",
        "Quendel",
        "Rivain",
        "Saelon",
        "Thalion",
        "Urien",
        "Valadan",
        "Worion",
        "Xerath",
        "Yoriel",
        "Zephyr",
        "Aelarion",
        "Balarion",
        "Caelarion",
        "Dorien",
        "Eldariel",
        "Faelorian",
        "Galadriel",
        "Haelion",
        "Ithilrandir",
        "Jorinthal",
        "Kaelion",
        "Lorendir",
        "Maethorion",
        "Naelion",
        "Oriandil",
        "Pherion",
        "Quendalar",
        "Rivendal",
        "Saelarion",
        "Thalorion",
        "Urion",
        "Valarion",
        "Worien",
        "Xenarion",
        "Yriel",
        "Zaerion"],


        ["Almiria", "Amaldoria", "Amiala", "Amrilina",
        "Aryë", "Beliae", "Briannen", "Brimen", "Brindina", "Calethina",
        "Calilwen", "Calith", "Delynd", "Demariyen", "Doriela",
        "Dorinia", "Elonnae", "Erdelina", "Ethalina", "Evelind", "Faelynd",
        "Fanelya", "Farelith", "Gloryenn", "Isarina", "Jadriella",
        "Kaelith", "Lyniala", "Lyvianna", "Madrierith", "Melandina",
        "Melorien", "Myrillë", "Nosaldia", "Numaliel", "Oenind",
        "Onadrien", "Ryvelith", "Selantia", "Silnae", "Sinalith", "Talmae",
        "Tarisia", "Tynella", "Vadelen", "Vaeliel", "Vaelith", "Vanerind",
        "Velaïth", "Ymalwen", "Aelwyn",
        "Briallen",
        "Celestia",
        "Daelia",
        "Eirwyn",
        "Faela",
        "Galadriel",
        "Helyanwe",
        "Illyria",
        "Jaela",
        "Kaelith",
        "Lorien",
        "Mirelle",
        "Narissa",
        "Orielle",
        "Phaedra",
        "Quelenna",
        "Ravenna",
        "Sariel",
        "Thalara",
        "Urielle",
        "Valaria",
        "Wyneth",
        "Xanthe",
        "Ysara",
        "Zephyra",
        "Aelara",
        "Briara",
        "Celestara",
        "Daelith",
        "Eiriana",
        "Faerella",
        "Galadriela",
        "Helyanara",
        "Illyriana",
        "Jaera",
        "Kaelara",
        "Loriana",
        "Mirellia",
        "Narissara",
        "Oriella",
        "Phaedriana",
        "Quelenna",
        "Ravennara",
        "Sariella",
        "Thalaria",
        "Uriella",
        "Valarana",
        "Wynessa",
        "Xanthara",
        "Ysarina",
        "Zephyrella"]],

    // Nains
        [["Baldarim", "Balnur", "Bardund", "Bhalmand",
        "Brandor", "Branidam", "Branmir", "Brogi", "Brumni",
        "Dalrig", "Dridam", "Dromni", "Duln", "Dulrig", "Durgann",
        "Dwalim", "Dwili", "Errund", "Ghim", "Girhni", "Gorim", "Grahlumir",
        "Grendor", "Grimnor", "Grimyl", "Grindur", "Hirgrun",
        "Hjoldram", "Hjolrig", "Hjuladar", "Jorthund",
        "Kazadrim", "Kelemdar", "Keredam", "Kolrim", "Korund",
        "Melgrim", "Moradur", "Muromir", "Olmund", "Orim", "Ornomir",
        "Regor", "Rignor", "Rohmir", "Thorgrim", "Thorm",
        "Thulnor", "Tirnor", "Valdrun", "Ragdolf",
        "Balïn",
        "Dwalïn",
        "Thorïn",
        "Glóin",
        "Óin",
        "Dori",
        "Nori",
        "Ori",
        "Bifur",
        "Bofur",
        "Bombur",
        "Fíli",
        "Kíli",
        "Gimli",
        "Durïn",
        "Thráin",
        "Náin",
        "Gróin",
        "Víli",
        "Frár",
        "Lóni",
        "Náli",
        "Óli",
        "Fóli",
        "Grór",
        "Thrár",
        "Borin",
        "Dáin",
        "Nári",
        "Dúrin",
        "Gandálfr",
        "Gorin",
        "Hárin",
        "Kóni",
        "Mímir",
        "Núri",
        "Snorri",
        "Thórin",
        "Thráin",
        "Vígr",
        "Yngvi",
        "Zígr"],


        ["Avonmora", "Bonni", "Boradina", "Boria",
        "Branwyn", "Brelundinn", "Bridinn", "Brietta", "Broghilda",
        "Bryna", "Cerdwyn", "Cordelia", "Cormida", "Corri", "Cymreig",
        "Dania", "Dolgura", "Dunhilda", "Durrinn", "Elanni",
        "Erinn", "Friga", "Gaïra", "Gibarta", "Gimlona", "Gordania",
        "Gormly", "Grizela", "Gweneth", "Gwyndolen", "Iorwenn",
        "Jennava", "Kalirinn", "Katalyn", "Kazadrilla", "Kirillia", "Malmiri",
        "Moïra", "Myma", "Nelda", "Nuala", "Olka", "Onora", "Rhosyn",
        "Rigna", "Sigrid", "Sigrun", "Tullia", "Valdrunia", "Vanira", "Disa",
        "Dís",
        "Frísa",
        "Lódis",
        "Snædís",
        "Hlín",
        "Fjóla",
        "Gríma",
        "Hrönn",
        "Lofn",
        "Ráðvíga",
        "Unnr",
        "Svanhildr",
        "Bergljót",
        "Dvalinn",
        "Finnr",
        "Hróðný",
        "Nanna",
        "Sif",
        "Sigrlinn",
        "Þóra",
        "Alvísa",
        "Hervör",
        "Hildr",
        "Hrund",
        "Sigrdrífa",
        "Brúnn",
        "Drifa",
        "Edda",
        "Frida",
        "Gunnhild",
        "Heidrun",
        "Klara",
        "Magnhild",
        "Runa",
        "Svava",
        "Tilda",
        "Yrsa",
        "Zóra"]],

    // Halfelins
        [["Albertin", "Albin", "Alphonse", "Andri", "Anton",
        "Arnould", "Arthuryn", "Audouin", "Auffroy", "Augé",
        "Auguste", "Balthazar", "Barthélémy", "Bellus", "Béranger",
        "Célestin", "Côme", "Crespin", "Domin", "Edman", "Emery",
        "Estienne", "Evrardus", "Florimond", "Gamelet", "Gaspard",
        "Gervesot", "Gobin", "Gracien", "Guerinet", "Guillot", "Gustave",
        "Hebertus", "Hector", "Heliot", "Hemeritus", "Horace",
        "Hubert", "Huchon", "Innocent", "Isembart", "Isidore", "Jacobus",
        "Jacotin", "Jacques", "Lambert", "Landricus", "Léon",
        "Léopold", "Ligier", "Louys", "Loyset", "Luquin", "Lyebault",
        "Octave", "Odo", "Ogier", "Poncelet", "Radulfus", "Raymondin",
        "Rogerin", "Rolin", "Romuald", "Scipion", "Senestre", "Simonet",
        "Tassin", "Thevot", "Valère", "Valérian", "Zéphirin", 
        "Scanlan",
        "Peregrin",
        "Roscoe",
        "Milo",
        "Pippin",
        "Drogo",
        "Fatty",
        "Hamfast",
        "Sancho",
        "Podo",
        "Rollo",
        "Cotman",
        "Adalgrim",
        "Bandobras",
        "Bodo",
        "Falco",
        "Gorbadoc",
        "Rufus",
        "Toby",
        "Tom",
        "Will",
        "Barliman",
        "Robin",
        "Bungo",
        "Gundahar",
        "Marmaduke",
        "Doderic",
        "Hob",
        "Longo",
        "Mungo",
        "Odo",
        "Otho",
        "Sigismond",
        "Wilcome",
        "Ferdibrand",
        "Tolman",
        "Filibert",
        "Bufar",
        "Dinodas"],
        
        ["Abéline", "Adélina", "Anastasie", "Bélinda",
        "Bérénisse", "Berthilde", "Blanche", "Blandine", "Blondine",
        "Constance", "Corantine", "Cybelle", "Dahlia", "Dulcina",
        "Emeline", "Emerise", "Ernestine", "Eugénie", "Florette",
        "Georgelle", "Gloria", "Hermine", "Irma", "Isolde", "Jéméline",
        "Joalie", "Laureline", "Leonor", "Linette", "Loïse", "Lorette",
        "Lorine", "Ludmilla", "Madeleine", "Marguerite", "Mélusine",
        "Nellie", "Perrine", "Prudence", "Rosalie", "Rose", "Rosie", "Sélène",
        "Valériane", "Violette", "Yacinthe", "Yvoline", "Zéphirine", "Rosie",
        "Pyke",
        "Primrose",
        "Ruby",
        "Esmeralda",
        "Angelica",
        "Daisy",
        "Marigold",
        "Dora",
        "Mimosa",
        "Camellia",
        "Hilda",
        "Belba",
        "Tanta",
        "Ponto",
        "Prisca",
        "Chica",
        "Linda",
        "Lalia",
        "Jessamine",
        "Daisy",
        "Adaldrida",
        "Ailis",
        "Asphodel",
        "Berylla",
        "Celandine",
        "Donnamira",
        "Eglantine",
        "Ferdibrand",
        "Lily",
        "Menegilda",
        "Peony",
        "Petunia",
        "Ponto",
        "Rosa",
        "Salvia",
        "Tanta",
        "Violet",
        "Wilimar",
        "Lobelia"
      ]]



    ]
