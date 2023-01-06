const data = {'a': 1, 'b': 2};
console.log(Object.entries(data).map(e => `${e[0]}=${e[1]}`).join(' | '));