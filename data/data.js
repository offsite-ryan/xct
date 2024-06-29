class data {
    values = null;
    monikers = [];
    constructor() {
        const text = csv16h;
        const split = text.split('\n');
        const rows = [];
        split.forEach((v) => {
            rows.push(v.split(','));
        })
        const json = [];
        rows.forEach((v, i) => {
            if (i > 0) {
                json.push({
                    i: +(v[5]),
                    v: +(v[6]),
                    c: +(v[7]),
                    t: +(v[8]),
                })
            }
        })
        this.values = json;

        // /** MONIKERS */
        for (let x = 1; x <= 100; x++) {
            this.monikers.push({
                name: `CH${x.toString().padStart(2, '0')}`,
                uut: `${(Math.random() * 10000).toFixed().padStart(4, '0')}-${(Math.random() * 100).toFixed().padStart(2, '0')}`,
                battery_file: ``,
                test_procedure: ``,
                state: ``,
                data_v: null,
                data_i: null,
                data_c: null,
                data_t: null,
                step_time: null,
                run_time: null,
                v: null,
                i: null,
                c: null,
                t: null,
                group: null,
                history: [],
            })
        }

        // const getRandomInt = (max) => {
        //     return Math.floor(Math.random() * max);
        // }
        // const getRandomHours = (max) => {
        //     return Math.abs(Math.floor(Math.random() * max));
        // }
        // const states = [
        //     { name: 'Charge', max: 10 },
        //     { name: 'Discharge', max: 10 },
        //     { name: 'Paused', max: 24 },
        //     { name: 'Error', max: 10 },
        //     { name: 'Empty', max: 36 },
        // ]
        // this.monikers.forEach((m) => {
        //     const numHours = 24 * 5;
        //     let hours = 0;
        //     while (hours <= numHours) {
        //         const state = states[getRandomInt(5)];
        //         const h = getRandomHours(state.max);
        //         hours += h;
        //         if (hours > numHours) {
        //             m.history[m.history.length - 1].hours += (hours - numHours);
        //         }
        //         m.history.push({name: state.name, hours: h});
        //     }
        // });
        // console.log('done');
    }

    getData(field, offset, count) {
        let result = this.values.filter((v, i) => i >= offset && i < (count * 25));
        result = result.map((v) => v[field]);
        result = result.filter((v, i) => i % 25 === 0);
        result = result.map((v) => +(v.toFixed(3)))
        return result.slice(Math.floor(offset), count);
    }
}
// function getData(name, field = 'v', offset = 0, count = 1000) {
//     if (name === 'csv16h') {
//         const text = csv16h;
//         const split = text.split('\n');
//         const rows = [];
//         split.forEach((v) => {
//             rows.push(v.split(','));
//         })
//         const json = [];
//         rows.forEach((v, i) => {
//             if (i > 0) {
//                 json.push({
//                     i: +(v[5]),
//                     v: +(v[6]),
//                     c: +(v[7]),
//                     t: +(v[8]),
//                 })
//             }
//         })
//         // console.table(json.slice(offset, count));

//         let result = json.map((v)=>v[field]);
//         result = result.filter((v, i) => i % 1000 === 0)
//         // console.table(result.slice(offset, count));
//         return result.slice(offset, count);
//     }
// }