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
    div.className = "o-carousel-list__item";
    div.dataset.productNumber = index;

    var img = document.createElement('img');
    img.src = app.src;
    img.width = "328.9";
    img.height = "196.6";

    var divTitle = document.createElement('div');
    divTitle.className = "c-item-description";

    var a = document.createElement('a');
    a.className = "c-item-description__name";
    a.innerText = app.name;

    var br = document.createElement('br');

    var time = document.createElement('time');
    time.className = "c-item-description__date";
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
    let parent = document.querySelector('div.o-carousel-list');
    parent.appendChild(app);
}
function rightSwipe(apps) {
    let parent = document.querySelector('div.o-carousel-list');
    let packets = document.querySelectorAll('div.o-carousel-list__item');

    let number = packets[0].dataset.productNumber;

    let index = (3 + Number(number)) % 7;

    let newElem = createAppElement(apps[index], index);

    parent.removeChild(packets[0]);
    parent.appendChild(newElem);
    
    let dots = document.querySelectorAll('div.o-carousel-dots__dot');
    let i = 0;

    while( !dots[i].classList.contains('o-carousel-dots__dot_active')){
        i += 1;
    }

    dots[i].classList.remove('o-carousel-dots__dot_active');
    dots[ (i+1) % 7].classList.add('o-carousel-dots__dot_active');

}
function leftSwipe(apps) {
    let parent = document.querySelector('div.o-carousel-list');
    let packets = document.querySelectorAll('div.o-carousel-list__item');

    let number = packets[0].dataset.productNumber;

    let index = (6 + Number(number)) % 7;

    let newElem = createAppElement(apps[index], index);

    parent.removeChild(packets[2]);
    parent.insertBefore(newElem, packets[0]);

    let dots = document.querySelectorAll('div.o-carousel-dots__dot');
    let i = 0;

    while( !dots[i].classList.contains('o-carousel-dots__dot_active')){
        i += 1;
    }

    dots[i].classList.remove('o-carousel-dots__dot_active');
    dots[ (i-1 + 7) % 7].classList.add('o-carousel-dots__dot_active');
}
function indexSwipe(apps, index) {
    let parent = document.querySelector('div.o-carousel-list');
    let packets = document.querySelectorAll('div.o-carousel-list__item');

    if ( index == packets[1].dataset.productNumber)
        return;

    let newElem = createAppElement(apps[ (index-1 + 7) % 7 ], index-1);
    parent.replaceChild(newElem, packets[0]);

    newElem = createAppElement(apps[ (index + 7) % 7 ], index);
    parent.replaceChild(newElem, packets[1]);

    newElem = createAppElement(apps[ (index+1 + 7) % 7 ], index+1);
    parent.replaceChild(newElem, packets[2]);   
}
function changeActivityDots(event, parent, apps) {

    if (!event.target.classList.contains('o-carousel-dots__dot') && !event.target.classList.contains('svg.o-carousel-arrow') ) 
        return; 

    if ( event.target.classList.contains('svg.o-carousel-arrow_left') ){
        leftSwipe(apps);
    }

    if ( event.target.classList.contains('svg.o-carousel-arrow_right') ){
        rightSwipe(apps);
    }
    else {
        let dots = parent.querySelectorAll('div.o-carousel-dots__dot');                                 
        for (let dot of dots) 
            dot.classList.remove('o-carousel-dots__dot_active'); 

        event.target.classList.add('o-carousel-dots__dot_active');

        let i = 0;
        let index = 0;
        while( !dots[i].classList.contains('o-carousel-dots__dot_active')){
            index += 1;
            i += 1;
        }

        indexSwipe(apps, (index+5) % 7);
    }
}

var app1 = createAppElement(apps[0], 0);
var app2 = createAppElement(apps[1], 1);
var app3 = createAppElement(apps[2], 2);

addAppInList(app1);
addAppInList(app2);
addAppInList(app3);

var arrowRight = document.querySelector('svg.o-carousel-arrow_right');
var arrowLeft = document.querySelector('svg.o-carousel-arrow_left');
var dots = document.querySelector('div.o-carousel-dots');

arrowRight.addEventListener( 'click', function() { rightSwipe(apps) } );
arrowLeft.addEventListener( 'click', function() { leftSwipe(apps) } );
dots.addEventListener('click', function(e) { changeActivityDots(e, this, apps); } ); 