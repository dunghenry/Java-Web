/**
 * Vòng lặp loop
 * for - lặp với điều kiện đúng
 * for/in - lặp qua key của đối tượng
 * for/of - lặp qua value của đối tượng
 */

for(var i = 0; i <= 10; i++){
    console.log(i);
}
console.log();

var y = 1;
for(; y <= 10; ){
    console.log(y);
    y++;
}

console.log();

var myLanguages = ["JS", "C++", "PHP", "Ruby", "Python"];
var length = myLanguages.length;
for(var i = 0; i < length; i++){
    console.log(myLanguages[i]);
}

const myInfo = {
    name: "Tran Van Dung",
    age: 21,
    address: "Ninh Bình",
}

for (const key in myInfo) {
    console.log(key)// name, age, address
    console.log(myInfo[key]); //Tran Van Dung 21 Ninh Bình
}


var languages = ["JS", "C++", "PHP"];

for (const key in languages) {
   console.log(key); //0, 1, 2
   console.log(languages[key]); // JS  C++  PHP
}

var myString = "JavaScript";
for (const key in myString) {
    console.log(key); // 1, 2, 3, 4, 5, 6, 7, 8, 9
    console.log(myString[key]); //J a v a S c r i p t
}

var languages1 = ["JS", "C++", "PHP"];

for (const value of languages1) {
    console.log(value); //JS C++ PHP 
}

// const myInfo = {
//     name: "Tran Van Dung",
//     age: 21,
//     address: "Ninh Bình",
// }
//Object.keys(myInfo) --> [ 'name', 'age', 'address' ]
//Object.values(myInfo) --> [ 'Tran Van Dung', 21, 'Ninh Bình' ]

for (const key of Object.keys(myInfo)) {
    console.log(myInfo[key]);
}
//
for (const value of Object.values(myInfo)) {
    console.log(value);
}