var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'e', 'f'];

//Cách 1: Biến đổi Set đến một mảng ta sử dụng arr.from

console.log([...(new Set(arr))]); //Bỏ giá trị trùng lặp

//Cách 2
var newArr = arr.sort();
var result = [];
for (var i = 0; i < newArr.length; i++){
    if(newArr[i] === newArr[i+1]){
        result.push(newArr[i]);
    }
}
console.log(result);

function deQuy(number){
    if(number > 0){
        console.log(number);
        return deQuy(number - 1);
    }
    return number;
}

deQuy(100);

function countDown(num){
    if(num > 0){
        console.log("Num : " + num);
        return countDown(num - 1);
    }
    return num;
}
countDown(10);

var courses = ['JavaScript', 'PHP', 'Ruby'];
function loop(start, end, cb) {
    if(start < end){
        console.log("Start : " + start);
        cb(start);
        return loop(start + 1, end, cb);
    }

}

loop(0, courses.length, function (index){
    console.log("Index : " + index);
});

function giaiThua(number){
    if(number > 0){
        return giaiThua(number) *giaiThua(number - 1);
    }

}


for (var i = 1; i <= 10; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index);
        }, i * 1000);
    })(i);
}

// giaiThua()

function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number - 1);
    }
    return 1;
}
console.log(giaiThua(3));