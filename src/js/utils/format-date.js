export function formatDate(someDate) {
    const correctDate = someDate.toString();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let correctMonth;
        if (correctDate.substr(5, 2).startsWith('0')) {
            correctMonth = correctDate.substr(6, 1) - 1;
        } else {
            correctMonth = correctDate.substr(5, 2) - 1;
        }

        let correctDay;
        if (correctDate.substr(8, 2).startsWith('0')) {
            correctDay = correctDate.substr(9, 1);
        } else {
            correctDay = correctDate.substr(8, 2);
        }   
        
        return correctDay + ' ' + months[correctMonth] + ', ' + correctDate.substr(0,4);
        
}