var date = new Date();
var day = date.getDay();
switch (day) {
    case 0:
        console.log("Hôm nay la chủ nhật");
        break;
    case 1:
        console.log("Hôm nay la thứ hai");
        break;
    case 2:
        console.log("Hôm nay la thứ ba");
        break;
    case 3:
        console.log("Hôm nay là thứ tư");
        break;
    case 4:
        console.log("Hôm nay là thứ năm");
        break;
    case 5:
        console.log("Hôm nay là thứ sáu");
        break;
    case 6:
        console.log("Hôm nay là thứ bảy");
        break;
    default:
        console.log("Không hợp lệ");
        break;
}