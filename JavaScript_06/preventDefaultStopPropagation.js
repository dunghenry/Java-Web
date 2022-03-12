var aElements = document.links;
console.log(aElements);
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        if (!e.target.href.indexOf('https://fullstack.edu.vn/') || e.target.href.indexOf('https://github.com/dunghenry')) {
            e.preventDefault();
            console.log(e.target)
        }
    }
}

var ul = document.querySelector('ul');
console.log(ul);

ul.onmousedown = function (e){
    console.log(e.target);
    e.preventDefault();
}

//stopPropagation : ngăn chặn nổi bọt
var div = document.querySelector('div');
var button = document.querySelector('button');
button.onclick = function (e) {
    e.stopPropagation();
    console.log("Click button!");
}
div.onclick = function (e){
    console.log("Click div");
}