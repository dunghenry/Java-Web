//obj constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
 //Cách 2
var User2 = function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var auth = new User("Dung", "Tran", 'https://www.facebook.com/photo?fbid=493249682156048&set=a.118037429677277');
var user = new User("Ha", "Nguyen", "avatarUrl");

console.log(auth.constructor == User); //true

//Thêm property
auth.title = 'La giang vien';
user.comment = "Hay quá";

//Add prototype
User.prototype.className = "KTPM02";
User.prototype.getClassName = function(){
    return this.className;
}

console.log(auth);
console.log(auth.getName());
console.log(auth.getClassName());

console.log(user);
console.log(user.getName());
console.log(auth.getClassName());
