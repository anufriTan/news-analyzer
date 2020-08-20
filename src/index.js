import "./pages/index.css";

import {NewsCard} from './js/components/NewsCard.js';
import {NewsCardList} from './js/components/NewsCardList.js';
import {NewsApi} from './js/modules/NewsApi.js';
import {DataStorage} from './js/modules/DataStorage.js';
import {SearchInput} from './js/components/SearchInput.js';

const searchResultsContainer = document.querySelector('.search-results__container');
const searchResults = document.querySelector('.search-results');
const searchResultsButton = document.querySelector('.search-results__button');
const searchForm = document.querySelector('.search-block__form');
const searchWord = searchForm.querySelector('.search-block__input');
const searchButton = searchForm.querySelector('.search-block__button');
const preloader = document.querySelector('.preloader');
const emptyBlock = document.querySelector('.empty-block');

const newsApi = new NewsApi();
const createCardCallback = (sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url) => new NewsCard(sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url).createNewsCard();
const dataStorage = new DataStorage();
const searchInput = new SearchInput(searchForm, searchWord, searchButton);
const newsCardList = new NewsCardList(searchResultsContainer, createCardCallback, emptyBlock, searchResultsButton);

window.onload = function() {
    searchResults.classList.add('search-results_is-opened');
    newsCardList.render(dataStorage.getCardsFromDataStorage());
    searchWord.value = localStorage.getItem('keyWord');    
}

searchButton.addEventListener('click', function() { 
    searchInput.setSearchButtonState();
    searchInput.checkInputValidity();
})
searchInput.setEventListeners();

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    dataStorage.clearDataStorage();
    if (searchResults.classList.contains('search-results_is-opened')) {
        searchResultsContainer.textContent = '';             
    } 
   
    preloader.classList.add('preloader_is-opened');
    searchButton.setAttribute('disabled', true);
    newsApi.getNews(searchWord.value).then(res => {      
        searchButton.removeAttribute('disabled');
        preloader.classList.remove('preloader_is-opened');         
        dataStorage.createDataStorage(res.articles, searchWord.value);       
        searchResults.classList.add('search-results_is-opened');              
        newsCardList.render(dataStorage.getCardsFromDataStorage());     
        if (emptyBlock.classList.contains('empty-block_is-opened')) {
            searchResults.classList.remove('search-results_is-opened');         
        }             
    })    
    .catch(() => {        
        alert('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        preloader.classList.remove('preloader_is-opened');  
    });
})


   


        
    














