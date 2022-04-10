//Declaration function co hoisted
ham();
function ham() {
    console.log("Declaration function");
}

//Expression function ko co hoisted
const bien = function () {
    console.log("Expression function");
}

const x = function (thamso) {
    return this.name + " - " + thamso;
}
console.log(x());

const obj1 = { name: "Dung" };
console.log(x.call(obj1, "Tham So 1"));