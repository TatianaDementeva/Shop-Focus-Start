var apps = [
    {
        name: "Стандартный пакет",
        date: "8 апреля 2012",
        datetime: "2012-04-08",
        src: "assets/head/shot-1.jpg"
    },
    {
        name: "Новый ЦФТ-Банк",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        src: "assets/head/shot-2.jpg"
    },
    {
        name: "Каталог разработок",
        date: "3 марта 2015",
        datetime: "2015-03-03",
        src: "assets/head/shot-3.jpg"
    },
    {
        name: "Веселый пакет",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        src: "assets/head/shot-2.jpg"
    },
    {
        name: "Нестандартный пакет",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        src: "assets/head/shot-3.jpg"
    },
    {
        name: "Нестандартный пакет",
        date: "9 сентября 2016",
        datetime: "2016-09-09",
        src: "assets/head/shot-2.jpg"
    },
    {
        name: "Нестандартный пакет",
        date: "9 сентября 2016",
        datetime: "2010-09-09",
        src: "assets/head/shot-1.jpg"
    }
]

function createAppElement(app, index) {
    var div = document.createElement('div');
    div.className = "o-packet";
    div.dataset.productNumber = index;

    var img = document.createElement('img');
    img.src = app.src;
    img.width = "328.9";
    img.height = "196.6";

    var divTitle = document.createElement('div');
    divTitle.className = "c-packet__title";

    var a = document.createElement('a');
    a.className = "c-packet__title_link";
    a.innerText = app.name;

    var br = document.createElement('br');

    var time = document.createElement('time');
    time.className = "c-packet__title_date";
    time.innerText = app.date;
    time.datetime = app.datetime;

    div.appendChild(img);
    div.appendChild(divTitle);
    divTitle.appendChild(a);
    divTitle.appendChild(br);
    divTitle.appendChild(time);

    return div;

}
function addAppInList(app) {
    let parent = document.querySelector('div.o-list-packet');
    parent.appendChild(app);
}
function rightSwipe(apps) {
    let parent = document.querySelector('div.o-list-packet');
    let packets = document.querySelectorAll('div.o-packet');

    let number = packets[0].dataset.productNumber;

    let index = (3 + Number(number)) % 7;

    let newElem = createAppElement(apps[index], index);

    parent.removeChild(packets[0]);
    parent.appendChild(newElem);
    
    let dots = document.querySelectorAll('div.c-carusel__dot');
    let i = 0;

    while( !dots[i].classList.contains('c-carusel__dot_active')){
        i += 1;
    }

    dots[i].classList.remove('c-carusel__dot_active');
    dots[ (i+1) % 7].classList.add('c-carusel__dot_active');

}
function leftSwipe(apps) {
    let parent = document.querySelector('div.o-list-packet');
    let packets = document.querySelectorAll('div.o-packet');

    let number = packets[0].dataset.productNumber;

    let index = (6 + Number(number)) % 7;

    let newElem = createAppElement(apps[index], index);

    parent.removeChild(packets[2]);
    parent.insertBefore(newElem, packets[0]);

    let dots = document.querySelectorAll('div.c-carusel__dot');
    let i = 0;

    while( !dots[i].classList.contains('c-carusel__dot_active')){
        i += 1;
    }

    dots[i].classList.remove('c-carusel__dot_active');
    dots[ (i-1 + 7) % 7].classList.add('c-carusel__dot_active');
}
function indexSwipe(apps, index) {
    let parent = document.querySelector('div.o-list-packet');
    let packets = document.querySelectorAll('div.o-packet');

    if ( index == packets[0].dataset.productNumber){
        leftSwipe(apps);
        return;
    }
    if ( index == packets[1].dataset.productNumber)
        return;
    if ( index == packets[2].dataset.productNumber){
        rightSwipe(apps);
        return;
    }
    else {
        let newElem = createAppElement(apps[ (index-1 + 7) % 7 ], index-1);
        parent.replaceChild(newElem, packets[0]);

        newElem = createAppElement(apps[ (index + 7) % 7 ], index);
        parent.replaceChild(newElem, packets[1]);

        newElem = createAppElement(apps[ (index+1 + 7) % 7 ], index+1);
        parent.replaceChild(newElem, packets[2]);
    }
    
}
function changeActivityDots(event, parent, apps) {

    if (!event.target.classList.contains('c-carusel__dot')) 
        return; 

    event.preventDefault();
    let dots = parent.querySelectorAll('div.c-carusel__dot');                                 
    for (let dot of dots) 
        dot.classList.remove('c-carusel__dot_active'); 

    event.target.classList.add('c-carusel__dot_active');

    let i = 0;
    let index = 0;
    while( !dots[i].classList.contains('c-carusel__dot_active')){
        index += 1;
        i += 1;
    }

    indexSwipe(apps, (index+5) % 7);
}
var app1 = createAppElement(apps[0], 0);
var app2 = createAppElement(apps[1], 1);
var app3 = createAppElement(apps[2], 2);

addAppInList(app1);
addAppInList(app2);
addAppInList(app3);

var arrowRight = document.querySelector('svg.o-arrow-right');
var arrowLeft = document.querySelector('svg.o-arrow-left');

arrowRight.addEventListener( 'click', function() { rightSwipe(apps) } );
arrowLeft.addEventListener( 'click', function() { leftSwipe(apps) } );

var dots = document.querySelector('div.o-carusel');

/*dots.addEventListener('click', changeActivityDots());*/
dots.addEventListener('click', function(e) {
    //e.preventDefault();
    changeActivityDots(e, this, apps);/*
    if (!e.target.classList.contains('c-carusel__dot')){
        console.log(-1);return;
    }         // если клик не по ссылке, просто завершим выполнение 
     // return; 
    e.preventDefault();                                // отменим стандартную реакцию ссылки на клик
    for (let link of this.querySelectorAll('div.c-carusel__dot'))  // удалим класс active у всех наших ссылок... 
      link.classList.remove('c-carusel__dot_active'); 
    e.target.classList.add('c-carusel__dot_active');                  // ...и добавим его той, по которой выполнен клик
*/}); 