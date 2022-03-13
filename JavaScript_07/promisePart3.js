//1.Promise.resolve
//2.Promise.reject
//3.Promise.all

var promise = new Promise(function(resolve, reject){
    // resolve("Successfully");
    reject("Failed");
})
promise
    .then(function(result){
        console.log("Result : " + result);
    })
    .catch(function(err){
        console.log("Error : " + err);
    })

//1
var promise1 = Promise.resolve("Successfully");
promise1
    .then(function(result){
        console.log("Result : " + result);
        return result;
    })
    .then(function(result){
        console.log("Result : " + result);
        return Promise.reject("Có lỗi");
        //Chỉ có lỗi nếu như ta return về một promise.reject
    })
    .catch(function(err){
        console.log("Error : " + err);
    })

//2
var promise2 = Promise.reject("Failed");
promise2
    .then(function(result){
        //Không đc thực hiện

    })
    .catch(function(err){
        console.log("Error : " + err);
    })


//3 promise.all

var promise3 = new Promise(function(resolve){
    setTimeout(function () {
        resolve([1]);
    }, 2000)
})

var promise4 = new Promise(function(resolve){
    setTimeout(function () {
        resolve([2, 3]);
    }, 5000)
})

Promise.all([promise3, promise4])
    //Cách 1
    // .then(function (result) {
    //     var result1 = result[0];
    //     var result2 = result[1];
    //     var result = result1.concat(result2);
    //     console.log(result);
    // })
    //Cách 2
    .then(function ([result1, result2]){
        console.log(result1.concat(result2));
    })