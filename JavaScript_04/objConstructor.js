function User(firstName){
    this.firstName = firstName;
    this.getName = function(){
        return this.firstName; // Không cần this cx đc
    }
}

User.prototype.className = "KTPM02";

User.prototype.getClassName = function(){
   return this.className;
}
//Chỉ lấy đc qua từ khóa this

var user = new User("Dung");
user.lastName = "Tran"
console.log(user);
console.log(user.className);
console.log(user.getClassName());
console.log(user.getName());