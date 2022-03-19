function createCar(obj){
    //C1
    // obj = {...obj};

    //C2
    obj = JSON.parse(JSON.stringify(obj));
    obj.name = "Mercedes";
    obj.model = "i8";
    return obj;
}

const car = {
    name: "BMW"
}

const newCar = createCar(car);
console.log(newCar);
console.log(car);


const a = {
    name: "BMW"
}

const b = {
    name: "BMW"
}
const c = a;
console.log(a === b)// false
console.log(a.name === b.name) //true

console.log(a === c);//true vì trỏ đến cùng vùng nhớ