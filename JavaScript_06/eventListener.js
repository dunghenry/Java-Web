var button = document.querySelector('button');
button.onclick = function (e) {
    console.log(e.target)
}
// Hủy bỏ event
setTimeout(function () {
    button.onclick = function (e) {
        
    }
}, 3000)

// eventListener
function congViec(e){
    console.log("Cong viec");
}
button.addEventListener('click', congViec);

setTimeout(function () {
    button.removeEventListener('click', congViec);
}, 3000)