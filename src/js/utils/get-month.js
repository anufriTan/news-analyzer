import {FROM_DATE} from '../constans/constans.js';
import {TO_DATE} from '../constans/constans.js';

export function getMonth() {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь','июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let correctMonthStart;
    let correctMonthEnd;

        if (FROM_DATE.substr(5, 2).startsWith('0')) {
            correctMonthStart = FROM_DATE.substr(6, 1) - 1;
        } else {
            correctMonthStart = FROM_DATE.substr(5, 2) - 1;
        }      
       
        if (TO_DATE.substr(5, 2).startsWith('0')) {
            correctMonthEnd = TO_DATE.substr(6, 1) - 1;
        } else {
            correctMonthEnd = TO_DATE.substr(5, 2) - 1;
        }

        if (correctMonthStart === correctMonthEnd) {
            return months[correctMonthStart];
        } else {
            return `${months[correctMonthStart]}-${months[correctMonthEnd]}`;
        }       

}