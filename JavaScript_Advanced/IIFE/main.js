//!Note: Nên dùng ; trước IIFE
//!IIFE là hàm private
//function expression
const logger = function(){
    console.log("Message...");
}
logger();

//IIFE
(function(){
    let fullName = "TranDung";
    console.log(fullName); //success
    console.log("Run IIFE")
})();

// console.log(fullName) //error

// Arrow function IIFE
(()=>{
    console.log("Run arrow function");
})()

// async IIFE
;(async() =>{

})()

//Đệ quy
let i = 0;
;(function myFunction(){
    i++;
    console.log(i)
    if(i < 10)
        myFunction();

})()

// myFunction(); //error

//error
// function(){
//     console.log("Test");
// }()

//Có thể dùng toán tử để cho IIFE chạy
+function(){
    console.log("Test");
}()

//Ví dụ

const app = {
    cars: [],
    add(car){
        this.cars.push(car);
    },
    edit(index, car){
        this.cars[index] = car;
    },
    delete(index){
        this.cars.splice(index, 1);
    }
}
app.add('BMW');
app.add('Mazda');
console.log(app.cars);
app.edit(0, 'Honda');
console.log(app.cars);
app.delete(1)
console.log(app.cars);

//IIFE

const appCars = (function(){
    const cars = ['BMV']
    return{
        get(index){
            return  cars[index];
        },
        add(car){
            cars.push(car);
        },
        edit(index, car){
            cars[index] = car;
        },
        delete(index){
            cars.splice(index, 1);
        }
    }
})()

appCars.add('Honda');
console.log(appCars.get(0));//Honda