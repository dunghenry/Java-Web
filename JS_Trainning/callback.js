//VD1
function tangQua(qua) {
    return console.log("Đã tặng", qua);
}

function oNha(callback) {
    let qua = "bút bi";
    callback(qua);
}

oNha(tangQua);

//VD2
function first(callback) {
    setTimeout(function () {
        console.log(1);
        callback();
    }, 1000);
}

function second() {
    console.log(2);
}

first(second);