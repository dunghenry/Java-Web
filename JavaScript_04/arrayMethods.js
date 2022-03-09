var courses = ['JavaScript', 'PHP', 'Ruby'];

courses.length = 10; // Truong hop nay nen dung forin

for (const index in courses) {
   console.log(index, courses[index]);
}

console.log(courses);
console.log(courses.length); //10

var arr = new Array(10) // = arr.length = 10, Nếu truyền vào 2 tham số thì nó nhận mảng có 2 phần tử

console.log(arr); //10 * empty
arr.push("JS", 'PHP')
console.log(arr); // 10: JS, 11: PHP

