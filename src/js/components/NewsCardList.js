export class NewsCardList {
    constructor(data, container, callback) {
        this.data = data;  
        this.container = container;         
        this.callback = callback;
        
    }

    addCard(sourceName, cardTitle, publishedAt, cardDescription, urlToImage) {
        this.container.appendChild(this.callback(sourceName, cardTitle, publishedAt, cardDescription, urlToImage)); 
    }

    render() {
        
        this.data.forEach((item) => {          
            this.addCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage);            
        })
    }
}