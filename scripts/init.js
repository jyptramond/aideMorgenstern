/**
 * Se lance avant toute génération pour réinitialiser certains paramètres pour éviter certains problèmes d'affichage (ou autre)
 * 
 */

function initCharacter() {

    let character = {
        name : "",
        traits: [],
        race: "",
        archetype: "",
        age: "",
        group: "",
        job: "",

        weapons: [],
        equipment: [],
        armor: "",
        money: "",

        raceID: 0,
        archetypeID: 0,
        groupID: 0,
        jobID: 0,

        pv: {
            base: 0,
            bonus: 0,
            sum: 0,
        },
        sf: {
            base: 0,
            bonus: 0,
            sum: 0,
        },
        initiative: "",
        fate: "",
        sb: "",
        instability: "",
        special: "",
        abilitiesSum: 0,
        abilities: [],

        // caractéristiques :
        stats : {
            com: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            cns: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            dis: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            end: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            for: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            hab: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            mou: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            per: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            soc: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            sur: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            tir: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            vol: {
                value: 0,
                roll: 0,
                race: 0,
                archetype: 0,
                magic: 0,
                title: 0,
            },
            mag:  {
                value: 0,
                title: 0,
            }
        },

        

        sum: { 
            race: 0,
            roll: 0,          
            rollrace: 0,     
            archetype: 0,          
            comDecrease: 0,       
            resultBeforeMagic: 0,  
            sum12: 0,               
            final: 0,
            
            

        },

        tricks: [],
        spells: [],
    }

    return character
}



function initConfig() {
    let config = {
        name: 0,
        race: 0,
        archetype: 0,
        group: 0,
        job: 0,
        mode: 0,
        role: 0
    } 

    getConfig(config);

    return config
}