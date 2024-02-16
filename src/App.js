import React, {Component} from "react";
import UserTable from "./components/userTable.js";
import usersDB from "./functions/usersDB.js"

class App extends Component {

constructor (props) {
    super(props)
    this.state = {
        usersState: usersDB,
    }
}

render () {
return (
    <div class='mainContent'>

      <label> Запрос для поиска:   </label>
      <input type="text"></input>

      <UserTable users={this.state.usersState}/>
    </div>
  )}  
}

export default App;
