var elements = document.querySelectorAll('*');

var rand = randomElement();
elements[rand].style.boxShadow = "0 0 25px red";
console.log(elements[rand]);

function setShadow() {
    var rand = randomElement();
    var color = generateColor();

    elements[rand].style.boxShadow = "0 0 25px" + color;
    console.log("setShadow", elements[rand]);
}

function delShadow() {
    var rand = randomElement();

    elements[rand].style.boxShadow = "";
    console.log("delShadow", elements[rand]);
}
function randomElement() {
    return Math.floor(Math.random() * elements.length);
}
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(setShadow, 500);
setInterval(delShadow, 500);

