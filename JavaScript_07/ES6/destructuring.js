var arr = ['JavaScript', 'PHP', 'Ruby', 'SASS'];
//rest
const [a, , ...other] = arr;
console.log(a, other);

const obj = {
    name: "JavaScript",
    price: 1000,
    image: 'img-address',
    children: {
        name: "ReactJS",
        price: 2000,
    },
    description: "description values"
};

const {name: parentName, children: {name: childrenName}, description = "default description"} = obj
console.log(parentName, childrenName, description)


function logger(){
    console.log(typeof arguments) //obj
    console.log(arguments) //[Arguments] { '0': 1, '1': 2, '2': 4 }
}
logger(1, 2, 4)

function logger2(...params){
    console.log(Array.isArray(params)) //true
    console.log(params); //[ 1, 2, 3 ]
}
logger2(1, 2, 3);
