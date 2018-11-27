import httpRequest from "./HttpRequest.js";
import processScrolling from "./ScrollingTheCarousel.js";
import {updateBasket} from "./WorkWithBasket.js";
import {listenerForHeaderLink} from "./TransitionOnLinks.js";
import {createStep1} from "./WorkWithPopUp.js";

document.addEventListener("DOMContentLoaded", function(){
    updateBasket();
    listenerForHeaderLink();

    httpRequest('http://localhost:3000/api/app_packeges.json').then(
        processScrolling,
        function(error) {console.log(error);}
    );
    let basket = document.querySelector('div.o-header__basket');

    basket.addEventListener('click', function(){
        let popUp = document.getElementById('shopping-cart');

        popUp.style.display='block';
        createStep1();
        let shoppingCart = document.querySelector('div.shopping-cart');
        shoppingCart.addEventListener('click', function(e){
            if ( e.target.classList.contains('shopping-cart')){
                popUp.style.display='none'
            }
        })
    })    
});


