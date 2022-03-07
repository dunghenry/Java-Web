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
//for
var totalCoin = 0;
for (const course of courses) {
    totalCoin += course.coin;
}
console.log(totalCoin);

//reduce
function coinHandler(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}

var reduceTotalCoin = courses.reduce(coinHandler, 0);
console.log(reduceTotalCoin);

//ES6
var total = courses.reduce((a, b) => a + b.coin, 0);
console.log(total);
