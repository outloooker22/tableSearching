// export default makeURL


export function makeURL (searchMode, searchRequest) { 
    let dataURL = 'https://dummyjson.com/users/filter?' 
    if (searchRequest === 'none' || searchRequest === '') {
        dataURL = 'https://dummyjson.com/users' //кейс для вывода всей базы данных
    } else { 
        switch (searchMode) { //обработка каждого из режимов поиска
            case 'Имя':
                dataURL += 'key=firstName&';
                break;
            case 'Фамилия':
                dataURL += 'key=lastName&';
                break;
            case 'maidenName':
                dataURL += 'key=maidenName&';
                break;
            case 'Возраст':
                dataURL += 'key=age&';
                break;
            case 'Пол':
                dataURL += 'key=gender&'
                break;
            case 'Адрес':
                dataURL += 'key=address.address&'
                break;
            case 'Город':
                dataURL += 'key=address.city&'
                break;
            }
            
            dataURL += 'value=' + searchRequest
        }   
    return dataURL
}