import HttpRequest from "./HttpRequest.js";
import createElementApp from "./CreateElementApp.js";
import ListenerForCarousel from "./transitionOnLinks.js";

HttpRequest('http://localhost:3004/api/app_packeges.json', processScrolling);

function processScrolling (apps) {
    let app1 = createElementApp(apps[0], 0);
    let app2 = createElementApp(apps[1], 1);
    let app3 = createElementApp(apps[2], 2);
    let parent = document.querySelector('div.o-carousel-list');
    
    parent.appendChild(app1);
    parent.appendChild(app2);
    parent.appendChild(app3);

    ListenerForCarousel();

    let arrowRight = document.querySelector('svg.o-carousel-arrow_right');
    let arrowLeft = document.querySelector('svg.o-carousel-arrow_left');
    let dots = document.querySelector('div.o-carousel-dots');

    arrowRight.addEventListener( 'click', function() { rightSwipe(apps) } );
    arrowLeft.addEventListener( 'click', function() { leftSwipe(apps) } );
    dots.addEventListener('click', function(e) { changeActivityDots(e, this, apps) } ); 
}

function rightSwipe(apps) {
    let parent = document.querySelector('div.o-carousel-list');
    let packets = document.querySelectorAll('div.o-carousel-list__item');

    let number = packets[0].dataset.productNumber;

    let index = (3 + Number(number)) % 7;

    let newElem = createElementApp(apps[index], index);

    parent.removeChild(packets[0]);
    parent.appendChild(newElem);

    ListenerForCarousel();
    
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

    let newElem = createElementApp(apps[index], index);

    parent.removeChild(packets[2]);
    parent.insertBefore(newElem, packets[0]);

    ListenerForCarousel();

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

    let newElem = createElementApp(apps[ (index-1 + 7) % 7 ], index-1);
    parent.replaceChild(newElem, packets[0]);

    newElem = createElementApp(apps[ (index + 7) % 7 ], index);
    parent.replaceChild(newElem, packets[1]);

    newElem = createElementApp(apps[ (index+1 + 7) % 7 ], index+1);
    parent.replaceChild(newElem, packets[2]);
    
    ListenerForCarousel();
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