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

function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
        index: index,
        originArray: courses,
    };
}

function coursesName(course){
    return course.name;
}

var newCourses = courses.map(courseHandler);
var nameCourses = courses.map(coursesName);
console.log(newCourses);
console.log(nameCourses);
