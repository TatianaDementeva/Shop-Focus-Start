import ShoppingCart from "./shoppingCart.js";

export function updateBasket() {
    let listProductId = JSON.parse(localStorage.getItem('basket'));
    let basket = document.querySelector('div.o-basket__number');
    if (listProductId == null){
        basket.innerText = 0;
        return;
    }
    basket.innerText = listProductId.length;
    console.log('localstore', listProductId);
}

export function listenerForButton(basket){
    if ( basket instanceof ShoppingCart ){
        let button = document.querySelector('button');
        let li = document.querySelector('li.o-catalog__element_active');
        let cost = document.querySelector('div.c-cost');

        button.addEventListener('click', function(){
            let id = li.dataset.IdNumber;
            basket.addInCart(cost.textContent.split("$")[0] * 100, id);
            //console.log('sum', basket.returnSum());
            updateBasket();
        });

        return;
    }
    console.error("Object not belonging to the class ShoppinCart");
}