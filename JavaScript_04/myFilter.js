//my filter: ko lặp qua arr trống
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this); //true / false
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};
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
var newCourses = courses.filter2(function (course, index, arr) {
  // console.log(index, arr, course);
  return course.coin >= 200;
});
console.log(newCourses);
