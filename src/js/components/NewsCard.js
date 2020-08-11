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
        
        if (!(this.urlToImage)) {
            newsCardImage.setAttribute('src', '../../images/green.jpg');
        } else {
            newsCardImage.setAttribute('src', `${this.urlToImage}`);
        }
        newsCardDescription.classList.add('card__description');

        newsCardTime.classList.add('card__data'); 

        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let correctMonth;
        if (this.publishedAt.substr(5, 2).startsWith('0')) {
            correctMonth = this.publishedAt.substr(6, 1) - 1;
        } else {
            correctMonth = this.publishedAt.substr(5, 2) - 1;
        }
        let correctDay;
        if (this.publishedAt.substr(8, 2).startsWith('0')) {
            correctDay = this.publishedAt.substr(9, 1);
        } else {
            correctDay = this.publishedAt.substr(8, 2);
        }   
        
        newsCardTime.textContent = correctDay + ' ' + months[correctMonth] + ', ' + this.publishedAt.substr(0,4);

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


