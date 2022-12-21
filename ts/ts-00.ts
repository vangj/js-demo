console.log('hello');
console.log('~'.repeat(15));

Array(10)
    .fill(1)
    .map((e, i) => i)
    .forEach(i => console.log(`${i + 1} : hi`));