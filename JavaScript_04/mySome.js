Array.prototype.some2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index]);
            if(result){
                return true;
            }
        }
    }
    return false;
}
var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 250,
    },
    {
        id: 2,
        name: "HTML/CSS",
        coin: 100,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 4,
        name: "PHP",
        coin: 500,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 0,
    },
];

var isCheck = courses.some2(function (course) {
    return course.coin >= 300; // chỉ cần 1 đk đúng duy nhất
})
console.log(isCheck);