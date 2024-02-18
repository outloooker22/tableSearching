import React, {Component} from "react"
import ShowUserTable from "./components/ShowUserTable.js"
import { startUsers } from "./functions/getStartDB.js"
import {getUsersDB} from "./functions/getUsersDB.js"
import {makeURL} from './functions/makeURL.js'

class App extends Component {

constructor (props) {
    super(props)

    this.state = {
      userRequest: '',
      searchMode: 'Имя',
      usersURL: makeURL('ФИО', 'none'),
      usersDB: startUsers,
    }

    this.userRequestChange = this.userRequestChange.bind(this);
    this.searchModeChange = this.searchModeChange.bind(this);
}

async userRequestChange(event) {
  this.setState({
    userRequest: event.target.value,
    usersURL: makeURL(this.state.searchMode, event.target.value),
    usersDB: await getUsersDB(makeURL(this.state.searchMode, event.target.value))
  });
}

async searchModeChange(event) {
  this.setState({
    searchMode: event.target.value,
    usersURL: makeURL(event.target.value, this.state.userRequest),
    usersDB: await getUsersDB(makeURL(event.target.value, this.state.userRequest))
  });
}


render () {
return (
    <div class='mainContent'>
      <label type="text"> Запрос для поиска:  </label>
      <input type="text" onBlur={this.userRequestChange} />

      <select onChange={this.searchModeChange}>
        <option value="Имя">Имя</option>
        <option value="Фамилия">Фамилия</option>
        <option value="maidenName">maidenName</option>
        <option value="Возраст">Возраст</option>
        <option value="Пол">Пол</option>
        <option value="Номер телефона">Номер телефона</option>
        <option value="Адрес">Адрес</option>
        <option value="Город">Город</option>
      </select>
        <p>
            Зарегистрированный запрос: <b> {this.state.userRequest} </b>
            <br/> 
            Режим поиска: <b> {this.state.searchMode} </b>
            <br/> 
            URL для GET-запроса: <b> {this.state.usersURL} </b>
        </p>


      <ShowUserTable usersDB = {this.state.usersDB}/>
    </div>
  )}  
}

export default App;
