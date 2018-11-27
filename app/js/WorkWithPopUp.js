import httpRequest from "./HttpRequest.js";

export function createStep1(){
    let parent = document.querySelector('section.basket-step');
    let elements = parent.querySelectorAll('section.basket-step > *');

    if ( elements != null){
        for ( let elem of elements)
            parent.removeChild(elem)
    }
    let template = document.querySelector('template.app-table');
    let clone = document.importNode(template.content, true);
    parent.appendChild(clone);

    let listProductId = JSON.parse(localStorage.getItem('basket'));

    if (listProductId == null){
        template  = document.querySelector('template.empty-row');
        let clone = document.importNode(template.content, true);
        parent.appendChild(clone);
        return;
    }
    listProductId.sort();
    let IdOnce = [listProductId[0]];

    for (let id of listProductId){
        let lastIndex = IdOnce.length - 1;
        if( id != IdOnce[lastIndex] ){
            IdOnce.push(id);
        }
    }

    for (let id of IdOnce){
        let url = "http://localhost:3000/api/app_info_" + id + ".json";
        httpRequest(url).then(
            function(data){ createRow(data)},
            function(error) {console.log(error);}
        )
            
    } createSummary();
} 

function createRow(data) {
    let parent = document.querySelector('table.app-table');
    let template = document.querySelector('template.row');
    
    let img = template.content.querySelector('img');
    let name = template.content.querySelector('div.name');
    let cost = template.content.querySelector('span.cost');

    img.src = data.src;
    name.textContent = data.name;
    cost.textContent = '$' + data.cost;

    let clone = document.importNode(template.content, true);
    parent.appendChild(clone);
}
function createSummary() {
    let parent = document.querySelector('section.basket-step');

    let template = document.querySelector('template.summary');
 
    let span = template.content.querySelector('span');
    var sum;
    httpRequest('http://localhost:3000/api/app_cost.json').then(
            function(data){ sum = calculationSum(data); return sum;},
            function(error) {console.log(error);}
    ).then(
        function(){ span.textContent = '$' + sum;
        let clone = document.importNode(template.content, true);
        parent.appendChild(clone);}
    );

    
}
function calculationSum(data){
    let productId = JSON.parse(localStorage.getItem('basket'));
    let sum = 0;
    for (let id of productId){
        sum += data[id].cost;
    }
    return sum/100;
}