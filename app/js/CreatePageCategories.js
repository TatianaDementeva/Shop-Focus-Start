import httpRequest from "./HttpRequest.js";
import {createDateTime, createTime} from "./Time.js";
import {listenerForButton} from "./WorkWithBasket.js";

export function createPage (list, basket) {
    createMenu(list);
    activeElement();
    createInfo(basket);
}
export function createPageAfterNavigation(data, basket){
    activeElement();
    createInfoAboutApp(data);
    listenerForButton(basket);
}
function createMenu (list) {
    let parent = document.querySelector('ul.o-catalog');
    let template = document.querySelector('template.menu-item');
        
    let span = template.content.querySelector('span');
    let li = template.content.querySelector('li');
    for ( let elem of list) {
        span.textContent = elem.name;
        span.dataset.IdNumber = elem.id;
        li.dataset.IdNumber = elem.id;
        let clone = document.importNode(template.content, true);
        parent.appendChild(clone); 
    }   
}
function activeElement() {
    let li = document.querySelectorAll('li');
    for (let elem of li) 
        elem.classList.remove('o-catalog__element_active'); 

    let id = window.location.hash.split("=")[1];
    li[id].classList.add('o-catalog__element_active');
}
function createInfo(basket) {
    let li = document.querySelector('li.o-catalog__element_active');
    let id = li.dataset.IdNumber;

    let url = "http://localhost:3000/api/app_info_" + id + ".json";
    
    httpRequest(url).then(
        function(data){ createInfoAboutApp(data); listenerForButton(basket); },
        function(error) {console.log(error);}
    );
}
function createInfoAboutApp(data){
    
    let parent = document.querySelector('section.o-info');
    let elements = parent.querySelectorAll('section.o-info > *');

    if ( elements != null){
        for ( let elem of elements)
            parent.removeChild(elem)
    }
    let template = document.querySelector('template.heading');

    let head = template.content.querySelector('div.o-heading');
    head.textContent = data.name;

    let clone = document.importNode(template.content, true);
    parent.appendChild(clone);
    
    template = document.querySelector('template.technical-info');
    
    let time = template.content.querySelector('time.c-info__date');
    let license = template.content.querySelector('div.c-info__license');
    let type = template.content.querySelector('div.c-info__app-type');
    let developer = template.content.querySelector('div.c-info__developer');
    let code = template.content.querySelector('div.c-info__code');
    let requirements = template.content.querySelector('div.c-info__requirements');
    let cost = template.content.querySelector('div.c-cost');

    time.textContent = createTime(data.datetime);
    time.datetime = createDateTime(data.datetime);
    license.textContent = data.license;
    type.textContent = "Тип Приложения: " + data.type;
    developer.textContent = "Разработчик: " + data.developer;
    code.textContent = "Код по катологу: " + data.codeByKatolog;
    requirements.textContent = "Требования: " + data.requirements;
    cost.textContent = data.cost + "$";

    clone = document.importNode(template.content, true);
    parent.appendChild(clone);

    template = document.querySelector('template.img-info');
    let img = template.content.querySelector('img');
    
    img.src = data.src;

    clone = document.importNode(template.content, true);
    parent.appendChild(clone);

    let clearTemplate = document.querySelector('template.clear');
    clone = document.importNode(clearTemplate.content, true);
    parent.appendChild(clone);
    let fun = document.createElement('div');

    fun.className = 'c-title-functions';
    fun.innerText = "ОСНОВНЫЕ ФУНКЦИИ";

    parent.appendChild(fun);

    let ul = document.createElement('ul');
    ul.className = 'c-list-functions';
    template = document.querySelector('template.functions');
 
    let li = template.content.querySelector('li.c-function');
    for ( let func of data.functions) {
        li.textContent = func;
        clone = document.importNode(template.content, true);
        ul.appendChild(clone); 
    }
    parent.appendChild(ul);   
}