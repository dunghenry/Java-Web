document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.btn');
    var copy = document.querySelector('.content');
    var h1 = document.querySelectorAll('h1');
    var input = document.querySelector('.input');
    var checkbox = document.querySelector('input[type="checkbox"]');
    var select = document.querySelector('select');
    btn.onclick = function (e) {
        console.log(e.target);
    }

    copy.oncopy = function (e) {
        console.log(e.target.innerText);
    }

    for (var i = 0; i < h1.length; i++) {
        h1[i].onclick = function (e) {
            console.log(this);
            console.log(e.target)
        }
    }
    // console.log(i) for xong roi i = 2 ma h1 chi co 2 phan tu 0, 1 nen undefined

    input.oninput = function (e) {
        console.log(typeof parseInt(e.target.value)); //convert int
    }
    
    checkbox.onchange = function (e) {
        console.log(e.target.checked); //true, false
    }

    select.onchange = function (e) {
        console.log(e.target.value)
    }

    input.onkeyup = function (e) {
        console.log(e.which)
        switch(e.which) {
            case 27 :
                console.log("Exit");
                break;
            default:
                console.log("Không hợp lệ")
        }
    }

    document.onkeydown = function(e) {
        console.log(e.which);
        switch(e.which) {
            case 27:
                console.log("Exit");
                break;
            case 13:
                console.log("Send message");
                break;
            default:
                console.log("Không hợp lệ");
        
        }
    }
}, false)