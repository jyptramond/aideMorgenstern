/**
 * Se lance avant toute génération pour réinitialiser certains paramètres pour éviter certains problèmes d'affichage (ou autre)
 * 
 */

function initCharacter() {

    let character = {
        name : "",
        traits: [],
        origin: "",
        archetype: "",
        age: "",
        group: "",
        job: "",

        weapons: [],
        equipment: [],
        armor: "",
        money: "",

        originID: 0,
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
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            cns: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            dis: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            end: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            for: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            hab: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            mou: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            per: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            soc: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            sur: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            tir: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            vol: {
                value: 0,
                roll: 0,
                origin: 0,
                archetype: 0,
                magic: 0,
                title: 0,
                whatTitle: "",
            },
            mag:  {
                value: 0,
                title: 0,
                whatTitle: "",
            }
        },

        

        sum: { 
            origin: 0,
            roll: 0,          
            rollorigin: 0,     
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
        name: -2,
        archetype: -1,
        origin: -2,
        group: -2,
        job: -1,
        mode: 0,
        role: 0
    } 

    getConfig(config);

    return config
}