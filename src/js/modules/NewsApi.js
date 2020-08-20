export class NewsApi {
    constructor() {}

    getNews(someWord) {        
        return fetch(`${URL_NEWS_API}` + `q=${someWord}` + `&from=${FROM_DATE}` + `&to=${TO_DATE}` +
            `&apiKey=${KEY_NEWS_API}` + `&pageSize=${PAGE_SIZE}`)                
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })               
    }  
}

import {URL_NEWS_API} from "../constans/constans.js";
import {FROM_DATE} from "../constans/constans.js";
import {TO_DATE} from "../constans/constans.js";
import {KEY_NEWS_API} from "../constans/constans.js";
import {PAGE_SIZE} from "../constans/constans.js";