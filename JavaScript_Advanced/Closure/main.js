function createCounter(){
    let counter = 0;
    function increase(){
        return ++counter;
    }
    return increase; //Đưa hàm này ra ngoài local
}

const counter1 = createCounter(); //Tạo môi trường

console.log(counter1());
console.log(counter1());

//VD

function createLogger(namespace){
    function logger(message){
        console.log(`[${namespace}] : ${message}`);
    }
    return logger;
}


const infoLogger = createLogger('Info');
infoLogger("Đăng nhập thất bại")
infoLogger("Đăngnhập thành công ")


function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key];
        },
        set(key, value){
            store[key] = value;
            save();
        },
        remove(key){
            delete store[key]; //delete key obj
            save();
        }
    }
    return storage;
}

const profileSetting = createStorage('profileSetting');
// profileSetting.set('fullName', 'Tran Van Dung');
// profileSetting.remove('fullName');
// localStorage.removeItem('profileSetting');
var a =  (localStorage.getItem('profileSetting'))


var b = JSON.parse(a)

//delete key obj
delete b.fullName;
console.log(b)

// console.log(localStorage.getItem('profileSetting'))