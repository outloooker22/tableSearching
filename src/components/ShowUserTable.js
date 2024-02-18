import React, {Component} from "react"

export default class ShowUserTable extends Component {

render () {
    let usersDB = this.props.usersDB //в переменную перенесена таблица, кот. нужно вывести этим компонентом
    return (
        <div> 
            <table>
            <thead> <tr>
                <th scope="col"> id </th>
                <th scope="col"> ФИО </th>
                <th scope="col"> Возраст </th>
                <th scope="col"> Пол </th>
                <th scope="col"> Номер телефона </th>
                <th scope="col"> Адрес </th>
            </tr>
            </thead>
            <tbody>
                {usersDB.map((user) => { //перебираем каждого пользователя, выводя данные о нем в таблицу
                    return (
                        <tr>
                            <td> {user.id} </td>
                            <td> {user.fullName} </td>
                            <td> {user.age} </td>
                            <td> {user.gender} </td>
                            <td> {user.phone} </td>
                            <td> {user.address} </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
}