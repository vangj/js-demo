// https://gist.github.com/cybercase/db7dde901d7070c98c48
function product() {
    const args = Array.prototype.slice.call(arguments);
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
  
  console.log(product([1], [2, 3], ['a', 'b']));