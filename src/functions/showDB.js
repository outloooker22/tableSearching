import usersDB from './usersDB.js'

function showDB (arrayOfUsers) {
    return (
        <table>
            <tr> <th> {Object.keys(arrayOfUsers)} </th> </tr>
            for (let user in arrayOfUsers) {
                <tr> 
                    for (let userData in arrayOfUsers[user]) {
                        <td> arrayOfUsers[user].[userData] </td>
                    }
                </tr>
            }

        </table>
    )
}

export default showDB