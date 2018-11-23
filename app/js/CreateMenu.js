import HttpRequest from "./HttpRequest.js";
import {createDateTime, createTime} from "./Time.js";

export default function createMenu (list) {
    let parent = document.querySelector('ul.o-catalog');
    for ( let elem of list) {
        let li = document.createElement('li');
        
        let span = document.createElement('span');
        span.innerText = elem.name;
        span.classList.add('o-catalog__item');
        
        li.appendChild(span);
        parent.appendChild(li);
    }
    activeElement();
    createPage();
}
function activeElement() {
    let li = document.querySelectorAll('li');
    let id = window.location.href.split("?")[1].split("=")[1];
    li[id].classList.add('o-catalog__element_active');
}
function createPage() {
    let id = window.location.href.split("?")[1].split("=")[1];
    let url = "http://localhost:3000/api/app_info_" + id + ".json";
    HttpRequest(url, createInfo);
}
function createInfo(data){
    let parent = document.querySelector('section.o-info');

    let heading = parent.querySelector('div.o-heading');
    heading.innerText = data.name;

    let date = parent.querySelector('time');
    date.innerText = createTime(data.datetime);
    date.datetime = createDateTime(data.datetime);
}