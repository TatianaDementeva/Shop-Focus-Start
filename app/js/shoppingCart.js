class ShoppingCart {
    constructor(){
        this.sum = 0;
        if(localStorage.getItem('basket') == null) {
            this.productId = [];
        }else{
            this.productId = JSON.parse(localStorage.getItem('basket'));
        }
        console.log('First sum in constructor', this.sum);
        console.log('First id', this.productId);
    }
    addInCart(cost, id){
        this.sum += cost;
        this.productId.push(id);
        localStorage.setItem('basket', JSON.stringify(this.productId));
        console.log(localStorage.getItem('basket'));
    }
    returnSum(){
        return this.sum;
    }
}
myShoppingCart = new ShoppingCart();


let button = document.querySelector('button');
button.addEventListener('click', function(){
    let id = window.location.href.split("?")[1].split("=")[1];
    myShoppingCart.addInCart(499, id);
    let basket = document.querySelector('div.test-bascket');
    basket.innerText = myShoppingCart.returnSum();
})
