import httpRequest from "./HttpRequest.js";
import {createPage} from "./CreatePageCategories.js";
import {listenerForHeaderLink, listenerForMenu} from "./transitionOnLinks.js";
import {updateBasket} from "./WorkWithBasket.js";
import ShoppingCart from "./shoppingCart.js";
import {createStep1} from "./WorkWithPopUp.js";

document.addEventListener("DOMContentLoaded", function(){
    updateBasket();
    //localStorage.clear();
    let myShoppingCart = new ShoppingCart();

    listenerForHeaderLink();
    listenerForMenu(myShoppingCart);

    httpRequest('http://localhost:3000/api/catalog_packeges.json').then(
        function(list){ createPage(list, myShoppingCart)},
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


