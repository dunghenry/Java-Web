var dethAray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var newArr = dethAray.reduce(function(arr, item){
    return arr.concat(item);
}, [])
console.log(newArr);