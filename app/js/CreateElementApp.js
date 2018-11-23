import {createDateTime, createTime} from "./Time.js";

export default function createElementApp(app, index) {
    let div = document.createElement('div');
    div.className = "o-carousel-list__item";
    div.dataset.productNumber = index;
    div.dataset.IdNumber = app.id;

    let img = document.createElement('img');
    img.className = "c-item-img";
    img.src = app.src;
    img.width = "328.9";
    img.height = "196.6";
    img.dataset.IdNumber = app.id;

    let divTitle = document.createElement('div');
    divTitle.className = "c-item-description";
    divTitle.dataset.IdNumber = app.id;

    let a = document.createElement('a');
    a.className = "c-item-description__name";
    a.innerText = app.name;
    a.dataset.IdNumber = app.id;

    let br = document.createElement('br');

    let time = document.createElement('time');
    time.className = "c-item-description__date";
    time.innerText = createTime(app.datetime);
    time.datetime = createDateTime(app.datetime);
    time.dataset.IdNumber = app.id;

    div.appendChild(img);
    div.appendChild(divTitle);
    divTitle.appendChild(a);
    divTitle.appendChild(br);
    divTitle.appendChild(time);

    return div;
}