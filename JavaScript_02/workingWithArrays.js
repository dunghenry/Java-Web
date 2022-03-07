var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 250
    },
    {
        id: 2,
        name: "HTML/CSS",
        coin: 100
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0
    },
    {
        id: 4,
        name: "PHP",
        coin: 500
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 0
    },
    {
        id: 6,
        name: "PHP",
        coin: 100
    },
];

//forEach: callback
//Cách 1
courses.forEach((course, index) => {
    console.log(index, course);
});
console.log();

//Cách 2
courses.forEach(function(course) {
    console.log(course);
})
console.log();

//Every
var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.coin === 0; //Nếu như coin của tất cả các khóa bằng 0 thì trả về true
})
console.log();
console.log(isFree);

//Some
var isFree1 = courses.some(function(course, index) {
    console.log(index);
    return course.coin === 0; //Nếu có 1 khóa học có coin bằng 0 trả về true
})
console.log(isFree1);

//Find
var course = courses.find(function(course, index){
    console.log(index);
    return course.name === 'PHP'; //Chỉ trả về 1 phần tử thỏa mãn đầu tiên
})
console.log(course);

//Filter
var listCourses = courses.filter(function(course, index){
    return course.name === 'PHP'; //Lấy ra danh sách thỏa mãn 
})
console.log(listCourses);