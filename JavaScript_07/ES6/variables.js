//var / let, const - hoisting
//const / var, let - assignment
//1, scope
//! var
var x = 10;
{
    console.log(x); //10
}
console.log(x) //10

{
    x = 11;
    console.log(x); //11

}
console.log(x); //11

{
    var y = 1;
}
console.log(y); // 1

//! let
{
    let z = 1;
    console.log(z); //1
}
// console.log(z) //err

const l = 1 //success

// const m; //error
// m = 1; 

{
    const n = 1;
    console.log(n);//1
}
// console.log(n) // error