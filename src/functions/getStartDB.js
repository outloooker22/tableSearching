import { makeURL } from "./makeURL.js"
import { filterDB } from "./filterDB.js"


export async function makeDB (searchMode, searchRequest) {
  let dataURL = makeURL(searchMode, searchRequest)

  const rawRequest = await fetch(dataURL);
  const usersJSON = await rawRequest.json();
  let rawDB = await usersJSON.users
  return (filterDB(rawDB))
}

export const startUsers = await makeDB('ФИО', 'none')

