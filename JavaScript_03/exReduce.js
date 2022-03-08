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
];
var i = 0;
var totalCoin = courses.reduce(function (total, course) {
    i++;
    console.log(i, total, course);
    return total + course.coin;
}, 0); 
console.log(totalCoin);
//Nếu ko có initial value thì accumulator = obj đầu tiên, currentValue = obj thứ hai, giảm vòng lặp đi 1
//Do là tinh coin lại ở trong obj nên bắt buộc phải có initialValue

//Ví dụ không cần initialValue
const  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var totalNumbers = numbers.reduce(function (total, number){
    return total + number;
})
console.log(totalNumbers); 

//Làm phẳng mảng 
var dethAray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArr = dethAray.reduce(function (output, item){
    return output.concat(item);
}, [])
console.log(flatArr);

var topics = [
    {
        topic: "Front-end",
        courses:[
            {
                id: 1,
                title: "HTML/CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses:[
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];

//Tạo mảng obj các khóa học
var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, [])

console.log(newCourses);

var htmls = newCourses.map(function (course){
    return `
        <div>
        <h1>${course.title}</h1>
        <p>ID : ${course.id}</p>
        </div>
    `
})

console.log(htmls.toString());