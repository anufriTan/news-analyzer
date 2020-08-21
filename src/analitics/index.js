import "../pages/analitics.css";


import {Statistics} from '../js/components/Statistics.js';

const contentTitle = document.querySelector('.content-title');
const valueOfNews = document.querySelector('.counter__value_news');
const valueOfTitle = document.querySelector('.counter__value_titul');
const month = document.querySelector('.chart__text_month');
const days = document.querySelectorAll('.chart__data');
const columns = document.querySelectorAll('.chart__column');
const values = document.querySelectorAll('.chart__column-text');


const statistics = new Statistics(contentTitle, valueOfNews, valueOfTitle, month, days, columns, values);

statistics.setTextContent();
statistics.setTitleValue();
statistics.drawColumns();


