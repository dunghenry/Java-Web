//HTML DOM:
//1, Element: ID, class, tag name 
// CSS selector, HTML collection

// var h1 = document.getElementById("h1");

//var h1 = document.getElementsByTagName('h1') //HTML Collection

//var h1 = document.getElementsByClassName('h1') //HTML Collection

// var h1 = document.querySelector('h1');
var h1 = document.querySelectorAll('h1'); //NodeList
console.log(h1);

//Dom atributes

h1[0].title = "Hello";

h1[0].setAttribute('href', 'https://www.facebook.com');

console.log(h1[0].getAttribute('href'));

console.log(h1[0].innerText);
h1[0].innerText = "New text";
console.log(h1[0].textContent);

h1[0].outerHTML = '<h2>Text content</h2>'

console.log(document.querySelector('h2').innerText);

var box = document.querySelector('.box');
console.log(box);
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
Object.assign(box.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'green'
})
console.log(box.style.backgroundColor);