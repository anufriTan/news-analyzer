export class CommitCard {
    constructor(committerName, committerEmail, commitDate, commitMessage, authorAvatar) {
        this.committerName = committerName;
        this.committerEmail = committerEmail;
        this.commitDate = commitDate;
        this.commitMessage = commitMessage;
        this.authorAvatar = authorAvatar;        
    }  
    
    createCommitCard() {
        const commitCard = document.createElement('div');
        const commitDate = document.createElement('p');
        const commitCardAuthor = document.createElement('div');
        const commitCardAvatar = document.createElement('img');
        const commitCardNames = document.createElement('div'); 
        const commitCardName = document.createElement('h4');
        const commitCardEmail  = document.createElement('p');        
        const commitCardText = document.createElement('p');        
    
        commitCard.classList.add('swiper-slide','commit-card');        
        
        commitDate.classList.add('commit-card__data');
        commitDate.textContent = formatDate(this.commitDate);

        commitCardAuthor.classList.add('commit-card__author');
        commitCardAvatar.classList.add('commit-card__foto');
        commitCardAvatar.setAttribute('src', `${this.authorAvatar}`);

        commitCardNames.classList.add('commit-card__names');
        commitCardName.classList.add('commit-card__name');
        commitCardName.textContent = this.committerName;

        commitCardEmail.classList.add('commit-card__mail');
        commitCardEmail.textContent = this.committerEmail;
        
        commitCardText.classList.add('commit-card__text');
        commitCardText.textContent = this.commitMessage;

        commitCardNames.appendChild(commitCardName);
        commitCardNames.appendChild(commitCardEmail);
        commitCardAuthor.appendChild(commitCardAvatar);
        commitCardAuthor.appendChild(commitCardNames);        
        commitCard.appendChild(commitDate);
        commitCard.appendChild(commitCardAuthor);
        commitCard.appendChild(commitCardText);    
         
        return commitCard;
    }    
}

import {formatDate} from '../utils/format-date.js';