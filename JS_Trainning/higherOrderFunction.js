function Parent() {
    let x = 10;
    return function Child(p) {
        x++;
        return x + p;
    }
}
console.log(Parent());
// function Child(p) {
//         x++;
//         return x + p;
//     }
console.log(Parent()(1)); //12
console.log(Parent()(1)); //12

const a = Parent(); //global
console.log(a(1)); //12
console.log(a(1)); //13