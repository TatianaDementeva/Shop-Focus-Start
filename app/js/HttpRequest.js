export default function HttpRequest(url, fun){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onloadend = function(e) {
        if (xhr.status != 200) {
            console.log ('ERROR ' + xhr.status + ': ' + xhr.statusText);
        }else {
            let data = JSON.parse(xhr.responseText);
            fun(data);
        }
    }
}