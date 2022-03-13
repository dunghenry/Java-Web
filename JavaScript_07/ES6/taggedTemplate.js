function highlight([first, ...strings], ...values){
    console.log(first, strings, values);
    return  values.reduce((acc, curr) =>[...acc, `<span>${curr}</span>`, strings.shift()], [first]).join('');    
}
var brand = 'F8';
var course = 'JavaScript';

const html = highlight`Học lập trình ${course} tại ${brand} !`;
console.log(html);