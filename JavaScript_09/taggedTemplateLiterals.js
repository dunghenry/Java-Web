function highlight([first, ...strings], ...values){
    // return values.reduce(function(acc, curr){
    //     return [...acc, `<span>${curr}</span>`, strings.shift()]
    // }, [first]).join('');

    return values.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]).join('');
}
var course = "JavaScript";
var brand = "F8";
const result = highlight`Học lập trình ${course} tại ${brand} !`
console.log(result);