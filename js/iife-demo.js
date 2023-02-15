const util = (() => {
    return {
        sayHi: () => console.log('hi'),
        sayBye: () => console.log('bye'),
        add: (a, b) => a + b
    }
})();

console.log(util);
util.sayHi();
util.sayBye();
console.log(util.add(1, 2));