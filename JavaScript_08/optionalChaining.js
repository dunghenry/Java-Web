const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah2',
            cat3: {
                name: 'Dinah3'
            }
        }
    }
};

//
// if(obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3) {
//     console.log(obj.cat.cat2.cat3.name)
// }

if(obj?.cat?.name){
    console.log(obj.cat.name)
}

var obj1 = {
    getName(value){
        console.log(value);
    }
}
;
obj1.getName?.("Value");