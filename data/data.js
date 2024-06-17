class data {
    values = null;
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
        // console.table(json.slice(offset, count));
        this.values = json;
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