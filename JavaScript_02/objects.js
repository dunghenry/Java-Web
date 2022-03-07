var classKey = "class";

var myInfo = {
    name: 'TranDung',
    age: 21,
    address: 'Ninh Binh',
    [classKey]: 'KTPM02',
    printName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};

//Them key and value
myInfo.email = "trandungksnb00@gmail.com";
console.log(myInfo);

//Lấy ra value
console.log(myInfo.name);// TranDung
console.log(myInfo['email']); //Nếu key ko tồn tại thì trả về undefined

console.log(myInfo.printName()); //TranDung

var myKey = 'address';
console.log(myInfo[myKey]); //Ninh Binh

delete myInfo.email; //Xóa đi email trong obj
console.log(myInfo);

//Function --> Phương thức(method)
//Others --> Thuộc tính(property)