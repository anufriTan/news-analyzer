import "./pages/index.css";

import {NewsCard} from './js/components/NewsCard.js';
import {NewsCardList} from './js/components/NewsCardList.js';
import {NewsApi} from './js/modules/NewsApi.js';


const searchResultsContainer = document.querySelector('.search-results__container');
const searchResults = document.querySelector('.search-results');
const searchForm = document.forms.search;
const searchWord = searchForm.elements.word;
const searchResultsButton = document.querySelector('.search-results__button');
const preloader = document.querySelector('.preloader');
const emptyBlock = document.querySelector('.empty-block');

const nowDate = new Date();
const daysAgo = 7;
const weekAgo = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - daysAgo);

const config = {
    baseUrl: 'http://newsapi.org/v2/everything?',   
    from: weekAgo.toISOString(),
    to: nowDate.toISOString(),
    apiKey: 'df5c64804720447b891dc492b64e3ab6',
    pageSize: 100             
}; 


const newsApi = new NewsApi(config);
const createCardCallback = (sourceName, cardTitle, publishedAt, cardDescription, urlToImage) => new NewsCard(sourceName, cardTitle, publishedAt, cardDescription, urlToImage).createNewsCard();

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    preloader.classList.add('preloader_is-opened');
    newsApi.getNews(searchWord.value).then(res => {
        searchResults.classList.add('search-results_is-opened');
        const newsCardList = new NewsCardList(res.articles, searchResultsContainer, createCardCallback);
        newsCardList.render();   
})
    .catch((err) => {
        emptyBlock.classList.add('empty-block_is-opened');
        console.log(err);
    })
    .finally(preloader.classList.remove('preloader_is-opened'))
    searchForm.reset();
})









