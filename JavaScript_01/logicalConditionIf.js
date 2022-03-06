//Câu lệnh điều kiện và phép so sánh
var a = 1;
var b = 2;
var result = a < b && a < 0; //Chỉ trả về kết quả vế này hoặc vế kia: false
var str = 'A' && 'B' && 'C'; //Nếu giá trị vế cuối cùng khác 6 giá trị null, false, NaN, undefined, 0, '' hoặc "" thì lấy value cuối cùng nếu gặp 1 trong 6 giá trị kia thì gán nó cho kq

console.log(result);
console.log(str);

if(str){
    console.log("Điều kiện đúng");
}
else{
    console.log("Điều kiện sai");
}

var str2 = 'A' || 'B' || 'C';

console.log(str2); //Lấy ra giá trị đầu tiên khác với 6 giá trị kia mà khi convert trở thành false

