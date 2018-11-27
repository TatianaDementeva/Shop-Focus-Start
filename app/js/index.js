import httpRequest from "./HttpRequest.js";
import processScrolling from "./ScrollingTheCarousel.js";
import {updateBasket} from "./WorkWithBasket.js";
import {listenerForHeaderLink} from "./transitionOnLinks.js";

document.addEventListener("DOMContentLoaded", function(){
    updateBasket();
    listenerForHeaderLink();

    httpRequest('http://localhost:3000/api/app_packeges.json').then(
        processScrolling,
        function(error) {console.log(error);}
    );    
});


