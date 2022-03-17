const arr = [null, undefined, false, 0, 1];

var result = arr.filter(item => item && item !== true)
console.log(result) //[1]
//Những giá trị convert thành false là: false, undefined, 0, null, ''/"", NaN,

if(!undefined){
    console.log(!undefined) // true
}
else{
    console.log("Error")
}

var result = 'A' && null && 'C'; //Có giá trị mà convert = false thì result = false, nếu ko có lấy gt cuối cùng
console.log(result) //null

var result1 = null || undefined || 0;// nếu như tất cả các giá trị convert về boolean = false thì result1 = false, nếu như có 1 giá trị convert về boolean != false thì result1 = true
console.log(result1) //null

var map = new Map();
map.set('a', 1);
console.log(map);