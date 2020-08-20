export class NewsCardList {
    constructor(container, callback, emptyBlock, button) {        
        this.container = container;         
        this.callback = callback;
        this.emptyBlock = emptyBlock;
        this.button = button;    
        
        this.button.addEventListener('click', () => {
            this.showMoreCards();
        });        
    }

    addCard(sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url) {        
        this.container.appendChild(this.callback(sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url));         
    }

    render(cardsArray) {       
        this.cardsArray = cardsArray;       
        this.counter = 0;         
        this.emptyBlock.classList.remove('empty-block_is-opened');
        if (this.cardsArray.length > 0) {
            if (this.cardsArray.length <= CARD_NUMBER_TO_SHOW) {                      
                this.cardsArray.forEach((item) => {          
                    this.addCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage, item.url);                    
                })
                this.button.setAttribute('style', 'display: none');                
            }
            if (this.cardsArray.length > CARD_NUMBER_TO_SHOW) {
               
                this.cardsArray.slice(this.counter, CARD_NUMBER_TO_SHOW).forEach((item) => {          
                    this.addCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage, item.url);                                                                                                       
                })
                this.button.removeAttribute('style', 'display: none');                                           
            }            
        }
        else {
            this.emptyBlock.classList.add('empty-block_is-opened');                            
        }          
    }
    
    showMoreCards() {       
        this.counter += CARD_NUMBER_TO_SHOW;
        
        if (this.counter >= (this.cardsArray.length - CARD_NUMBER_TO_SHOW)) {
            this.button.setAttribute('style', 'display: none');            
        }            
        const cardsArrayToShow = this.cardsArray.slice(this.counter, (this.counter + CARD_NUMBER_TO_SHOW));      
        cardsArrayToShow.forEach((item) => { 
            this.addCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage, item.url);         
        })        
    }    
}


import {CARD_NUMBER_TO_SHOW} from '../constans/constans.js';



