import { filterDB } from "./filterDB.js"

export async function getUsersDB (dataURL) {
    const rawRequest = await fetch(dataURL);
    const usersJSON = await rawRequest.json();
    let rawDB = await usersJSON.users
    return filterDB(rawDB)
}