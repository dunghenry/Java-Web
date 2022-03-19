"use strict";
// const iPhone7 = {
//     //Thuoc tinh property
//     name: 'iPhone7',
//     color: 'pink',
//     weight: 300,
//     //Phuong thuc method
//     takePhoto(){
//         console.log(this);
//     },
//     objChild: {
//         name: 'Obj child',
//         methodChild(){
//             console.log(this);
//         }
//     }
// }

// iPhone7.takePhoto();

// iPhone7.objChild.methodChild();


function Car(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    this.run = function running(){
        console.log("This: " + JSON.stringify(mercedesS450));
    }
}

Car.prototype.run1 = function(){
    console.log(JSON.stringify(this))
}
Car.prototype.run2 = function(){
    console.log(this) //Car
    function test(){
        console.log(this); //window, nếu use strict thì trả về undefined
    }
    test();

    //Nếu là arrow function thì nó lấy this bên ngoài bởi arrow function ko có this
}
const mercedesS450 = new Car('Mercedes S450', 'black', 10000);
// mercedesS450.run(); //{"name":"Mercedes S450","color":"black","price":10000}
//mercedesS450.run1(); //{"name":"Mercedes S450","color":"black","price":10000}
mercedesS450.run2();