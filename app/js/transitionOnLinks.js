var categories = document.querySelectorAll('a.o-header__link');

categories[1].addEventListener('click', function() {
    document.location = "categories.html?id=" + 0;
})

function ListenerForCarousel(){
    var carousel = document.querySelectorAll('div.o-carousel-list__item');
    
    for (let app of carousel){
        console.log(app.dataset.serialNumber);
        app.addEventListener('click', function(){
            document.location = "categories.html?id=" + app.dataset.serialNumber;
        })
    }
}
