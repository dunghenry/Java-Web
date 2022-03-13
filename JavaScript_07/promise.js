//sync: đồng bộ - Cái gì viết trước chạy trước
console.log(1);
console.log(2);
//1, 2

//async: bất đồng bộ
setTimeout(function () {
    console.log(1);
}, 2000);
console.log(2);
//2, 1

//callback hell
console.log("callback hell");


setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
                setTimeout(function () {
                    console.log(5);
                    setTimeout(function () {
                        console.log(6);
                        setTimeout(function () {
                            console.log(7);
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);


//promise: có từ phiên bản ES6
//function đc gọi trước khi đc nhận đc đối tượng promise: Executor
//1, pending
//2, fulfilled

var promise = new Promise(function (resolve, reject) {
    //Logic
    //thành công: resolve()
    //Thất bại: reject()

    // resolve([
    //     {
    //         id: 1,
    //         name: 'JavaScript'
    //     }
    // ]);
    reject("Error");

})

promise
    .then(function(course){
        // resolve()
        console.log("Successfully!");
        console.log(course);
    })
    .catch(function(err){
        // reject()
        console.log("Failed!");
        console.log(err);
    })
    .finally(function() {
        // resolve() ||  reject()
        console.log("Done!")
    })