import {createDateTime, createTime} from "./Time.js";

export default function createElementApp(app, index) {
    let div = document.createElement('div');
    div.className = "o-carousel-list__item";
    div.dataset.productNumber = index;

    let img = document.createElement('img');
    img.src = app.src;
    img.width = "328.9";
    img.height = "196.6";

    let divTitle = document.createElement('div');
    divTitle.className = "c-item-description";

    let a = document.createElement('a');
    a.className = "c-item-description__name";
    a.innerText = app.name;

    let br = document.createElement('br');

    let time = document.createElement('time');
    time.className = "c-item-description__date";
    time.innerText = createTime(app.datetime);
    time.datetime = createDateTime(app.datetime);

    div.appendChild(img);
    div.appendChild(divTitle);
    divTitle.appendChild(a);
    divTitle.appendChild(br);
    divTitle.appendChild(time);

    return div;
}