import httpRequest from "./HttpRequest.js";
import {createPageAfterNavigation} from "./CreatePageCategories.js";

export function listenerForCarousel(){
    let carousel = document.querySelector('div.o-carousel-list');

    carousel.addEventListener('click', function(e){

        if ( !e.target.classList.contains('o-carousel-list__item') 
          && !e.target.classList.contains('c-item-img')
          && !e.target.classList.contains('c-item-description')
          && !e.target.classList.contains('c-item-description__name')
          && !e.target.classList.contains('c-item-description__date')){
            return;
        }
        document.location = "categories.html#id=" + e.target.dataset.IdNumber;
    })
}

export function listenerForHeaderLink(){
    let links = document.querySelectorAll('a.o-header__link');

    links[0].addEventListener( 'click', function(){document.location = "index.html"})
    links[1].addEventListener( 'click', function() {document.location = "categories.html#id=" + 0})
}

export function listenerForMenu(basket){
    let parent = document.querySelector('ul.o-catalog');

    parent.addEventListener('click', function(e){
        if ( !e.target.classList.contains('o-catalog__item') ){
            return;
        }
        document.location = "categories.html#id=" + e.target.dataset.IdNumber;
        httpRequest("http://localhost:3000/api/app_info_" + e.target.dataset.IdNumber + ".json").then(
            function(data){createPageAfterNavigation(data, basket);},
            function(error) {console.log(error);}
        );
    })

}