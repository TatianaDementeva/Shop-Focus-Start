var Apps = [
    {
        name: "Розовые сейфики",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        description: "Самые мимишные сейфы в мире",
        cost: "20.15",
        src: "assets/icons/shot-2.jpg",
    },
    {
        name: "Крепкие сейфы",
        date: "10 сентября 2016",
        datetime: "2016-09-10",
        description: "Самые прочные сейфы в мире",
        cost: "25.15",
        src: "assets/icons/shot-2.jpg",
    },
    {
        name: "Сейфы для дома",
        date: "9 октября 2016",
        datetime: "2016-10-09",
        description: "Все лучшее для вашего дома",
        cost: "2.15",
        src: "assets/icons/shot-2.jpg",
    },
    {
        name: "Сейфы для хранения оружия",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        description: "Пусть ваш пистолет будет в безопасности",
        cost: "15.99",
        src: "assets/icons/shot-2.jpg",
    },
    {
        name: "Сейфики",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        description: "Хорошие сейфы по демократическим ценам",
        cost: "10.55",
        src: "assets/icons/shot-2.jpg",
    }
];


function randomIndexElement(Apps) {
    return Math.floor(Math.random() * Apps.length);
} 

function createElementTable(Apps, index) {
    var tr = document.createElement('tr');

    var tdImage = document.createElement('td');
    tdImage.className = "c-info-table__photo";

    var img = document.createElement('img');
    img.src = Apps[index].src;
    img.width = "80";
    img.height = "60";

    var tdTitle = document.createElement('td');
    tdTitle.className = "c-info-table__title";

    var a = document.createElement('a');
    a.className = "c-info-table__title_link";
    a.innerText = Apps[index].name;

    var br = document.createElement('br');

    var time = document.createElement('time');
    time.className = "c-info-table__title_date";
    time.innerText = Apps[index].date;
    time.datetime = Apps[index].datetime;

    var tdDescription = document.createElement('td');
    tdDescription.className = "c-info-table__description";
    tdDescription.innerText = Apps[index].description;

    var tdCost = document.createElement('td');
    tdCost.className = "c-info-table__cost";
    tdCost.innerText = Apps[index].cost;

    tr.appendChild(tdImage);
    tdImage.appendChild(img);
    tr.appendChild(tdTitle);
    tdTitle.appendChild(a);
    tdTitle.appendChild(br);
    tdTitle.appendChild(time);
    tr.appendChild(tdDescription);
    tr.appendChild(tdCost);

    const tableBody = document.querySelector('tbody');

    tableBody.appendChild(tr);
}

var index1 = randomIndexElement(Apps);
var index2 = randomIndexElement(Apps);
var index3 = randomIndexElement(Apps);

while( index1 == index2 ) {
    index2 = randomIndexElement(Apps);
}
while( index1 == index3 || index2 == index3 ) {
    index3 = randomIndexElement(Apps);
}
createElementTable(Apps, index1);
createElementTable(Apps, index2);
createElementTable(Apps, index3);