//Xay dung forEach2
var courses = ['JavaScript', 'PHP', 'Ruby']; //Không lặp qua arr trống
var length = courses.length;
Array.prototype.forEach2 = function(callback){
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            callback(index, this[index]);
        }
    }
}
courses.forEach2(function(index, course){
    console.log(index, course)
});

//forEach có sẵn : Không cần return;
// courses.forEach(function(course, index){
//     console.log(course, index)
// })