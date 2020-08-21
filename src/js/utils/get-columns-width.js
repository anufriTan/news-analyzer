import {NOW_DATE} from '../constans/constans.js';
import {DAY_AGO_NUMBER} from '../constans/constans.js';


// Это промежуточная функция из массива карточек делает объект, где ключи - это дни публикаций, 
// а значения - количество упоминаний запрашиваемого слова в заголовках и статьях 
function getDateObject(datesArray) {
    const blanks = datesArray.map(function(item) {
        return item.publishedAt.substr(8, 2);
    })
    const resultsInitial = blanks.reduce(function(previousValue, item) { 
        if (!previousValue[item]) {
            previousValue[item] = 1;
        } else {
            previousValue[item] += 1;
        }
        return previousValue;
        }, {})
        return resultsInitial;
}

// Эта промежуточная функция создает массив с днями, за которые мы должны получать публикации.
// Потому что публикации могут быть не в каждый день.
function getAllKeysDateArray() {    
    const keysDateArray = [];    
    for (let i = 0; i <= DAY_AGO_NUMBER; i++) {
        const key = new Date(NOW_DATE.getFullYear(), NOW_DATE.getMonth(), NOW_DATE.getDate() - (DAY_AGO_NUMBER - i), NOW_DATE.getHours(), NOW_DATE.getMinutes(), NOW_DATE.getSeconds());
        keysDateArray[i] = `${key.getDate()}`; 
    }   
    return keysDateArray;        
}

// Эта функция сравнивает элементы массива - дни из промежуточной функции (см. выше)
// и ключи объекта (дни) из другой промежуточной функции (см.выше). Если такого ключа нет, 
// значит публикаций в этот день не было, и ключ записывается в объект со значением 0.
// В итоге получаем массив с количеством упоминаний за расчетный период. 
export function getColumnsWidth(someArray) {
    const results = getDateObject(someArray);
    const keys = getAllKeysDateArray();
    for (let i = 0; i < keys.length; i++) {
        if (!(results[keys[i]])) {
            results[keys[i]] = 0;
        }   
    }
    return Object.values(results);
}


