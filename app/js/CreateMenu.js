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
    li[0].classList.add('o-catalog__element_active');
}