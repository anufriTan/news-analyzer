export class GithubApi {
    constructor(config) {
        this.url = config.baseUrl;        
                
        this.getCommits = this.getCommits.bind(this);
    }

    getCommits() {
        return fetch(`${this.url}`) 
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })               
    }  
}
