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
}
function activeElement() {
    let li = document.querySelectorAll('li');
    let id = window.location.href.split("?")[1].split("=")[1];
    li[id].classList.add('o-catalog__element_active');
}