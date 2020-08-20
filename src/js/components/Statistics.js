export class Statistics {
    constructor(title, mentionNews, mentionTitle, month, days, columns, values) {        
        this.title = title;  
        this.mentionNews = mentionNews;
        this.mentionTitle = mentionTitle;
        this.month = month;
        this.days = days;
        this.columns = columns;
        this.values = values;        
       
        this.cardsArray = JSON.parse(localStorage.getItem('newsCards'));        
    }

    setTextContent() {
        this.title.textContent = `Вы спросили: «${localStorage.getItem('keyWord')}»`;
        this.mentionNews.textContent = this.cardsArray.length;
        this.month.textContent = `(${getMonth()})`; 

        Array.from(this.days).forEach(function(item, index) {
            item.textContent = getWeekDays()[index];
        })        
    }

    setTitleValue() {
        const titleResult = this.cardsArray.reduce(function(previosValue, item) {
            if (!!(item.title) && item.title.includes(`${localStorage.getItem('keyWord')}`)) {
                return previosValue + 1;
            }
            return previosValue
        }, 0)  
        this.mentionTitle.textContent = titleResult;
       
    }

    drawColumns() {
        const keyWord = localStorage.getItem('keyWord');
        // Делаю два массива для объединения: массив статей, где в заголовках встречается запрашиваемое слово и массив статей - где в описаниях.
        const cardsTitleMatch = this.cardsArray.filter(function(item) {           
            if (!!(item.title) && item.title.includes(keyWord)) {
                return item;
            }       
            return cardsTitleMatch;        
        })
        const cardsDescriptionMatch = this.cardsArray.filter(function(item) {           
            if (!!(item.description) && item.description.includes(keyWord)) {
                return item;
            } 
            return cardsDescriptionMatch;
        })
        const cardsMatch = cardsTitleMatch.concat(cardsDescriptionMatch);
       
        // Передаю массив с совпадениями функции, которая вынесена в утилиты для последующей обработки. Описание там же.
        const finishResults = getColumnsWidth(cardsMatch);      
        
         // Итоговая обработка данных для отрисовки графика и простановки значений
        const sumAllElements = finishResults.reduce(function(prevVal, item) {
            return prevVal + item;
        }, 0)        
       
        Array.from(this.columns).forEach(function(item, index) {
            const widthValue = finishResults[index] / sumAllElements * 100;            
            item.setAttribute('style', `width: ${widthValue}%`);            
        })

        Array.from(this.values).forEach(function(item, index) {
            item.textContent = finishResults[index];
        })        
    }
}    
    
import {getMonth} from '../utils/get-month.js';
import {getWeekDays} from '../utils/get-week-days.js';
import {getColumnsWidth} from '../utils/get-columns-width.js'
