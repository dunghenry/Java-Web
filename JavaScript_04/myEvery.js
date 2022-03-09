Array.prototype.every2 = function (callback) {
    var ischeck = true;
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index]);
            // console.log(result, index);
            if(result === false) {
                ischeck = false;
                break;
            }
        }
    }
    return ischeck;
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
        coin: 10,
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
var isCheck = courses.every2(function(course){
    return course.coin !== 0;
})
console.log(isCheck);