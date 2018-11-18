var categories = document.querySelectorAll('a.o-header__link');
console.log(categories);
categories[1].addEventListener('click', function() {
    document.location = "categories.html?id=" + 1;
})