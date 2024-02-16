import React, {Component} from "react"

export default class UserTable extends Component {

render () {
    let data = this.props.users
    return (
        <table>
            <thead> <tr>
                <th> id </th>
                <th> ФИО </th>
                <th> Возраст </th>
                <th> Пол </th>
                <th> Номер телефона </th>
                <th> Адрес </th>
            </tr>
            </thead>
            <tbody>
                {data.map((user) => {
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
    )
}
}