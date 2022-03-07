// while - lặp khi điều kiện đúng
// do/while - lặp ít nhất 1 lần, sau đó lặp khi đk đúng

var i = 0;
while (i <= 10){
    console.log(i);
    i++;
}
console.log();

var y = 10;
do {
    y++;
    console.log(y);
} while (y < 0);

var x = 0;
var isSuccess = false;
do {
    x++;
    console.log("Nạp thẻ lần: " + x);
    //Thành công
    if(true){
        isSuccess = true;
    }
    //nếu isSuccess = true thì !isSuccess = false đk sai ko chạy while nên while chỉ chạy 1 lần
    //nếu isSuccess = false thì !isSuccess = true đk đúng nên chạy hết các vòng lặp while
} while (!isSuccess && x <= 3);

//break and continue

for (var i = 0; i < 10; i++){
    if(i >= 5){
        break; //Nếu i lớn hơn hoặc bằng 5 thi dừng lại
    }
    console.log(i); //0, 1, 2, 3, 4
}

for(var i = 0; i < 10; i++){
    if(i % 2 == 0){
        continue; //Bỏ qua số chẵn
    }
    console.log(i); //1 , 3, 5, 7, 9
}