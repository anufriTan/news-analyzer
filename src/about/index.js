import "../pages/about.css";
import 'swiper/swiper-bundle.css';

import {GithubApi} from '../js/modules/GithubApi.js';
import {CommitCard} from '../js/components/CommitCard.js';
import {CommitCardList} from '../js/components/CommitCardList.js';
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperContainer = document.querySelector('.commits-story__container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
Swiper.use([Navigation, Pagination]);

const configGithub = {
    baseUrl: 'https://api.github.com/repos/anufriTan/news-analyzer/commits'
}

const githubApi = new GithubApi(configGithub);
const createCommitCardCallback = (committerName, committerEmail, commitDate, commitMessage, authorAvatar) => new CommitCard(committerName, committerEmail, commitDate, commitMessage, authorAvatar).createCommitCard();

githubApi.getCommits().then(res => {
    const commitCardList = new CommitCardList(res, swiperWrapper, createCommitCardCallback);
    commitCardList.render();
    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        loop: true,        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }); 
})
    .catch((err) => {        
        console.log(err);
    });

    