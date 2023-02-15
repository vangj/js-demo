const util = (() => {
    const sayHi = () => console.log('hi');
    const sayBye = () => console.log('bye')
    const add = (a, b) => a + b;
    const addMultiply = (a, b) => add(a, b) + (a * b)
    
    return {
        sayHi,
        sayBye,
        add,
        addMultiply
    }
})();

console.log(util);
util.sayHi();
util.sayBye();
console.log(util.add(1, 2));
console.log(util.addMultiply(1, 2));