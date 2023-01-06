function product() {
    const args = [].slice.call(arguments);
    return args.reduce((acc, val) => {
        var arr = [];
        acc.forEach((arrOuter) => {
            val.forEach((el) => {
                arr.push(arrOuter.concat(el));
            });
        });
        return arr;
    }, [[]]);
}

function zip() {
    const args = [].slice.call(arguments);
    const shortest = args.length == 0 ? [] : args.reduce(function (a, b) {
        return a.length < b.length ? a : b
    });

    return shortest.map(function (_, i) {
        return args.map(function (array) { return array[i] })
    });
}

const d = new Date(2023, 1, 1, 1, 30, 15, 500);
console.log(d);

const optionFields = ['year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'];
const localeOptions = 
    product(
        ['2-digit', 'numeric'],
        ['2-digit', 'long', 'narrow', 'numeric', 'short'],
        ['2-digit', 'numeric'],
        ['2-digit', 'numeric'],
        ['2-digit', 'numeric'],
        ['2-digit', 'numeric'],
        ['long', 'short']
    )
    .map(optionValues => zip(optionFields, optionValues))
    .map(kvPairs => Object.fromEntries(kvPairs));

// console.log(localeOptions.length);

// console.log(optionFields.map(f => `"${f}"`).join(',')+`,"output"`);
// localeOptions.forEach(options => {
//     const o = Object
//         .entries(options)
//         .map(e => `${e[1]}`)
//         .map(e => `"${e}"`)
//         .join(',');
//     const s = `"${d.toLocaleDateString('en-us', options)}"`;
//     console.log(`${o},${s}`);
// });

localeOptions.forEach(options => {
    const s = `${d.toLocaleDateString('en-us', options)}`;
    console.log(s);
});