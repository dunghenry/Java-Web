var numbers = [1, 2];

Array.prototype.reduce2 = function (callback) {
    var total = 0;
    for (const index in numbers) {
        if (this.hasOwnProperty(index)) {
            total = callback(total, this[index]);
        }
    }
    return total;
}

var result = numbers.reduce2(function (total, item) {
    // console.log(item)
    return total + item;
})
console.log(result);

// console.log(numbers.reduce(function (total, item){
//     return total + item;
// }, 0))
