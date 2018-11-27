export default function httpRequest(url){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onloadend = function() {
            if (xhr.status != 200) {
                reject(Error('ERROR ' + xhr.status + ': ' + xhr.statusText));
            }else {
                resolve(JSON.parse(xhr.responseText));
            }
        }
    })
}
