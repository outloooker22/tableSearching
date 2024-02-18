import { filterDB } from "./filterDB.js"
import { makeURL } from "./makeURL.js"

export async function getUsersDB (dataURL) {
    const rawRequest = await fetch(dataURL); //отправляем запрос на указанный URL
    const usersJSON = await rawRequest.json(); //получаем промис и делаем из него json данные
    let rawDB = await usersJSON.users //извлекаем из json-данных данные каждого пользователя
    return filterDB(rawDB) //возвращаем фильтрованную базу данных
}

export const startUsers = await getUsersDB(makeURL('','')) //стартовая база данных