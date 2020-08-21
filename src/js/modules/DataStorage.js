export class DataStorage {
    constructor() {}

    createDataStorage(arrayOfCards, searchWord) {
        localStorage.setItem('newsCards', JSON.stringify(arrayOfCards));
        localStorage.setItem('keyWord', searchWord);
    }

    getCardsFromDataStorage() {
        return JSON.parse(localStorage.getItem('newsCards'));
    }

    getKeyWordFromDataStorage() {
        localStorage.getItem('keyWord');
    }

    clearDataStorage() {
        localStorage.clear();
    }
}