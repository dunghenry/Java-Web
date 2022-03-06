var languages = ["JS", "C++", "PHP"];

console.log(languages.toString()); //JS,C++,PHP
console.log(languages.join(", ")); //JS, C++, PHP

console.log(languages.pop()); //Xóa phần tử cuối mảng và trả về phần tử bị xóa
console.log(languages.push("C"));//Trả về số lượng phần tử mới của mảng, có thể thêm nhiều phần tử


console.log(languages.shift()); //Xóa phần tử đầu mảng và trả về phần tử bị xóa
console.log(languages.unshift("Java"));//Trả về số lượng phần tử mới của mảng, có thể thêm nhiều phần tử

//splice
languages.splice(1, 2);//xóa từ đâu đến phần tử thứ mấy: ['Java']
languages.splice(1, 0, "Dart"); //[ 'Java', 'Dart' ]
console.log(languages);

var languages2 = ["C++", "C"];
//Nối mảng
console.log(languages.concat(languages2)); //[ 'Java', 'Dart', 'C++', 'C' ]

var languages3 = ["JS", "C++", "PHP"];

console.log(languages3.slice(1, 2)); //['C++']
console.log(languages3.slice()); //Dùng copy mảng