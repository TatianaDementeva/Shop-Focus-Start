export function createDateTime(seconds) {
    let date = new Date(seconds * 1000);
    return date.getFullYear().toString + '-' + date.getMonth() + '-' + date.getDate();
}
export function createTime(seconds) {
    let date = new Date(seconds * 1000);
    let time = date.getDate() + ' ';

    let month = date.getMonth();
    switch (month) {
        case 1:
            month = 'января ';
            break;
        case 2:
            month = 'февраля ';
            break;
        case 3:
            month = 'марта ';
            break;
        case 4:
            month = 'апреля ';
            break;
        case 5:
            month = 'мая ';
            break;
        case 6:
            month = 'июня ';
            break;
        case 7:
            month = 'июля ';
            break;
        case 8:
            month = 'августа ';
            break;
        case 9:
            month = 'сентября ';
            break;
        case 10:
            month = 'октября ';
            break;
        case 11:
            month = 'ноября ';
            break;
        case 12:
            month = 'января ';
            break;
    }
    time += month;
    time += date.getFullYear();
    return time;
}