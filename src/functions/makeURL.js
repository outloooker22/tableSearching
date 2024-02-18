// export default makeURL


export function makeURL (searchMode, searchRequest) {
    let dataURL = 'https://dummyjson.com/users/filter?'
    if (searchRequest == 'none' || searchRequest == '') {
        dataURL = 'https://dummyjson.com/users'
    } else {
        switch (searchMode) {
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
            case 'Номер телефона':
                dataURL += 'key=phone&'
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

{/* <option value="Имя">Имя</option>
<option value="Фамилия">Фамилия</option>
<option value="middleName">Middle name</option>
<option value="Возраст">Возраст</option>
<option value="Пол">Пол</option>
<option value="Номер телефона">Номер телефона</option>
<option value="Адрес">Адрес</option> */}

//https://dummyjson.com/users/filter?key=hair.color&value=Brown