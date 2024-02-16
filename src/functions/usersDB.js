async function getDB() {
  const url = 'https://dummyjson.com/users'
  
  const usersRaw = await fetch(url);
  const usersJSON = await usersRaw.json();
  return usersJSON.users
}

let fullUsersDB = await getDB()

function getEachUserData(usersArray) { //функция выделения из БД только самого нужного
  let trueUsersArray = [] //создаем новый массив пользователей, который и будет результатом функции
  for (let user = 0; user < (Object.keys(usersArray).length); user++) {
    let userData = ({ //В таблице должны быть следующие колонки:
      id: usersArray[user].id,
      fullName: usersArray[user].firstName + ' ' + usersArray[user].lastName + ' ' + usersArray[user].maidenName, //ФИО
      age: usersArray[user].age, //возраст
      gender: usersArray[user].gender, //пол
      phone: usersArray[user].phone,//номер телефона
      address: usersArray[user].address.city + ', ' + usersArray[user].address.address //адрес (город и название улицы)
    })
    trueUsersArray.push (userData)
  }
  return trueUsersArray
}

const usersDB = getEachUserData(fullUsersDB)

export default usersDB

console.log(typeof(usersDB))

usersDB.map(  (user) => {
  console.log(user.fullName)
})