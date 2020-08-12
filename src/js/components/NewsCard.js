export class NewsCard {
    constructor(sourceName, cardTitle, publishedAt, cardDescription, urlToImage) {
        this.sourceName = sourceName;
        this.cardTitle = cardTitle;
        this.publishedAt = publishedAt;
        this.cardDescription = cardDescription;
        this.urlToImage = urlToImage;
        
    }  
    
    createNewsCard() {
        const newsCard = document.createElement('div');
        const newsCardImage = document.createElement('img');
        const newsCardDescription = document.createElement('div'); 
        const newsCardTime = document.createElement('p');
        const newsCardTitle = document.createElement('h3');
        const newsCardText = document.createElement('p');
        const newsCardSite = document.createElement('p');
    
        newsCard.classList.add('card');
        newsCardImage.classList.add('card__image');
        
        newsCardImage.setAttribute('src', `${this.urlToImage}`);
        
        newsCardDescription.classList.add('card__description');

        newsCardTime.classList.add('card__data');               
        newsCardTime.textContent = formatDate(this.publishedAt);

        newsCardTitle.classList.add('card__title');
        newsCardTitle.textContent = this.cardTitle;

        newsCardText.classList.add('card__text');        
        newsCardText.textContent = this.cardDescription;

        newsCardSite.classList.add('card__site');
        newsCardSite.textContent = this.sourceName;
    
        newsCardDescription.appendChild(newsCardTime);
        newsCardDescription.appendChild(newsCardTitle);
        newsCardDescription.appendChild(newsCardText);
        newsCard.appendChild(newsCardImage);
        newsCard.appendChild(newsCardDescription);
        newsCard.appendChild(newsCardSite);
    
        this.newsCardElement = newsCard;
    
        return newsCard;
    }   
}

import {formatDate} from '../utils/format-date.js';
