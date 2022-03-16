var arr = [1, 2, 3];
Array.prototype.find2 = function(callback){
    var output;
    for(var i = 0; i < this.length; i++){
        if(callback(this[i])){
            output = this[i];
            break;
        }
    }
    return output;
}

result = arr.find2(function(item){
    return item > 1;
})
console.log(result)