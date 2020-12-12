import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieve-user'

function Profile(props) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) alert(error)
            setUsername(user.username)
            setName(user.name)
        })
    })

    return (<div className='container container--donotcenter'>
        <h1 className='title'>{username}</h1>
        <h2>{name}</h2>
    </div>);
}

export default Profile