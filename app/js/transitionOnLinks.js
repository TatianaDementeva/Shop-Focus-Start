export default function ListenerForCarousel(){
    var carousel = document.querySelectorAll('div.o-carousel-list__item');
    
    for (let app of carousel){
        app.addEventListener('click', function(){
            document.location = "categories.html?id=" + app.dataset.IdNumber;
        })
    }
}

function ListenerForHeaderLink(){
    var links = document.querySelectorAll('a.o-header__link');

    links[1].addEventListener( 'click', function() {document.location = "categories.html?id=" + 0})
}

ListenerForHeaderLink();