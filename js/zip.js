// https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
function zip() {
    const args = [].slice.call(arguments);
    const shortest = args.length == 0 ? [] : args.reduce(function (a, b) {
        return a.length < b.length ? a : b
    });

    return shortest.map(function (_, i) {
        return args.map(function (array) { return array[i] })
    });
}

zip([1,2],[11,22],[111,222,333]).forEach(arr => console.log(arr));

zip(['a', 'b', 'c'], [1, 2, 3]).forEach(arr => console.log(arr));