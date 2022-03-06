/**Toán tử logic
 * 1. && - and
 * 2. || - or
 * 3. ! - not
 */

var a = 1;
var b = 2;
var c = 3;
var d = -1
if(a > 0 && b > 0 && c > 0){
    console.log("Điều kiện đúng");
}else{
    console.log("Điều kiện sai");
}

if(a > 0 || b > 0 || d > 0){
    console.log("Điều kiện đúng");
}else{
    console.log("Điều kiện sai");
}

if(!(a > 0)){
    console.log("Điều kiện đúng");
}
else{
    console.log("Điều kiện sai");
}