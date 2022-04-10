function taikhoan(tiencuatoi) {
    let myMoney = tiencuatoi;
    return {
        xem: function () {
            return `Ban co ${myMoney}$ trong tai khoan`
        },
        nap: function (amount) {
            myMoney += amount;
        },
        rut: function (amount) {
            if (amount > myMoney) {
                return "So tien can rut qua lon tai khoan khong du"
            }
            myMoney -= amount;
        },
    }
}

const tk = taikhoan(10);
console.log(tk.xem())
tk.rut(5)
console.log(tk.xem())