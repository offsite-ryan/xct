const dictionary = {
    'Channels': {
        en: 'Channels',
        de: 'Kanäle',
        it: 'Canali',
    },
    'Control': {
        en: 'Control',
        de: 'Kontrolle',
        it: 'Controllo',
    },
    'Setup': {
        en: 'Setup',
        de: 'Aufstellen',
        // it: 'Controllo',
    },
    'System': {
        en: 'System',
        de: 'System',
        // it: 'Controllo',
    },
    'Transfer': {
        en: 'Transfer',
        de: 'Überweisen',
        // it: 'Controllo',
    },
    'Help': {
        en: 'Help',
        de: 'Helfen',
        // it: 'Controllo',
    },
    'Teams': {
        en: 'Teams',
        de: 'Teams',
        // it: 'Controllo',
    },
}
function translate(key, language1, language2) {
    key = key.replace('\n', '')
    let v = key;
    Object.keys(dictionary).forEach((k) => {
        Object.keys(dictionary[k]).forEach((k2) => {
            if (dictionary[k][language1] === key) {
                v = dictionary[k][language2]
            }
        });
    });
    // if (dictionary[key]){
    //     if (dictionary[key][language]){
    //         v = dictionary[key][language]
    //     }
    // };
    // if (v === key) {
    //     Object.keys(dictionary).forEach((k)=>{
    //         Object.keys(dictionary[k]).forEach((k2)=>{
    //             if (dictionary[k][k2] === key) {
    //                 v = dictionary[k][language];
    //             }
    //         })  
    //     })
    // }
    return v;
}