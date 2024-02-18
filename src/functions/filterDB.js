

export async function filterDB (rawUsersArray) {
    //функция возвращает только нужные данные для заполнения ими DOM-разметки
    let trueUsersArray = [] //создаем новый массив пользователей, который и будет результатом функции
    for (let user = 0; user < (Object.keys(rawUsersArray).length); user++) {
      let userData = ({ //В таблице должны быть следующие колонки:
        id: rawUsersArray[user].id,
        fullName: rawUsersArray[user].firstName + ' ' + rawUsersArray[user].lastName + ' ' + rawUsersArray[user].maidenName, //ФИО
        age: rawUsersArray[user].age, //возраст
        gender: rawUsersArray[user].gender, //пол
        phone: rawUsersArray[user].phone,//номер телефона
        address: rawUsersArray[user].address.city + ', ' + rawUsersArray[user].address.address //адрес (город и название улицы)
      })
      trueUsersArray.push (userData) //добавляем в конец массива вышеперечисленные данные пользователя
    }
    return trueUsersArray
}