//ES5
const add = function(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(1)(1)); //3

//ES6
const add1 = a => b => c => a + b + c;
console.log(add1(1)(1)(1)); //3


const movies = [
  {
    "id": 1,
    "name": "Matrix"
  },
  {
    "id": 2,
    "name": "Star Wars"
  },
  {
    "id": 3,
    "name": "The wolf of Wall Street"
  }
]

function log(item) {
    return item.id;
}
const c = movies.map(log); //use callback
console.log(c);