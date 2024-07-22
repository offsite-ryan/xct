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
    }

    getData(field, offset, count) {
        let result = this.values.filter((v, i) => i >= offset && i < (count * 25));
        result = result.map((v) => v[field]);
        result = result.filter((v, i) => i % 25 === 0);
        result = result.map((v) => +(v.toFixed(3)))
        return result.slice(Math.floor(offset), count);
    }

    getHistory(offset = 0) {
        let history = [];
        // for (let x = 0; x < 120; x++) {
        //     history.push({ className: 'empty', hours: 1 });
        // }
        // let last = 'charge';
        // history.forEach((v, i)=>{

        // })
        // for (let x = 0; x < history.length; x++) {
        //     const name = x % 2 === 0 ? 'Charge' : 'Discharge';
        //     const className = x % 2 === 0 ? 'charge' : 'discharge';
        //     history.push({ name, className, hours: 5 });
        // // }

        // for (let x = 0; x < 120; x++) {
        //     const name = x % 2 === 0 ? 'Charge' : 'Discharge';
        //     const className = x % 2 === 0 ? 'charge' : 'discharge';
        //     history.push({ name, className, hours: 5 });
        // }
        // const emptyAt = Math.round(Math.random() * 100);
        // for (let x = emptyAt; x < emptyAt + 18; x++) {
        //     history[x].className = '';
        // }
        // history = history.slice(offset, offset + 24);
        // return history;

        for (let x = 0; x < 1200; x++) {
            const className = '';
            history.push({ className, hours: 1 });
        }
        let index = 0;
        const fill = (duration, className) => {
            index = Math.round(Math.random() * 100);
            for (let x = index; x < index + duration; x++) {
                history[x].className = className;
            }
        }
        for (let x = 0; x < 10; x++) {
            fill(72, 'on-test');
        }
        for (let x = 0; x < 5; x++) {
            fill(5, 'paused');
        }
        for (let x = 0; x < 1; x++) {
            fill(1, 'error');
        }
        fill(48, 'empty');
        // index = Math.round(Math.random() * 100);
        // for (let x = index; x < index + 48; x++) {
        //     history[x].className = 'on-test';
        // }
        // history = history.slice(offset, offset + 120);

        if (show_charge_discharge) {
            let state = 'charge';
            history.forEach((v, i) => {
                if (i % 5 === 0) {
                    state = state === 'charge' ? 'discharge' : 'charge';
                }
                if (v.className === 'on-test') {
                    v.className = state;
                }
            })
        }
        history = history.slice(offset, offset + 120);
        history.reverse();
        return history;
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