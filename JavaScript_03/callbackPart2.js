var courses = ['JavaScript', 'PHP', 'Ruby'];
var arrLength = courses.length;
Array.prototype.map2 = function(callback){
    //console.log(this) // this = courses
    var output = [];
    for (var i = 0; i < arrLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var htmls = courses.map2(function(course, index){
    console.log(index);
    return `
        <h2>${course}</h2>
    `
});
console.log(htmls.join(''));
