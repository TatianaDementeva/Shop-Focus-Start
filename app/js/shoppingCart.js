import httpRequest from "./HttpRequest.js";

export default class ShoppingCart {
    constructor(){
        this.sum = 0;
        if(localStorage.getItem('basket') == null) {
            this.productId = [];
        }else{
            this.productId = JSON.parse(localStorage.getItem('basket'));
        }
    }
    addInCart(cost, id){
        this.sum += cost;
        this.productId.push(id);
        localStorage.setItem('basket', JSON.stringify(this.productId));
    }
    returnSum(){
        httpRequest('http://localhost:3000/api/app_cost.json').then(
            this.calculationSum,
            function(error) {console.log(error);}
        );
        return this.sum;
    }

    calculationSum(data){
        let sum = 0;
        for (let id of this.productId){
            this.sum += data[id].cost;
        }
    }
    
}