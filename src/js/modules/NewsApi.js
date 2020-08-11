export class NewsApi {
    constructor(config) {
        this.url = config.baseUrl;        
        this.from = config.from;
        this.to = config.to;
        this.apiKey = config.apiKey;
        this.pageSize = config.pageSize; 
        
        this.getNews = this.getNews.bind(this);
    }

    getNews(someWord) {
        return fetch(`${this.url}` + `q=${someWord}` + `&from=${this.from}` + `&to=${this.to}` +
            `&apiKey=${this.apiKey}` + `&pageSize=${this.pageSize}`) 
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })               
    }  
}


