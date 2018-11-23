export default function ListenerForCarousel(){
    var carousel = document.querySelector('div.o-carousel-list');

    carousel.addEventListener('click', function(e){
        
        if ( !e.target.classList.contains('o-carousel-list__item') 
          && !e.target.classList.contains('c-item-img')
          && !e.target.classList.contains('c-item-description')
          && !e.target.classList.contains('c-item-description__name')
          && !e.target.classList.contains('c-item-description__date')){
            return;
        }
        console.log('click on item');
        console.log(e.target.dataset.IdNumber);
    })
    /*for (let app of carousel){
        app.addEventListener('click', function(){
            document.location = "categories.html?id=" + app.dataset.IdNumber;
        })
    }*/
}

function ListenerForHeaderLink(){
    var links = document.querySelectorAll('a.o-header__link');

    links[1].addEventListener( 'click', function() {document.location = "categories.html?id=" + 0})
}

ListenerForHeaderLink();