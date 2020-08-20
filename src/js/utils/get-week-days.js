import {NOW_DATE} from '../constans/constans.js';
import {DAY_AGO_NUMBER} from '../constans/constans.js';

export function getWeekDays() {      
    const daysOfWeek = [];
    const daysNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    for (let i = 0; i <= DAY_AGO_NUMBER; i++) {
        const dayNumber = new Date(NOW_DATE.getFullYear(), NOW_DATE.getMonth(), NOW_DATE.getDate() - (DAY_AGO_NUMBER - i), NOW_DATE.getHours(), NOW_DATE.getMinutes(), NOW_DATE.getSeconds());
        daysOfWeek[i] = `${dayNumber.getDate()}, ${daysNames[dayNumber.getDay()]}`;             
    }
    return daysOfWeek;
}

