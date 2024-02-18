import React, {Component} from "react"
import ShowUserTable from "./components/ShowUserTable.js"
import { startUsers } from "./functions/getUsersDB.js"
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

    this.userRequestChange = this.userRequestChange.bind(this); //изменение переменных состояния повличёт за собой обновление 
    this.searchModeChange = this.searchModeChange.bind(this); //компонентов, которые применяют эти переменные (<ShowUserTable/>, главным образом)
}

async userRequestChange(event) { //функция, меняющая Зарегистрированный запрос и обновляющая таблицу
  this.setState({
    userRequest: event.target.value,
    usersURL: makeURL(this.state.searchMode, event.target.value),
    usersDB: await getUsersDB(makeURL(this.state.searchMode, event.target.value)) //обновление базы данных
  });
}

async searchModeChange(event) { //функция, меняющая Режим поиска и обновляющая таблицу
  this.setState({
    searchMode: event.target.value,
    usersURL: makeURL(event.target.value, this.state.userRequest),
    usersDB: await getUsersDB(makeURL(event.target.value, this.state.userRequest))
  });
}


render () {
return (
  // инпут
  <>
    <div class='mainContent'>

  {/* поля, показывающие изменение данных. Применялись мной для проверки компонентов, 
  впоследствие решил оставить их отображение для наглядности */}
        <p class='p1'>
            Зарегистрированный запрос: <b> {this.state.userRequest} </b>
            <br/> 
            Режим поиска: <b> {this.state.searchMode} </b>
            <br/> 
            URL для GET-запроса: <b> {this.state.usersURL} </b>
        </p>
        <p>
          <i>
            Примечание: 
            <br/>для успешного поиска нужно вводить слово целиком и учитывать регистр
            <br/>для подтверждение запроса сместите фокус с поля ввода
          </i>
        </p>

      <label type="text"> Запрос для поиска:  </label>
      <input type="text" onBlur={this.userRequestChange} />
  {/* выпадающий список */}
      <select onChange={this.searchModeChange}>
        <option value="Имя">Имя</option>
        <option value="Фамилия">Фамилия</option>
        <option value="maidenName">maidenName</option>
        <option value="Возраст">Возраст</option>
        <option value="Пол">Пол</option>
        <option value="Адрес">Адрес</option>
        <option value="Город">Город</option>
      </select>
      {/* компонент, отображающий таблицу */}
      <ShowUserTable usersDB = {this.state.usersDB}/> 
    </div>
  </>
  )}  
}

export default App;
