function createApp() {
    const cars = [];
    return{
        add(car){
            cars.push(car);
        },
        show(){
            return cars;
        }
    }
}

const app = createApp();
app.add("BMV");
console.log(app.show());