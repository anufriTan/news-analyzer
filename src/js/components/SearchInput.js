export class SearchInput {
    constructor(form, searchWord, searchButton) {
        this.form = form;
        this.searchInput = searchWord;
        this.searchButton = searchButton; 
        this.errorElem = form.querySelector('.search-block__error'); 
                
        this.setEventListeners = this.setEventListeners.bind(this);        
    }

     
    checkInputValidity() {    
        this.searchInput.setCustomValidity(""); 

        if (this.searchInput.validity.valueMissing) {
            this.searchInput.setCustomValidity(ERROR_MESSAGE);
            this.errorElem.textContent = this.searchInput.validationMessage;                      
        }

        if (this.searchInput.checkValidity()) {
            this.errorElem.textContent = "";                     
          }
    }

    setSearchButtonState() {
        if (this.form.checkValidity()) {
            this.searchButton.removeAttribute('disabled');
        } else {
            this.searchButton.setAttribute('disabled', true);          
        }
    }

    setEventListeners() {
       this.form.addEventListener('input', () => this.checkInputValidity());   
       this.form.addEventListener('input', () => this.setSearchButtonState());   
    }        
}

import {ERROR_MESSAGE} from '../constans/constans.js';