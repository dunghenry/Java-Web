var promise = new Promise(function(resolve, reject) {
    resolve(1);
})

promise
    .then(function(value) {
        console.log(value);
        return new Promise(function(resolve){
            setTimeout(function () {
                resolve(++value);
            }, 3000)
        })
    })
    .then(function(value) {
        console.log(value)
        return new Promise(function(resolve){
            setTimeout(function () {
                resolve(++value);
            }, 3000)
        })
    })
    .then(function(value) {
        console.log(value)
    })
    .catch(function() {
        console.log('Failed!')
    })
    .finally(function() {
        console.log('Done!');
    })

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000)
    })
    .then(function(){
        console.log(2);
        return sleep(1000)
    })
    .then(function(){
        console.log(3);
        return new Promise(function(resolve, reject){
            reject("Có lỗi")
        })
    })
    .then(function(){
        console.log(4);
        return sleep(1000)
    })
    .catch(function(err){
        console.log(err)
    })
    .finally(function(){
        console.log('Done!');
    })