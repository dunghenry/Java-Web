function tinhtoan(x) {
    return function add(y) {
        console.log(x + y);
    }
}

const add10 = tinhtoan(10);
const add20 = tinhtoan(20);

add10(5); //15
add10(10); //20

add20(5); //25
add20(10); //30
